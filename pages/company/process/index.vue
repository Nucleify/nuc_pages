<template>
  <div class="process-container">
    <nuc-process-start />
    <ad-spacing />
    <nuc-process-steps />
    <ad-spacing />
    <nuc-process-guarantees />
    <ad-spacing />
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
