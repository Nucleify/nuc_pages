<template>
  <NucFeatureTemplate
    section-id="conversion"
    badge="CONVERSION OPTIMIZED"
    heading-prefix="Turn visitors into"
    heading-highlight="paying customers"
    :description="description"
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
            <span class="metric-label">Click rate</span>
          </div>
        </div>
        <div class="metric-item">
          <div class="metric-icon">
            <Icon name="mdi:account-plus" />
          </div>
          <div class="metric-info">
            <span class="metric-value">+89%</span>
            <span class="metric-label">Leads</span>
          </div>
        </div>
        <div class="metric-item highlight-metric">
          <div class="metric-icon">
            <Icon name="mdi:cash-multiple" />
          </div>
          <div class="metric-info">
            <span class="metric-value">+62%</span>
            <span class="metric-label">Revenue</span>
          </div>
        </div>
      </div>
      
      <div class="preview-cta-demo">
        <div class="cta-example">
          <span class="cta-label">Before</span>
          <div class="cta-button old">Learn More</div>
        </div>
        <div class="cta-arrow">
          <Icon name="mdi:arrow-right" />
        </div>
        <div class="cta-example">
          <span class="cta-label">After</span>
          <div class="cta-button new">
            <Icon name="mdi:rocket-launch" />
            Start Free Trial
          </div>
        </div>
      </div>
    </div>
  </NucFeatureTemplate>
</template>

<script setup lang="ts">
import type { FeatureItemInterface } from '../Template'
import { NucFeatureTemplate } from '../Template'

const description =
  'Strategic design that guides users to take action. Every element is crafted to maximize engagement and drive conversions.'

const features: FeatureItemInterface[] = [
  { icon: 'mdi:cursor-default-click-outline', label: 'Click-optimized CTAs' },
  { icon: 'mdi:target', label: 'Strategic placement' },
  { icon: 'mdi:chart-line', label: 'Proven layouts' },
]
</script>
