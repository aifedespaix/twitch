import fr from "vuetify/es5/locale/fr";
import { config } from "./absolute.config";

export default {
  mode: "spa",
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: "%s - aife Twitch",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "twitter:site",
        property: "description",
        content: "@aifedesglitch"
      },
      {
        hid: "twitter:creator",
        property: "twitter:creator",
        content: "@aifedesglitch"
      },
      {
        hid: "twitter:card",
        property: "twitter:card",
        content: "summary"
      },
      {
        hid: "og:site_name",
        property: "og:site_name",
        content: "aife twitch"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  sitemap: {
    hostname: config.baseUrl,
    gzip: true
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["~/plugins/seo.js"],
  /*
   ** Nuxt.js modules
   */
  modules: [
    "@nuxtjs/sitemap",
    "@nuxt/content",
    "@nuxtjs/pwa",
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
            }
          }
        }
      }
    ]
  ],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  buildModules: ["@nuxtjs/vuetify"],
  vuetify: {
    lang: {
      locales: { fr },
      current: "fr"
    },
    theme: {
      options: {
        themeCache: {
          get: key => localStorage.getItem(key),
          set: (key, value) => localStorage.setItem(key, value)
        }
      }
    }
    /* module options */
  },
  pwa: {
    meta: {
      lang: "fr",
      twitterSite: "@aifedesglitch",
      twitterCreator: "@aifedesglitch",
      twitterCard: "summary"
    }
  }
};
