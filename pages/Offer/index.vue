<template>
  <div class="offer-container">
    <section class="offer-hero">
      <div class="offer-hero-floating offer-hero-floating-left">
        <div class="offer-floating-stat">
          <Icon name="mdi:lightning-bolt" />
          <span class="offer-floating-stat-value">5 days</span>
          <span class="offer-floating-stat-label">{{ $t('offer-trust-delivery') }}</span>
        </div>
      </div>

      <div class="offer-hero-floating offer-hero-floating-right">
        <div class="offer-floating-stat">
          <Icon name="mdi:star" />
          <span class="offer-floating-stat-value">99%</span>
          <span class="offer-floating-stat-label">{{ $t('offer-trust-consultation') }}</span>
        </div>
      </div>

      <div class="offer-hero-decoration offer-hero-decoration-1">
        <Icon name="mdi:hexagon-outline" />
      </div>
      <div class="offer-hero-decoration offer-hero-decoration-3">
        <Icon name="mdi:triangle-outline" />
      </div>

      <div class="offer-hero-content container">
        <nuc-shiny-badge icon="mdi:rocket-launch" :label="$t('offer-badge')" />

        <h1 class="offer-hero-title">
          {{ $t('offer-title') }}
          <span class="offer-hero-title-highlight">{{ $t('offer-title-highlight') }}</span>
        </h1>

        <p class="offer-hero-subtitle">
          {{ $t('offer-subtitle') }}
          <strong>{{ $t('offer-subtitle-strong') }}</strong>
        </p>

        <nuc-trust-badges :items="heroFeatures" />

        <div class="offer-hero-cta">
          <a href="#pricing" class="offer-hero-button">
            <Icon name="mdi:arrow-down" />
            <span>{{ $t('offer-see-plans') }}</span>
          </a>
        </div>
      </div>

      <a href="#pricing" class="offer-hero-scroll-indicator">
        <Icon name="mdi:chevron-double-down" />
      </a>
    </section>

    <LazyNucSectionPricing />

    <LazyNucSectionFaq site="offer" />
    <LazyNucSectionContact />
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { useI18n } from 'vue-i18n'

import type { NucTrustBadgeItemInterface } from 'atomic'

const { t } = useI18n()

const heroFeatures: NucTrustBadgeItemInterface[] = [
  { icon: 'mdi:shield-check', label: t('offer-trust-moneyback') },
  { icon: 'mdi:clock-fast', label: t('offer-trust-delivery') },
  { icon: 'mdi:headset', label: t('offer-trust-consultation') },
]

const LazyNucSectionPricing = defineAsyncComponent(
  () => import('../../../nuc_pricings/components/pricing/index.vue')
)
const LazyNucSectionFaq = defineAsyncComponent(
  () => import('../../../nuc_sections/components/faq/index.vue')
)
const LazyNucSectionContact = defineAsyncComponent(
  () => import('../../../nuc_sections/components/contact/index.vue')
)
</script>
