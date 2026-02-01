<template>
  <section id="features">
    <nuc-content />
    <nuc-conversion />
    <nuc-performance />
    <ClientOnly>
      <LazyNucCharts />
    </ClientOnly>
  </section>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import { NucContent, NucConversion, NucPerformance } from './'

const LazyNucCharts = defineAsyncComponent(() => import('./Charts/index.vue'))
</script>
