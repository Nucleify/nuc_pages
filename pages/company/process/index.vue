<template>
  <div class="process-container">
    <nuc-process-start />
    <nuc-process-steps />
    <nuc-process-guarantees />
    <nuc-section-contact />
  </div>
</template>

<script setup lang="ts">
import {
  NucProcessStart,
  NucProcessSteps,
  NucProcessGuarantees,
  NucSectionContact,
} from 'nucleify'
</script>

<style lang="scss">
@import 'index';
</style>
