<template>
    <button
      :class="[
        'py-2 px-4 rounded-md shadow',
        colorModifiers[color],
        hoverModifiers[color],
        activeModifiers[color],
        styleModifiers[style],
        sizeModifiers[size],
        additionalClasses,
        'my-custom-classes', // Обновите имя класса в kebab-case
        'custom-login', // Обновите имя класса в kebab-case
        { 'opacity-50 cursor-not-allowed': disabled },
      ]"
      :disabled="disabled"
    > <slot name="icon"></slot>
      <slot></slot>
      
    </button>
  </template>
  
  <script>
  export default {
    props: {
      color: {
        type: String,
        default: 'primary',
        validator: (value) => ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'custom'].includes(value),
      },
      style: {
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
    },
    computed: {
      colorModifiers() {
        return {
          primary: 'bg-blue-100 text-blue-500',
          secondary: 'bg-blue-200 text-blue-500 border border-blue-500',
          success: 'bg-blue-500 text-white',
          danger: 'text-blue-500',
          warning: 'text-blue-300',
          custom: 'text-yellow-500 border border-yellow-500 hover:text-white',
          customlogin: 'text-yellow-500 border border-yellow-500 hover:text-white',
        };
      },
      hoverModifiers() {
        return {
          primary: 'hover:bg-blue-300',
          secondary: 'hover:bg-blue-300',
          success: 'hover:bg-blue-400',
          danger: 'hover:bg-blue-300',
          warning: 'hover:text-blue-500',
          custom: 'hover:bg-yellow-300 text-white',
          customlogin: 'hover:bg-yellow-300 text-white',
        };
      },
      activeModifiers() {
        return {
          primary: '',
          secondary: '',
          success: '',
          danger: '',
          warning: '',
          custom: 'active:bg-yellow-500 text-white',
          customlogin: 'active:bg-yellow-500 text-white',
        };
      },
      styleModifiers() {
        return {
          outlined: 'border border-solid',
          contained: '',
          text: '',
          custom: 'border border-solid',
          customlogin: 'border border-solid',
        };
      },
      sizeModifiers() {
        return {
          small: 'text-xs py-1 px-2',
          supersmall: 'text-xxs py-0.5 px-1',
          medium: 'text-sm py-2 px-4',
          large: 'text-lg py-3 px-6',
          extralarge: 'text-lg py-3 px-6',
          custom: '',
          customlogin: 'text-lg py-5 px-6',
        };
      },
    },
  };
  </script>
  
  <style scoped>
  .my-custom-classes {
    @apply px-8 py-6;
  }
  .custom-login {
    @apply px-10 py-4;
  }
  </style>
  