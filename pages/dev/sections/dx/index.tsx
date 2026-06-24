'use client'

import type { JSX } from 'react'
import { useMemo, useState } from 'react'

import { AdIcon, DX_FEATURE_DEFINITIONS, t } from 'nucleify'

import './_index.scss'

export function NucDevDX(): JSX.Element {
  const [activeIndex, setActiveIndex] = useState(0)

  const dxFeatures = useMemo(
    () =>
      DX_FEATURE_DEFINITIONS.map((item) => ({
        ...item,
        title: t(item.titleKey),
        desc: t(item.descKey),
      })),
    []
  )

  const lineCount = useMemo(
    () => dxFeatures[activeIndex].code.split('\n').length,
    [activeIndex, dxFeatures]
  )
  const activeFeature = dxFeatures[activeIndex]

  return (
    <section id="dev-dx" className="dev-dx">
      <div className="dev-dx-bg">
        <div className="dev-dx-orb dev-dx-orb-1" />
        <div className="dev-dx-orb dev-dx-orb-2" />
      </div>

      <div className="container">
        <div className="dev-dx-layout">
          <div className="dev-dx-nav">
            {dxFeatures.map((item, index) => (
              <button
                key={item.key}
                className={`dev-dx-nav-item ${
                  activeIndex === index ? 'dev-dx-nav-item-active' : ''
                }`}
                onClick={() => setActiveIndex(index)}
                type="button"
              >
                <div className="dev-dx-nav-icon">
                  <AdIcon icon={item.icon} />
                </div>
                <div className="dev-dx-nav-text">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
                <div className="dev-dx-nav-arrow">
                  <AdIcon icon="mdi:chevron-right" />
                </div>
              </button>
            ))}
          </div>

          <div className="dev-dx-preview">
            <div className="dev-dx-preview-window">
              <div className="dev-dx-preview-bar">
                <span />
                <span />
                <span />
                <div className="dev-dx-preview-tab">{activeFeature.file}</div>
              </div>
              <div className="dev-dx-preview-body">
                <div className="dev-dx-code-wrap">
                  <div className="dev-dx-line-numbers">
                    {Array.from({ length: lineCount }, (_, index) => (
                      <span key={index + 1}>{index + 1}</span>
                    ))}
                  </div>
                  <pre>
                    <code>{activeFeature.code}</code>
                  </pre>
                </div>
              </div>
              <div className="dev-dx-preview-status">
                <span>{activeFeature.lang}</span>
                <span>UTF-8</span>
                <span>Ln {lineCount}, Col 1</span>
              </div>
            </div>
            <div className="dev-dx-preview-glow" />
          </div>
        </div>
      </div>
    </section>
  )
}
