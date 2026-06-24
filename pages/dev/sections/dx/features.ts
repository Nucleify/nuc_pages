export interface DxFeatureDefinition {
  key: string
  icon: string
  titleKey: string
  descKey: string
  file: string
  lang: string
  code: string
}

export const DX_FEATURE_DEFINITIONS: DxFeatureDefinition[] = [
  {
    key: 'hmr',
    icon: 'mdi:reload',
    titleKey: 'dev-dx-hmr-title',
    descKey: 'dev-dx-hmr-desc',
    file: 'nuxt.config.ts',
    lang: 'TypeScript',
    code: `export default defineNuxtConfig({
  devtools: { enabled: true },

  vite: {
    server: {
      hmr: { overlay: true },
      watch: { usePolling: true }
    }
  },

  modules: [
    'nuc_auth',
    'nuc_entities',
    'nuc_colors',
    'nuc_charts',
    'nuc_files'
  ]
})`,
  },
  {
    key: 'atomic',
    icon: 'mdi:file-tree',
    titleKey: 'dev-dx-atomic-title',
    descKey: 'dev-dx-atomic-desc',
    file: 'atomic/index.ts',
    lang: 'TypeScript',
    code: `// Atoms
export { AdButton }  from './atoms/Button'
export { AdInput }   from './atoms/Input'
export { AdIcon }    from './atoms/Icon'
export { AdBadge }   from './atoms/Badge'

// Molecules
export { AdSearchBar }  from './molecules/SearchBar'
export { AdFormField }  from './molecules/FormField'
export { AdDropdown }   from './molecules/Dropdown'

// Organisms
export { AdDataTable }  from './organisms/DataTable'
export { AdSidebar }    from './organisms/Sidebar'
export { AdModal }      from './organisms/Modal'

// Bosons
export { useNavbar }    from './bosons/composables'
export { apiRequest }   from './bosons/utils'`,
  },
  {
    key: 'api',
    icon: 'mdi:database',
    titleKey: 'dev-dx-api-title',
    descKey: 'dev-dx-api-desc',
    file: 'nuc_api/supabase/client.ts',
    lang: 'TypeScript',
    code: `import { getSupabaseClient } from 'nucleify'

export async function fetchLocaleDict(locale: string) {
  const { data, error } = await getSupabaseClient()
    .from('translations')
    .select('key, value')
    .eq('locale', locale)
    .order('key')

  if (error) throw error

  return Object.fromEntries(
    (data ?? []).map((row) => [row.key, row.value])
  )
}`,
  },
  {
    key: 'types',
    icon: 'mdi:shield-check',
    titleKey: 'dev-dx-types-title',
    descKey: 'dev-dx-types-desc',
    file: 'types/User.ts',
    lang: 'TypeScript',
    code: `export interface User {
  id: string
  name: string
  email: string
  role: UserRole
  theme: Theme | null
}

export type UserRole =
  | 'super_admin'
  | 'admin'
  | 'user'
  | 'demo'

export type UserResponse =
  ApiResponse<User>`,
  },
  {
    key: 'testing',
    icon: 'mdi:test-tube',
    titleKey: 'dev-dx-testing-title',
    descKey: 'dev-dx-testing-desc',
    file: 'modules/nuc_auth/vitests/login.test.ts',
    lang: 'TypeScript (Vitest)',
    code: `import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'

describe('login form', () => {
  it('submits credentials to Supabase auth', async () => {
    const wrapper = mount(LoginForm)
    await wrapper.find('[name=email]').setValue('demo@nucleify.io')
    await wrapper.find('[name=password]').setValue('secret')
    await wrapper.find('form').trigger('submit')

    expect(wrapper.emitted('success')).toBeTruthy()
  })
})`,
  },
  {
    key: 'setup',
    icon: 'mdi:rocket-launch-outline',
    titleKey: 'dev-dx-setup-title',
    descKey: 'dev-dx-setup-desc',
    file: 'terminal',
    lang: 'Bash',
    code: `$ make setup

Installing dependencies (pnpm)...
Applying Supabase migrations...
Loading module seeders...

✓ Nuxt  → pnpm nuxt  (http://localhost:3000)
✓ Next  → pnpm next  (http://localhost:3001)

Project ready! 🚀`,
  },
]
