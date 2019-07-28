<template>
  <div
    class="bg-white w-full h-screen flex items-center justify-center flex-col"
  >
    <div class="navbar flex items-center w-screen px-20 absolute top-0 left-0">
      <img :src="require(`@/assets/img/logo.svg`)" class="w-2/12" alt="" />

      <router-link class="ml-auto" to="/login">
        Login
      </router-link>
      <router-link class="m-4" to="/register">
        <button type="button" class="button-accent button-default">
          Sign up
        </button>
      </router-link>
    </div>

    <img :src="require(`@/assets/img/16.png`)" class="w-1/3 mb-10" alt="" />

    <div class="w-1/2 relative">
      <dot-grid
        class="leftTopCornerOut z-50"
        :dot-size="0.4"
        :dot-opacity="0.6"
        :grid-spacing="7"
        :grid-number="7"
        colour="royal-blue"
      ></dot-grid>

      <p class="type-3 playfair text-rhino z-50 relative">
        Your personal dashboard <br />at work, Thymia
      </p>

      <dot-grid
        class="rightTopCornerOut z-50"
        :dot-size="0.3"
        :dot-opacity="0.3"
        :grid-spacing="12"
        :grid-number="9"
        colour="royal-blue"
      ></dot-grid>
    </div>
  </div>
</template>

<script>
import dotGrid from "./../atoms/dotGrid";

export default {
  components: { dotGrid },

  data() {
    return {};
  }
};
</script>
