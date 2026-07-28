import { useRoute } from 'nuxt/app'
import { ref } from 'vue'

import { officeRoutes, pathIsBackOffice } from '../constants/office_routes'

function isMinimalShellPath(path: string): boolean {
  const segments = path.split('/').filter(Boolean)
  if (segments.length < 2) return false
  const page = segments[1]
  return (
    page === 'builder' ||
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

    if (
      pathIsBackOffice(path) ||
      officeRoutes.back.some((r) => path.includes(r))
    )
      return 'back-office'
    if (officeRoutes.front.some((r) => path.includes(r))) return 'front-office'
    if (isMinimalShellPath(path)) return 'default'
    return 'front-office'
  }

  return {
    officeType,
    getOfficeType,
  }
}
