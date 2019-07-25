<template>
  <div
    ref="selfCard"
    class="game-card outlined-card elevated-blur-4 m-3 pointer flex items-center justify-center"
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
      :class="{ reverted: getRandomBoolean }"
      :src="require(`@/assets/img/icons/${data.shape}/${valueOfCard}.svg`)"
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
        ? "accent"
        : "";
    this.valueOfCard = this.data.number === "A" ? 1 : this.data.number;
  },
  mounted() {
    // this.setCheckIfInView();
  },
  props: {
    data: {
      required: true,
      type: Object
    }
  },
  data() {
    return {
      textColor: "",
      valueOfCard: ""
    };
  },
  methods: {
    getRandomBoolean() {
      return Math.random() >= 0.5;
    },

    setCheckIfInView() {
      let self = this;
      setInterval(() => {
        console.log(
          self.checkIfInViewAtLeastPercentage(self.$refs.selfCard, 5)
        );
      }, 1000);
    },
    checkIfInViewAtLeastPercentage(el, percentVisible) {
      let rect = el.getBoundingClientRect(),
        windowHeight =
          window.innerHeight || document.documentElement.clientHeight;

      return !(
        Math.floor(
          100 - ((rect.top >= 0 ? 0 : rect.top) / +-(rect.height / 1)) * 100
        ) < percentVisible ||
        Math.floor(100 - ((rect.bottom - windowHeight) / rect.height) * 100) <
          percentVisible
      );
    }
    //end of methods
  }
};
</script>
