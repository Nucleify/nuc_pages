'use client'

import {
  NUC_HOME_COPY,
  NUC_HOME_PILLAR_STEPS,
  NUC_HOME_PILLARS,
} from '../../constants/content'
import { scrollHomeSection } from '../../utils/observe_active_section'

import './_index.scss'

const copy = NUC_HOME_COPY

function onCta(): void {
  const root = document.querySelector<HTMLElement>('.nuc-home')
  if (!root) return
  scrollHomeSection(root, 'pulse')
}

export function NucHomePillars() {
  return (
    <section
      id="architecture"
      className="nuc-home-section nuc-home-pillars nuc-home-panel"
      aria-labelledby="nuc-home-pillars-title"
    >
      <div className="nuc-home-pillars-head">
        <div className="nuc-home-pillars-pitch">
          <p className="nuc-home-eyebrow">{copy.pillarsEyebrow}</p>
          <h2 id="nuc-home-pillars-title" className="nuc-home-title">
            {copy.pillarsTitle}
          </h2>
          <p className="nuc-home-support">{copy.pillarsSupport}</p>
          <button
            type="button"
            className="nuc-home-pillars-cta"
            onClick={onCta}
          >
            <span>{copy.pillarsCta}</span>
            <nui-icon icon="mdi:arrow-down" />
          </button>
        </div>

        <ol className="nuc-home-pillars-flow" aria-label="How Nucleify works">
          {NUC_HOME_PILLAR_STEPS.map((step, index) => (
            <li key={step.index} className="nuc-home-pillars-flow-item">
              <span className="nuc-home-pillars-flow-index">{step.index}</span>
              <div className="nuc-home-pillars-flow-copy">
                <strong>{step.label}</strong>
                <span>{step.detail}</span>
              </div>
              {index < NUC_HOME_PILLAR_STEPS.length - 1 ? (
                <span
                  className="nuc-home-pillars-flow-join"
                  aria-hidden="true"
                />
              ) : null}
            </li>
          ))}
        </ol>
      </div>

      <div className="nuc-home-pillars-grid">
        {NUC_HOME_PILLARS.map((pillar) => (
          <article key={pillar.title} className="nuc-home-pillars-item">
            <div className="nuc-home-pillars-item-top">
              <span className="nuc-home-pillars-icon" aria-hidden="true">
                <nui-icon icon={pillar.icon} />
              </span>
              <span className="nuc-home-pillars-index">{pillar.index}</span>
            </div>
            <p className="nuc-home-pillars-outcome">{pillar.outcome}</p>
            <h3 className="nuc-home-pillars-title">{pillar.title}</h3>
            <p className="nuc-home-pillars-desc">{pillar.description}</p>
            <p className="nuc-home-pillars-proof">{pillar.proof}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
