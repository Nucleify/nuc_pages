export interface DevPageEntry {
  id: string
  grid: boolean
}

export const DEV_PAGE_MAP: Record<string, DevPageEntry> = {
  offer: { id: 'offer', grid: true },
  'about-us': { id: 'about-us', grid: true },
  'about-us/process': { id: 'process-page', grid: true },
  services: { id: 'services', grid: true },
  'services/business-websites': { id: 'business-websites', grid: true },
  'services/ecommerce-stores': { id: 'ecommerce-stores', grid: true },
  'services/landing-pages': { id: 'landing-pages', grid: true },
  'services/website-redesign': { id: 'website-redesign', grid: true },
  'services/custom-projects': { id: 'custom-projects', grid: true },
  'legal/privacy-policy': { id: 'privacy-policy', grid: false },
  'legal/terms-of-service': { id: 'terms-of-service', grid: false },
  'legal/cookies': { id: 'cookies', grid: false },
  'legal/gdpr': { id: 'gdpr', grid: false },
}

export function getDevPageComponentName(id: string): string {
  return id.endsWith('-page') ? `nuc-${id}` : `nuc-${id}-page`
}
