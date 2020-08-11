import Vue from "vue"
import { config } from "~/config/aife.config"

Vue.prototype.$seo = (title, description, path) => {
  return {
    title,
    meta: [
      {
        hid: "description",
        name: "description",
        value: description,
      },
      {
        hid: "og:title",
        property: "og:title",
        value: title,
      },
      {
        hid: "og:description",
        property: "og:description",
        value: description,
      },
      {
        hid: "og:type",
        property: "og:type",
        value: "website",
        // value: "website"
      },
      {
        hid: "og:locale",
        property: "og:locale",
        value: "fr_FR",
      },
      {
        hid: "og:url",
        property: "og:url",
        value: `${config.baseUrl}/${path}`,
      },
      {
        hid: "og:image",
        property: "og:image",
        value: `${config.baseUrl}/thumbnails/${path}.jpg`,
      },
      {
        hid: "twitter:title",
        property: "twitter:title",
        value: title,
      },
      {
        hid: "twitter:description",
        property: "twitter:description",
        value: description,
      },
      {
        hid: "twitter:image",
        property: "twitter:image",
        value: `${config.baseUrl}/thumbnails/${path}.jpg`,
      },
    ],
  }
}
