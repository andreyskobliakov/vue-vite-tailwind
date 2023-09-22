<template>
    <div class="relative">
      <label>{{ label }}</label>
      <slot></slot>
      <div class="relative">
        <p v-if="showError" class="text-red-600 bg-red-200 p-2 absolute top-full left-0 w-auto">{{ error }}</p>
      </div>
      <p v-if="helperText" class="text-gray-600">{{ helperText }}</p>
    </div>
  </template>
  
  
  
  
  <script>
  export default {
    props: {
      label: String,
      error: String,
      helperText: String,
    },
    computed: {
      showError() {
        return !!this.error;
      },
    },
  };
  </script>
  
  <style scoped>
  .error {
    color: red;
  }
  
  .helper-text {
    color: gray;
  }
  </style>
  