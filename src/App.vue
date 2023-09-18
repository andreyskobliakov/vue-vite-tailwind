<template>
  <div :class="themeClasses">
    <div class="min-h-screen flex flex-col items-center justify-center">
      <h1 class="text-h1 mb-4" :style="{ color: welcomeTextColor }">Welcome</h1>
      <div class="w-20 h-20 bg-blue rounded-full flex items-center justify-center mb-10 mt-10 theme-secondary" :style="{ backgroundColor: blueColor, color: textColor }">
        <span>Blue</span>
      </div>
      <button @click="toggleTheme" class="theme-toggle-button">
        Theme
      </button>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue';

export default {
  setup() {
    const currentTheme = ref('theme1');

    const themeClasses = computed(() => {
      return currentTheme.value;
    });

    const themeColors = {
      theme1: {
        blueColor: '#007bff',
        textColor: '#ffffff',
      },
      theme2: {
        blueColor: '#333333',
        textColor: '#000000',
      },
    };

    const toggleTheme = () => {
      currentTheme.value = currentTheme.value === 'theme1' ? 'theme2' : 'theme1';
    };

    const blueColor = computed(() => {
      return themeColors[currentTheme.value].blueColor;
    });

    const textColor = computed(() => {
      return themeColors[currentTheme.value].textColor;
    });

    const welcomeTextColor = computed(() => {
      return textColor.value;
    });

    return {
      themeClasses,
      toggleTheme,
      blueColor,
      textColor,
      welcomeTextColor,
    };
  },
};
</script>

<style scoped lang="scss">
@import "../src/assets/variables.scss"; 

:root {
  --primary: #{$primary};
}

.theme1 {
}

.theme2 {
  
}

.theme-secondary {
  background-color: var(--primary); 
}

.theme1 .theme-secondary {
  background-color: var(--primary); 
}

.theme2 .theme-secondary {
  background-color: var(--primary); 
}
</style>
