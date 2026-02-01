<template>
  <section 
    :id="props.sectionId" 
    :class="['feature-section', { 'visual-left': props.visualPosition === 'left' }]"
  >
    <div class="feature-container container">
      <div class="feature-info">
        <span class="feature-badge">{{ props.badge }}</span>
        <h2 class="feature-heading">
          {{ props.headingPrefix }}
          <span class="highlight">{{ props.headingHighlight }}</span>
        </h2>
        <p class="feature-description">{{ props.description }}</p>
        
        <div class="feature-list">
          <div
            v-for="feature in props.features"
            :key="feature.label"
            class="feature-item"
          >
            <Icon :name="feature.icon" />
            <span>{{ feature.label }}</span>
          </div>
        </div>
      </div>

      <div class="feature-visual">
        <ad-card class="nuc-card-base feature-card">
          <template #content>
            <nuc-animation-hexagons style="opacity: 0.3" />
            <slot />
          </template>
        </ad-card>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { FeatureTemplateInterface } from './interfaces'

const props = withDefaults(defineProps<FeatureTemplateInterface>(), {
  visualPosition: 'right',
})
</script>

