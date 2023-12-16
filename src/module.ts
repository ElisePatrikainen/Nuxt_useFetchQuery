import { defineNuxtModule, addImports, createResolver } from '@nuxt/kit'

// Module options TypeScript interface definition
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'my-module',
    configKey: 'myModule'
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  setup(options, nuxt) {
    const resolver = createResolver(import.meta.url)

    addImports({
      name: 'useFetchQuery', // name of the composable to be used
      as: 'useFetchQuery', 
      from: resolver.resolve('runtime/composables/useFetchQuery') // path of composable 
    })
  }
})
