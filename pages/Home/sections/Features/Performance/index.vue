<template>
  <NucFeatureTemplate
    section-id="performance"
    badge="BLAZING FAST"
    heading-prefix="Your website loads in"
    heading-highlight="under 1 second"
    :description="description"
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
import type { FeatureItemInterface } from '../Template'
import { NucFeatureTemplate } from '../Template'

interface Metric {
  id: string
  label: string
  score: number
}

const description =
  'Optimized for speed from the ground up. Faster sites rank higher on Google and keep visitors engaged. Every millisecond counts.'

const features: FeatureItemInterface[] = [
  { icon: 'mdi:server-network', label: 'Global CDN' },
  { icon: 'mdi:cached', label: 'Smart caching' },
  { icon: 'mdi:cellphone-check', label: 'Mobile optimized' },
]

const metrics: Metric[] = [
  { id: 'performance', label: 'Performance', score: 97 },
  { id: 'accessibility', label: 'Accessibility', score: 100 },
  { id: 'best-practices', label: 'Best Practices', score: 100 },
  { id: 'seo', label: 'SEO', score: 100 },
]

function getScoreColor(score: number): string {
  if (score >= 90) return '#10b981'
  if (score >= 50) return '#eab308'
  return '#ef4444'
}
</script>
