<template>
  <div
    class="card-container w-full
    flex flex-wrap justify-center
    min-h-screen max-h-screen py-10 relative"
  >
    <card
      v-for="item in cardCombinations"
      :key="item.index"
      :data="item"
      class="m-1"
    >
    </card>

    <div
      class="main-card outlined-card elevated-blur-4 bg-shamrock"
      ref="mainCard"
      :style="mainCardData"
      v-show="showCard"
    >
      <div class="content w-full">
        <p class="type-5 text-blue-ribbon">
          Main floating card <br />
          {{ mainCardData }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "./Card";
import { deckBuilder } from "../mixins/DeckBuilder";
export default {
  name: "MasterGridLayout",
  mixins: [deckBuilder],
  components: { Card },
  created() {},
  mounted() {
    this.mainCard = this.$refs.mainCard;
    this.screenWidth = Math.max(
      document.documentElement.clientWidth,
      window.innerWidth || 0
    );
    this.screenHeight = Math.max(
      document.documentElement.clientHeight,
      window.innerHeight || 0
    );
    this.setDesiredDivData();
  },
  data() {
    return {
      screenWidth: 0,
      screenHeight: 0,
      mainCard: null,
      showCard: false,
      endingCardData: {
        width: "0px",
        height: "0px",
        position: "fixed",
        left: "0px",
        top: "0px"
      },

      lastClickedCard: Object,
      mainCardData: {
        width: "360px",
        height: "384px",
        position: "fixed",
        top: "10px",
        left: "10px"
      }
    };
  },
  methods: {
    setDesiredDivData() {
      this.endingCardData.width = this.screenWidth - 20 + "px";

      this.endingCardData.height = this.screenHeight - 20 + "px";
      this.endingCardData.position = "fixed";
      this.endingCardData.top = "10px";
      this.endingCardData.left = "10px";
    },

    expandCard(e) {
      let element = e.target;
      let rect = element.getBoundingClientRect();

      this.mainCard.style.display = "hidden";
      this.showCard = false;
      this.mainCardData.width = rect.right - rect.left + "px";
      this.mainCardData.height = rect.height + "px";
      this.mainCardData.top = rect.top + "px";
      this.mainCardData.left = rect.left + "px";

      this.mainCard.style.display = "block";
      this.lastClickedCard = this.mainCardData;
      this.showCard = true;

      setTimeout(() => {
        this.mainCard.classList.add("expanded");
        this.mainCardData = this.endingCardData;
      }, 1000);

      // get width of screen, height of screen
    }

    //end of methods
  }
};
</script>
