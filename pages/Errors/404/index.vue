<template>
  <div class="error-404-container">
    <nuc-grid-background />
    <div class="error-404-content container">
      <div class="error-404-number">404</div>
      <h1 class="error-404-title">{{ $t('error-404-title') }}</h1>
      <p class="error-404-message">
        {{ $t('error-404-message') }}
      </p>
      <div class="error-404-actions">
        <nuc-submit-button
          :label="$t('error-404-back-home')"
          icon="prime:home"
          variant="primary"
          @click="navigateTo(homeUrl)"
        />
        <nuc-submit-button
          :label="$t('error-404-go-back')"
          icon="prime:arrow-left"
          variant="secondary"
          @click="goBack"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { navigateTo, useRoute, useRouter } from 'nuxt/app'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const route = useRoute()
const router = useRouter()
const { locale } = useI18n()

const lang = computed(() => {
  const langParam = route.params.lang as string
  return langParam || locale.value || 'en'
})

const homeUrl = computed(() => `/${lang.value}/home`)

function goBack(): void {
  if (import.meta.client && window.history.length > 1) {
    router.back()
  } else {
    router.push(homeUrl.value)
  }
}
</script>

