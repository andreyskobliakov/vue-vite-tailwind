<template>
    <div class="relative">
      <label
        :for="id"
        class="label bg-yellow-200 text-black font-semibold text-xs px-2 py-1 rounded-md transition-transform transform-gpu absolute top-1 left-6"
        :class="{ 'translate-y-0 scale-100': isActive, 'translate-y-3 scale-125': !isActive }"
      >&nbsp;{{ label }}</label>
      <input
        :type="inputType"
        v-model="inputValue"
        @input="handleInput"
        class="input border border-gray-300 p-2 pl-8 rounded-md transition-colors duration-300 focus:border-blue-500 w-full"
        :class="{ 'border-blue-500': isActive }"
        @focus="isFocused = true"
        @blur="isFocused = false"
      />
    </div>
  </template>
  
  <script>
  export default {
    props: {
      label: String,
      id: String,
      value: String,
      inputType: String,
    },
    data() {
      return {
        inputValue: this.value,
        isFocused: false,
      };
    },
    computed: {
      isActive() {
        return this.isFocused || this.inputValue;
      },
    },
    methods: {
      handleInput(event) {
        this.inputValue = event.target.value;
      },
    },
    watch: {
      value(newValue) {
        this.inputValue = newValue;
      },
    },
  };
  </script>
  