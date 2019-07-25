import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
import Foo from "./../components/data-cards/foo";
import Bar from "./../components/data-cards/bar";

const routes = [
  { path: "/foo", component: Foo },
  { path: "/bar", component: Bar }
];

export const router = new VueRouter({
  routes // short for `routes: routes`
});
