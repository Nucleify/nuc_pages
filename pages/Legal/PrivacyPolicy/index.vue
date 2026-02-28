<template>
  <div class="legal-container">
    <div class="legal-content container">
      <div class="legal-header">
        <Icon name="mdi:shield-lock" class="legal-header-icon" />
        <h1 class="legal-title">{{ $t('legal-privacy-title') }}</h1>
        <p class="legal-updated">{{ $t('legal-last-updated') }}: 27.02.2026</p>
      </div>

      <div class="legal-sections">
        <section class="legal-section">
          <h2>{{ $t('legal-privacy-intro-title') }}</h2>
          <p>{{ $t('legal-privacy-intro-text') }}</p>
        </section>

        <section class="legal-section">
          <h2>{{ $t('legal-privacy-data-collection-title') }}</h2>
          <p>{{ $t('legal-privacy-data-collection-text') }}</p>
          <ul class="legal-list">
            <li>{{ $t('legal-privacy-data-name') }}</li>
            <li>{{ $t('legal-privacy-data-email') }}</li>
            <li>{{ $t('legal-privacy-data-usage') }}</li>
            <li>{{ $t('legal-privacy-data-cookies') }}</li>
          </ul>
        </section>

        <section class="legal-section">
          <h2>{{ $t('legal-privacy-usage-title') }}</h2>
          <p>{{ $t('legal-privacy-usage-text') }}</p>
        </section>

        <section class="legal-section">
          <h2>{{ $t('legal-privacy-sharing-title') }}</h2>
          <p>{{ $t('legal-privacy-sharing-text') }}</p>
        </section>

        <section class="legal-section">
          <h2>{{ $t('legal-privacy-security-title') }}</h2>
          <p>{{ $t('legal-privacy-security-text') }}</p>
        </section>

        <section class="legal-section">
          <h2>{{ $t('legal-privacy-rights-title') }}</h2>
          <p>{{ $t('legal-privacy-rights-text') }}</p>
        </section>

        <section class="legal-section">
          <h2>{{ $t('legal-privacy-contact-title') }}</h2>
          <p>{{ $t('legal-privacy-contact-text') }}</p>
        </section>
      </div>
    </div>
  </div>
</template>
