<template>
  <div class="offer-container">
    <section class="offer-hero">
      <div class="offer-hero-glow"></div>
      <div class="offer-hero-glow offer-hero-glow-secondary"></div>
      
      <div class="offer-hero-content container">
        <nuc-shiny-badge icon="mdi:rocket-launch" label="FLEXIBLE PRICING" />

        <h1 class="offer-hero-title">
          Invest in Your
          <span class="offer-hero-title-highlight">Digital Success</span>
        </h1>

        <p class="offer-hero-subtitle">
          From simple landing pages to enterprise platforms — choose the plan that fits your ambition.
          <strong>No hidden fees. No surprises.</strong>
        </p>

        <nuc-trust-badges :items="heroFeatures" />

        <div class="offer-hero-cta">
          <a href="#pricing" class="offer-hero-button">
            <Icon name="mdi:arrow-down" />
            <span>See Plans</span>
          </a>
        </div>
      </div>

      <div class="offer-hero-scroll-indicator">
        <Icon name="mdi:chevron-double-down" />
      </div>
    </section>

    <LazyNucSectionPricing />

    <LazyNucSectionFaq site="offer" />
    <LazyNucSectionContact />
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import type { NucTrustBadgeItemInterface } from 'atomic'

const heroFeatures: NucTrustBadgeItemInterface[] = [
  { icon: 'mdi:shield-check', label: '30-Day Money Back' },
  { icon: 'mdi:clock-fast', label: 'Fast Delivery' },
  { icon: 'mdi:headset', label: 'Free Consultation' },
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

