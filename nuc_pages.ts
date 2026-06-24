import { type App, type Component, defineAsyncComponent } from 'vue'

const pageLoaders: Record<string, () => Promise<{ default: Component }>> = {
  'nuc-home-page': () => import('./pages/home/index.vue'),
  'nuc-dev-page': () => import('./pages/dev/index.vue'),
  'nuc-about-us-page': () => import('./pages/company/about-us/index.vue'),
  'nuc-offer-page': () => import('./pages/offer/index.vue'),
  'nuc-process-page': () => import('./pages/company/process/index.vue'),
  'nuc-services-page': () => import('./pages/services/index.vue'),
  'nuc-business-websites-page': () =>
    import('./pages/services/business-websites/index.vue'),
  'nuc-ecommerce-stores-page': () =>
    import('./pages/services/ecommerce-stores/index.vue'),
  'nuc-landing-pages-page': () =>
    import('./pages/services/landing-pages/index.vue'),
  'nuc-website-redesign-page': () =>
    import('./pages/services/website-redesign/index.vue'),
  'nuc-custom-projects-page': () =>
    import('./pages/services/custom-projects/index.vue'),
  'nuc-thank-you-page': () => import('./pages/thank-you/index.vue'),
  'nuc-cookies-page': () => import('./pages/legal/cookies/index.vue'),
  'nuc-gdpr-page': () => import('./pages/legal/gdpr/index.vue'),
  'nuc-privacy-policy-page': () =>
    import('./pages/legal/privacy-policy/index.vue'),
  'nuc-terms-of-service-page': () =>
    import('./pages/legal/terms-of-service/index.vue'),
  'nuc-error-404-page': () => import('./pages/errors/404/index.vue'),
}

export function registerNucPages(app: App<Element>): void {
  for (const [name, loader] of Object.entries(pageLoaders)) {
    app.component(name, defineAsyncComponent(loader))
  }
}
