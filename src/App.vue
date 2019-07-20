<template>
  <div id="app">
    <div class="p-3"></div>
    <master-grid-layout></master-grid-layout>
  </div>
</template>

<script>
import MasterGridLayout from "./components/MasterGridLayout";
export default {
  name: "app",
  components: { MasterGridLayout },
  computed: {},
  methods: {}
};
</script>

<style lang="scss">
@import "./assets/sass/abstracts/variables.scss";

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
