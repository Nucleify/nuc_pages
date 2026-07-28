'use client'

import { useEffect, useRef, useState } from 'react'

import { NUC_HOME_COPY, NUC_HOME_PULSE_SHELLS } from '../../constants/content'
import { createPulseScalePlayer } from '../../utils/pulse_terminal_player'

import './_index.scss'

const copy = NUC_HOME_COPY
const shells = NUC_HOME_PULSE_SHELLS
const maxShells = shells.length

export function NucHomePulse() {
  const stageRef = useRef<HTMLDivElement>(null)
  const [shellsActive, setShellsActive] = useState(0)
  const [showStatus, setShowStatus] = useState(false)

  const traditionalCost = shellsActive
  const nucleifyCost = shellsActive > 0 ? 1 : 0
  const traditionalWidth = `${(traditionalCost / maxShells) * 100}%`
  const nucleifyWidth = `${(nucleifyCost / maxShells) * 100}%`

  useEffect(() => {
    const player = createPulseScalePlayer({
      prefersReducedMotion: () =>
        window.matchMedia('(prefers-reduced-motion: reduce)').matches,
      apply: (state) => {
        setShellsActive(state.shellsActive)
        setShowStatus(state.showStatus)
      },
    })

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      player.start()
      return () => player.stop()
    }

    const node = stageRef.current
    if (!node) return

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (!entry) return
        if (entry.isIntersecting && entry.intersectionRatio >= 0.35) {
          player.start()
        } else if (entry.intersectionRatio <= 0.12) {
          player.stop()
        }
      },
      { threshold: [0, 0.12, 0.35, 0.6] }
    )

    observer.observe(node)

    return () => {
      observer.disconnect()
      player.stop()
    }
  }, [])

  return (
    <section
      id="pulse"
      className="nuc-home-section nuc-home-pulse nuc-home-panel"
      aria-labelledby="nuc-home-pulse-title"
    >
      <div className="nuc-home-pulse-copy">
        <p className="nuc-home-eyebrow">{copy.pulseEyebrow}</p>
        <h2 id="nuc-home-pulse-title" className="nuc-home-title">
          {copy.pulseTitle}
        </h2>
        <p className="nuc-home-support">{copy.pulseSupport}</p>
      </div>

      <div ref={stageRef} className="nuc-home-pulse-stage" aria-hidden="true">
        <div className="nuc-home-pulse-axis">
          <span className="nuc-home-pulse-axis-label">
            {copy.pulseShellsAxis}
          </span>
          <ul className="nuc-home-pulse-shells">
            {shells.map((shell, index) => (
              <li
                key={shell}
                className={`nuc-home-pulse-shell${index < shellsActive ? ' is-on' : ''}`}
              >
                {shell}
              </li>
            ))}
          </ul>
        </div>

        <div className="nuc-home-pulse-chart">
          <div className="nuc-home-pulse-row nuc-home-pulse-row-tax">
            <div className="nuc-home-pulse-row-meta">
              <span className="nuc-home-pulse-row-label">
                {copy.pulseTraditionalLabel}
              </span>
              <span className="nuc-home-pulse-row-value">
                {copy.pulseCostSuffix}
                {traditionalCost}
              </span>
            </div>
            <div className="nuc-home-pulse-track">
              <span
                className="nuc-home-pulse-fill nuc-home-pulse-fill-tax"
                style={{ width: traditionalWidth }}
              />
            </div>
            <p className="nuc-home-pulse-row-note">
              {traditionalCost}× {copy.pulseUnitLabel}
            </p>
          </div>

          <div className="nuc-home-pulse-row nuc-home-pulse-row-flat">
            <div className="nuc-home-pulse-row-meta">
              <span className="nuc-home-pulse-row-label">
                {copy.pulseNucleifyLabel}
              </span>
              <span className="nuc-home-pulse-row-value">
                {copy.pulseCostSuffix}
                {nucleifyCost}
              </span>
            </div>
            <div className="nuc-home-pulse-track">
              <span
                className="nuc-home-pulse-fill nuc-home-pulse-fill-flat"
                style={{ width: nucleifyWidth }}
              />
            </div>
            <p className="nuc-home-pulse-row-note">
              {nucleifyCost}× {copy.pulseUnitLabel}
            </p>
          </div>
        </div>

        <p className={`nuc-home-pulse-status${showStatus ? ' is-on' : ''}`}>
          <span className="nuc-home-pulse-status-dot" />
          {copy.pulseStatus}
        </p>
      </div>
    </section>
  )
}
