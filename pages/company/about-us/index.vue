<template>
  <div class="about-us-container">
    <nuc-about-start />
    <ad-spacing />
    <LazyNucAboutMission />
    <ad-spacing />
    <LazyNucAboutValues />
    <ad-spacing />
    <LazyNucAboutProcess />
    <ad-spacing />
    <LazyNucSectionContact />
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import { NucAboutStart } from 'nucleify'

const LazyNucAboutMission = defineAsyncComponent(
  () => import('./sections/mission/index.vue')
)
const LazyNucAboutValues = defineAsyncComponent(
  () => import('./sections/values/index.vue')
)
const LazyNucAboutProcess = defineAsyncComponent(
  () => import('./sections/process/index.vue')
)
const LazyNucSectionContact = defineAsyncComponent(
  () => import('../../../../nuc_sections/contact/index.vue')
)
</script>

<style lang="scss">
@import 'index';
</style>
