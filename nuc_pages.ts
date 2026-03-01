import type { App } from 'vue'

import {
  NucAboutUsPage,
  NucBusinessWebsitesPage,
  NucCookiesPage,
  NucCustomProjectsPage,
  NucDevPage,
  NucEcommerceStoresPage,
  NucError404Page,
  NucGDPRPage,
  NucHomePage,
  NucLandingPagesPage,
  NucOfferPage,
  NucPrivacyPolicyPage,
  NucProcessPage,
  NucServicesPage,
  NucTermsOfServicePage,
  NucThankYouPage,
  NucWebsiteRedesignPage,
} from './pages'

export function registerNucPages(app: App<Element>): void {
  app
    // Core pages
    .component('nuc-home-page', NucHomePage)
    .component('nuc-dev-page', NucDevPage)
    .component('nuc-about-us-page', NucAboutUsPage)
    .component('nuc-offer-page', NucOfferPage)
    .component('nuc-process-page', NucProcessPage)
    .component('nuc-services-page', NucServicesPage)
    .component('nuc-business-websites-page', NucBusinessWebsitesPage)
    .component('nuc-ecommerce-stores-page', NucEcommerceStoresPage)
    .component('nuc-landing-pages-page', NucLandingPagesPage)
    .component('nuc-website-redesign-page', NucWebsiteRedesignPage)
    .component('nuc-custom-projects-page', NucCustomProjectsPage)
    .component('nuc-thank-you-page', NucThankYouPage)
    // Legal pages
    .component('nuc-cookies-page', NucCookiesPage)
    .component('nuc-gdpr-page', NucGDPRPage)
    .component('nuc-privacy-policy-page', NucPrivacyPolicyPage)
    .component('nuc-terms-of-service-page', NucTermsOfServicePage)
    // Error pages
    .component('nuc-error-404-page', NucError404Page)
}
