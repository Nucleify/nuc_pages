<template>
  <section id="performance">
    <div class="performance-container container">
      <div class="performance-visual">
        <ad-card class="nuc-card-base performance-card">
          <template #content>
            <nuc-animation-hexagons style="opacity: 0.3" />
            <div class="speedometers-grid">
              <div 
                v-for="metric in metrics" 
                :key="metric.id" 
                class="speedometer-item"
              >
                <div class="mini-speedometer">
                  <svg viewBox="0 0 100 60" class="speedometer-svg">
                    <!-- Background arc - green with opacity -->
                    <path
                      d="M 10 55 A 40 40 0 0 1 90 55"
                      fill="none"
                      stroke="#0d4723"
                      stroke-width="8"
                      stroke-linecap="round"
                    />
                    <!-- Progress arc - green with lower opacity -->
                    <path
                      d="M 10 55 A 40 40 0 0 1 90 55"
                      fill="none"
                      stroke="#10b981"
                      stroke-width="4"
                      stroke-linecap="round"
                      :stroke-dasharray="125.6"
                      :stroke-dashoffset="125.6 * (1 - metric.score / 100)"
                    />
                  </svg>
                  <span class="speedometer-value" :style="{ color: getScoreColor(metric.score) }">
                    {{ metric.score }}
                  </span>
                </div>
                <span class="speedometer-label">{{ metric.label }}</span>
              </div>
            </div>
          </template>
        </ad-card>
      </div>

      <div class="performance-info">
        <span class="performance-badge">BLAZING FAST</span>
        <h2 class="performance-heading">
          Your website loads in 
          <span class="highlight">under 1 second</span>
        </h2>
        <p class="performance-description">
          Optimized for speed from the ground up. Faster sites rank higher on Google 
          and keep visitors engaged. Every millisecond counts.
        </p>
        
        <div class="performance-features">
          <div class="feature">
            <Icon name="mdi:server-network" />
            <span>Global CDN</span>
          </div>
          <div class="feature">
            <Icon name="mdi:cached" />
            <span>Smart caching</span>
          </div>
          <div class="feature">
            <Icon name="mdi:cellphone-check" />
            <span>Mobile optimized</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Metric {
  id: string
  label: string
  score: number
}

const metrics: Metric[] = [
  { id: 'performance', label: 'Performance', score: 97 },
  { id: 'accessibility', label: 'Accessibility', score: 100 },
  { id: 'best-practices', label: 'Best Practices', score: 100 },
  { id: 'seo', label: 'SEO', score: 100 },
]

function getScoreColor(score: number): string {
  if (score >= 90) return '#10b981'
  if (score >= 50) return '#eab308'
  return '#ef4444'
}
</script>
