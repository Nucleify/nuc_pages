'use client'

import { usePathname } from 'next/navigation'
import { useMemo } from 'react'

import { isAnyCurrentUrl, officeRoutes } from 'nucleify'

export type OfficeType = 'default' | 'front-office' | 'back-office'

export function getOfficeType(pathname?: string): OfficeType {
  const path = pathname ?? ''

  if (isAnyCurrentUrl([...officeRoutes.front], path)) {
    return 'front-office'
  }
  if (isAnyCurrentUrl([...officeRoutes.back], path)) {
    return 'back-office'
  }
  return 'default'
}

export function useOfficeType(initialPath = ''): {
  officeType: OfficeType
  getOfficeType: (pathname?: string) => OfficeType
} {
  const pathname = usePathname()
  const officeType = useMemo(
    () => getOfficeType(pathname || initialPath),
    [pathname, initialPath]
  )

  return {
    officeType,
    getOfficeType,
  }
}
