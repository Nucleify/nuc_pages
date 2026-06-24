'use client'

import type { JSX } from 'react'

import {
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
      <NucDevStack />
      <NucDevHighlights />
      <NucDevDX />
      <NucDevModules />
      <NucSectionContact />
      <span style={{ display: 'none' }}>{t('dev')}</span>
    </div>
  )
}
