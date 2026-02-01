<template>
  <NucFeatureTemplate
    section-id="content-management"
    badge="CONTENT MANAGEMENT"
    heading-prefix="Update your website"
    heading-highlight="without any code"
    :description="description"
    :features="features"
    visual-position="left"
  >
    <div class="content-preview">
      <div class="preview-header">
        <div class="preview-dot"></div>
        <div class="preview-dot"></div>
        <div class="preview-dot"></div>
      </div>
      <div class="preview-body">
        <div class="preview-sidebar">
          <div class="sidebar-item active">
            <Icon name="mdi:file-document-outline" />
          </div>
          <div class="sidebar-item">
            <Icon name="mdi:image-outline" />
          </div>
          <div class="sidebar-item">
            <Icon name="mdi:cog-outline" />
          </div>
        </div>
        <div class="preview-content">
          <div class="content-block title"></div>
          <div class="content-block text"></div>
          <div class="content-block text short"></div>
          <div class="content-block image"></div>
        </div>
      </div>
    </div>
  </NucFeatureTemplate>
</template>

<script setup lang="ts">
import type { FeatureItemInterface } from '../Template'
import { NucFeatureTemplate } from '../Template'

const description =
  "Simple admin panel lets you edit text, swap images, and publish changes instantly. No developer needed - you're in full control."

const features: FeatureItemInterface[] = [
  { icon: 'mdi:pencil-outline', label: 'Edit text directly' },
  { icon: 'mdi:image-plus-outline', label: 'Drag & drop images' },
  { icon: 'mdi:rocket-launch-outline', label: 'Publish in one click' },
]
</script>
