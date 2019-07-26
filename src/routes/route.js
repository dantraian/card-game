import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import dashboard from "./../components/data-cards/dashboard";
import messages from "./../components/data-cards/messages";
import photos from "./../components/data-cards/photos";
import stats from "./../components/data-cards/stats";
import settings from "./../components/data-cards/settings";

const routes = [
  { path: "/dashboard", component: dashboard },
  { path: "/photos", component: photos },
  { path: "/messages", component: messages },
  { path: "/stats", component: stats },
  { path: "/settings", component: settings }
];

export const router = new VueRouter({
  routes // short for `routes: routes`
});
