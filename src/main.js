import Vue from "vue";
import App from "./App.vue";
import "@/assets/sass/app.scss";

import { router } from "./routes/route";

Vue.config.productionTip = false;

new Vue({
  router,
  data: {
    showSidebar: true,
    mergeMethod: "download",
    searchOptions: ""
  },

  mounted() {},

  components: {},

  methods: {},
  watch: {},
  render: h => h(App)
}).$mount("#app");
