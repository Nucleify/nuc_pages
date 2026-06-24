<template>
  <div class="home-container">
    <nuc-start />
    <LazyNucResults />
    <LazyNucSectionFaq site="home" />
    <LazyNucFeatures />
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
