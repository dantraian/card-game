export const deckBuilder = {
  data() {
    return {
      numbers: ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10],
      shapes: ["hearth", "spade", "clubs", "diamond"],
      cardCombinations: [],
      charactersArray: []
    };
  },
  created() {
    this.createDeck();
    this.createCharacters();
  },
  computed: {},
  methods: {
    createDeck() {
      let index = 1;
      this.numbers.forEach(item => {
        this.shapes.forEach(item2 => {
          this.cardCombinations.push({
            number: item,
            shape: item2,
            index: index
          });
          index++;
        });
      });
      this.randomiseArray(this.cardCombinations);
    },
    createCharacters() {
      for (let i = 1; i <= 36; i++) {
        this.charactersArray.push(i);
      }
      this.randomiseArray(this.charactersArray);
    },
    randomiseArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }
  }
};
