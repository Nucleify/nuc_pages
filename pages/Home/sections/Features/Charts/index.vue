<template>
  <NucFeatureTemplate
    section-id="charts"
    badge="DATA VISUALIZATION"
    heading-prefix="Track your business with"
    heading-highlight="interactive charts"
    :description="description"
    :features="features"
    visual-position="right"
  >
    <nuc-entity-chart
      chart-method-type="annual"
      type="bar"
      class="home-vertical-chart"
      :direction="isMobile() ? 'horizontal' : 'vertical'"
      :example="true"
    />
    <nuc-entity-chart
      chart-method-type="count"
      type="pie"
      class="home-pie-chart"
      :example="true"
    />
  </NucFeatureTemplate>
</template>

<script setup lang="ts">
import { isMobile } from 'atomic'

import type { FeatureItemInterface } from '../Template'
import { NucFeatureTemplate } from '../Template'

const description =
  "Built-in analytics dashboard with bar, line, pie charts and more. See what's working and make data-driven decisions."

const features: FeatureItemInterface[] = [
  { icon: 'mdi:chart-bar', label: 'Multiple chart types' },
  { icon: 'mdi:refresh', label: 'Real-time updates' },
  { icon: 'mdi:download', label: 'Export to PDF/Excel' },
]
</script>
