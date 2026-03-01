<template>
  <section id="dev-modules" class="dev-modules">
    <div class="container">
      <h2 class="dev-section-heading">
        {{ $t('dev-modules-heading') }}
        <span class="highlight">{{ $t('dev-modules-highlight') }}</span>
      </h2>
      <p class="dev-section-desc">{{ $t('dev-modules-desc') }}</p>

      <div class="dev-modules-grid">
        <div
          v-for="(mod, i) in modules"
          :key="mod.name"
          class="dev-module-card"
          :style="{ animationDelay: `${i * 60}ms` }"
        >
          <div class="dev-module-card-header">
            <div class="dev-module-card-icon">
              <Icon :name="mod.icon" />
            </div>
            <span v-if="mod.version" class="dev-module-version">{{ mod.version }}</span>
          </div>
          <div class="dev-module-card-content">
            <h3>{{ mod.name }}</h3>
            <p>{{ mod.desc }}</p>
          </div>
          <div class="dev-module-card-glow" />
        </div>

        <a
          href="https://github.com/Nucleify/Nucleify/tree/prod/modules"
          target="_blank"
          rel="noopener noreferrer"
          class="dev-module-card dev-module-card--more"
        >
          <div class="dev-module-card-header">
            <div class="dev-module-card-icon">
              <Icon name="mdi:dots-horizontal" />
            </div>
          </div>
          <div class="dev-module-card-content">
            <h3>{{ $t('dev-mod-more') }}</h3>
            <p>{{ $t('dev-mod-more-desc') }}</p>
          </div>
          <div class="dev-module-card-arrow">
            <Icon name="mdi:arrow-right" />
          </div>
          <div class="dev-module-card-glow" />
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const modules = [
  {
    icon: 'mdi:account-lock',
    name: 'nuc_auth',
    desc: t('dev-mod-auth'),
    version: '0.1.5',
  },
  {
    icon: 'mdi:database-outline',
    name: 'nuc_entities',
    desc: t('dev-mod-entities'),
    version: '0.3.3',
  },
  {
    icon: 'mdi:palette-outline',
    name: 'nuc_colors',
    desc: t('dev-mod-colors'),
    version: '0.9.5',
  },
  {
    icon: 'mdi:chart-bar',
    name: 'nuc_charts',
    desc: t('dev-mod-charts'),
    version: '0.2.0',
  },
  {
    icon: 'mdi:file-upload-outline',
    name: 'nuc_files',
    desc: t('dev-mod-files'),
    version: '0.0.2',
  },
  {
    icon: 'mdi:book-open-variant',
    name: 'nuc_documentation',
    desc: t('dev-mod-docs'),
    version: '0.9.1',
  },
  {
    icon: 'mdi:view-dashboard-edit-outline',
    name: 'nuc_pagebuilder',
    desc: t('dev-mod-pagebuilder'),
    version: '0.1.0',
  },
]
</script>
