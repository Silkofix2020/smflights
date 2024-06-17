export default defineNuxtPlugin((nuxtApp) => {
  // Добавляем строку загрузки
  nuxtApp.hook("page:transition:start", () => {
    nuxtApp.$loading.start();
  });

  nuxtApp.hook("page:transition:finish", () => {
    nuxtApp.$loading.finish();
  });
});
