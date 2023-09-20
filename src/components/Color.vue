<template>
    <div :style="{ backgroundColor: color }" class="w-[100px] h-[100px]"></div>
  </template>
  
  <script setup>
  import { defineProps } from "vue";
  
  const props = defineProps({
    color: {
      type: String,
      required: true,
    },
  });
  </script>
  
  <style scoped>
  </style>
  