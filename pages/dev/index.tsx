'use client'

import type { JSX } from 'react'

import {
  AdSpacing,
  NucDevDX,
  NucDevHighlights,
  NucDevModules,
  NucDevStack,
  NucDevStart,
  NucSectionContact,
  t,
} from 'nucleify'

import './_index.scss'

export function NucDevPage(): JSX.Element {
  return (
    <div className="dev-container">
      <NucDevStart />
      <AdSpacing />
      <NucDevStack />
      <AdSpacing />
      <NucDevHighlights />
      <AdSpacing />
      <NucDevDX />
      <AdSpacing />
      <NucDevModules />
      <AdSpacing />
      <NucSectionContact />
      <span style={{ display: 'none' }}>{t('dev')}</span>
    </div>
  )
}
