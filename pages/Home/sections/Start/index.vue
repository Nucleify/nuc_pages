<template>
  <section id="start">
    <nuc-grid-background />
    <div class="container start-container">
      <div class="start-left">
        <span class="start-badge">{{ $t('home-badge') }}</span>
        
        <h1 class="start-heading">
          {{ $t('home-header') }}
        </h1>
        
        <p class="start-description">
          {{ $t('home-description') }}
        </p>

        <div class="start-features">
          <div class="feature-item">
            <div class="feature-icon">
              <Icon name="mdi:currency-usd" />
            </div>
            <div class="feature-content">
              <span>{{ $t('home-feature-save-title') }}</span>
              <p>{{ $t('home-feature-save-desc') }}</p>
            </div>
          </div>
          
          <div class="feature-item">
            <div class="feature-icon">
              <Icon name="mdi:lightning-bolt" />
            </div>
            <div class="feature-content">
              <span>{{ $t('home-feature-fast-title') }}</span>
              <p>{{ $t('home-feature-fast-desc') }}</p>
            </div>
          </div>

          <div class="feature-item">
            <div class="feature-icon">
              <Icon name="mdi:shield-check" />
            </div>
            <div class="feature-content">
              <span>{{ $t('home-feature-secure-title') }}</span>
              <p>{{ $t('home-feature-secure-desc') }}</p>
            </div>
          </div>
        </div>

        <p class="start-note">
          {{ $t('home-note') }}
        </p>

        <div class="start-social-proof">
          <Icon name="mdi:rocket-launch-outline" />
          <span>{{ $t('home-social-proof') }}</span>
        </div>
      </div>

      <div class="start-right">
        <nuc-section-email-us />
      </div>
    </div>
  </section>
</template>
