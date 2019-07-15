<template>
  <div id="app">
    <div class="w-screen h-screen flex items-center justify-center p-16">
      <div class="main-card outlined-card w-full h-full flex">
        <div class="form w-9/12 h-full p-5">
          <step1></step1>
        </div>
        <div class="steps bg-blue-ribbon w-3/12 h-full"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Step1 from "./components/FormSteps/Step1";
import { mapState, mapActions } from "vuex";

export default {
  name: "app",
  components: { Step1 },
  computed: mapState({
    countAlias: "count"
  }),
  methods: {
    ...mapActions(["increaseCount", "decreaseCount"])
  }
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
  .main-card {
    overflow: hidden;
    border: 10px solid $shamrock;
  }
}
</style>
