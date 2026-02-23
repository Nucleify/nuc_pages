<template>
  <section id="start">
    <div class="process-start-decoration process-start-decoration-1">
      <Icon name="mdi:cog-outline" />
    </div>
    <div class="process-start-decoration process-start-decoration-2">
      <Icon name="mdi:triangle-outline" />
    </div>

    <div class="container process-start-inner">
      <span class="process-start-badge">{{ $t('process-badge') }}</span>

      <h1 class="process-start-title">
        {{ $t('process-start-title') }}
        <span class="process-start-title-highlight">{{ $t('process-start-title-highlight') }}</span>
      </h1>

      <p class="process-start-subtitle">
        {{ $t('process-start-subtitle') }}
      </p>

      <div class="process-start-indicators">
        <div v-for="step in steps" :key="step.num" class="process-start-indicator">
          <div class="process-start-indicator-num">{{ step.num }}</div>
          <span>{{ step.label }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const steps = [
  { num: '01', label: t('process-step-1-title') },
  { num: '02', label: t('process-step-2-title') },
  { num: '03', label: t('process-step-3-title') },
  { num: '04', label: t('process-step-4-title') },
]
</script>
