import Vue from "vue";
console.log("WWWWWWWWWWWWWWWWWWWWWW");
Vue.prototype.$seo = {
  head: (title, description, path) => {
    return {
      title,
      meta: [
        {
          hid: "description",
          name: "description",
          value: description
        },
        {
          hid: "og:title",
          name: "og:title",
          value: title
        },
        {
          hid: "og:description",
          name: "og:description",
          value: description
        },
        {
          hid: "og:type",
          name: "og:type",
          value: "website"
          // value: "website"
        },
        {
          hid: "og:locale",
          name: "og:locale",
          value: "fr_FR"
        },
        {
          hid: "og:url",
          name: "og:url",
          value: `https://twitch.aife.io/${path}`
        },
        {
          hid: "og:image",
          name: "og:image",
          value: `https://twitch.aife.io/static/thumbnails/${path}.jpg`
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          value: title
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          value: description
        },
        {
          hid: "twitter:image",
          name: "twitter:image",
          value: `${process.env.BASE_URL}/static/thumbnails/${path}.jpg`
        }
      ]
    };
  }
};
