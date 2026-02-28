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
        <nuc-shiny-badge icon="mdi:domain" :label="$t('service-bw-badge')" />

        <h1 class="service-hero-title">
          {{ $t('service-bw-title') }}
          <span class="service-hero-title-highlight">{{ $t('service-bw-title-highlight') }}</span>
        </h1>

        <p class="service-hero-subtitle">
          {{ $t('service-bw-subtitle') }}
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

    <section class="service-scope">
      <div class="container">
        <div class="service-scope-layout">
          <div class="service-scope-info">
            <nuc-shiny-badge icon="mdi:clipboard-check-outline" :label="$t('service-bw-scope-badge')" />
            <h2 class="service-section-heading service-section-heading-left">
              {{ $t('service-bw-scope-heading') }}
              <span class="highlight">{{ $t('service-bw-scope-highlight') }}</span>
            </h2>
            <p class="service-scope-desc">{{ $t('service-bw-scope-desc') }}</p>
          </div>
          <div class="service-scope-checklist">
            <div v-for="(item, i) in scopeItems" :key="item" class="service-scope-item" :style="{ animationDelay: `${i * 0.08}s` }">
              <div class="service-scope-check">
                <Icon name="mdi:check-bold" />
              </div>
              <span>{{ item }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="service-process-mini">
      <div class="container">
        <h2 class="service-section-heading">
          {{ $t('service-bw-process-heading') }}
          <span class="highlight">{{ $t('service-bw-process-highlight') }}</span>
        </h2>

        <div class="service-process-steps">
          <div v-for="(step, i) in processSteps" :key="step.title" class="service-process-step">
            <div class="service-process-step-num">{{ String(i + 1).padStart(2, '0') }}</div>
            <div class="service-process-step-icon">
              <Icon :name="step.icon" />
            </div>
            <h3>{{ step.title }}</h3>
            <p>{{ step.desc }}</p>
            <div v-if="i < processSteps.length - 1" class="service-process-step-connector">
              <Icon name="mdi:chevron-right" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="service-benefits">
      <div class="container">
        <h2 class="service-section-heading">
          {{ $t('service-bw-benefits-heading') }}
          <span class="highlight">{{ $t('service-bw-benefits-highlight') }}</span>
        </h2>

        <div class="service-benefits-grid">
          <div v-for="benefit in benefits" :key="benefit.title" class="service-benefit-item">
            <div class="service-benefit-icon">
              <Icon :name="benefit.icon" />
            </div>
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
  { icon: 'mdi:responsive', label: t('service-bw-trust-responsive') },
  { icon: 'mdi:magnify', label: t('service-bw-trust-seo') },
  { icon: 'mdi:headset', label: t('service-bw-trust-support') },
]

const features = [
  {
    icon: 'mdi:palette-outline',
    title: t('service-bw-feat-design-title'),
    desc: t('service-bw-feat-design-desc'),
  },
  {
    icon: 'mdi:pencil-ruler',
    title: t('service-bw-feat-cms-title'),
    desc: t('service-bw-feat-cms-desc'),
  },
  {
    icon: 'mdi:chart-line',
    title: t('service-bw-feat-analytics-title'),
    desc: t('service-bw-feat-analytics-desc'),
  },
  {
    icon: 'mdi:cellphone-link',
    title: t('service-bw-feat-responsive-title'),
    desc: t('service-bw-feat-responsive-desc'),
  },
  {
    icon: 'mdi:shield-lock-outline',
    title: t('service-bw-feat-security-title'),
    desc: t('service-bw-feat-security-desc'),
  },
  {
    icon: 'mdi:rocket-launch-outline',
    title: t('service-bw-feat-speed-title'),
    desc: t('service-bw-feat-speed-desc'),
  },
]

const scopeItems = [
  t('service-bw-scope-1'),
  t('service-bw-scope-2'),
  t('service-bw-scope-3'),
  t('service-bw-scope-4'),
  t('service-bw-scope-5'),
  t('service-bw-scope-6'),
  t('service-bw-scope-7'),
  t('service-bw-scope-8'),
]

const processSteps = [
  {
    icon: 'mdi:chat-outline',
    title: t('service-bw-step-1-title'),
    desc: t('service-bw-step-1-desc'),
  },
  {
    icon: 'mdi:pencil-ruler',
    title: t('service-bw-step-2-title'),
    desc: t('service-bw-step-2-desc'),
  },
  {
    icon: 'mdi:code-tags',
    title: t('service-bw-step-3-title'),
    desc: t('service-bw-step-3-desc'),
  },
  {
    icon: 'mdi:rocket-launch-outline',
    title: t('service-bw-step-4-title'),
    desc: t('service-bw-step-4-desc'),
  },
]

const benefits = [
  {
    icon: 'mdi:trophy-outline',
    title: t('service-bw-benefit-credibility-title'),
    desc: t('service-bw-benefit-credibility-desc'),
  },
  {
    icon: 'mdi:account-group-outline',
    title: t('service-bw-benefit-customers-title'),
    desc: t('service-bw-benefit-customers-desc'),
  },
  {
    icon: 'mdi:trending-up',
    title: t('service-bw-benefit-growth-title'),
    desc: t('service-bw-benefit-growth-desc'),
  },
]

const LazyNucSectionFaq = defineAsyncComponent(
  () => import('../../../../nuc_sections/components/faq/index.vue')
)
const LazyNucSectionContact = defineAsyncComponent(
  () => import('../../../../nuc_sections/components/contact/index.vue')
)
</script>
