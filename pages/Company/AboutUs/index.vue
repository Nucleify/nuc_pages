<template>
  <div class="about-us-container">
    <nuc-about-start />
    <LazyNucAboutMission />
    <LazyNucAboutValues />
    <LazyNucAboutProcess />
    <LazyNucSectionContact />
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import { NucAboutStart } from './sections'

const LazyNucAboutMission = defineAsyncComponent(
  () => import('./sections/Mission/index.vue')
)
const LazyNucAboutValues = defineAsyncComponent(
  () => import('./sections/Values/index.vue')
)
const LazyNucAboutProcess = defineAsyncComponent(
  () => import('./sections/Process/index.vue')
)
const LazyNucSectionContact = defineAsyncComponent(
  () => import('../../../../nuc_sections/components/contact/index.vue')
)
</script>
