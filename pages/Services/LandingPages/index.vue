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
        <nuc-shiny-badge icon="mdi:lightning-bolt" :label="$t('service-lp-badge')" />

        <h1 class="service-hero-title">
          {{ $t('service-lp-title') }}
          <span class="service-hero-title-highlight">{{ $t('service-lp-title-highlight') }}</span>
        </h1>

        <p class="service-hero-subtitle">
          {{ $t('service-lp-subtitle') }}
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

    <section class="service-metrics">
      <div class="container">
        <h2 class="service-section-heading">
          {{ $t('service-lp-metrics-heading') }}
          <span class="highlight">{{ $t('service-lp-metrics-highlight') }}</span>
        </h2>

        <div class="service-metrics-comparison">
          <div class="service-metrics-side service-metrics-before">
            <span class="service-metrics-label">{{ $t('service-lp-metrics-before') }}</span>
            <div class="service-metrics-bars">
              <div v-for="metric in metricsBefore" :key="metric.label" class="service-metrics-bar-row">
                <span class="service-metrics-bar-label">{{ metric.label }}</span>
                <div class="service-metrics-bar-track">
                  <div class="service-metrics-bar-fill service-metrics-bar-fill--muted" :style="{ width: `${metric.value}%` }">
                    <span>{{ metric.value }}%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="service-metrics-arrow">
            <Icon name="mdi:arrow-right-bold" />
          </div>

          <div class="service-metrics-side service-metrics-after">
            <span class="service-metrics-label service-metrics-label--success">{{ $t('service-lp-metrics-after') }}</span>
            <div class="service-metrics-bars">
              <div v-for="metric in metricsAfter" :key="metric.label" class="service-metrics-bar-row">
                <span class="service-metrics-bar-label">{{ metric.label }}</span>
                <div class="service-metrics-bar-track">
                  <div class="service-metrics-bar-fill" :style="{ width: `${metric.value}%` }">
                    <span>{{ metric.value }}%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="service-sprint">
      <div class="container">
        <h2 class="service-section-heading">
          {{ $t('service-lp-sprint-heading') }}
          <span class="highlight">{{ $t('service-lp-sprint-highlight') }}</span>
        </h2>

        <div class="service-sprint-timeline">
          <div class="service-sprint-line" />
          <div v-for="(day, i) in sprintDays" :key="day.title" class="service-sprint-day">
            <div class="service-sprint-dot">
              <span>{{ i + 1 }}</span>
            </div>
            <div class="service-sprint-card">
              <div class="service-sprint-card-badge">{{ day.badge }}</div>
              <h3>{{ day.title }}</h3>
              <p>{{ day.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="service-benefits">
      <div class="container">
        <h2 class="service-section-heading">
          {{ $t('service-lp-benefits-heading') }}
          <span class="highlight">{{ $t('service-lp-benefits-highlight') }}</span>
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
  { icon: 'mdi:clock-fast', label: t('service-lp-trust-fast') },
  { icon: 'mdi:target', label: t('service-lp-trust-conversion') },
  { icon: 'mdi:cellphone-check', label: t('service-lp-trust-mobile') },
]

const features = [
  {
    icon: 'mdi:target',
    title: t('service-lp-feat-conversion-title'),
    desc: t('service-lp-feat-conversion-desc'),
  },
  {
    icon: 'mdi:clock-fast',
    title: t('service-lp-feat-speed-title'),
    desc: t('service-lp-feat-speed-desc'),
  },
  {
    icon: 'mdi:ab-testing',
    title: t('service-lp-feat-testing-title'),
    desc: t('service-lp-feat-testing-desc'),
  },
  {
    icon: 'mdi:form-select',
    title: t('service-lp-feat-forms-title'),
    desc: t('service-lp-feat-forms-desc'),
  },
  {
    icon: 'mdi:magnify',
    title: t('service-lp-feat-seo-title'),
    desc: t('service-lp-feat-seo-desc'),
  },
  {
    icon: 'mdi:animation-outline',
    title: t('service-lp-feat-animations-title'),
    desc: t('service-lp-feat-animations-desc'),
  },
]

const metricsBefore = [
  { label: t('service-lp-metric-conversion'), value: 1.8 },
  { label: t('service-lp-metric-bounce'), value: 72 },
  { label: t('service-lp-metric-time'), value: 25 },
]

const metricsAfter = [
  { label: t('service-lp-metric-conversion'), value: 8.4 },
  { label: t('service-lp-metric-bounce'), value: 28 },
  { label: t('service-lp-metric-time'), value: 78 },
]

const sprintDays = [
  {
    badge: t('service-lp-day-label', { day: 1 }),
    title: t('service-lp-day-1-title'),
    desc: t('service-lp-day-1-desc'),
  },
  {
    badge: t('service-lp-day-label', { day: 2 }),
    title: t('service-lp-day-2-title'),
    desc: t('service-lp-day-2-desc'),
  },
  {
    badge: t('service-lp-day-label', { day: 3 }),
    title: t('service-lp-day-3-title'),
    desc: t('service-lp-day-3-desc'),
  },
  {
    badge: t('service-lp-day-label', { day: 4 }),
    title: t('service-lp-day-4-title'),
    desc: t('service-lp-day-4-desc'),
  },
  {
    badge: t('service-lp-day-label', { day: 5 }),
    title: t('service-lp-day-5-title'),
    desc: t('service-lp-day-5-desc'),
  },
]

const benefits = [
  {
    icon: 'mdi:cursor-default-click-outline',
    title: t('service-lp-benefit-convert-title'),
    desc: t('service-lp-benefit-convert-desc'),
  },
  {
    icon: 'mdi:rocket-launch-outline',
    title: t('service-lp-benefit-launch-title'),
    desc: t('service-lp-benefit-launch-desc'),
  },
  {
    icon: 'mdi:lightbulb-outline',
    title: t('service-lp-benefit-test-title'),
    desc: t('service-lp-benefit-test-desc'),
  },
]

const LazyNucSectionFaq = defineAsyncComponent(
  () => import('../../../../nuc_sections/components/faq/index.vue')
)
const LazyNucSectionContact = defineAsyncComponent(
  () => import('../../../../nuc_sections/components/contact/index.vue')
)
</script>
