<template>
  <Button
    :class="[
      'py-2 px-4 rounded-md shadow',
      colorModifiers,
      styleModifiers,
      sizeModifiers,
      'CustomButton',
      'CustomButton-login',
      { 'opacity-50 cursor-not-allowed': disabled },
    ]"
    :disabled="disabled"
  >
    <slot name="icon"></slot>
    <slot></slot>
  </Button>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  color: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'customButton', 'CustomButtonlogin'].includes(value),
  },
  type: {
    type: String,
    default: 'contained',
    validator: (value) => ['outlined', 'contained', 'text', 'custom'].includes(value),
  },
  size: {
    type: String,
    default: 'medium',
    validator: (value) => ['small', 'medium', 'large'].includes(value),
  },
  additionalClasses: {
    type: String,
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

const colorModifiers = computed(() => {
  return ({
    primary: 'bg-blue-100 text-blue-500 hover:bg-blue-300',
    secondary: 'bg-blue-200 text-blue-500 border border-blue-500 hover:bg-blue-300',
    success: 'bg-blue-500 text-white hover:bg-blue-400',
    danger: 'text-blue-500 hover:bg-blue-300',
    warning: 'text-blue-300 hover:text-blue-500',
    customButton: 'text-yellow-500 border border-yellow-500 hover:text-white hover:bg-yellow-300 text-white active:bg-yellow-500 text-white',
    CustomButtonlogin: 'text-yellow-500 border border-yellow-500 hover:text-white hover:bg-yellow-300 text-white active:bg-yellow-500 text-white',
  })[props.color];
});

const styleModifiers = computed(() => {
  return ({
    outlined: 'border border-solid',
    contained: '',
    text: '',
    customButton: 'border border-solid',
    CustomButtonlogin: 'border border-solid',
  })[props.type];
});

const sizeModifiers = computed(() => {
  return ({
    small: 'text-xs py-1 px-2',
    medium: 'text-sm py-2 px-4',
    large: 'text-lg py-3 px-6',
    customButton: '',
    CustomButtonlogin: 'text-lg py-5 px-6',
  })[props.size];
});
</script>

<style scoped>
</style>
