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
import { NucStart } from './sections'

const LazyNucResults = defineAsyncComponent(() => 
  import('./sections/Results/index.vue')
)
const LazyNucFeatures = defineAsyncComponent(() => 
  import('./sections/Features/index.vue')
)
const LazyNucSectionFaq = defineAsyncComponent(() => 
  import('../../../nuc_sections/components/faq/index.vue')
)
const LazyNucSectionContact = defineAsyncComponent(() => 
  import('../../../nuc_sections/components/contact/index.vue')
)

onMounted(() => {
  if ('requestIdleCallback' in window) {
    requestIdleCallback(async () => {
      try {
        const { useDocumentation } = await import('atomic')
        const doc = useDocumentation()
        await doc.prefetchFirstPage()
        await doc.prefetchAll()
      } catch (error) {
        console.error('Failed to prefetch documentation:', error)
      }
    })
  } else {
    setTimeout(async () => {
      try {
        const { useDocumentation } = await import('atomic')
        const doc = useDocumentation()
        await doc.prefetchFirstPage()
        await doc.prefetchAll()
      } catch (error) {
        console.error('Failed to prefetch documentation:', error)
      }
    }, 2000)
  }
})
</script>
