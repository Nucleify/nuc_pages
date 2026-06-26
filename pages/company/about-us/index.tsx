'use client'

import type { JSX } from 'react'

import {
  AdSpacing,
  NucAboutMission,
  NucAboutProcess,
  NucAboutStart,
  NucAboutValues,
  NucSectionContact,
} from 'nucleify'

import './_index.scss'

export function NucAboutUsPage(): JSX.Element {
  return (
    <div className="about-us-container">
      <NucAboutStart />
      <AdSpacing />
      <NucAboutMission />
      <AdSpacing />
      <NucAboutValues />
      <AdSpacing />
      <NucAboutProcess />
      <AdSpacing />
      <NucSectionContact />
    </div>
  )
}
