<template>
  <div
    class="card outlined-card elevated-blur-4 m-3 pointer flex items-center justify-center"
  >
    <div class="title flex flex-col items-center">
      <p class="title-text weight-700 " :class="textColor">
        {{ data.number }}
      </p>
      <img :src="require(`@/assets/img/icons/${data.shape}.svg`)" alt="" />
    </div>
    <div class="title reverted flex flex-col items-center">
      <p class="title-text weight-700 " :class="textColor">
        {{ data.number }}
      </p>
      <img :src="require(`@/assets/img/icons/${data.shape}.svg`)" alt="" />
    </div>

    <img
      class="card-image"
      :src="require(`@/assets/img/employees/${employeeId}.jpg`)"
      alt=""
    />
  </div>
</template>

<script>
export default {
  name: "Card",
  created() {
    this.textColor =
      this.data.shape === "hearth" || this.data.shape === "diamond"
        ? "red"
        : "";
  },
  mounted() {},
  props: {
    data: {
      required: true,
      type: Object
    },
    employeeId: {
      required: true,
      type: Number
    }
  },
  data() {
    return {
      textColor: ""
    };
  },
  methods: {
    getRandomEmployee() {
      return Math.floor(Math.random() * 36 + 1);
    }
    //end of methods
  }
};
</script>
