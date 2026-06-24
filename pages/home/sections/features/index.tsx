'use client'

import type { JSX } from 'react'

import { NucContent, NucConversion, NucPerformance, NucSupport } from 'nucleify'

export function NucFeatures(): JSX.Element {
  return (
    <section id="features">
      <NucContent />
      <NucConversion />
      <NucPerformance />
      <NucSupport />
    </section>
  )
}
