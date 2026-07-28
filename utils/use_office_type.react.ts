'use client'

import { usePathname } from 'next/navigation'
import { useMemo } from 'react'

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
  const pathname = usePathname() || '/'

  const officeType = useMemo(() => {
    if (
      pathIsBackOffice(pathname) ||
      officeRoutes.back.some((r) => pathname.includes(r))
    ) {
      return 'back-office'
    }
    if (officeRoutes.front.some((r) => pathname.includes(r))) {
      return 'front-office'
    }
    if (isMinimalShellPath(pathname)) return 'default'
    return 'front-office'
  }, [pathname])

  return {
    officeType,
    getOfficeType: () => officeType,
  }
}
