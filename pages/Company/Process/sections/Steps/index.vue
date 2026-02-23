<template>
  <section id="steps">
    <div class="process-steps-container container">
      <div class="process-steps-header">
        <nuc-shiny-badge icon="mdi:format-list-numbered" :label="$t('process-steps-badge')" />
        <h2 class="process-steps-heading">
          {{ $t('process-steps-heading') }}
          <span class="highlight">{{ $t('process-steps-heading-highlight') }}</span>
        </h2>
        <p class="process-steps-description">
          {{ $t('process-steps-description') }}
        </p>
      </div>

      <div class="process-steps-timeline">
        <div class="process-steps-line">
          <div class="process-steps-line-shimmer" />
        </div>

        <div
          v-for="(step, index) in steps"
          :key="step.title"
          class="process-step-row"
          :class="index % 2 === 0 ? 'process-step-row-left' : 'process-step-row-right'"
        >
          <div class="process-step-card">
            <div class="process-step-card-badge">{{ step.badge }}</div>
            <div class="process-step-card-top">
              <div class="process-step-card-icon">
                <Icon :name="step.icon" />
              </div>
              <h3>{{ step.title }}</h3>
            </div>
            <p class="process-step-card-desc">{{ step.desc }}</p>
            <ul class="process-step-card-details">
              <li v-for="detail in step.details" :key="detail">
                <Icon name="mdi:check-circle" />
                <span>{{ detail }}</span>
              </li>
            </ul>
          </div>

          <div class="process-step-dot">
            <span>{{ index + 1 }}</span>
          </div>

          <div class="process-step-spacer" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const steps = [
  {
    icon: 'mdi:chat-outline',
    badge: `01`,
    title: t('process-step-1-title'),
    desc: t('process-step-1-desc'),
    details: [
      t('process-step-1-detail-1'),
      t('process-step-1-detail-2'),
      t('process-step-1-detail-3'),
    ],
  },
  {
    icon: 'mdi:pencil-ruler',
    badge: `02`,
    title: t('process-step-2-title'),
    desc: t('process-step-2-desc'),
    details: [
      t('process-step-2-detail-1'),
      t('process-step-2-detail-2'),
      t('process-step-2-detail-3'),
    ],
  },
  {
    icon: 'mdi:code-tags',
    badge: `03`,
    title: t('process-step-3-title'),
    desc: t('process-step-3-desc'),
    details: [
      t('process-step-3-detail-1'),
      t('process-step-3-detail-2'),
      t('process-step-3-detail-3'),
    ],
  },
  {
    icon: 'mdi:lifebuoy',
    badge: `04`,
    title: t('process-step-4-title'),
    desc: t('process-step-4-desc'),
    details: [
      t('process-step-4-detail-1'),
      t('process-step-4-detail-2'),
      t('process-step-4-detail-3'),
    ],
  },
]
</script>
