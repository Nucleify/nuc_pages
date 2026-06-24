'use client'

import type { JSX } from 'react'

import {
  NucFeatures,
  NucResults,
  NucSectionContact,
  NucSectionFaq,
  NucStart,
  t,
} from 'nucleify'

import './_index.scss'

export function NucHomePage(): JSX.Element {
  return (
    <div id="home" className="home-container">
      <NucStart />
      <NucResults />
      <NucSectionFaq site="home" />
      <NucFeatures />
      <NucSectionContact />
      <span style={{ display: 'none' }}>{t('home')}</span>
    </div>
  )
}
