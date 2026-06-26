import { MetadataRoute } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://daniel-njama.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}