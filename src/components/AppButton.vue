<template>
  <a
    v-if="href"
    :href="href"
    :class="[
      'py-1 px-4',
      shapeModifiers,
      colorModifiers,
      styleModifiers,
      sizeModifiers,
      'button',
      'CustomButton',
      'CustomButtonlink',
      { 'opacity-50 cursor-not-allowed': disabled },
    ]"
    :disabled="disabled"
  >
    <slot name="icon"></slot>
    <slot></slot>
  </a>

  <button
    v-else
    :class="[
      'py-2 px-4',
      shapeModifiers,
      colorModifiers,
      styleModifiers,
      sizeModifiers,
      'CustomButton',
      'button',
      { 'opacity-50 cursor-not-allowed': disabled },
    ]"
    :disabled="disabled"
    @click="click"
  >
    <slot name="icon"></slot>
    <slot></slot>
  </button>
</template>

<script setup>
import { defineProps, computed } from 'vue';

const props = defineProps({
  href: String,
  to: String,
  color: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'customButton', 'button', 'CustomButtonLink'].includes(value),
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
  shape: {
    type: String,
    default: 'square',
    validator: (value) => ['square', 'fab', 'shapebutton'].includes(value),
  },
  value: {
    type: String,
    default: '',
  },
  disabled: Boolean,
  extraClasses: String,
});

const shapeModifiers = computed(() => {
  return {
    rounded: 'rounded-md',
    square: 'rounded-none',
    fab: 'rounded-full',
  }[props.shape];
});

const colorModifiers = computed(() => {
  return {
    primary: 'bg-blue-200 text-blue-700 hover:bg-blue-300',
    secondary: 'bg-gray-100 text-dark-600 border border-gray-600 hover:bg-dark-400 text-white',
    success: 'bg-green-500 text-white hover:bg-green-400',
    danger: 'text-red-500 hover:bg-red-300',
    warning: 'text-orange-300 hover:text-orange-500',
    ButtonFub: 'bg-white text-dark-600 border-solid',
    customButton: 'text-yellow-300 border border-yellow-500 hover:text-white hover:bg-yellow-300 text-white active:bg-yellow-500 text-white',
    CustomButtonLink: 'border border-red-500 border-red-300 text-red-500 hover:bg-red-200',
    button: 'bg-red-500 text-white'
  }[props.color];
});

const styleModifiers = computed(() => {
  return '';
});

const sizeModifiers = computed(() => {
  return {
    small: 'text-xs',
    medium: 'text-sm py-2 px-4',
    large: 'text-lg py-3 px-6',
    customButton: '',
  }[props.size];
});

const click = () => {
 
};
</script>

<style scoped>
</style>
