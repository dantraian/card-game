<template>
  <div class="w-full min-h-screen">
    <div class="w-full flex mt-20">
      <div
        class="w-4/12 outlined-card mx-2 elevated-blur-2 flex items-center justify-center min-h-60"
        v-for="index in 3"
        :key="index"
      >
        <p class="type-5 text-gull-grey weight-700">
          Dashboard
        </p>
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
    return {};
  },

  created() {},

  mounted() {},

  computed: {},

  watch: {},

  methods: {}
};
</script>
