<template>
  <section id="results">
    <div class="results-glow"></div>
    <div class="results-container container">
      <div class="results-header">
        <nuc-shiny-badge icon="mdi:gift-outline" :label="$t('results-badge')" />
        <h2 class="results-heading">
          {{ $t('results-header') }}
          <span class="highlight">{{ $t('results-header-highlight') }}</span>
        </h2>
        <p class="results-description">
          {{ $t('results-description') }}
        </p>
      </div>

      <div class="stats-grid">
        <div v-for="item in benefits" :key="item.title" class="stat-item">
          <div class="stat-icon-wrapper">
            <Icon :name="item.icon" class="stat-icon" />
          </div>
          <div class="stat-content">
            <span class="stat-value">{{ item.title }}</span>
            <span class="stat-label">{{ item.desc }}</span>
          </div>
        </div>
      </div>

      <div class="cta-section">
        <div class="cta-card">
          <nuc-animation-hexagons style="opacity: 0.4" />
          <div class="cta-inner">
            <div class="cta-left">
              <div class="cta-icon-wrapper">
                <Icon name="mdi:rocket-launch" class="cta-icon" />
              </div>
              <div class="cta-text">
                <h3>{{ $t('results-cta-header') }}</h3>
                <p>{{ $t('results-cta-description') }}</p>
              </div>
            </div>
            <nuc-section-email-us-dialog button-class="cta-button" />
          </div>
        </div>
      </div>

      <nuc-trust-badges :items="trustItems" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const trustItems = [
  { icon: 'mdi:shield-check', label: t('results-trust-guarantee') },
  { icon: 'mdi:credit-card-off-outline', label: t('results-trust-payment') },
  { icon: 'mdi:infinity', label: t('results-trust-revisions') },
]

interface Benefit {
  title: string
  desc: string
  icon: string
}

const benefits: Benefit[] = [
  {
    title: t('results-benefit-standout-title'),
    desc: t('results-benefit-standout-desc'),
    icon: 'mdi:trophy-outline',
  },
  {
    title: t('results-benefit-reach-title'),
    desc: t('results-benefit-reach-desc'),
    icon: 'mdi:account-group-outline',
  },
  {
    title: t('results-benefit-trust-title'),
    desc: t('results-benefit-trust-desc'),
    icon: 'mdi:shield-check-outline',
  },
  {
    title: t('results-benefit-control-title'),
    desc: t('results-benefit-control-desc'),
    icon: 'mdi:cursor-default-click-outline',
  },
]
</script>
