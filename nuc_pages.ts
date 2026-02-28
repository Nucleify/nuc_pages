import type { App } from 'vue'

import {
  NucAboutUsPage,
  NucCookiesPage,
  NucError404Page,
  NucGDPRPage,
  NucHomePage,
  NucOfferPage,
  NucPrivacyPolicyPage,
  NucProcessPage,
  NucTermsOfServicePage,
  NucThankYouPage,
} from './pages'

export function registerNucPages(app: App<Element>): void {
  app
    // Core pages
    .component('nuc-home-page', NucHomePage)
    .component('nuc-about-us-page', NucAboutUsPage)
    .component('nuc-offer-page', NucOfferPage)
    .component('nuc-process-page', NucProcessPage)
    .component('nuc-thank-you-page', NucThankYouPage)
    // Legal pages
    .component('nuc-cookies-page', NucCookiesPage)
    .component('nuc-gdpr-page', NucGDPRPage)
    .component('nuc-privacy-policy-page', NucPrivacyPolicyPage)
    .component('nuc-terms-of-service-page', NucTermsOfServicePage)
    // Error pages
    .component('nuc-error-404-page', NucError404Page)
}
