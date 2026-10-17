/// <reference types="astro/client" />

interface Window {
  dataLayer: IArguments[];
  gtag?: (...args: unknown[]) => void;
  trackGoogleAdsConversion?: (kind: 'form' | 'phone' | 'whatsapp') => void;
  __googleAdsTrackingInitialized?: boolean;
}
