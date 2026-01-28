<template>
  <div class="home-container">
    <nuc-start />
    <nuc-results />
    <nuc-features />
    <nuc-section-faq site="home" />
    <nuc-section-contact />
  </div>
</template>

<script setup lang="ts">
import { onBeforeMount, onMounted } from 'vue'

import { NucFeatures, NucResults, NucStart } from './sections'

onBeforeMount(() => window.scrollTo(0, 0))

onMounted(() => {
  setTimeout(async () => {
    try {
      const { useDocumentation } = await import('atomic')
      const doc = useDocumentation()

      await doc.prefetchFirstPage()

      await doc.prefetchAll()
    } catch (error) {
      console.error('Failed to prefetch documentation:', error)
    }
  }, 1000)
})
</script>
