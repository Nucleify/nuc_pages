<template>
  <section id="dev-dx" class="dev-dx">
    <div class="dev-dx-bg">
      <div class="dev-dx-orb dev-dx-orb-1" />
      <div class="dev-dx-orb dev-dx-orb-2" />
    </div>

    <div class="container">
      <div class="dev-dx-layout">
        <div class="dev-dx-nav">
          <button
            v-for="(item, i) in dxFeatures"
            :key="item.key"
            class="dev-dx-nav-item"
            :class="{ 'dev-dx-nav-item-active': activeIndex === i }"
            @click="activeIndex = i"
          >
            <div class="dev-dx-nav-icon">
              <Icon :name="item.icon" />
            </div>
            <div class="dev-dx-nav-text">
              <h3>{{ item.title }}</h3>
              <p>{{ item.desc }}</p>
            </div>
            <div class="dev-dx-nav-arrow">
              <Icon name="mdi:chevron-right" />
            </div>
          </button>
        </div>

        <div class="dev-dx-preview">
          <div class="dev-dx-preview-window">
            <div class="dev-dx-preview-bar">
              <span /><span /><span />
              <div class="dev-dx-preview-tab">
                {{ dxFeatures[activeIndex].file }}
              </div>
            </div>
            <div class="dev-dx-preview-body">
              <transition name="dev-dx-fade" mode="out-in">
                <div :key="activeIndex" class="dev-dx-code-wrap">
                  <div class="dev-dx-line-numbers">
                    <span v-for="n in lineCount" :key="n">{{ n }}</span>
                  </div>
                  <pre><code>{{ dxFeatures[activeIndex].code }}</code></pre>
                </div>
              </transition>
            </div>
            <div class="dev-dx-preview-status">
              <span>{{ dxFeatures[activeIndex].lang }}</span>
              <span>UTF-8</span>
              <span>Ln {{ lineCount }}, Col 1</span>
            </div>
          </div>
          <div class="dev-dx-preview-glow" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const activeIndex = ref(0)
const lineCount = computed(
  () => dxFeatures[activeIndex.value].code.split('\n').length
)

const dxFeatures = [
  {
    key: 'hmr',
    icon: 'mdi:reload',
    title: t('dev-dx-hmr-title'),
    desc: t('dev-dx-hmr-desc'),
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
    title: t('dev-dx-atomic-title'),
    desc: t('dev-dx-atomic-desc'),
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
    icon: 'mdi:code-json',
    title: t('dev-dx-api-title'),
    desc: t('dev-dx-api-desc'),
    file: 'api/UserResource.php',
    lang: 'PHP',
    code: `class UserResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id'    => $this->id,
            'name'  => $this->name,
            'email' => $this->email,
            'role'  => $this->role,
            'theme' => new ThemeResource(
                $this->whenLoaded('colors')
            ),
        ];
    }
}`,
  },
  {
    key: 'types',
    icon: 'mdi:shield-check',
    title: t('dev-dx-types-title'),
    desc: t('dev-dx-types-desc'),
    file: 'types/User.ts',
    lang: 'TypeScript',
    code: `export interface User {
  id: number
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
    title: t('dev-dx-testing-title'),
    desc: t('dev-dx-testing-desc'),
    file: 'tests/UserTest.php',
    lang: 'PHP (Pest)',
    code: `it('creates a user with valid data', function () {
    $response = $this
        ->actingAs(admin())
        ->postJson('/api/users', [
            'name'  => 'Jane Doe',
            'email' => 'jane@nucleify.io',
            'role'  => 'user',
        ]);

    $response
        ->assertCreated()
        ->assertJsonPath('data.name', 'Jane Doe');

    expect(User::count())->toBe(2);
});`,
  },
  {
    key: 'docker',
    icon: 'mdi:docker',
    title: t('dev-dx-docker-title'),
    desc: t('dev-dx-docker-desc'),
    file: 'terminal',
    lang: 'Bash',
    code: `$ make

Creating project structure...
Copying environment files...
Installing PHP dependencies...
Installing Node dependencies...
Building Docker image...

 ✓ nginx      running  → :80
 ✓ app        running  → :8000
 ✓ node       running  → :3000
 ✓ mysql      running  → :3306
 ✓ redis      running  → :6379
 ✓ mailpit    running  → :8025

Running migrations...
Seeding database...

Project ready!
🚀 http://localhost:3000`,
  },
]
</script>
