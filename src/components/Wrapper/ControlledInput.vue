<template>
    <div>
      <label v-for="option in options" :key="option.value">
        <input
          :type="inputType"
          :value="option.value"
          v-model="selectedValue"
          @input="handleInput"
        />
        {{ option.label }}
      </label>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      value: String,
      options: Array,
      inputType: String,
    },
    data() {
      return {
        selectedValue: this.value,
      };
    },
    methods: {
      handleInput() {
        this.$emit("input", this.selectedValue);
      },
    },
    watch: {
      value(newValue) {
        this.selectedValue = newValue;
      },
    },
  };
  </script>
  