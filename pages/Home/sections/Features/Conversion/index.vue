<template>
  <section id="conversion">
    <div class="conversion-container container">
      <div class="conversion-info">
        <span class="conversion-badge">CONVERSION OPTIMIZED</span>
        <h2 class="conversion-heading">
          Turn visitors into 
          <span class="highlight">paying customers</span>
        </h2>
        <p class="conversion-description">
          Strategic design that guides users to take action. Every element is crafted 
          to maximize engagement and drive conversions.
        </p>
        
        <div class="conversion-features">
          <div class="feature">
            <Icon name="mdi:cursor-default-click-outline" />
            <span>Click-optimized CTAs</span>
          </div>
          <div class="feature">
            <Icon name="mdi:target" />
            <span>Strategic placement</span>
          </div>
          <div class="feature">
            <Icon name="mdi:chart-line" />
            <span>Proven layouts</span>
          </div>
        </div>
      </div>

      <div class="conversion-visual">
        <ad-card class="nuc-card-base conversion-card">
          <template #content>
            <nuc-animation-hexagons style="opacity: 0.3" />
            <div class="conversion-preview">
              <div class="preview-metrics">
                <div class="metric-item">
                  <div class="metric-icon">
                    <Icon name="mdi:cursor-default-click" />
                  </div>
                  <div class="metric-info">
                    <span class="metric-value">+47%</span>
                    <span class="metric-label">Click rate</span>
                  </div>
                </div>
                <div class="metric-item">
                  <div class="metric-icon">
                    <Icon name="mdi:account-plus" />
                  </div>
                  <div class="metric-info">
                    <span class="metric-value">+89%</span>
                    <span class="metric-label">Leads</span>
                  </div>
                </div>
                <div class="metric-item highlight-metric">
                  <div class="metric-icon">
                    <Icon name="mdi:cash-multiple" />
                  </div>
                  <div class="metric-info">
                    <span class="metric-value">+62%</span>
                    <span class="metric-label">Revenue</span>
                  </div>
                </div>
              </div>
              
              <div class="preview-cta-demo">
                <div class="cta-example">
                  <span class="cta-label">Before</span>
                  <div class="cta-button old">Learn More</div>
                </div>
                <div class="cta-arrow">
                  <Icon name="mdi:arrow-right" />
                </div>
                <div class="cta-example">
                  <span class="cta-label">After</span>
                  <div class="cta-button new">
                    <Icon name="mdi:rocket-launch" />
                    Start Free Trial
                  </div>
                </div>
              </div>
            </div>
          </template>
        </ad-card>
      </div>
    </div>
  </section>
</template>

