<template>
    <div>
      <button
        v-if="showButton"
        class="custom-button bg-green-500 text-white px-4 py-2 rounded"
      >
        <span>{{ buttonText }}</span>
        <slot name="icon">
          <i class="default-icon-class">Default Icon</i>
        </slot>
      </button>
      <button
        v-else
        class="custom-button bg-red-500 text-white px-2 py-2 rounded-full"
      >
        <slot name="icon"></slot>
      </button>
    </div>
  </template>
  
  
  <script>
  export default {
    props: {
      showButton: {
        type: Boolean,
        default: true, 
      },
      buttonText: {
        type: String,
        default: "Кнопка",
      },
    },
  };
  </script>
  
  <style scoped>
  .custom-button {
    display: flex;
    align-items: center;
  }
  </style>
  