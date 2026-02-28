<template>
  <div class="legal-container">
    <div class="legal-content container">
      <div class="legal-header">
        <Icon name="mdi:scale-balance" class="legal-header-icon" />
        <h1 class="legal-title">{{ $t('legal-gdpr-title') }}</h1>
        <p class="legal-updated">{{ $t('legal-last-updated') }}: 27.02.2026</p>
      </div>

      <div class="legal-sections">
        <section class="legal-section">
          <h2>{{ $t('legal-gdpr-intro-title') }}</h2>
          <p>{{ $t('legal-gdpr-intro-text') }}</p>
        </section>

        <section class="legal-section">
          <h2>{{ $t('legal-gdpr-controller-title') }}</h2>
          <p>{{ $t('legal-gdpr-controller-text') }}</p>
        </section>

        <section class="legal-section">
          <h2>{{ $t('legal-gdpr-legal-basis-title') }}</h2>
          <p>{{ $t('legal-gdpr-legal-basis-text') }}</p>
          <ul class="legal-list">
            <li>{{ $t('legal-gdpr-basis-consent') }}</li>
            <li>{{ $t('legal-gdpr-basis-contract') }}</li>
            <li>{{ $t('legal-gdpr-basis-legal') }}</li>
            <li>{{ $t('legal-gdpr-basis-interest') }}</li>
          </ul>
        </section>

        <section class="legal-section">
          <h2>{{ $t('legal-gdpr-rights-title') }}</h2>
          <p>{{ $t('legal-gdpr-rights-text') }}</p>
          <ul class="legal-list">
            <li>{{ $t('legal-gdpr-right-access') }}</li>
            <li>{{ $t('legal-gdpr-right-rectification') }}</li>
            <li>{{ $t('legal-gdpr-right-erasure') }}</li>
            <li>{{ $t('legal-gdpr-right-restrict') }}</li>
            <li>{{ $t('legal-gdpr-right-portability') }}</li>
            <li>{{ $t('legal-gdpr-right-object') }}</li>
          </ul>
        </section>

        <section class="legal-section">
          <h2>{{ $t('legal-gdpr-retention-title') }}</h2>
          <p>{{ $t('legal-gdpr-retention-text') }}</p>
        </section>

        <section class="legal-section">
          <h2>{{ $t('legal-gdpr-transfers-title') }}</h2>
          <p>{{ $t('legal-gdpr-transfers-text') }}</p>
        </section>

        <section class="legal-section">
          <h2>{{ $t('legal-gdpr-dpo-title') }}</h2>
          <p>{{ $t('legal-gdpr-dpo-text') }}</p>
        </section>
      </div>
    </div>
  </div>
</template>
