<template>
  <div class="thank-you-container">
    <div class="thank-you-content container">
      <div class="thank-you-icon">
        <Icon name="mdi:check-circle" />
      </div>

      <h1 class="thank-you-title">{{ $t('thank-you-title') }}</h1>
      <p class="thank-you-message">{{ $t('thank-you-message') }}</p>

      <div class="thank-you-actions">
        <nuc-submit-button
          :label="$t('thank-you-back-home')"
          icon="mdi:home"
          class="thank-you-button"
          @click="navigateToHome"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { navigateTo } from 'nuxt/app'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

function navigateToHome(): void {
  navigateTo(`/${locale.value}/home`)
}
</script>

