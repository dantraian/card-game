import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import dashboard from "./../components/data-cards/dashboard";
import messages from "./../components/data-cards/messages";
import photos from "./../components/data-cards/photos";
import stats from "./../components/data-cards/stats";
import settings from "./../components/data-cards/settings";
import login from "./../components/user/login";
import register from "./../components/user/register";

const routes = [
  {
    path: "/",
    components: {
      default: login,
      authenticated: login
    }
  },
  {
    path: "/login",
    components: {
      default: login,
      authenticated: login
    }
  },
  { path: "/dashboard", component: dashboard },
  { path: "/photos", component: photos },
  { path: "/messages", component: messages },
  { path: "/stats", component: stats },
  { path: "/settings", component: settings },
  { path: "/register", component: register }
];
let router = new VueRouter({
  routes, // short for `routes: routes`,
  mode: "history"
});

export default router;
