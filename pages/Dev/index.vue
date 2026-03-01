<template>
  <div class="dev-container">
    <nuc-dev-start />
    <LazyNucDevStack />
    <LazyNucDevHighlights />
    <LazyNucDevDX />
    <LazyNucDevModules />
    <LazyNucSectionContact />
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import { NucDevStart } from './sections'

const LazyNucDevStack = defineAsyncComponent(
  () => import('./sections/Stack/index.vue')
)
const LazyNucDevHighlights = defineAsyncComponent(
  () => import('./sections/Highlights/index.vue')
)
const LazyNucDevDX = defineAsyncComponent(
  () => import('./sections/DX/index.vue')
)
const LazyNucDevModules = defineAsyncComponent(
  () => import('./sections/Modules/index.vue')
)
const LazyNucSectionContact = defineAsyncComponent(
  () => import('../../../nuc_sections/components/contact/index.vue')
)
</script>
