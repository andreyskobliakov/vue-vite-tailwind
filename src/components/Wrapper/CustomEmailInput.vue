<template>
    <div class="mt-8 mb-8">
      <InputWrapper :label="label" :error="emailError">
        <input v-model="inputValue" @blur="handleBlur" @input="handleInput" :type="type" />
      </InputWrapper>
    </div>
  </template>
  
  <script>
  import InputWrapper from '../Wrapper/InputWrapper.vue';
  
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
      emailError() {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isInvalidEmail = this.type === 'email' && this.hasBlurred && !emailPattern.test(this.inputValue);
        return isInvalidEmail ? 'Invalid email address' : '';
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
  