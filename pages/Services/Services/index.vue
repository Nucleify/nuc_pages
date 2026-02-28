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
        <nuc-shiny-badge icon="mdi:briefcase-outline" :label="$t('service-main-badge')" />

        <h1 class="service-hero-title">
          {{ $t('service-main-title') }}
          <span class="service-hero-title-highlight">{{ $t('service-main-title-highlight') }}</span>
        </h1>

        <p class="service-hero-subtitle">
          {{ $t('service-main-subtitle') }}
        </p>
      </div>
    </section>

    <section class="service-features">
      <div class="container">
        <div class="service-features-grid">
          <nuxt-link
            v-for="service in services"
            :key="service.title"
            :to="service.url"
            class="service-feature-card service-feature-card-link"
          >
            <div class="service-feature-card-icon">
              <Icon :name="service.icon" />
            </div>
            <h3>{{ service.title }}</h3>
            <p>{{ service.desc }}</p>
            <span class="service-feature-card-arrow">
              <Icon name="mdi:arrow-right" />
            </span>
          </nuxt-link>
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
import { useRoute } from 'vue-router'

const { t } = useI18n()
const route = useRoute()
const lang = (route.params.lang as string) || 'en'

const services = [
  {
    icon: 'mdi:domain',
    title: t('service-main-bw-title'),
    desc: t('service-main-bw-desc'),
    url: `/${lang}/services/business-websites`,
  },
  {
    icon: 'mdi:cart-outline',
    title: t('service-main-ec-title'),
    desc: t('service-main-ec-desc'),
    url: `/${lang}/services/ecommerce-stores`,
  },
  {
    icon: 'mdi:lightning-bolt',
    title: t('service-main-lp-title'),
    desc: t('service-main-lp-desc'),
    url: `/${lang}/services/landing-pages`,
  },
  {
    icon: 'mdi:auto-fix',
    title: t('service-main-wr-title'),
    desc: t('service-main-wr-desc'),
    url: `/${lang}/services/website-redesign`,
  },
  {
    icon: 'mdi:puzzle-outline',
    title: t('service-main-cp-title'),
    desc: t('service-main-cp-desc'),
    url: `/${lang}/services/custom-projects`,
  },
]

const LazyNucSectionFaq = defineAsyncComponent(
  () => import('../../../../nuc_sections/components/faq/index.vue')
)
const LazyNucSectionContact = defineAsyncComponent(
  () => import('../../../../nuc_sections/components/contact/index.vue')
)
</script>
