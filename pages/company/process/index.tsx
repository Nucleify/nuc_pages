'use client'

import type { JSX } from 'react'

import {
  AdSpacing,
  NucProcessGuarantees,
  NucProcessStart,
  NucProcessSteps,
  NucSectionContact,
} from 'nucleify'

import './_index.scss'

export function NucProcessPage(): JSX.Element {
  return (
    <div className="process-container">
      <NucProcessStart />
      <AdSpacing />
      <NucProcessSteps />
      <AdSpacing />
      <NucProcessGuarantees />
      <AdSpacing />
      <NucSectionContact />
    </div>
  )
}
