import Vue from "vue";
import Axios from "axios";

import "@/assets/sass/app.scss";
import App from "./App.vue";
import store from "./store/store";
import router from "./routes/route";

Vue.prototype.$http = Axios;
const token = localStorage.getItem("token");
if (token) {
  Vue.prototype.$http.defaults.headers.common["Authorization"] = token;
}
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  data: {},

  mounted() {},

  components: {},

  methods: {},
  watch: {},
  render: h => h(App)
}).$mount("#app");
