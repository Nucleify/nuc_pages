<template>
  <section id="dev-start" class="dev-start">
    <nuc-grid-background class="dev-start-grid" />
    <div class="container dev-start-inner">
      <div class="dev-start-left">
        <h1 class="dev-start-heading">
          {{ $t('dev-header') }}
        </h1>

        <p class="dev-start-description">
          {{ $t('dev-description') }}
        </p>

        <div class="dev-start-features">
          <div
            v-for="(feature, i) in features"
            :key="feature.title"
            class="dev-feature-item"
            :style="{ animationDelay: `${i * 150}ms` }"
          >
            <div class="dev-feature-icon">
              <Icon :name="feature.icon" />
            </div>
            <div class="dev-feature-content">
              <span>{{ feature.title }}</span>
              <p>{{ feature.desc }}</p>
            </div>
          </div>
        </div>

        <div class="dev-start-cta">
            <nuc-submit-button
            variant="primary"
            :disabled="demoLoading"
            @click="handleDemoLogin"
            icon="mdi:play-circle-outline"
            :label="$t('dev-cta-demo')"
          />
          <nuc-submit-button
            variant="secondary"
            :to="`/${lang}/offer`"
            icon="mdi:arrow-right"
            :label="$t('dev-cta-pricing')"
          />
        </div>
      </div>

      <div class="dev-start-right">
        <div class="dev-terminal">
          <div class="dev-terminal-header">
            <div class="dev-terminal-dots">
              <span /><span /><span />
            </div>
            <span class="dev-terminal-title">terminal</span>
          </div>
          <div class="dev-terminal-body">
            <div class="dev-terminal-line">
              <span class="dev-terminal-prompt">$</span>
              <span class="dev-terminal-cmd">make</span>
            </div>
            <div class="dev-terminal-line dev-terminal-output">
              <span>{{ $t('dev-terminal-creating') }}</span>
            </div>
            <div class="dev-terminal-line dev-terminal-output">
              <span>{{ $t('dev-terminal-installing') }}</span>
            </div>
            <div class="dev-terminal-line dev-terminal-output">
              <Icon name="mdi:docker" />
              <span>{{ $t('dev-terminal-docker') }}</span>
            </div>
            <div class="dev-terminal-line dev-terminal-output dev-terminal-success">
              <Icon name="mdi:check-circle" />
              <span>{{ $t('dev-terminal-ready') }}</span>
            </div>
            <div class="dev-terminal-line dev-terminal-output dev-terminal-success">
              <Icon name="mdi:rocket-launch" />
              <span>http://localhost:3000</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useRoute } from 'nuxt/app'
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'

import { demoLogin } from 'atomic'

const { t } = useI18n()
const route = useRoute()
const lang = computed(() => (route.params.lang as string) || 'en')
const demoLoading = ref(false)

async function handleDemoLogin(): Promise<void> {
  demoLoading.value = true
  try {
    await demoLogin()
  } finally {
    demoLoading.value = false
  }
}

const features = [
  {
    icon: 'mdi:puzzle-outline',
    title: t('dev-feature-modules-title'),
    desc: t('dev-feature-modules-desc'),
  },
  {
    icon: 'mdi:view-dashboard-edit-outline',
    title: t('dev-feature-pagebuilder-title'),
    desc: t('dev-feature-pagebuilder-desc'),
  },
  {
    icon: 'mdi:atom-variant',
    title: t('dev-feature-atomic-title'),
    desc: t('dev-feature-atomic-desc'),
  },
]
</script>
