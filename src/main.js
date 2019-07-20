import Vue from "vue";
import App from "./App.vue";
import "@/assets/sass/app.scss";

Vue.config.productionTip = false;

new Vue({
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
