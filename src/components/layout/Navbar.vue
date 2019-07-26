<template>
  <div class="flex">
    <div class="flex flex-col items-start">
      <h1 class="type-4 weight-700 text-white">Dashboard</h1>
      <p class="type-normal text-accent-lighter">
        Hi Nicolaj, welcome to the new iClaimer view
      </p>
    </div>
    <div class="ml-auto flex text-white">
      <img
        :src="require(`@/assets/img/profile.jpg`)"
        alt=""
        class="h-12 radius-full"
      />
      <div class="flex flex-col items-start ml-4">
        <p class="type-normal weight-700">Nicolaj</p>
        <p class="type-smaller">Claim Manager</p>
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
<style scoped lang="scss"></style>
