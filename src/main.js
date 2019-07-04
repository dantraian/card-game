import Vue from "vue";
import App from "./App.vue";
import "@/assets/sass/app.scss";

Vue.config.productionTip = false;

Vue.config.productionTip = false;

// store
import store from "./Store/Store";
// components
// import Sidebar from "./Components/Sidebar.vue";
new Vue({
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
