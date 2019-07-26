import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import dashboard from "./../components/data-cards/dashboard";
import messages from "./../components/data-cards/messages";
import photos from "./../components/data-cards/photos";
import stats from "./../components/data-cards/stats";
import settings from "./../components/data-cards/settings";
import Login from "./../components/user/login";
import Register from "./../components/user/register";

const routes = [
  { path: "/photos", component: photos },
  { path: "/messages", component: messages },
  { path: "/stats", component: stats },

  {
    path: "/",
    name: "HelloWorld",
    component: messages
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    meta: {
      guest: true
    }
  },
  {
    path: "/register",
    name: "register",
    component: Register,
    meta: {
      guest: true
    }
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: dashboard,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/admin",
    name: "admin",
    component: settings,
    meta: {
      requiresAuth: true,
      is_admin: true
    }
  }
];
let router = new VueRouter({
  routes, // short for `routes: routes`,
  mode: "history"
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem("jwt") == null) {
      next({
        path: "/login",
        params: { nextUrl: to.fullPath }
      });
    } else {
      let user = JSON.parse(localStorage.getItem("user"));
      if (to.matched.some(record => record.meta.is_admin)) {
        if (user.is_admin == 1) {
          next();
        } else {
          next({ name: "userboard" });
        }
      } else {
        next();
      }
    }
  } else if (to.matched.some(record => record.meta.guest)) {
    if (localStorage.getItem("jwt") == null) {
      next();
    } else {
      next({ name: "userboard" });
    }
  } else {
    next();
  }
});

export default router;
