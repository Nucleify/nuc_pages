'use client'

import { useParams } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

import {
  NUC_HOME_COPY,
  NUC_HOME_SECTIONS,
  type NucHomeSectionId,
} from './constants/content'
import { NucHomeClose } from './sections/close/index'
import { NucHomeCore } from './sections/core/index'
import { NucHomeHero } from './sections/hero/index'
import { NucHomePillars } from './sections/pillars/index'
import { NucHomePulse } from './sections/pulse/index'
import { NucHomeStack } from './sections/stack/index'
import { bindHomeScrollLoop } from './utils/bind_home_scroll_loop'
import {
  observeActiveSection,
  scrollHomeSection,
} from './utils/observe_active_section'
import { playHomeAnimations } from './utils/play_home_animations'

import './_index.scss'

const copy = NUC_HOME_COPY
const sections = NUC_HOME_SECTIONS
const firstSectionId = sections[0]!.id
const lastSectionId = sections[sections.length - 1]!.id

export function NucHomePage() {
  const params = useParams<{ lang?: string }>()
  const lang = params?.lang || 'en'
  const rootRef = useRef<HTMLDivElement>(null)
  const [activeSection, setActiveSection] = useState<NucHomeSectionId>('intro')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const root = rootRef.current
    if (!root) return

    let stopAnimations: (() => void) | undefined
    let cancelled = false

    const stopObserver = observeActiveSection(
      root,
      sections.map((section) => section.id),
      (id) => setActiveSection(id as NucHomeSectionId)
    )

    const replayBoot = async () => {
      if (cancelled || !rootRef.current) return
      setActiveSection(firstSectionId)
      stopAnimations?.()
      stopAnimations = undefined
      rootRef.current.classList.remove('nuc-home-ready', 'nuc-home-booting')
      rootRef.current.style.setProperty('--home-iris', '0%')
      if (cancelled || !rootRef.current) return
      stopAnimations = await playHomeAnimations(rootRef.current)
    }

    const boot = async () => {
      await new Promise<void>((resolve) => {
        requestAnimationFrame(() => resolve())
      })
      if (cancelled || !rootRef.current) return
      stopAnimations = await playHomeAnimations(rootRef.current)
    }

    void boot()

    const stopScrollLoop = bindHomeScrollLoop(root, {
      firstSectionId,
      lastSectionId,
      onLoop: replayBoot,
    })

    return () => {
      cancelled = true
      stopScrollLoop()
      stopObserver()
      stopAnimations?.()
    }
  }, [])

  function goToSection(id: NucHomeSectionId): void {
    if (!rootRef.current) return
    setMenuOpen(false)
    scrollHomeSection(rootRef.current, id)
  }

  return (
    <div
      ref={rootRef}
      className={`nuc-home${menuOpen ? ' nuc-home-menu-open' : ''}`}
    >
      <div className="nuc-home-shear" aria-hidden="true">
        <div className="nuc-home-aura" />
        <div className="nuc-home-grid" />
      </div>

      <header className="nuc-home-nav">
        <a className="nuc-home-brand" href={`/${lang}/home`}>
          <nui-logo dimensions={28} />
          <span className="nuc-home-brand-name">{copy.brand}</span>
        </a>

        <div className="nuc-home-nav-actions">
          <a
            className="nuc-home-nav-link nuc-home-nav-link-login nuc-home-nav-login-mobile"
            href={`/${lang}/login`}
          >
            {copy.navLogin}
          </a>
          <button
            type="button"
            className="nuc-home-menu-btn"
            aria-expanded={menuOpen}
            aria-controls="nuc-home-nav-links"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="sr-only">
              {menuOpen ? copy.navClose : copy.navMenu}
            </span>
            <nui-icon icon={menuOpen ? 'mdi:close' : 'mdi:menu'} />
          </button>
        </div>

        <div
          id="nuc-home-nav-links"
          className={`nuc-home-nav-links${menuOpen ? ' is-open' : ''}`}
        >
          <a
            className="nuc-home-nav-link"
            href={`/${lang}/docs`}
            onClick={() => setMenuOpen(false)}
          >
            {copy.navDocs}
          </a>
          <a
            className="nuc-home-nav-link"
            href={`/${lang}/playground`}
            onClick={() => setMenuOpen(false)}
          >
            {copy.navPlayground}
          </a>
          <a
            className="nuc-home-nav-link"
            href={copy.githubHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
          >
            {copy.navGitHub}
          </a>
          <a
            className="nuc-home-nav-link nuc-home-nav-link-login"
            href={`/${lang}/login`}
            onClick={() => setMenuOpen(false)}
          >
            {copy.navLogin}
          </a>
        </div>
      </header>

      <nav className="nuc-home-rail" aria-label={copy.sectionsLabel}>
        <ol className="nuc-home-rail-list">
          {sections.map((section, index) => (
            <li key={section.id}>
              <button
                type="button"
                className={`nuc-home-rail-item${activeSection === section.id ? ' is-active' : ''}`}
                aria-current={activeSection === section.id ? 'true' : undefined}
                aria-label={section.label}
                onClick={() => goToSection(section.id)}
              >
                <span className="nuc-home-rail-index">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="nuc-home-rail-label">{section.label}</span>
              </button>
            </li>
          ))}
        </ol>
      </nav>

      <div className="nuc-home-inner">
        <div className="nuc-home-scroller">
          <NucHomeHero />
          <NucHomePillars />
          <NucHomeStack />
          <NucHomeCore />
          <NucHomePulse />
          <NucHomeClose />
        </div>
      </div>
    </div>
  )
}
