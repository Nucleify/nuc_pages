'use client'

import type { JSX } from 'react'

import {
  AdSpacing,
  NucContent,
  NucConversion,
  NucPerformance,
  NucSupport,
} from 'nucleify'

export function NucFeatures(): JSX.Element {
  return (
    <section id="features">
      <NucContent />
      <AdSpacing />
      <NucConversion />
      <AdSpacing />
      <NucPerformance />
      <AdSpacing />
      <NucSupport />
    </section>
  )
}
