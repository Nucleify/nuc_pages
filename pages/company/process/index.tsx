'use client'

import type { JSX } from 'react'

import {
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
      <NucProcessSteps />
      <NucProcessGuarantees />
      <NucSectionContact />
    </div>
  )
}
