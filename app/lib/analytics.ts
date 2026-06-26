import { track } from '@vercel/analytics';

export function trackEvent(eventName: string, data?: Record<string, string | number | boolean>) {
  if (typeof window !== 'undefined') {
    track(eventName, data);
  }
}

export const AnalyticsEvents = {
  CONTACT_FORM_SUBMIT: 'contact_form_submit',
  CONTACT_FORM_SUCCESS: 'contact_form_success',
  CONTACT_FORM_ERROR: 'contact_form_error',
  RESUME_DOWNLOAD: 'resume_download',
  PROJECT_CLICK: 'project_click',
  GITHUB_CLICK: 'github_click',
  NAVIGATION_CLICK: 'navigation_click',
} as const;