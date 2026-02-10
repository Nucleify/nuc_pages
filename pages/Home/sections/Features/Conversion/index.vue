<template>
  <NucFeatureTemplate
    section-id="conversion"
    :badge="$t('features-conversion-badge')"
    :heading-prefix="$t('features-conversion-heading-prefix')"
    :heading-highlight="$t('features-conversion-heading-highlight')"
    :description="$t('features-conversion-description')"
    :features="features"
    visual-position="right"
  >
    <div class="conversion-preview">
      <div class="preview-metrics">
        <div class="metric-item">
          <div class="metric-icon">
            <Icon name="mdi:cursor-default-click" />
          </div>
          <div class="metric-info">
            <span class="metric-value">+47%</span>
            <span class="metric-label">{{ $t('features-conversion-metric-clicks') }}</span>
          </div>
        </div>
        <div class="metric-item">
          <div class="metric-icon">
            <Icon name="mdi:account-plus" />
          </div>
          <div class="metric-info">
            <span class="metric-value">+89%</span>
            <span class="metric-label">{{ $t('features-conversion-metric-leads') }}</span>
          </div>
        </div>
        <div class="metric-item highlight-metric">
          <div class="metric-icon">
            <Icon name="mdi:cash-multiple" />
          </div>
          <div class="metric-info">
            <span class="metric-value">+62%</span>
            <span class="metric-label">{{ $t('features-conversion-metric-revenue') }}</span>
          </div>
        </div>
      </div>
      
      <div class="preview-cta-demo">
        <div class="cta-example">
          <span class="cta-label">{{ $t('features-conversion-before') }}</span>
          <div class="cta-button old">{{ $t('features-conversion-old-cta') }}</div>
        </div>
        <div class="cta-arrow">
          <Icon name="mdi:arrow-right" />
        </div>
        <div class="cta-example">
          <span class="cta-label">{{ $t('features-conversion-after') }}</span>
          <div class="cta-button new">
            <Icon name="mdi:rocket-launch" />
            {{ $t('features-conversion-new-cta') }}
          </div>
        </div>
      </div>
    </div>
  </NucFeatureTemplate>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

import type { FeatureItemInterface } from '../Template'
import { NucFeatureTemplate } from '../Template'

const { t } = useI18n()

const features: FeatureItemInterface[] = [
  {
    icon: 'mdi:cursor-default-click-outline',
    label: t('features-conversion-feat-cta'),
  },
  { icon: 'mdi:target', label: t('features-conversion-feat-placement') },
  { icon: 'mdi:chart-line', label: t('features-conversion-feat-layouts') },
]
</script>
