<template>
  <section id="process">
    <div class="about-process-container container">
      <div class="about-process-inner">
        <h3 class="about-process-title">{{ $t('about-process-title') }}</h3>
        <div class="about-process-track">
          <div class="about-process-line">
            <div class="about-process-line-shimmer" />
          </div>
          <div class="about-process-steps">
            <div v-for="(step, index) in processSteps" :key="step.title" class="about-process-step">
              <div class="about-process-step-number">
                <span>{{ index + 1 }}</span>
              </div>
              <div class="about-process-step-body">
                <div class="about-process-step-icon">
                  <Icon :name="step.icon" />
                </div>
                <span class="about-process-step-title">{{ step.title }}</span>
                <span class="about-process-step-desc">{{ step.desc }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const processSteps = [
  {
    icon: 'mdi:chat-outline',
    title: t('about-process-step-1-title'),
    desc: t('about-process-step-1-desc'),
  },
  {
    icon: 'mdi:pencil-ruler',
    title: t('about-process-step-2-title'),
    desc: t('about-process-step-2-desc'),
  },
  {
    icon: 'mdi:code-tags',
    title: t('about-process-step-3-title'),
    desc: t('about-process-step-3-desc'),
  },
  {
    icon: 'mdi:lifebuoy',
    title: t('about-process-step-4-title'),
    desc: t('about-process-step-4-desc'),
  },
]
</script>
