<template>
  <NucFeatureTemplate
    section-id="charts"
    :badge="$t('features-charts-badge')"
    :heading-prefix="$t('features-charts-heading-prefix')"
    :heading-highlight="$t('features-charts-heading-highlight')"
    :description="$t('features-charts-description')"
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
import { useI18n } from 'vue-i18n'

import { isMobile } from 'atomic'

import type { FeatureItemInterface } from '../Template'
import { NucFeatureTemplate } from '../Template'

const { t } = useI18n()

const features: FeatureItemInterface[] = [
  { icon: 'mdi:chart-bar', label: t('features-charts-feat-types') },
  { icon: 'mdi:refresh', label: t('features-charts-feat-realtime') },
  { icon: 'mdi:download', label: t('features-charts-feat-export') },
]
</script>
