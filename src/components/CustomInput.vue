<template>
    <input
      :value="modelValue"
      @input="onInput"
      :placeholder="placeholder"
      :class="inputClass"
    />
  </template>
  
  <script>
  export default {
    props: {
      modelValue: String,
      placeholder: String,
      inputClass: String,
    },
    emits: ['update:modelValue', 'change-theme'],
  
    methods: {
  onInput({ target: { value } }) {
    const inputText = value.toLowerCase();

    if (inputText === 'змінити') {
      this.$emit('change-theme', 'secondary');
    }

    this.$emit('update:modelValue', value);
  },
},
  }
  </script>
  