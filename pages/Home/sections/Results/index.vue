<template>
  <section id="results">
    <div class="results-glow"></div>
    <div class="results-container container">
      <div class="results-header">
        <span class="results-badge">
          <Icon name="mdi:gift-outline" />
          <span>WHAT YOU GET</span>
        </span>
        <h2 class="results-heading">
          Everything you need to<br>
          <span class="highlight">launch and grow online.</span>
        </h2>
        <p class="results-description">
          No hidden fees. No complicated contracts. Just a website that works for your business.
        </p>
      </div>

      <div class="stats-grid">
        <div v-for="item in benefits" :key="item.title" class="stat-item">
          <div class="stat-icon-wrapper">
            <Icon :name="item.icon" class="stat-icon" />
          </div>
          <div class="stat-content">
            <span class="stat-value">{{ item.title }}</span>
            <span class="stat-label">{{ item.desc }}</span>
          </div>
        </div>
      </div>

      <div class="cta-section">
        <div class="cta-card">
          <nuc-animation-hexagons style="opacity: 0.4" />
          <div class="cta-inner">
            <div class="cta-left">
              <div class="cta-icon-wrapper">
                <Icon name="mdi:rocket-launch" class="cta-icon" />
              </div>
              <div class="cta-text">
                <h3>Ready to get started?</h3>
                <p>Free consultation, no strings attached. Let's talk about your project.</p>
              </div>
            </div>
            <ad-button
              label="GET FREE QUOTE →"
              class="cta-button"
              @click="showDialog = true"
            />
          </div>
        </div>
      </div>

      <Dialog
        v-model:visible="showDialog"
        :modal="true"
        :dismissable-mask="true"
        :draggable="false"
        :show-header="false"
      >
        <nuc-section-email-us @success="showDialog = false" />
      </Dialog>
      
      <div class="trust-section">
        <div class="trust-badges">
          <div class="trust-item">
            <div class="trust-icon-wrapper">
              <Icon name="mdi:shield-check" />
            </div>
            <div class="trust-content">
              <span class="trust-title">Money-Back Guarantee</span>
              <span class="trust-desc">Not happy? Full refund, no questions</span>
            </div>
          </div>
          <div class="trust-item">
            <div class="trust-icon-wrapper">
              <Icon name="mdi:credit-card-off-outline" />
            </div>
            <div class="trust-content">
              <span class="trust-title">No Upfront Payment</span>
              <span class="trust-desc">Pay only when you're satisfied</span>
            </div>
          </div>
          <div class="trust-item">
            <div class="trust-icon-wrapper">
              <Icon name="mdi:infinity" />
            </div>
            <div class="trust-content">
              <span class="trust-title">Free Revisions</span>
              <span class="trust-desc">Until it's exactly what you want</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const showDialog = ref(false)

interface Benefit {
  title: string
  desc: string
  icon: string
}

const benefits: Benefit[] = [
  {
    title: 'Stand Out',
    desc: 'Look professional, build trust instantly',
    icon: 'mdi:trophy-outline',
  },
  {
    title: 'Reach Everyone',
    desc: 'Customers find you on any device',
    icon: 'mdi:account-group-outline',
  },
  {
    title: 'Win Trust',
    desc: 'Secure site that loads in a blink',
    icon: 'mdi:shield-check-outline',
  },
  {
    title: 'Stay in Control',
    desc: 'Update your site anytime, by yourself',
    icon: 'mdi:cursor-default-click-outline',
  },
]
</script>
