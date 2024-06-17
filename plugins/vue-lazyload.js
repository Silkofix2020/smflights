import VueLazyload from "vue-lazyload";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueLazyload, {
    preLoad: 1.3,

    attempt: 1,
  });
});
