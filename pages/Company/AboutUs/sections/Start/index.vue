<template>
  <section id="start">
    <div class="about-start-decoration about-start-decoration-1">
      <Icon name="mdi:hexagon-outline" />
    </div>
    <div class="about-start-decoration about-start-decoration-2">
      <Icon name="mdi:circle-outline" />
    </div>

    <div class="container about-start-inner">
      <div class="about-start-left">
        <span class="about-start-badge">{{ $t('about-badge') }}</span>

        <h1 class="about-start-title">
          {{ $t('about-start-title') }}
          <span class="about-start-title-highlight">{{ $t('about-start-title-highlight') }}</span>
        </h1>

        <p class="about-start-subtitle">
          {{ $t('about-start-subtitle') }}
        </p>
      </div>

      <div class="about-start-right">
        <div class="about-start-card">
          <div class="about-start-card-header">
            <Icon name="mdi:information-outline" />
            <span>{{ $t('about-card-title') }}</span>
          </div>

          <a class="about-start-card-company" :href="companyLink" target="_blank">
            <Icon name="mdi:domain" />
            <span>{{ $t('footer-company-name') }}</span>
          </a>

          <div class="about-start-card-divider" />

          <div class="about-start-card-items">
            <component
              :is="item.link ? 'a' : 'div'"
              v-for="item in cardItems"
              :key="item.label"
              class="about-start-card-item"
              v-bind="item.link ? { href: item.link, target: '_blank' } : {}"
              @click.stop
            >
              <div class="about-start-card-item-icon">
                <Icon :name="item.icon" />
              </div>
              <div class="about-start-card-item-text">
                <span class="about-start-card-item-value">{{ item.value }}</span>
                <span class="about-start-card-item-label">{{ item.label }}</span>
              </div>
            </component>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const companyLink =
  'https://aleo.com/pl/firma/atomic-it-spolka-z-ograniczona-odpowiedzialnoscia'

const cardItems = [
  {
    icon: 'mdi:file-document-outline',
    value: t('about-card-nip-value'),
    label: t('about-card-nip-label'),
    link: companyLink,
  },
  {
    icon: 'mdi:calendar-outline',
    value: t('about-card-founded-value'),
    label: t('about-card-founded-label'),
    link: companyLink,
  },
  {
    icon: 'mdi:map-marker-outline',
    value: t('about-card-location-value'),
    label: t('about-card-location-label'),
    link: companyLink,
  },
  {
    icon: 'mdi:email-outline',
    value: t('about-card-email-value'),
    label: t('about-card-email-label'),
    link: 'mailto:info@nucleify.io',
  },
]
</script>
