import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import dashboard from "./../components/data-cards/dashboard";
import home from "./../components/user/home";
import login from "./../components/user/login";
import register from "./../components/user/register";

const routesNotRequiringAuth = [
  {
    path: "/",
    components: {
      unauthenticated: home
    }
  },
  {
    path: "/login",
    components: {
      unauthenticated: login
    }
  },
  {
    path: "/register",
    components: {
      unauthenticated: register
    }
  }
];
const routesRequiringAuth = [
  {
    path: "/dashboard",
    components: {
      unauthenticated: dashboard
    }
  }
];

let routes = routesRequiringAuth.concat(routesNotRequiringAuth);

let router = new VueRouter({
  routes, // short for `routes: routes`,
  mode: "history"
});

export default router;
