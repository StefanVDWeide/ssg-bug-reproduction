// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    '@nuxtjs/i18n',
  ],
  i18n: {
    defaultLocale: 'nl',
    locales: [
      {
          code: 'en',
          iso: 'en-US',
      },
      {
          code: 'nl',
          iso: 'nl-NL',
      }
  ],
},
})
