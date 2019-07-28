<template>
  <div class="flex w-screen">
    <div class="router-view-authenticated w-screen" v-if="!storedUser.logged">
      <router-view name="authenticated"></router-view>
    </div>
    <div class="router-view-unauthenticated w-screen" v-else>
      <sidebar class="w-2/12 h-screen max-h-screen max-w."></sidebar>

      <div class="content w-10/12 relative">
        <div class="page-content">
          <navbar class="w-full px-8 pt-10" id="navbar"></navbar>

          <transition name="fade" mode="out-in">
            <router-view
              name="unauthenticated"
              class="router-view mt-10  px-8"
            ></router-view>
          </transition>
        </div>

        <div class="background-gradient"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "./layout/Sidebar";
import Navbar from "./layout/Navbar";
import { mapState } from "vuex";

export default {
  mixins: [],

  components: { Sidebar, Navbar },

  directives: {},

  filters: {},

  props: {},

  data() {
    return {};
  },

  created() {},

  mounted() {},

  computed: {
    ...mapState({
      storedUser: "user"
    })
  },

  watch: {},

  methods: {}
};
</script>
<style lang="scss" scoped>
.page-content {
  position: relative;
  z-index: 20;
}
.background-gradient {
  width: 100%;
  height: 70vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  background: rgb(106, 105, 255);
  background: linear-gradient(
    54deg,
    rgba(106, 105, 255, 1) 0%,
    rgba(150, 91, 193, 1) 35%,
    rgba(229, 87, 131, 1) 100%
  );
}
</style>
