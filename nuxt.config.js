import fr from "vuetify/es5/locale/fr"
import { config } from "./config/aife.config"

export default {
  components: true,
  head: {
    titleTemplate: "%s - aife Twitch",
    htmlAttrs: {
      lang: "fr-FR",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "aife, le site cool",
      },
      {
        hid: "twitter:site",
        property: "description",
        content: "@aifedesglitch",
      },
      {
        hid: "twitter:creator",
        property: "twitter:creator",
        content: "@aifedesglitch",
      },
      {
        hid: "twitter:card",
        property: "twitter:card",
        content: "summary",
      },
      {
        name: "keywords",
        content: "vidéos, glitch, français, zelda, speedrun, nintendo",
      },

      {
        hid: "og:site_name",
        property: "og:site_name",
        content: "aife",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#333" },
  sitemap: {
    hostname: config.baseUrl,
    gzip: true,
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["~/plugins/seo.js", "~/plugins/filters.js"],
  /*
   ** Nuxt.js modules
   */
  modules: [
    "@nuxtjs/sitemap",
    "@nuxt/content",
    [
      "nuxt-i18n",
      {
        locales: ["fr"],
        defaultLocale: "fr",
        vueI18n: {
          fallbackLocale: "fr",
          messages: {
            fr: {
              // greeting: "Hello world!"
            },
          },
        },
      },
    ],
  ],
  /*
   ** Build configuration
   */
  build: {
    extractCSS: true,
    optimization: {
      splitChunks: {
        cacheGroups: {
          styles: {
            name: "styles",
            test: /\.(css|vue)$/,
            chunks: "all",
            enforce: true,
          },
        },
      },
    },
  },
  /*
   ** You can extend webpack config here
   */
  extend(config, ctx) {
    // Exécuter ESLint lors de la sauvegarde
    if (ctx.isDev && ctx.isClient) {
      config.module.rules.push({
        enforce: "pre",
        test: /\.(js|vue)$/,
        loader: "eslint-loader",
        exclude: /(node_modules)/,
      })
      config.module.rules.push({
        test: /\.svg$/,
        loader: "vue-svg-loader",
      })
    }
  },
  buildModules: ["@nuxtjs/vuetify", "@nuxtjs/svg"],
  vuetify: {
    lang: {
      locales: { fr },
      current: "fr",
    },
    /* module options */
  },
}
