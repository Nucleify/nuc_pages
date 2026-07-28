'use client'

import { type CSSProperties, useEffect, useMemo, useState } from 'react'

import { NUC_HOME_COPY, NUC_HOME_STACK } from '../../constants/content'

import './_index.scss'

const copy = NUC_HOME_COPY

export function NucHomeStack() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const [hovering, setHovering] = useState(false)

  const active = useMemo(
    () => NUC_HOME_STACK[activeIndex] ?? NUC_HOME_STACK[0]!,
    [activeIndex]
  )

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (paused || hovering) return

    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % NUC_HOME_STACK.length)
    }, 2600)

    return () => window.clearInterval(timer)
  }, [paused, hovering])

  function select(index: number, lock = false): void {
    setActiveIndex(index)
    if (lock) setPaused(true)
  }

  return (
    <section
      id="stack"
      className="nuc-home-section nuc-home-stack nuc-home-panel"
      aria-labelledby="nuc-home-stack-title"
      style={{ '--stack-color': active.color } as CSSProperties}
    >
      <div className="nuc-home-stack-head">
        <p className="nuc-home-eyebrow">{copy.stackEyebrow}</p>
        <h2 id="nuc-home-stack-title" className="nuc-home-title">
          {copy.stackTitle}
        </h2>
        <p className="nuc-home-support">{copy.stackSupport}</p>
      </div>

      <div
        className="nuc-home-stack-stage"
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        <div className="nuc-home-stack-spotlight" aria-live="polite">
          <div className="nuc-home-stack-glow" aria-hidden="true" />
          <div className="nuc-home-stack-badge">
            <nui-icon icon={active.icon} />
          </div>
          <div className="nuc-home-stack-spotlight-copy">
            <p className="nuc-home-stack-kicker">{copy.stackStageLabel}</p>
            <h3 className="nuc-home-stack-name">{active.label}</h3>
            <p className="nuc-home-stack-detail">{active.detail}</p>
            <p className="nuc-home-stack-command">
              <span>$</span>
              {active.command}
            </p>
          </div>
        </div>

        <div
          className="nuc-home-stack-list"
          role="tablist"
          aria-label="Framework shells"
        >
          {NUC_HOME_STACK.map((item, index) => (
            <button
              key={item.label}
              type="button"
              role="tab"
              className={`nuc-home-stack-item${index === activeIndex ? ' is-active' : ''}`}
              aria-selected={index === activeIndex}
              style={{ '--item-color': item.color } as CSSProperties}
              onMouseEnter={() => select(index, false)}
              onFocus={() => select(index, false)}
              onClick={() => select(index, true)}
            >
              <span className="nuc-home-stack-item-icon" aria-hidden="true">
                <nui-icon icon={item.icon} />
              </span>
              <span className="nuc-home-stack-label">{item.label}</span>
              <span className="nuc-home-stack-item-detail">{item.detail}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
