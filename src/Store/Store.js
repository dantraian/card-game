import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    decrease(state) {
      state.count++;
    }
  },
  actions: {
    increaseCount(context) {
      context.commit("increment");
    },
    decreaseCount(context) {
      context.commit("decrease");
    }
  }
});
export default store;
