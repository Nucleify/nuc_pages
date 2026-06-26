export interface DevPageEntry {
  id: string
}

export const DEV_PAGE_MAP: Record<string, DevPageEntry> = {
  offer: { id: 'offer' },
  'about-us': { id: 'about-us' },
  'about-us/process': { id: 'process-page' },
  services: { id: 'services' },
  'services/business-websites': { id: 'business-websites' },
  'services/ecommerce-stores': { id: 'ecommerce-stores' },
  'services/landing-pages': { id: 'landing-pages' },
  'services/website-redesign': { id: 'website-redesign' },
  'services/custom-projects': { id: 'custom-projects' },
  'legal/privacy-policy': { id: 'privacy-policy' },
  'legal/terms-of-service': { id: 'terms-of-service' },
  'legal/cookies': { id: 'cookies' },
  'legal/gdpr': { id: 'gdpr' },
}

export function getDevPageComponentName(id: string): string {
  return id.endsWith('-page') ? `nuc-${id}` : `nuc-${id}-page`
}
