<template>
  <section id="values">
    <div class="about-values-container container">
      <div class="about-values-header">
        <nuc-shiny-badge icon="mdi:star-four-points-outline" :label="$t('about-values-badge')" />
        <h2 class="about-values-heading">
          {{ $t('about-values-heading') }}
          <span class="highlight">{{ $t('about-values-heading-highlight') }}</span>
        </h2>
        <p class="about-values-description">
          {{ $t('about-values-description') }}
        </p>
      </div>

      <div class="about-values-grid">
        <div
          v-for="(value, index) in values"
          :key="value.title"
          class="about-value-card"
          :class="{ 'about-value-card--featured': index === 0 }"
        >
          <div class="about-value-card-number">{{ String(index + 1).padStart(2, '0') }}</div>
          <div class="about-value-card-icon">
            <Icon :name="value.icon" />
          </div>
          <h3 class="about-value-card-title">{{ value.title }}</h3>
          <p class="about-value-card-desc">{{ value.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const values = [
  {
    icon: 'mdi:clock-fast',
    title: t('about-value-speed-title'),
    desc: t('about-value-speed-desc'),
  },
  {
    icon: 'mdi:shield-lock-outline',
    title: t('about-value-security-title'),
    desc: t('about-value-security-desc'),
  },
  {
    icon: 'mdi:cash-check',
    title: t('about-value-cost-title'),
    desc: t('about-value-cost-desc'),
  },
  {
    icon: 'mdi:ear-hearing',
    title: t('about-value-listen-title'),
    desc: t('about-value-listen-desc'),
  },
  {
    icon: 'mdi:check-decagram-outline',
    title: t('about-value-quality-title'),
    desc: t('about-value-quality-desc'),
  },
  {
    icon: 'mdi:handshake-outline',
    title: t('about-value-partnership-title'),
    desc: t('about-value-partnership-desc'),
  },
]
</script>
