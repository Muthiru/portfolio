import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

// Simple in-memory rate limiting (for production, use Redis/Upstash)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please provide a valid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const ip = request.headers.get('x-forwarded-for') || 'unknown';
    const now = Date.now();
    const limit = parseInt(process.env.RATE_LIMIT_MAX || '5', 10);
    
    const rateLimitEntry = rateLimitMap.get(ip);
    
    if (rateLimitEntry && now < rateLimitEntry.resetTime) {
      if (rateLimitEntry.count >= limit) {
        return NextResponse.json(
          { error: 'Too many requests. Please try again later.' },
          { status: 429 }
        );
      }
      rateLimitEntry.count += 1;
    } else {
      rateLimitMap.set(ip, { count: 1, resetTime: now + 60 * 60 * 1000 });
    }

    // Parse and validate request body
    const body = await request.json();
    const validation = contactSchema.safeParse(body);

    if (!validation.success) {
      const errors = validation.error.issues.map(err => ({
        field: err.path.join('.'),
        message: err.message,
      }));
      
      return NextResponse.json(
        { error: 'Validation failed', details: errors },
        { status: 400 }
      );
    }

    const { name, email, message } = validation.data;

    // Send email via Resend
    await resend.emails.send({
      from: process.env.EMAIL_FROM || 'Portfolio <onboarding@resend.dev>',
      to: 'njamadaniel3@gmail.com',
      subject: `New message from ${name}`,
      replyTo: email,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>From:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><small>Submitted from portfolio website</small></p>
      `,
    });

    return NextResponse.json(
      { success: true, message: 'Message sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    
    return NextResponse.json(
      { error: 'Failed to send message. Please try again or email directly.' },
      { status: 500 }
    );
  }
}