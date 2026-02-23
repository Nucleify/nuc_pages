<template>
  <section id="guarantees">
    <div class="process-guarantees-container container">
      <div class="process-guarantees-header">
        <nuc-shiny-badge icon="mdi:shield-check-outline" :label="$t('process-guarantees-badge')" />
        <h2 class="process-guarantees-heading">
          {{ $t('process-guarantees-heading') }}
          <span class="highlight">{{ $t('process-guarantees-heading-highlight') }}</span>
        </h2>
        <p class="process-guarantees-description">
          {{ $t('process-guarantees-description') }}
        </p>
      </div>

      <div class="process-guarantees-grid">
        <div
          v-for="(item, index) in guarantees"
          :key="item.title"
          class="process-guarantee-card"
        >
          <div class="process-guarantee-card-accent" />
          <div class="process-guarantee-card-num">{{ String(index + 1).padStart(2, '0') }}</div>

          <div class="process-guarantee-card-head">
            <div class="process-guarantee-card-icon">
              <Icon :name="item.icon" />
            </div>
            <h3>{{ item.title }}</h3>
          </div>

          <p>{{ item.desc }}</p>

          <div class="process-guarantee-card-check">
            <Icon name="mdi:check-bold" />
            <span>{{ item.tag }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const guarantees = [
  {
    icon: 'mdi:cash-refund',
    title: t('process-guarantee-moneyback-title'),
    desc: t('process-guarantee-moneyback-desc'),
    tag: t('process-guarantee-moneyback-tag'),
  },
  {
    icon: 'mdi:currency-usd-off',
    title: t('process-guarantee-transparent-title'),
    desc: t('process-guarantee-transparent-desc'),
    tag: t('process-guarantee-transparent-tag'),
  },
  {
    icon: 'mdi:refresh',
    title: t('process-guarantee-revisions-title'),
    desc: t('process-guarantee-revisions-desc'),
    tag: t('process-guarantee-revisions-tag'),
  },
  {
    icon: 'mdi:key-outline',
    title: t('process-guarantee-ownership-title'),
    desc: t('process-guarantee-ownership-desc'),
    tag: t('process-guarantee-ownership-tag'),
  },
]
</script>
