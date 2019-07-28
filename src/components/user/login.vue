<template>
  <div>
    <div class="main-screen w-full h-screen flex items-center justify-center">
      <div
        class="w-1/3 max-w-40vw bg-white p-10 text-left flex flex-col relative "
      >
        <dot-grid class="dotGrid" colour="royal-blue"></dot-grid>

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

        <p class="type-small text-gull-grey  mt-10 text-center">
          Dont have an account?
          <span class="text-amaranth weight-700 ml-1">Sign Up</span>
        </p>

        <!--<img-->
        <!--:src="require(`@/assets/img/plant.png`)"-->
        <!--class="w-1/3 h-auto m-auto mt-10"-->
        <!--alt=""-->
        <!--/>-->
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
      }
    };
  },
  methods: {
    login: function() {
      this.$store
        .dispatch("login", this.form)
        .then(() => this.$router.push("/"))
        .catch(err => console.log(err));
    }
  }
};
</script>

<style scoped>
.dotGrid {
  position: absolute;
  top: 0;
  left: 0;
  transform: translateX(-60%) translateY(-60%);
  opacity: 0.5;
}
.main-screen {
  background: linear-gradient(
    45deg,
    rgb(164, 210, 185) 0%,
    rgb(164, 210, 185) 13%,
    rgb(140, 185, 176) 13%,
    rgb(140, 185, 176) 18%,
    rgb(116, 160, 167) 18%,
    rgb(116, 160, 167) 22%,
    rgb(92, 135, 158) 22%,
    rgb(92, 135, 158) 23%,
    rgb(67, 109, 148) 23%,
    rgb(67, 109, 148) 26%,
    rgb(43, 84, 139) 26%,
    rgb(43, 84, 139) 31%,
    rgb(19, 59, 130) 31%,
    rgb(19, 59, 130) 100%
  );
}
</style>
