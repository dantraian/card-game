<template>
  <div class="flex flex-col">
    <div class="row flex" v-for="index in 5" :key="index">
      <div
        class="dot m-2"
        :class="'bg-' + colour"
        v-for="key in 5"
        :key="key"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  mixins: [],

  components: {},

  directives: {},

  filters: {},

  props: {
    colour: {
      type: String,
      default: "gull-grey"
    }
  },

  data() {
    return {};
  },

  created() {},

  mounted() {},

  computed: {},

  watch: {},

  methods: {}
};
</script>
<style scoped>
.dot {
  width: 10px;
  height: 10px;
  display: block;
  border-radius: 20px;
}
</style>
