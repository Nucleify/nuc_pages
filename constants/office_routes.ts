export const officeRoutes = {
  back: [
    'activity-log',
    'admin',
    'calendar',
    'entities',
    'files',
    'settings',
    'structural',
    'translations',
  ],
  front: ['about-us', 'dev', 'home', 'offer', 'services', 'legal'],
}

export function pathIsBackOffice(path: string): boolean {
  const segments = path.split('/').filter(Boolean)
  return officeRoutes.back.some((slug) => segments.includes(slug))
}
