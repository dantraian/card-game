<template>
  <div id="app">
    <master-layout></master-layout>
  </div>
</template>

<script>
import MasterLayout from "./components/MasterLayout";
export default {
  name: "app",
  components: { MasterLayout },
  computed: {},
  created() {},
  methods: {}
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
