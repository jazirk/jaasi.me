import { createApp } from "vue";
import App from "./App.vue";

import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
// import { CursorFx } from "@luxdamore/vue-cursor-fx";
import "@luxdamore/vue-cursor-fx/dist/CursorFx.css";
// Vue.component(CursorFx.name, CursorFx);

import jQuery from "jquery";
window.$ = jQuery;

// Vue.config.productionTip = false;

createApp(App).mount("#app");
// app.component(CursorFx.name, CursorFx);
// Vue.use(CursorFx);
