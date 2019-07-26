import "@/assets/sass/app.scss";

import Vue from "vue";
import App from "./App.vue";
import Axios from "axios";
import store from "./store/store";

Vue.prototype.$http = Axios;
const token = localStorage.getItem("token");
if (token) {
  Vue.prototype.$http.defaults.headers.common["Authorization"] = token;
}

Vue.prototype.$http = Axios;
import router from "./routes/route";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
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
