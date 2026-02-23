<template>
  <div class="process-container">
    <nuc-process-start />
    <LazyNucProcessSteps />
    <LazyNucProcessGuarantees />
    <LazyNucSectionContact />
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import { NucProcessStart } from './sections'

const LazyNucProcessSteps = defineAsyncComponent(
  () => import('./sections/Steps/index.vue')
)
const LazyNucProcessGuarantees = defineAsyncComponent(
  () => import('./sections/Guarantees/index.vue')
)
const LazyNucSectionContact = defineAsyncComponent(
  () => import('../../../../nuc_sections/components/contact/index.vue')
)
</script>
