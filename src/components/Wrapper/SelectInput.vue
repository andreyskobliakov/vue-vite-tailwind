<template>
    <select v-model="selectedValue" @change="handleChange">
      <option :value="option.value" v-for="option in options" :key="option.value">{{ option.label }}</option>
    </select>
  </template>
  
  <script>
  export default {
    props: {
      value: String,
      options: Array,
    },
    data() {
      return {
        selectedValue: this.value,
      };
    },
    methods: {
      handleChange() {
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
  