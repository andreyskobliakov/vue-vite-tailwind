<template>
  <div class="bg-gray-100 min-h-screen flex flex-col justify-center items-center px-4 py-8 md:px-10 md:py-8">
    <div class="mb-6 flex flex-wrap gap-3">
      <CustomInput v-model="selectedTheme" placeholder="Enter theme name" defaultPlaceholder="Default Input"
        @change-theme="onSetTheme"
        @input="updateDefaultInputValue"
      />
    </div>
    <div class="mb-6">
      <p>Name Theme: {{ selectedTheme }}</p>
    </div>
    <div class="mb-6 flex flex-wrap gap-3">
      <input v-model="defaultInputValue"
        @input="updateCustomInputValue"
      >
    </div>
    <div class="mb-6">
      <button @click="updateDefaultInputValue">Rebot default input</button>
    </div>
    <div class="mb-6 flex flex-wrap gap-3">
      <button
        v-for="theme in themes"
        :key="theme"
        @click="onSetTheme(theme)"
        :class="[
          'px-4 py-2 rounded-md cursor-pointer transition duration-300 ease-in-out border border-gray-300 shadow-md',
          theme === selectedTheme ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300 hover:text-gray-900'
        ]"
      >
        {{ theme }}
      </button>
    </div>
    <div class="flex flex-col gap-5 items-center" :class="themeClasses">
      <div v-for="(items, index) in baseColors" :key="index + selectedTheme" class="flex flex-wrap gap-8">
        <ColorCard v-for="item in items"
          :card-classes="item.value"
          :label="item.label"
          :hideDescription="item.hideDescription"
          :key="item.label"
          class="border border-gray-300 rounded-xl p-7 shadow-xl text-center"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import ColorCard from './components/ColorCard.vue';
import CustomInput from './components/CustomInput.vue';
import baseColors from './base/Colors.json'
import { ref, computed } from "vue";

const themes = ['default', 'secondary'];
const selectedTheme = ref('default');
const defaultInputValue = ref('');

const themeClasses = computed(() => `theme-${selectedTheme.value}`);

const onSetTheme = (newTheme) => {
  selectedTheme.value = newTheme;
}

const updateDefaultInputValue = () => {
  
  defaultInputValue.value = selectedTheme.value;
}

const updateCustomInputValue = () => {
  
  selectedTheme.value = defaultInputValue.value;
}

</script>

<style scoped>
</style>
