<template>
  <div class="container flex flex-col">
    <div class="row flex" v-for="index in gridNumber" :key="index">
      <div
        class="dot"
        :class="'bg-' + colour"
        v-for="key in gridNumber"
        :key="key"
        :style="dotStyles"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    colour: {
      type: String,
      default: "royal-blue"
    },
    dotSize: {
      type: Number,
      default: 1
    },
    dotOpacity: {
      type: Number,
      default: 1
    },
    gridNumber: {
      type: Number,
      default: 5
    },
    gridSpacing: {
      type: Number,
      default: 10
    }
  },

  data() {
    return {};
  },

  computed: {
    dotStyles() {
      return {
        transform: "scale(" + this.dotSize + ")",
        opacity: this.dotOpacity,
        margin: this.gridSpacing + "px"
      };
    }
  }
};
</script>
<style scoped>
.dot {
  width: 10px;
  height: 10px;
  border-radius: 20px;
}
.leftTopCornerOut {
  position: absolute;
  top: 0;
  left: 0;
  transform: translateX(-60%) translateY(-60%);
}
.rightTopCornerOut {
  position: absolute;
  top: 0;
  right: 0;

  transform: translateX(60%) translateY(-60%);
}
.leftBottomCornerOut {
  position: absolute;
  bottom: 0;
  left: 0;
  transform: translateX(-60%) translateY(60%);
}
.rightBottomCornerOut {
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translateX(60%) translateY(60%);
}
</style>
