import type { App } from 'vue'

import NucHomePage from './pages/home/index.vue'

export function registerNucPages(app: App): void {
  app.component('nuc-home-page', NucHomePage)
}
