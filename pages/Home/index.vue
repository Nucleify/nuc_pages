<template>
  <div class="home-container">
    <nuc-start />
    <LazyNucResults />
    <LazyNucFeatures />
    <LazyNucSectionFaq site="home" />
    <LazyNucSectionContact />
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent, onMounted } from 'vue'

import { NucStart } from './sections'

const LazyNucResults = defineAsyncComponent(
  () => import('./sections/Results/index.vue')
)
const LazyNucFeatures = defineAsyncComponent(
  () => import('./sections/Features/index.vue')
)
const LazyNucSectionFaq = defineAsyncComponent(
  () => import('../../../nuc_sections/components/faq/index.vue')
)
const LazyNucSectionContact = defineAsyncComponent(
  () => import('../../../nuc_sections/components/contact/index.vue')
)

onMounted(() => {
  // Prefetch documentation only after user interaction or much later
  const prefetchDocs = async () => {
    try {
      const { useDocumentation } = await import('atomic')
      const doc = useDocumentation()
      await doc.prefetchFirstPage()
    } catch (error) {
      console.error('Failed to prefetch documentation:', error)
    }
  }

  // Only prefetch after 10 seconds of idle time
  if ('requestIdleCallback' in window) {
    requestIdleCallback(() => setTimeout(prefetchDocs, 10000), {
      timeout: 15000,
    })
  } else {
    setTimeout(prefetchDocs, 15000)
  }
})
</script>
