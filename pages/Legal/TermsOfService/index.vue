<template>
  <div class="legal-container">
    <div class="legal-content container">
      <div class="legal-header">
        <Icon name="mdi:file-document-outline" class="legal-header-icon" />
        <h1 class="legal-title">{{ $t('legal-terms-title') }}</h1>
        <p class="legal-updated">{{ $t('legal-last-updated') }}: 27.02.2026</p>
      </div>

      <div class="legal-sections">
        <section class="legal-section">
          <h2>{{ $t('legal-terms-intro-title') }}</h2>
          <p>{{ $t('legal-terms-intro-text') }}</p>
        </section>

        <section class="legal-section">
          <h2>{{ $t('legal-terms-services-title') }}</h2>
          <p>{{ $t('legal-terms-services-text') }}</p>
        </section>

        <section class="legal-section">
          <h2>{{ $t('legal-terms-accounts-title') }}</h2>
          <p>{{ $t('legal-terms-accounts-text') }}</p>
        </section>

        <section class="legal-section">
          <h2>{{ $t('legal-terms-ip-title') }}</h2>
          <p>{{ $t('legal-terms-ip-text') }}</p>
        </section>

        <section class="legal-section">
          <h2>{{ $t('legal-terms-liability-title') }}</h2>
          <p>{{ $t('legal-terms-liability-text') }}</p>
        </section>

        <section class="legal-section">
          <h2>{{ $t('legal-terms-termination-title') }}</h2>
          <p>{{ $t('legal-terms-termination-text') }}</p>
        </section>

        <section class="legal-section">
          <h2>{{ $t('legal-terms-changes-title') }}</h2>
          <p>{{ $t('legal-terms-changes-text') }}</p>
        </section>

        <section class="legal-section">
          <h2>{{ $t('legal-terms-contact-title') }}</h2>
          <p>{{ $t('legal-terms-contact-text') }}</p>
        </section>
      </div>
    </div>
  </div>
</template>
