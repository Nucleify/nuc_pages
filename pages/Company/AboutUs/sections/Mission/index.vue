<template>
  <section id="mission">
    <div class="about-mission-container container">
      <div class="about-mission-header">
        <nuc-shiny-badge icon="mdi:rocket-launch-outline" :label="$t('about-mission-badge')" />
        <h2 class="about-mission-heading">
          {{ $t('about-mission-heading') }}
          <span class="highlight">{{ $t('about-mission-heading-highlight') }}</span>
        </h2>
        <p class="about-mission-description">
          {{ $t('about-mission-description') }}
        </p>
      </div>

      <div class="about-mission-grid">
        <div v-for="item in features" :key="item.title" class="about-mission-card">
          <div class="about-mission-card-top">
            <div class="about-mission-card-icon">
              <Icon :name="item.icon" />
            </div>
            <h3>{{ item.title }}</h3>
          </div>
          <p class="about-mission-card-desc">{{ item.desc }}</p>
        </div>
      </div>

      <div class="about-mission-story">
        <h3>{{ $t('about-story-title') }}</h3>
        <p>{{ $t('about-story-text-1') }}</p>
        <p>{{ $t('about-story-text-2') }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const features = [
  {
    icon: 'mdi:palette-outline',
    title: t('about-mission-feat-websites-title'),
    desc: t('about-mission-feat-websites-desc'),
  },
  {
    icon: 'mdi:package-variant-closed',
    title: t('about-mission-feat-everything-title'),
    desc: t('about-mission-feat-everything-desc'),
  },
  {
    icon: 'mdi:trending-up',
    title: t('about-mission-feat-growth-title'),
    desc: t('about-mission-feat-growth-desc'),
  },
  {
    icon: 'mdi:headset',
    title: t('about-mission-feat-support-title'),
    desc: t('about-mission-feat-support-desc'),
  },
]
</script>
