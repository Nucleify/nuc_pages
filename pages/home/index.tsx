'use client'

import type { JSX } from 'react'

import {
  AdSpacing,
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
      <AdSpacing />
      <NucResults />
      <AdSpacing />
      <NucSectionFaq site="home" />
      <AdSpacing />
      <NucFeatures />
      <AdSpacing />
      <NucSectionContact />
      <span style={{ display: 'none' }}>{t('home')}</span>
    </div>
  )
}
