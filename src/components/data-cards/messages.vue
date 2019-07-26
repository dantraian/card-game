<template>
  <div class="w-full min-h-screen flex items-center justify-center">
    <div class="w-8/12 radius-6 overflow-hidden relative">
      <img
        :src="require(`@/assets/img/video.jpg`)"
        alt=""
        class="w-full h-auto"
      />

      <div class="controls radius-6 flex items-center py-4 px-6">
        <div
          class="main-control flex items-center type-5 text-royal-blue pointer user-none"
        >
          <i class="material-icons " v-if="isPlaying" @click="togglePlay"
            >pause_circle_outline</i
          >
          <i class="material-icons" v-else @click="togglePlay"
            >play_circle_outline</i
          >
        </div>
        <div class=" ml-auto flex items-center type-5 text-rhino ">
          <i class="material-icons pointer">volume_up</i>
          <i class="material-icons pointer ml-4">settings</i>
          <i class="material-icons pointer ml-4">fullscreen</i>
        </div>
      </div>
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
    return {
      isPlaying: false
    };
  },

  created() {},

  mounted() {},

  computed: {},

  watch: {},

  methods: {
    togglePlay() {
      this.isPlaying = !this.isPlaying;
    }
  }
};
</script>

<style lang="scss" scoped>
.controls {
  position: absolute;
  left: 30px;
  bottom: 30px;
  width: calc(100% - 60px);
  background-color: white;
}
</style>
