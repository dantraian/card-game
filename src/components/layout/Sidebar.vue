<template>
  <div class="sidebar">
    <div class="logo">
      <router-link to="/">
        <img :src="require(`@/assets/img/logo.svg`)" alt="" />
      </router-link>
    </div>
    <p
      class="type-normal weight-700 uppercase mt-4 text-gull-grey pl-10 text-left"
    >
      MENU
    </p>
    <div
      class="menu-items flex flex-col
      text-gull-grey weight-700 text-left pr-6  "
    >
      <router-link class="link pl-10  py-3" to="/dashboard">
        <i class="material-icons mr-4">subject</i>Dashboard
      </router-link>
      <!--<router-link class="link pl-10  py-3" to="/photos">-->
      <!--<i class="material-icons mr-4">photo_camera</i>Flightcases-->
      <!--</router-link>-->
      <!--<router-link class="link pl-10  py-3" to="/messages">-->
      <!--<i class="material-icons mr-4">message</i>Events-->
      <!--</router-link>-->
      <!--<router-link class="link pl-10  py-3" to="/stats">-->
      <!--<i class="material-icons mr-4">assessment</i>Statuses-->
      <!--</router-link>-->
      <!--<router-link class="link pl-10  py-3" to="/settings">-->
      <!--<i class="material-icons mr-4">settings</i>Settings-->
      <!--</router-link>-->
    </div>

    <p
      class="type-normal weight-700 uppercase mt-10 text-gull-grey pl-10 text-left"
    >
      SETTINGS
    </p>
    <div
      class="menu-items flex flex-col
       text-gull-grey weight-700 text-left
        pr-6"
    >
      <router-link class="link pl-10  py-3" to="/dashboard">
        <i class="material-icons mr-4">account_box</i>User
      </router-link>
      <router-link class="link pl-10  py-3" to="/dashboard">
        <i class="material-icons mr-4">perm_identity</i>Logout
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  mixins: [],

  components: {},

  directives: {},

  filters: {},

  props: {},

  data() {
    return {};
  },

  created() {},

  mounted() {},

  watch: {},

  computed: {},
  methods: {}
};
</script>
<style scoped lang="scss">
.link {
  display: flex;
  align-items: center;
  border-left: 3px solid transparent;
  transition: all 0.3s ease-in-out;
  i {
    transition: all 0.3s ease-in-out;
  }
  &:hover {
    border-left: 3px solid #b72162;
    box-shadow: 0 10px 15px transparentize($accent-light, 0.75);

    i {
      color: #b72162;
    }
  }
}
</style>
