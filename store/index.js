import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "./app.vue";

const pinia = createPinia();

createApp(App).use(pinia).mount("#app");
