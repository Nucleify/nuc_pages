<template>
  <NucFeatureTemplate
    section-id="performance"
    :badge="$t('features-performance-badge')"
    :heading-prefix="$t('features-performance-heading-prefix')"
    :heading-highlight="$t('features-performance-heading-highlight')"
    :description="$t('features-performance-description')"
    :features="features"
    visual-position="left"
  >
    <div class="speedometers-grid">
      <div 
        v-for="metric in metrics" 
        :key="metric.id" 
        class="speedometer-item"
      >
        <div class="mini-speedometer">
          <svg viewBox="0 0 100 60" class="speedometer-svg">
            <path
              d="M 10 55 A 40 40 0 0 1 90 55"
              fill="none"
              stroke="#0d4723"
              stroke-width="8"
              stroke-linecap="round"
            />
            <path
              d="M 10 55 A 40 40 0 0 1 90 55"
              fill="none"
              stroke="#10b981"
              stroke-width="4"
              stroke-linecap="round"
              :stroke-dasharray="125.6"
              :stroke-dashoffset="125.6 * (1 - metric.score / 100)"
            />
          </svg>
          <span class="speedometer-value" :style="{ color: getScoreColor(metric.score) }">
            {{ metric.score }}
          </span>
        </div>
        <span class="speedometer-label">{{ metric.label }}</span>
      </div>
    </div>
  </NucFeatureTemplate>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

import type { FeatureItemInterface } from '../Template'
import { NucFeatureTemplate } from '../Template'

const { t } = useI18n()

interface Metric {
  id: string
  label: string
  score: number
}

const features: FeatureItemInterface[] = [
  { icon: 'mdi:server-network', label: t('features-performance-feat-cdn') },
  { icon: 'mdi:cached', label: t('features-performance-feat-cache') },
  { icon: 'mdi:cellphone-check', label: t('features-performance-feat-mobile') },
]

const metrics: Metric[] = [
  {
    id: 'performance',
    label: t('features-performance-metric-perf'),
    score: 97,
  },
  {
    id: 'accessibility',
    label: t('features-performance-metric-a11y'),
    score: 100,
  },
  {
    id: 'best-practices',
    label: t('features-performance-metric-bp'),
    score: 100,
  },
  { id: 'seo', label: t('features-performance-metric-seo'), score: 100 },
]

function getScoreColor(score: number): string {
  if (score >= 90) return '#10b981'
  if (score >= 50) return '#eab308'
  return '#ef4444'
}
</script>
