'use client'

import { type CSSProperties, useEffect, useMemo, useRef, useState } from 'react'

import {
  NUC_HOME_COPY,
  NUC_HOME_HERO_PROOF,
  NUC_HOME_HERO_SHELLS,
} from '../../constants/content'
import {
  createHeroShellPlayer,
  type HeroShellPhase,
} from '../../utils/hero_shell_player'
import { scrollHomeSection } from '../../utils/observe_active_section'

import './_index.scss'

const copy = NUC_HOME_COPY

function onPrimary(): void {
  const root = document.querySelector<HTMLElement>('.nuc-home')
  if (!root) return
  scrollHomeSection(root, 'architecture')
}

function onSecondary(): void {
  window.open(copy.githubHref, '_blank', 'noopener,noreferrer')
}

export function NucHomeHero() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [typed, setTyped] = useState('')
  const [phase, setPhase] = useState<HeroShellPhase>('typing')
  const [progress, setProgress] = useState(0)
  const playerRef = useRef<ReturnType<typeof createHeroShellPlayer> | null>(
    null
  )

  const activeShell = useMemo(
    () => NUC_HOME_HERO_SHELLS[activeIndex],
    [activeIndex]
  )

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setActiveIndex(0)
      setTyped(NUC_HOME_HERO_SHELLS[0]?.command ?? '')
      setPhase('done')
      setProgress(1)
      return
    }

    const player = createHeroShellPlayer(NUC_HOME_HERO_SHELLS, {
      onIndex: setActiveIndex,
      onTyped: setTyped,
      onPhase: setPhase,
      onProgress: setProgress,
    })
    playerRef.current = player
    player.start()

    return () => {
      player.stop()
      playerRef.current = null
    }
  }, [])

  return (
    <section
      id="intro"
      className="nuc-home-hero nuc-home-panel"
      aria-labelledby="nuc-home-brand"
    >
      <div className="nuc-home-hero-layout">
        <div className="nuc-home-hero-copy">
          <p className="nuc-home-hero-eyebrow">
            <span className="nuc-home-hero-live" aria-hidden="true" />
            {copy.heroEyebrow}
          </p>

          <div className="nuc-home-hero-mark">
            <h1 id="nuc-home-brand" className="nuc-home-hero-brand">
              {copy.brand}
            </h1>
          </div>

          <p className="nuc-home-hero-headline">{copy.headline}</p>

          <p className="nuc-home-hero-support">{copy.support}</p>

          <div className="nuc-home-hero-cta">
            <nui-button
              label={copy.ctaPrimary}
              variant="primary"
              icon="mdi:arrow-down"
              iconPos="right"
              onClick={onPrimary}
            />
            <nui-button
              label={copy.ctaSecondary}
              variant="outlined"
              icon="mdi:github"
              onClick={onSecondary}
            />
          </div>

          <ul className="nuc-home-hero-proof" aria-label="Highlights">
            {NUC_HOME_HERO_PROOF.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <aside
          className="nuc-home-hero-panel"
          style={
            {
              '--shell-color': activeShell?.color || '#10b981',
            } as CSSProperties
          }
          aria-label="Framework shell preview"
        >
          <div className="nuc-home-hero-chrome">
            <div className="nuc-home-hero-dots" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <span className="nuc-home-hero-path">{copy.heroPanelTitle}</span>
            <span className="nuc-home-hero-panel-signal">
              {copy.heroSignal}
            </span>
          </div>

          <div
            className="nuc-home-hero-tabs"
            role="tablist"
            aria-label="Frameworks"
          >
            {NUC_HOME_HERO_SHELLS.map((shell, index) => (
              <button
                key={shell.id}
                type="button"
                role="tab"
                className={`nuc-home-hero-tab${index === activeIndex ? ' is-active' : ''}`}
                aria-selected={index === activeIndex}
                style={{ '--tab-color': shell.color } as CSSProperties}
                onClick={() => playerRef.current?.select(index)}
              >
                <nui-icon icon={shell.icon} />
                <span>{shell.label}</span>
              </button>
            ))}
          </div>

          <div className="nuc-home-hero-terminal">
            <p className="nuc-home-hero-terminal-line nuc-home-hero-terminal-line-cmd">
              <span className="nuc-home-hero-prompt">$</span>
              <span>{typed}</span>
              {phase === 'typing' ? (
                <span className="nuc-home-hero-caret">▌</span>
              ) : null}
            </p>

            <div className="nuc-home-hero-status" aria-live="polite">
              {phase === 'running' ? (
                <div className="nuc-home-hero-progress" role="status">
                  <span>{copy.heroPanelRunning}</span>
                  <div className="nuc-home-hero-progress-track">
                    <i style={{ transform: `scaleX(${progress})` }} />
                  </div>
                </div>
              ) : null}

              {phase === 'done' && activeShell ? (
                <p className="nuc-home-hero-terminal-line nuc-home-hero-terminal-line-out">
                  <nui-icon icon={activeShell.icon} />
                  <span>
                    {copy.heroPanelDone} · {activeShell.result}
                  </span>
                </p>
              ) : null}
            </div>
          </div>
        </aside>
      </div>
    </section>
  )
}
