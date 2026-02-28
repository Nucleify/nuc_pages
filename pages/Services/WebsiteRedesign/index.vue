<template>
  <div class="service-container">
    <section class="service-hero">
      <div class="service-hero-decoration service-hero-decoration-1">
        <Icon name="mdi:hexagon-outline" />
      </div>
      <div class="service-hero-decoration service-hero-decoration-2">
        <Icon name="mdi:triangle-outline" />
      </div>

      <div class="service-hero-content container">
        <nuc-shiny-badge icon="mdi:auto-fix" :label="$t('service-wr-badge')" />

        <h1 class="service-hero-title">
          {{ $t('service-wr-title') }}
          <span class="service-hero-title-highlight">{{ $t('service-wr-title-highlight') }}</span>
        </h1>

        <p class="service-hero-subtitle">
          {{ $t('service-wr-subtitle') }}
        </p>

        <nuc-trust-badges :items="trustItems" />
      </div>
    </section>

    <section class="service-features">
      <div class="container">
        <div class="service-features-grid">
          <div v-for="feature in features" :key="feature.title" class="service-feature-card">
            <div class="service-feature-card-icon">
              <Icon :name="feature.icon" />
            </div>
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="service-comparison">
      <div class="container">
        <h2 class="service-section-heading">
          {{ $t('service-wr-comparison-heading') }}
          <span class="highlight">{{ $t('service-wr-comparison-highlight') }}</span>
        </h2>

        <div class="service-comparison-cards">
          <div class="service-comparison-card service-comparison-card--before">
            <div class="service-comparison-card-header">
              <Icon name="mdi:close-circle" />
              <span>{{ $t('service-wr-before-label') }}</span>
            </div>
            <div class="service-comparison-card-items">
              <div v-for="item in comparisonBefore" :key="item" class="service-comparison-item service-comparison-item--bad">
                <Icon name="mdi:close" />
                <span>{{ item }}</span>
              </div>
            </div>
          </div>

          <div class="service-comparison-arrow">
            <Icon name="mdi:arrow-right-bold-circle" />
          </div>

          <div class="service-comparison-card service-comparison-card--after">
            <div class="service-comparison-card-header">
              <Icon name="mdi:check-circle" />
              <span>{{ $t('service-wr-after-label') }}</span>
            </div>
            <div class="service-comparison-card-items">
              <div v-for="item in comparisonAfter" :key="item" class="service-comparison-item service-comparison-item--good">
                <Icon name="mdi:check" />
                <span>{{ item }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="service-upgrade-areas">
      <div class="container">
        <h2 class="service-section-heading">
          {{ $t('service-wr-upgrade-heading') }}
          <span class="highlight">{{ $t('service-wr-upgrade-highlight') }}</span>
        </h2>

        <div class="service-upgrade-grid">
          <div v-for="area in upgradeAreas" :key="area.title" class="service-upgrade-card">
            <div class="service-upgrade-card-top">
              <div class="service-upgrade-card-icon">
                <Icon :name="area.icon" />
              </div>
              <h3>{{ area.title }}</h3>
            </div>
            <p>{{ area.desc }}</p>
            <div class="service-upgrade-bar">
              <div class="service-upgrade-bar-fill" :style="{ width: `${area.score}%` }">
                <span>{{ area.score }}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="service-benefits">
      <div class="container">
        <h2 class="service-section-heading">
          {{ $t('service-wr-benefits-heading') }}
          <span class="highlight">{{ $t('service-wr-benefits-highlight') }}</span>
        </h2>
        <div class="service-benefits-grid">
          <div v-for="benefit in benefits" :key="benefit.title" class="service-benefit-item">
            <div class="service-benefit-icon"><Icon :name="benefit.icon" /></div>
            <div class="service-benefit-content">
              <span>{{ benefit.title }}</span>
              <p>{{ benefit.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <LazyNucSectionFaq site="home" />
    <LazyNucSectionContact />
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { useI18n } from 'vue-i18n'

import type { NucTrustBadgeItemInterface } from 'atomic'

const { t } = useI18n()

const trustItems: NucTrustBadgeItemInterface[] = [
  { icon: 'mdi:speedometer', label: t('service-wr-trust-performance') },
  { icon: 'mdi:palette-outline', label: t('service-wr-trust-design') },
  { icon: 'mdi:magnify', label: t('service-wr-trust-seo') },
]

const features = [
  {
    icon: 'mdi:palette-swatch-outline',
    title: t('service-wr-feat-design-title'),
    desc: t('service-wr-feat-design-desc'),
  },
  {
    icon: 'mdi:speedometer',
    title: t('service-wr-feat-performance-title'),
    desc: t('service-wr-feat-performance-desc'),
  },
  {
    icon: 'mdi:magnify',
    title: t('service-wr-feat-seo-title'),
    desc: t('service-wr-feat-seo-desc'),
  },
  {
    icon: 'mdi:cellphone-link',
    title: t('service-wr-feat-responsive-title'),
    desc: t('service-wr-feat-responsive-desc'),
  },
  {
    icon: 'mdi:database-arrow-up-outline',
    title: t('service-wr-feat-migration-title'),
    desc: t('service-wr-feat-migration-desc'),
  },
  {
    icon: 'mdi:shield-check-outline',
    title: t('service-wr-feat-security-title'),
    desc: t('service-wr-feat-security-desc'),
  },
]

const comparisonBefore = [
  t('service-wr-before-1'),
  t('service-wr-before-2'),
  t('service-wr-before-3'),
  t('service-wr-before-4'),
  t('service-wr-before-5'),
]

const comparisonAfter = [
  t('service-wr-after-1'),
  t('service-wr-after-2'),
  t('service-wr-after-3'),
  t('service-wr-after-4'),
  t('service-wr-after-5'),
]

const upgradeAreas = [
  {
    icon: 'mdi:speedometer',
    title: t('service-wr-area-speed-title'),
    desc: t('service-wr-area-speed-desc'),
    score: 97,
  },
  {
    icon: 'mdi:magnify',
    title: t('service-wr-area-seo-title'),
    desc: t('service-wr-area-seo-desc'),
    score: 100,
  },
  {
    icon: 'mdi:cellphone',
    title: t('service-wr-area-mobile-title'),
    desc: t('service-wr-area-mobile-desc'),
    score: 100,
  },
  {
    icon: 'mdi:shield-check',
    title: t('service-wr-area-security-title'),
    desc: t('service-wr-area-security-desc'),
    score: 100,
  },
]

const benefits = [
  {
    icon: 'mdi:image-filter-vintage',
    title: t('service-wr-benefit-modern-title'),
    desc: t('service-wr-benefit-modern-desc'),
  },
  {
    icon: 'mdi:flash-outline',
    title: t('service-wr-benefit-faster-title'),
    desc: t('service-wr-benefit-faster-desc'),
  },
  {
    icon: 'mdi:google',
    title: t('service-wr-benefit-ranking-title'),
    desc: t('service-wr-benefit-ranking-desc'),
  },
]

const LazyNucSectionFaq = defineAsyncComponent(
  () => import('../../../../nuc_sections/components/faq/index.vue')
)
const LazyNucSectionContact = defineAsyncComponent(
  () => import('../../../../nuc_sections/components/contact/index.vue')
)
</script>
