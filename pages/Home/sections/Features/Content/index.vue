<template>
  <NucFeatureTemplate
    section-id="content-management"
    :badge="$t('features-content-badge')"
    :heading-prefix="$t('features-content-heading-prefix')"
    :heading-highlight="$t('features-content-heading-highlight')"
    :description="$t('features-content-description')"
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
import { useI18n } from 'vue-i18n'

import type { FeatureItemInterface } from '../Template'
import { NucFeatureTemplate } from '../Template'

const { t } = useI18n()

const features: FeatureItemInterface[] = [
  { icon: 'mdi:pencil-outline', label: t('features-content-feat-edit') },
  { icon: 'mdi:image-plus-outline', label: t('features-content-feat-images') },
  {
    icon: 'mdi:rocket-launch-outline',
    label: t('features-content-feat-publish'),
  },
]
</script>
