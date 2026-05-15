export const officeRoutes = {
  back: [
    'activity-log',
    'admin',
    'builder',
    'entities',
    'files',
    'settings',
    'structural',
    'translations',
  ],
  front: [
    'about-us',
    'dev',
    'home',
    'offer',
    'process',
    'services',
    'cookies',
    'gdpr',
    'privacy-policy',
    'terms-of-service',
  ],
}

/** `[lang]/settings`-style paths: segment matches slug after locale (avoids loose substring matches). */
export function pathIsBackOffice(path: string): boolean {
  const segments = path.split('/').filter(Boolean)
  return officeRoutes.back.some((slug) => segments.includes(slug))
}
