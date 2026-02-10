<template>
  <section id="structure">
    <div class="structure-container">
      <div class="content">
        <div class="animation-container">
          <DeferredContent>
            <nuc-structure-animation />
          </DeferredContent>
        </div>
        <div class="description-container">
          <ad-heading :tag="3" class="title">
            <div class="shiny">{{ $t('innovations-structure-title-highlight') }}&nbsp;</div>
            <span>{{ $t('innovations-structure-title') }}</span>
          </ad-heading>
          <ad-paragraph
            :text="$t('innovations-structure-description')"
            class="description"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { NucStructureAnimation } from './'
</script>
