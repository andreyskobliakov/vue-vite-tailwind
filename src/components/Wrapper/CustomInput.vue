<template>
    <InputWrapper :label="label" :error="passwordError">
      <input v-model="inputValue" @blur="handleBlur" @input="handleInput" :type="type" />
    </InputWrapper>
  </template>
  
  <script>
  import InputWrapper from './InputWrapper.vue';
  
  export default {
    components: {
      InputWrapper,
    },
    props: {
      label: String,
      type: String,
    },
    data() {
      return {
        inputValue: '',
        hasBlurred: false,
      };
    },
    computed: {
      passwordError() {
        return this.type === 'password' && this.hasBlurred && this.inputValue.trim() === ''
          ? 'Password is required'
          : '';
      },
    },
    methods: {
      handleInput() {
        this.inputValue = event.target.value;
      },
      handleBlur() {
        this.hasBlurred = true;
      },
    },
  };
  </script>
  