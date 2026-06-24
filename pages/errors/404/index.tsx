'use client'

import { usePathname, useRouter } from 'next/navigation'
import type { JSX } from 'react'

import { NucGridBackground, NucSubmitButton, t } from 'nucleify'

import './_index.scss'

export function NucError404Page(): JSX.Element {
  const pathname = usePathname()
  const router = useRouter()

  const getHomeUrl = (): string => {
    const lang = pathname?.split('/').filter(Boolean)[0] || 'en'
    return `/${lang}/home`
  }

  const goHome = (): void => {
    router.push(getHomeUrl())
  }

  const goBack = (): void => {
    if (typeof window !== 'undefined' && window.history.length > 1) {
      window.history.back()
      return
    }
    router.push(getHomeUrl())
  }

  return (
    <div id="error-404">
      <div className="error-404-container">
        <NucGridBackground />
        <div className="error-404-content container">
          <div className="error-404-number">404</div>
          <h1 className="error-404-title">{t('error-404-title')}</h1>
          <p className="error-404-message">{t('error-404-message')}</p>
          <div className="error-404-actions">
            <NucSubmitButton
              label={t('error-404-back-home')}
              icon="prime:home"
              variant="primary"
              onClick={goHome}
            />
            <NucSubmitButton
              label={t('error-404-go-back')}
              icon="prime:arrow-left"
              variant="secondary"
              onClick={goBack}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
