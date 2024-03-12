// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    '@pinia/nuxt',
    'nuxt-primevue',
    '@vueuse/nuxt',
    '@nuxtjs/tailwindcss',
    "@nuxt/image"
  ],
  pinia: {
    storesDirs: ['./pages/stores/**', './store/**']
  },
  runtimeConfig: {
    baseUrl: ''
  },
  build: {
    transpile: ['vue-sonner']
  },
  ssr: false,
  primevue: {
    components: {
      prefix: 'Prime',
      // what components to exclude
      exclude: ["Editor", "Chart"]
    }
  },
})