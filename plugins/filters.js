import Vue from "vue"

Vue.filter("numberSized", (value, qte) => {
  return String(value).padStart(qte, "0")
})
