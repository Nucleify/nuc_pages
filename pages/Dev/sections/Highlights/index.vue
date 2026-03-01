<template>
  <section id="dev-highlights" class="dev-highlights">
    <div class="dev-hl-bg">
      <div class="dev-hl-grid-pattern" />
      <div class="dev-hl-orb dev-hl-orb-1" />
      <div class="dev-hl-orb dev-hl-orb-2" />
    </div>

    <div class="container">
      <div class="dev-hl-bento">
        <div class="dev-hl-card dev-hl-card-wide dev-hl-card-1">
          <div class="dev-hl-card-content">
            <span class="dev-hl-tag">{{ $t('dev-hl-overrides-title') }}</span>
            <h3>{{ $t('dev-hl-overrides-desc') }}</h3>
            <ul class="dev-hl-list">
              <li v-for="p in overridePoints" :key="p"><Icon name="mdi:chevron-right" /><span>{{ p }}</span></li>
            </ul>
          </div>
          <div class="dev-hl-visual dev-hl-visual-layers">
            <div class="dev-hl-layer dev-hl-layer-3">
              <span class="dev-hl-layer-label">your-app/</span>
              <div class="dev-hl-layer-line" /><div class="dev-hl-layer-line dev-hl-layer-line-short" />
            </div>
            <div class="dev-hl-layer dev-hl-layer-2">
              <span class="dev-hl-layer-label">overrides/</span>
              <div class="dev-hl-layer-line" /><div class="dev-hl-layer-line" />
            </div>
            <div class="dev-hl-layer dev-hl-layer-1">
              <span class="dev-hl-layer-label">core/</span>
              <div class="dev-hl-layer-line" /><div class="dev-hl-layer-line dev-hl-layer-line-short" /><div class="dev-hl-layer-line" />
            </div>
          </div>
        </div>

        <div class="dev-hl-card dev-hl-card-2">
          <div class="dev-hl-visual dev-hl-visual-dash">
            <div class="dev-hl-dash-sidebar">
              <div class="dev-hl-dash-dot" /><div class="dev-hl-dash-dot" /><div class="dev-hl-dash-dot" /><div class="dev-hl-dash-dot" />
            </div>
            <div class="dev-hl-dash-main">
              <div class="dev-hl-dash-bar-row">
                <div class="dev-hl-dash-bar" style="width: 80%" />
                <div class="dev-hl-dash-bar" style="width: 55%" />
                <div class="dev-hl-dash-bar" style="width: 70%" />
              </div>
              <div class="dev-hl-dash-cards">
                <div /><div /><div />
              </div>
            </div>
          </div>
          <div class="dev-hl-card-content">
            <span class="dev-hl-tag">{{ $t('dev-hl-backoffice-title') }}</span>
            <p>{{ $t('dev-hl-backoffice-desc') }}</p>
            <ul class="dev-hl-list">
              <li v-for="p in backofficePoints" :key="p"><Icon name="mdi:chevron-right" /><span>{{ p }}</span></li>
            </ul>
          </div>
        </div>

        <div class="dev-hl-card dev-hl-card-3">
          <div class="dev-hl-visual dev-hl-visual-palette">
            <div class="dev-hl-swatch-row">
              <div v-for="c in palettePrimary" :key="c" class="dev-hl-swatch" :style="{ background: c }" />
            </div>
            <div class="dev-hl-swatch-row">
              <div v-for="c in paletteSecondary" :key="c" class="dev-hl-swatch" :style="{ background: c }" />
            </div>
            <div class="dev-hl-mode-toggle">
              <Icon name="mdi:white-balance-sunny" />
              <div class="dev-hl-mode-track"><div class="dev-hl-mode-thumb" /></div>
              <Icon name="mdi:moon-waning-crescent" />
            </div>
          </div>
          <div class="dev-hl-card-content">
            <span class="dev-hl-tag">{{ $t('dev-hl-theming-title') }}</span>
            <p>{{ $t('dev-hl-theming-desc') }}</p>
            <ul class="dev-hl-list">
              <li v-for="p in themingPoints" :key="p"><Icon name="mdi:chevron-right" /><span>{{ p }}</span></li>
            </ul>
          </div>
        </div>

        <div class="dev-hl-card dev-hl-card-wide dev-hl-card-4">
          <div class="dev-hl-card-content">
            <span class="dev-hl-tag">{{ $t('dev-hl-responsive-title') }}</span>
            <h3>{{ $t('dev-hl-responsive-desc') }}</h3>
            <ul class="dev-hl-list">
              <li v-for="p in responsivePoints" :key="p"><Icon name="mdi:chevron-right" /><span>{{ p }}</span></li>
            </ul>
          </div>
          <div class="dev-hl-visual dev-hl-visual-devices">
            <div class="dev-hl-device dev-hl-device-desktop">
              <div class="dev-hl-device-bar"><span /><span /><span /></div>
              <div class="dev-hl-device-screen"><div /><div /><div /></div>
            </div>
            <div class="dev-hl-device dev-hl-device-tablet">
              <div class="dev-hl-device-screen"><div /><div /></div>
            </div>
            <div class="dev-hl-device dev-hl-device-phone">
              <div class="dev-hl-device-screen"><div /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const overridePoints = [
  t('dev-hl-overrides-p1'),
  t('dev-hl-overrides-p2'),
  t('dev-hl-overrides-p3'),
]
const backofficePoints = [
  t('dev-hl-backoffice-p1'),
  t('dev-hl-backoffice-p2'),
  t('dev-hl-backoffice-p3'),
]
const themingPoints = [
  t('dev-hl-theming-p1'),
  t('dev-hl-theming-p2'),
  t('dev-hl-theming-p3'),
]
const responsivePoints = [
  t('dev-hl-responsive-p1'),
  t('dev-hl-responsive-p2'),
  t('dev-hl-responsive-p3'),
]

const palettePrimary = ['#10b981', '#34d399', '#6ee7b7', '#a7f3d0', '#d1fae5']
const paletteSecondary = ['#064e3b', '#065f46', '#047857', '#059669', '#10b981']
</script>
