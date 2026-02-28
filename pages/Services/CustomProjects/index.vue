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
        <nuc-shiny-badge icon="mdi:puzzle-outline" :label="$t('service-cp-badge')" />

        <h1 class="service-hero-title">
          {{ $t('service-cp-title') }}
          <span class="service-hero-title-highlight">{{ $t('service-cp-title-highlight') }}</span>
        </h1>

        <p class="service-hero-subtitle">
          {{ $t('service-cp-subtitle') }}
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

    <section class="service-techstack">
      <div class="container">
        <h2 class="service-section-heading">
          {{ $t('service-cp-tech-heading') }}
          <span class="highlight">{{ $t('service-cp-tech-highlight') }}</span>
        </h2>

        <div class="service-techstack-grid">
          <div v-for="category in techCategories" :key="category.title" class="service-techstack-category">
            <h3>{{ category.title }}</h3>
            <div class="service-techstack-items">
              <div v-for="tech in category.items" :key="tech.name" class="service-techstack-item">
                <Icon :name="tech.icon" />
                <span>{{ tech.name }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="service-phases">
      <div class="container">
        <h2 class="service-section-heading">
          {{ $t('service-cp-phases-heading') }}
          <span class="highlight">{{ $t('service-cp-phases-highlight') }}</span>
        </h2>

        <div class="service-phases-grid">
          <div v-for="(phase, i) in phases" :key="phase.title" class="service-phase-card">
            <div class="service-phase-card-accent" />
            <div class="service-phase-num">{{ String(i + 1).padStart(2, '0') }}</div>
            <div class="service-phase-header">
              <div class="service-phase-icon">
                <Icon :name="phase.icon" />
              </div>
              <div>
                <h3>{{ phase.title }}</h3>
                <span class="service-phase-duration">{{ phase.duration }}</span>
              </div>
            </div>
            <p>{{ phase.desc }}</p>
            <ul class="service-phase-deliverables">
              <li v-for="item in phase.deliverables" :key="item">
                <Icon name="mdi:check-circle" />
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="service-benefits">
      <div class="container">
        <h2 class="service-section-heading">
          {{ $t('service-cp-benefits-heading') }}
          <span class="highlight">{{ $t('service-cp-benefits-highlight') }}</span>
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
  { icon: 'mdi:code-braces', label: t('service-cp-trust-tailored') },
  { icon: 'mdi:arrow-expand-all', label: t('service-cp-trust-scalable') },
  { icon: 'mdi:key-outline', label: t('service-cp-trust-ownership') },
]

const features = [
  {
    icon: 'mdi:cog-outline',
    title: t('service-cp-feat-tailored-title'),
    desc: t('service-cp-feat-tailored-desc'),
  },
  {
    icon: 'mdi:api',
    title: t('service-cp-feat-api-title'),
    desc: t('service-cp-feat-api-desc'),
  },
  {
    icon: 'mdi:arrow-expand-all',
    title: t('service-cp-feat-scalable-title'),
    desc: t('service-cp-feat-scalable-desc'),
  },
  {
    icon: 'mdi:database-outline',
    title: t('service-cp-feat-database-title'),
    desc: t('service-cp-feat-database-desc'),
  },
  {
    icon: 'mdi:test-tube',
    title: t('service-cp-feat-testing-title'),
    desc: t('service-cp-feat-testing-desc'),
  },
  {
    icon: 'mdi:cloud-outline',
    title: t('service-cp-feat-deploy-title'),
    desc: t('service-cp-feat-deploy-desc'),
  },
]

const techCategories = [
  {
    title: t('service-cp-tech-frontend'),
    items: [
      { icon: 'mdi:vuejs', name: 'Vue 3' },
      { icon: 'mdi:nuxt', name: 'Nuxt 3' },
      { icon: 'mdi:language-typescript', name: 'TypeScript' },
      { icon: 'mdi:sass', name: 'SCSS' },
    ],
  },
  {
    title: t('service-cp-tech-backend'),
    items: [
      { icon: 'mdi:laravel', name: 'Laravel' },
      { icon: 'mdi:language-php', name: 'PHP 8' },
      { icon: 'mdi:database', name: 'MySQL' },
      { icon: 'mdi:api', name: 'REST API' },
    ],
  },
  {
    title: t('service-cp-tech-devops'),
    items: [
      { icon: 'mdi:docker', name: 'Docker' },
      { icon: 'mdi:github', name: 'GitHub CI/CD' },
      { icon: 'mdi:cloud', name: 'Cloud' },
      { icon: 'mdi:monitor-dashboard', name: 'Monitoring' },
    ],
  },
]

const phases = [
  {
    icon: 'mdi:magnify',
    title: t('service-cp-phase-1-title'),
    duration: t('service-cp-phase-1-duration'),
    desc: t('service-cp-phase-1-desc'),
    deliverables: [
      t('service-cp-phase-1-d1'),
      t('service-cp-phase-1-d2'),
      t('service-cp-phase-1-d3'),
    ],
  },
  {
    icon: 'mdi:drawing',
    title: t('service-cp-phase-2-title'),
    duration: t('service-cp-phase-2-duration'),
    desc: t('service-cp-phase-2-desc'),
    deliverables: [
      t('service-cp-phase-2-d1'),
      t('service-cp-phase-2-d2'),
      t('service-cp-phase-2-d3'),
    ],
  },
  {
    icon: 'mdi:code-tags',
    title: t('service-cp-phase-3-title'),
    duration: t('service-cp-phase-3-duration'),
    desc: t('service-cp-phase-3-desc'),
    deliverables: [
      t('service-cp-phase-3-d1'),
      t('service-cp-phase-3-d2'),
      t('service-cp-phase-3-d3'),
    ],
  },
  {
    icon: 'mdi:rocket-launch',
    title: t('service-cp-phase-4-title'),
    duration: t('service-cp-phase-4-duration'),
    desc: t('service-cp-phase-4-desc'),
    deliverables: [
      t('service-cp-phase-4-d1'),
      t('service-cp-phase-4-d2'),
      t('service-cp-phase-4-d3'),
    ],
  },
]

const benefits = [
  {
    icon: 'mdi:fingerprint',
    title: t('service-cp-benefit-unique-title'),
    desc: t('service-cp-benefit-unique-desc'),
  },
  {
    icon: 'mdi:trending-up',
    title: t('service-cp-benefit-scale-title'),
    desc: t('service-cp-benefit-scale-desc'),
  },
  {
    icon: 'mdi:key-variant',
    title: t('service-cp-benefit-ownership-title'),
    desc: t('service-cp-benefit-ownership-desc'),
  },
]

const LazyNucSectionFaq = defineAsyncComponent(
  () => import('../../../../nuc_sections/components/faq/index.vue')
)
const LazyNucSectionContact = defineAsyncComponent(
  () => import('../../../../nuc_sections/components/contact/index.vue')
)
</script>
