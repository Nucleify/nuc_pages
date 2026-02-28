<template>
  <div class="legal-container">
    <div class="legal-content container">
      <div class="legal-header">
        <Icon name="mdi:cookie" class="legal-header-icon" />
        <h1 class="legal-title">{{ $t('legal-cookies-title') }}</h1>
        <p class="legal-updated">{{ $t('legal-last-updated') }}: 27.02.2026</p>
      </div>

      <div class="legal-sections">
        <section class="legal-section">
          <h2>{{ $t('legal-cookies-what-title') }}</h2>
          <p>{{ $t('legal-cookies-what-text') }}</p>
        </section>

        <section class="legal-section">
          <h2>{{ $t('legal-cookies-types-title') }}</h2>
          <p>{{ $t('legal-cookies-types-text') }}</p>
          <ul class="legal-list">
            <li><strong>{{ $t('legal-cookies-essential-label') }}</strong> — {{ $t('legal-cookies-essential-text') }}</li>
            <li><strong>{{ $t('legal-cookies-analytics-label') }}</strong> — {{ $t('legal-cookies-analytics-text') }}</li>
            <li><strong>{{ $t('legal-cookies-functional-label') }}</strong> — {{ $t('legal-cookies-functional-text') }}</li>
          </ul>
        </section>

        <section class="legal-section">
          <h2>{{ $t('legal-cookies-manage-title') }}</h2>
          <p>{{ $t('legal-cookies-manage-text') }}</p>
        </section>

        <section class="legal-section">
          <h2>{{ $t('legal-cookies-third-party-title') }}</h2>
          <p>{{ $t('legal-cookies-third-party-text') }}</p>
        </section>

        <section class="legal-section">
          <h2>{{ $t('legal-cookies-contact-title') }}</h2>
          <p>{{ $t('legal-cookies-contact-text') }}</p>
        </section>
      </div>
    </div>
  </div>
</template>
