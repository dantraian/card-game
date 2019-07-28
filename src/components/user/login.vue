<template>
  <div>
    <div
      class="gradient-5 animateGradient w-full h-screen flex items-center justify-center"
    >
      <div
        class="w-1/3 max-w-40vw bg-white p-10 text-left flex flex-col relative "
      >
        <dot-grid
          class="leftTopCornerOut"
          :dot-size="0.6"
          :dot-opacity="0.6"
          :grid-spacing="10"
          colour="royal-blue"
        ></dot-grid>

        <p class="type-3 playfair text-rhino weight-700 text-left">Login</p>

        <label class="flex flex-col mt-10 ">
          <span class="type-small text-gull-grey mb-2 ">Email</span>
          <input
            required
            type="email"
            name="email"
            class="input-text"
            v-model="form.email"
          />
        </label>
        <label class="flex flex-col mt-3">
          <span class="type-small text-gull-grey mb-2">Password</span>
          <input
            required
            type="password"
            name="password"
            class="input-text"
            v-model="form.password"
          />
        </label>

        <p class="type-small text-royal-blue mt-2 pointer">
          Forgot your password?
        </p>

        <button
          type="button"
          class="button-large button-accent mt-4 "
          @click="login"
        >
          Login
        </button>

        <transition name="fade" mode="out-in">
          <p v-if="errorMessage" class="type-smaller mt-5 text-sundown">
            {{ errorMessage }}
          </p>
        </transition>

        <p class="type-small text-gull-grey  mt-10 text-center">
          Don't have an account?
          <span class="text-amaranth weight-700 ml-1">Sign Up</span>
        </p>

        <!--<img-->
        <!--:src="require(`@/assets/img/plant.png`)"-->
        <!--class="w-1/3 h-auto m-auto mt-10"-->
        <!--alt=""-->
        <!--/>-->
      </div>

      <div class="fixed p-10 top-0 left-0">
        <p class="type-smaller text-white pointer" @click="backInHistory">
          Back
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import dotGrid from "./../atoms/dotGrid";
export default {
  components: { dotGrid },
  data() {
    return {
      form: {
        email: "",
        password: ""
      },
      errorMessage: false
    };
  },
  methods: {
    login: function() {
      this.$store
        .dispatch("login", this.form)
        .then(() => this.$router.push("/"))
        .catch(err => {
          console.log(err.response.data);
          this.errorMessage = err.response.data;
        });
    },
    backInHistory() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped></style>
