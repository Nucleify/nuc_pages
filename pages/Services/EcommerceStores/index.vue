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
        <nuc-shiny-badge icon="mdi:cart-outline" :label="$t('service-ec-badge')" />

        <h1 class="service-hero-title">
          {{ $t('service-ec-title') }}
          <span class="service-hero-title-highlight">{{ $t('service-ec-title-highlight') }}</span>
        </h1>

        <p class="service-hero-subtitle">
          {{ $t('service-ec-subtitle') }}
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

    <section class="service-dashboard">
      <div class="container">
        <h2 class="service-section-heading">
          {{ $t('service-ec-dashboard-heading') }}
          <span class="highlight">{{ $t('service-ec-dashboard-highlight') }}</span>
        </h2>

        <div class="service-dashboard-preview">
          <div class="service-dashboard-header">
            <div class="service-dashboard-dots">
              <span /><span /><span />
            </div>
            <span class="service-dashboard-title">{{ $t('service-ec-dashboard-title') }}</span>
          </div>
          <div class="service-dashboard-body">
            <div class="service-dashboard-stats">
              <div v-for="stat in dashboardStats" :key="stat.label" class="service-dashboard-stat">
                <div class="service-dashboard-stat-icon">
                  <Icon :name="stat.icon" />
                </div>
                <span class="service-dashboard-stat-value">{{ stat.value }}</span>
                <span class="service-dashboard-stat-label">{{ stat.label }}</span>
                <span class="service-dashboard-stat-change" :class="{ positive: stat.positive }">
                  <Icon :name="stat.positive ? 'mdi:trending-up' : 'mdi:trending-down'" />
                  {{ stat.change }}
                </span>
              </div>
            </div>
            <div class="service-dashboard-chart">
              <div class="service-dashboard-chart-label">{{ $t('service-ec-dashboard-revenue') }}</div>
              <div class="service-dashboard-chart-bars">
                <div v-for="(h, i) in chartBars" :key="i" class="service-dashboard-bar" :style="{ height: `${h}%` }" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="service-integrations">
      <div class="container">
        <h2 class="service-section-heading">
          {{ $t('service-ec-integrations-heading') }}
          <span class="highlight">{{ $t('service-ec-integrations-highlight') }}</span>
        </h2>

        <div class="service-integrations-grid">
          <div v-for="integration in integrations" :key="integration.name" class="service-integration-card">
            <Icon :name="integration.icon" />
            <span>{{ integration.name }}</span>
          </div>
        </div>
      </div>
    </section>

    <section class="service-benefits">
      <div class="container">
        <h2 class="service-section-heading">
          {{ $t('service-ec-benefits-heading') }}
          <span class="highlight">{{ $t('service-ec-benefits-highlight') }}</span>
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
  { icon: 'mdi:lock-outline', label: t('service-ec-trust-secure') },
  { icon: 'mdi:credit-card-outline', label: t('service-ec-trust-payments') },
  { icon: 'mdi:truck-fast-outline', label: t('service-ec-trust-delivery') },
]

const features = [
  {
    icon: 'mdi:store-outline',
    title: t('service-ec-feat-catalog-title'),
    desc: t('service-ec-feat-catalog-desc'),
  },
  {
    icon: 'mdi:credit-card-check-outline',
    title: t('service-ec-feat-payments-title'),
    desc: t('service-ec-feat-payments-desc'),
  },
  {
    icon: 'mdi:package-variant-closed',
    title: t('service-ec-feat-inventory-title'),
    desc: t('service-ec-feat-inventory-desc'),
  },
  {
    icon: 'mdi:cellphone-link',
    title: t('service-ec-feat-responsive-title'),
    desc: t('service-ec-feat-responsive-desc'),
  },
  {
    icon: 'mdi:chart-bar',
    title: t('service-ec-feat-analytics-title'),
    desc: t('service-ec-feat-analytics-desc'),
  },
  {
    icon: 'mdi:email-fast-outline',
    title: t('service-ec-feat-notifications-title'),
    desc: t('service-ec-feat-notifications-desc'),
  },
]

const dashboardStats = [
  {
    icon: 'mdi:cash-multiple',
    value: '€12,847',
    label: t('service-ec-stat-revenue'),
    change: '+23%',
    positive: true,
  },
  {
    icon: 'mdi:cart-check',
    value: '384',
    label: t('service-ec-stat-orders'),
    change: '+18%',
    positive: true,
  },
  {
    icon: 'mdi:account-group',
    value: '1,247',
    label: t('service-ec-stat-customers'),
    change: '+31%',
    positive: true,
  },
  {
    icon: 'mdi:percent-outline',
    value: '4.2%',
    label: t('service-ec-stat-conversion'),
    change: '+0.8%',
    positive: true,
  },
]

const chartBars = [35, 45, 40, 55, 50, 65, 60, 75, 70, 85, 80, 92]

const integrations = [
  { icon: 'mdi:credit-card-outline', name: 'Stripe' },
  { icon: 'mdi:alpha-p-circle-outline', name: 'PayPal' },
  { icon: 'mdi:google', name: 'Google Analytics' },
  { icon: 'mdi:truck-outline', name: 'DHL' },
  { icon: 'mdi:email-outline', name: 'Mailchimp' },
  { icon: 'mdi:facebook', name: 'Meta Pixel' },
  { icon: 'mdi:bank-outline', name: 'Przelewy24' },
  { icon: 'mdi:chart-box-outline', name: 'Hotjar' },
]

const benefits = [
  {
    icon: 'mdi:clock-outline',
    title: t('service-ec-benefit-247-title'),
    desc: t('service-ec-benefit-247-desc'),
  },
  {
    icon: 'mdi:earth',
    title: t('service-ec-benefit-global-title'),
    desc: t('service-ec-benefit-global-desc'),
  },
  {
    icon: 'mdi:chart-line',
    title: t('service-ec-benefit-scale-title'),
    desc: t('service-ec-benefit-scale-desc'),
  },
]

const LazyNucSectionFaq = defineAsyncComponent(
  () => import('../../../../nuc_sections/components/faq/index.vue')
)
const LazyNucSectionContact = defineAsyncComponent(
  () => import('../../../../nuc_sections/components/contact/index.vue')
)
</script>
