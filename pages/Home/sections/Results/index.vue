<template>
  <section id="results">
    <div class="results-glow"></div>
    <div class="results-container container">
      <div class="results-header">
        <nuc-shiny-badge icon="mdi:gift-outline" label="WHAT YOU GET" />
        <h2 class="results-heading">
          Everything you need to
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
            <nuc-section-email-us-dialog button-class="cta-button" />
          </div>
        </div>
      </div>

      <nuc-trust-badges :items="trustItems" />
    </div>
  </section>
</template>

<script setup lang="ts">
const trustItems = [
  { icon: 'mdi:shield-check', label: 'Money-Back Guarantee' },
  { icon: 'mdi:credit-card-off-outline', label: 'No Upfront Payment' },
  { icon: 'mdi:infinity', label: 'Free Revisions' },
]

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
