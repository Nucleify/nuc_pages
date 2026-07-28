'use client'

import { type CSSProperties, useEffect, useMemo, useState } from 'react'

import { NUC_HOME_COPY, NUC_HOME_CRAFT_SAMPLES } from '../../constants/content'

import './_index.scss'

const copy = NUC_HOME_COPY
const samples = NUC_HOME_CRAFT_SAMPLES

export function NucHomeCore() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const [hovering, setHovering] = useState(false)
  const [wiping, setWiping] = useState(true)
  const [wipeKey, setWipeKey] = useState(0)

  const active = useMemo(
    () => samples[activeIndex] ?? samples[0]!,
    [activeIndex]
  )

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (paused || hovering) return

    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % samples.length)
    }, 3800)

    return () => window.clearInterval(timer)
  }, [paused, hovering])

  useEffect(() => {
    setWiping(false)
    const id = window.requestAnimationFrame(() => {
      setWipeKey((key) => key + 1)
      setWiping(true)
    })
    return () => window.cancelAnimationFrame(id)
  }, [activeIndex])

  function select(index: number, lock = false): void {
    setActiveIndex(index)
    if (lock) setPaused(true)
  }

  return (
    <section
      id="core"
      className="nuc-home-section nuc-home-core nuc-home-panel"
      aria-labelledby="nuc-home-core-title"
      style={{ '--core-accent': active.accent } as CSSProperties}
    >
      <div className="nuc-home-core-head">
        <p className="nuc-home-eyebrow">{copy.coreEyebrow}</p>
        <h2 id="nuc-home-core-title" className="nuc-home-title">
          {copy.coreTitle}
        </h2>
        <p className="nuc-home-support">{copy.coreSupport}</p>
      </div>

      <div
        className="nuc-home-core-stage"
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        <div
          key={wipeKey}
          className={`nuc-home-core-canvas${wiping ? ' is-wiping' : ''}`}
        >
          <div className="nuc-home-core-aura" aria-hidden="true" />
          <div className="nuc-home-core-orbit" aria-hidden="true" />

          <div className="nuc-home-core-portal" aria-hidden="true">
            <div
              className={`nuc-home-core-layer nuc-home-core-layer-shipped nuc-home-core-layer-${active.id}`}
            >
              <div className="nuc-home-core-chrome">
                <i />
                <i />
                <i />
                <em>{copy.coreShippedLabel}</em>
              </div>
              <div className="nuc-home-core-screen">
                <div className="nuc-home-core-preview-top" />
                <div className="nuc-home-core-preview-body">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="nuc-home-core-swatches">
                  <b />
                  <b />
                  <b />
                  <b />
                </div>
              </div>
            </div>

            <div
              className={`nuc-home-core-layer nuc-home-core-layer-yours nuc-home-core-layer-${active.id}`}
            >
              <div className="nuc-home-core-chrome">
                <i />
                <i />
                <i />
                <em>{copy.coreYoursLabel}</em>
              </div>
              <div className="nuc-home-core-screen">
                <div className="nuc-home-core-preview-top" />
                <div className="nuc-home-core-preview-body">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="nuc-home-core-swatches">
                  <b />
                  <b />
                  <b />
                  <b />
                </div>
              </div>
            </div>

            <div className="nuc-home-core-blade">
              <span className="nuc-home-core-blade-glow" />
              <span className="nuc-home-core-blade-edge" />
              <span className="nuc-home-core-blade-tag">override</span>
            </div>
          </div>

          <aside className="nuc-home-core-legend" aria-live="polite">
            <div className="nuc-home-core-rail-item nuc-home-core-rail-item-shipped">
              <span className="nuc-home-core-diff nuc-home-core-diff-minus">
                −
              </span>
              <div>
                <p className="nuc-home-core-rail-kicker">
                  {copy.coreShippedLabel}
                </p>
                <p className="nuc-home-core-rail-path">{active.shippedPath}</p>
                <p className="nuc-home-core-rail-note">{active.shippedNote}</p>
              </div>
            </div>
            <div className="nuc-home-core-rail-item nuc-home-core-rail-item-yours">
              <span className="nuc-home-core-diff nuc-home-core-diff-plus">
                +
              </span>
              <div>
                <p className="nuc-home-core-rail-kicker">
                  {copy.coreYoursLabel}
                </p>
                <p className="nuc-home-core-rail-path">{active.yoursPath}</p>
                <p className="nuc-home-core-rail-note">{active.yoursNote}</p>
              </div>
            </div>
            <p className="nuc-home-core-keep">
              <nui-icon icon="mdi:shield-check-outline" />
              {copy.coreKeepLabel}
            </p>
          </aside>
        </div>

        <div
          className="nuc-home-core-kinds"
          role="tablist"
          aria-label="Override kinds"
        >
          {samples.map((sample, index) => (
            <button
              key={sample.id}
              type="button"
              role="tab"
              className={`nuc-home-core-kind${index === activeIndex ? ' is-active' : ''}`}
              aria-selected={index === activeIndex}
              onMouseEnter={() => select(index, false)}
              onFocus={() => select(index, false)}
              onClick={() => select(index, true)}
            >
              <nui-icon icon={sample.icon} />
              <span>{sample.kind}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
