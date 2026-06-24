import { useRoute } from 'nuxt/app'
import { ref } from 'vue'

import { isAnyCurrentUrl, officeRoutes, pathIsBackOffice } from 'nucleify'

function isMinimalShellPath(path: string): boolean {
  const segments = path.split('/').filter(Boolean)
  if (segments.length < 2) return false
  const page = segments[1]
  return (
    page === 'docs' ||
    page === 'login' ||
    page === 'register' ||
    page === 'thank-you'
  )
}

export function useOfficeType() {
  const officeType = ref(getOfficeType())

  function getOfficeType() {
    const route = useRoute()
    const path = route.path

    if (pathIsBackOffice(path) || isAnyCurrentUrl(officeRoutes.back))
      return 'back-office'
    if (isAnyCurrentUrl(officeRoutes.front)) return 'front-office'
    if (isMinimalShellPath(path)) return 'default'
    return 'front-office'
  }

  return {
    officeType,
    getOfficeType,
  }
}
