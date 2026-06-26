<template>
  <div class="home-container">
    <nuc-start />
    <ad-spacing />
    <LazyNucResults />
    <ad-spacing />
    <LazyNucSectionFaq site="home" />
    <ad-spacing />
    <LazyNucFeatures />
    <ad-spacing />
    <LazyNucSectionContact />
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import { NucStart } from 'nucleify'

const LazyNucResults = defineAsyncComponent(
  () => import('./sections/results/index.vue')
)
const LazyNucFeatures = defineAsyncComponent(
  () => import('./sections/features/index.vue')
)
const LazyNucSectionFaq = defineAsyncComponent(
  () => import('../../../nuc_sections/faq/index.vue')
)
const LazyNucSectionContact = defineAsyncComponent(
  () => import('../../../nuc_sections/contact/index.vue')
)
</script>
