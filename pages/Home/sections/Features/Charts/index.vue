<template>
  <section id="charts">
    <div class="home-charts-container container">
      <div class="charts-left">
        <span class="charts-badge">DATA VISUALIZATION</span>
        <h2 class="charts-heading">
          Track your business with 
          <span class="highlight">interactive charts</span>
        </h2>
        <p class="charts-description">
          Built-in analytics dashboard with bar, line, pie charts and more. 
          See what's working and make data-driven decisions.
        </p>
        
        <div class="charts-features">
          <div class="feature">
            <Icon name="mdi:chart-bar" />
            <span>Multiple chart types</span>
          </div>
          <div class="feature">
            <Icon name="mdi:refresh" />
            <span>Real-time updates</span>
          </div>
          <div class="feature">
            <Icon name="mdi:download" />
            <span>Export to PDF/Excel</span>
          </div>
        </div>
      </div>
      
      <ad-card class="nuc-card-base home-chart-card">
        <template #content>
          <nuc-animation-hexagons style="opacity: 0.3" />
          <nuc-entity-chart
            chart-method-type="annual"
            type="bar"
            class="home-vertical-chart"
            :direction="isMobile() ? 'horizontal' : 'vertical'"
            :example="true"
          />
          <nuc-entity-chart
            chart-method-type="count"
            type="pie"
            class="home-pie-chart"
            :example="true"
          />
        </template>
      </ad-card>
    </div>
  </section>
</template>
