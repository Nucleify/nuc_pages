<template>
  <div class="error-404-container">
    <nuc-grid-background />
    <div class="error-404-content container">
      <div class="error-404-number">404</div>
      <h1 class="error-404-title">Oops! Page Not Found</h1>
      <p class="error-404-message">
        The page you're looking for seems to have wandered off into the digital void.
        Let's get you back on track!
      </p>
      <div class="error-404-actions">
        <ad-anchor
          :href="homeUrl"
          label="Back to Home"
          icon="prime:home"
          class="error-404-button error-404-button-primary"
        />
        <button
          @click="goBack"
          class="error-404-button error-404-button-secondary"
        >
          <ad-icon icon="prime:arrow-left" />
          <ad-label label="Go Back" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'nuxt/app'
import { computed } from 'vue'

const route = useRoute()
const router = useRouter()

const lang = computed(() => {
  const langParam = route.params.lang as string
  return langParam || 'en'
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

