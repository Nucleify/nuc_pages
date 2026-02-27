<template>
  <NucFeatureTemplate
    section-id="support"
    :badge="$t('features-support-badge')"
    :heading-prefix="$t('features-support-heading-prefix')"
    :heading-highlight="$t('features-support-heading-highlight')"
    :description="$t('features-support-description')"
    :features="features"
    visual-position="right"
  >
    <div class="support-preview">
      <div class="support-header">
        <Icon name="mdi:headset" />
        <span>{{ $t('features-support-inbox-title') }}</span>
        <span class="support-status">
          <span class="status-dot"></span>
          {{ $t('features-support-inbox-online') }}
        </span>
      </div>

      <div class="support-messages">
        <div class="support-msg">
          <div class="msg-avatar resolved">
            <Icon name="mdi:check" />
          </div>
          <div class="msg-content">
            <div class="msg-top">
              <span class="msg-sender">{{ $t('features-support-msg-1-sender') }}</span>
              <span class="msg-time">2 min</span>
            </div>
            <span class="msg-text">{{ $t('features-support-msg-1-text') }}</span>
            <span class="msg-tag resolved">{{ $t('features-support-tag-resolved') }}</span>
          </div>
        </div>

        <div class="support-msg active">
          <div class="msg-avatar active">
            <Icon name="mdi:message-reply-text" />
          </div>
          <div class="msg-content">
            <div class="msg-top">
              <span class="msg-sender">{{ $t('features-support-msg-2-sender') }}</span>
              <span class="msg-time">15 min</span>
            </div>
            <span class="msg-text">{{ $t('features-support-msg-2-text') }}</span>
            <span class="msg-tag active">{{ $t('features-support-tag-replied') }}</span>
          </div>
        </div>

        <div class="support-msg">
          <div class="msg-avatar resolved">
            <Icon name="mdi:check" />
          </div>
          <div class="msg-content">
            <div class="msg-top">
              <span class="msg-sender">{{ $t('features-support-msg-3-sender') }}</span>
              <span class="msg-time">1h</span>
            </div>
            <span class="msg-text">{{ $t('features-support-msg-3-text') }}</span>
            <span class="msg-tag resolved">{{ $t('features-support-tag-resolved') }}</span>
          </div>
        </div>
      </div>

      <div class="support-footer">
        <Icon name="mdi:clock-fast" />
        <span>{{ $t('features-support-avg-response') }}</span>
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
  {
    icon: 'mdi:clock-check-outline',
    label: t('features-support-feat-response'),
  },
  { icon: 'mdi:wrench-outline', label: t('features-support-feat-updates') },
  {
    icon: 'mdi:shield-check-outline',
    label: t('features-support-feat-monitoring'),
  },
]
</script>
