<template>
  <section id="dev-stack" class="dev-stack">
    <div class="container">
      <h2 class="dev-section-heading">
        {{ $t('dev-stack-heading') }}
        <span class="highlight">{{ $t('dev-stack-highlight') }}</span>
      </h2>

      <div class="dev-stack-grid">
        <div v-for="category in stackCategories" :key="category.title" class="dev-stack-category">
          <h3>{{ category.title }}</h3>
          <div class="dev-stack-items">
            <div
              v-for="(tech, i) in category.items"
              :key="tech.name"
              class="dev-stack-item"
              :style="{ animationDelay: `${i * 80}ms` }"
            >
              <div class="dev-stack-item-icon">
                <Icon :name="tech.icon" />
              </div>
              <div class="dev-stack-item-info">
                <span>{{ tech.name }}</span>
                <small>{{ tech.desc }}</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const stackCategories = [
  {
    title: t('dev-stack-frontend'),
    items: [
      { icon: 'mdi:nuxt', name: 'Nuxt 3', desc: t('dev-stack-nuxt') },
      { icon: 'mdi:vuejs', name: 'Vue 3', desc: t('dev-stack-vue') },
      {
        icon: 'mdi:language-typescript',
        name: 'TypeScript',
        desc: t('dev-stack-ts'),
      },
      { icon: 'mdi:sass', name: 'SCSS Modules', desc: t('dev-stack-scss') },
    ],
  },
  {
    title: t('dev-stack-backend'),
    items: [
      { icon: 'mdi:laravel', name: 'Laravel 12', desc: t('dev-stack-laravel') },
      { icon: 'mdi:language-php', name: 'PHP 8.4', desc: t('dev-stack-php') },
      { icon: 'mdi:database', name: 'MySQL', desc: t('dev-stack-mysql') },
      { icon: 'mdi:api', name: 'REST API', desc: t('dev-stack-api') },
    ],
  },
  {
    title: t('dev-stack-tooling'),
    items: [
      { icon: 'mdi:docker', name: 'Docker', desc: t('dev-stack-docker') },
      { icon: 'mdi:github', name: 'GitHub CI/CD', desc: t('dev-stack-ci') },
      {
        icon: 'mdi:test-tube',
        name: 'Pest + Vitest',
        desc: t('dev-stack-tests'),
      },
      {
        icon: 'mdi:format-paint',
        name: 'Biome + Stylelint',
        desc: t('dev-stack-lint'),
      },
    ],
  },
]
</script>
