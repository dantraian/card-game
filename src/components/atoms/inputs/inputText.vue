<template>
  <div class="input-container flex items-center">
    <label
      class="type-smaller text-gull-grey mr-4 w-1/30 text-right"
      v-html="label"
    ></label>
    <input
      class="input-text w-3/5"
      type="text"
      :name="inputName"
      v-model="localValue"
    />
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: ""
    },
    initialValue: {
      required: true
    },
    inputName: {
      required: true
    }
  },

  data() {
    return {
      localValue: false
    };
  },
  mounted() {
    this.localValue = this.initialValue;
  },
  watch: {
    localValue(newValue) {
      this.$emit("changedInputValue", {
        inputName: this.inputName,
        value: newValue
      });
    }
  }
};
</script>
