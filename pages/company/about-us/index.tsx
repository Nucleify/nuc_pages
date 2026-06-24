'use client'

import type { JSX } from 'react'

import {
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
      <NucAboutMission />
      <NucAboutValues />
      <NucAboutProcess />
      <NucSectionContact />
    </div>
  )
}
