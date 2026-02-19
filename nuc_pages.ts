import type { App } from 'vue'

import {
  NucError404Page,
  NucHomePage,
  NucOfferPage,
  NucThankYouPage,
} from './pages'

export function registerNucPages(app: App<Element>): void {
  app
    .component('nuc-error-404-page', NucError404Page)
    .component('nuc-home-page', NucHomePage)
    .component('nuc-offer-page', NucOfferPage)
    .component('nuc-thank-you-page', NucThankYouPage)
}
