<template>
  <section id="dev-dx" class="dev-dx">
    <div class="dev-dx-bg">
      <div class="dev-dx-orb dev-dx-orb-1" />
      <div class="dev-dx-orb dev-dx-orb-2" />
    </div>

    <div class="container">
      <div class="dev-dx-layout">
        <div class="dev-dx-nav">
          <button
            v-for="(item, i) in dxFeatures"
            :key="item.key"
            class="dev-dx-nav-item"
            :class="{ 'dev-dx-nav-item-active': activeIndex === i }"
            @click="activeIndex = i"
          >
            <div class="dev-dx-nav-icon"><Icon :name="item.icon" /></div>
            <div class="dev-dx-nav-text">
              <h3>{{ item.title }}</h3>
              <p>{{ item.desc }}</p>
            </div>
            <div class="dev-dx-nav-arrow">
              <Icon name="mdi:chevron-right" />
            </div>
          </button>
        </div>

        <div class="dev-dx-preview">
          <div class="dev-dx-preview-window">
            <div class="dev-dx-preview-bar">
              <span /><span /><span />
              <div class="dev-dx-preview-tab">
                {{ dxFeatures[activeIndex].file }}
              </div>
            </div>
            <div class="dev-dx-preview-body">
              <transition name="dev-dx-fade" mode="out-in">
                <div :key="activeIndex" class="dev-dx-code-wrap">
                  <div class="dev-dx-line-numbers">
                    <span v-for="n in lineCount" :key="n">{{ n }}</span>
                  </div>
                  <pre><code>{{ dxFeatures[activeIndex].code }}</code></pre>
                </div>
              </transition>
            </div>
            <div class="dev-dx-preview-status">
              <span>{{ dxFeatures[activeIndex].lang }}</span>
              <span>UTF-8</span>
              <span>Ln {{ lineCount }}, Col 1</span>
            </div>
          </div>
          <div class="dev-dx-preview-glow" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'

import { DX_FEATURE_DEFINITIONS } from 'nucleify'

const { t } = useI18n()
const activeIndex = ref(0)

const dxFeatures = computed(() =>
  DX_FEATURE_DEFINITIONS.map((item) => ({
    ...item,
    title: t(item.titleKey),
    desc: t(item.descKey),
  }))
)

const lineCount = computed(
  () => dxFeatures.value[activeIndex.value].code.split('\n').length
)
</script>

<style lang="scss">
@import 'index';
</style>
