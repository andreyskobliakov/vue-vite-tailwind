
<template>
 <div :class="themeClasses">
    <div class="min-h-screen flex flex-col items-center justify-center">
      <h1 class="text-h1 mb-4">Welcome</h1>

    <div class="flex flex-wrap justify-center gap-4 mb-8">
      <div class="w-16 h-16 bg-blue rounded-full flex items-center justify-center">
        <span class="text-white">Blue</span>
      </div>
      <div class="w-16 h-16 bg-purple-2 rounded-full flex items-center justify-center">
        <span class="text-black">Purple 2</span>
      </div>
      <div class="w-16 h-16 bg-red-2 rounded-full flex items-center justify-center">
        <span class="text-white">Red 2</span>
      </div>
      <div class="w-16 h-16 bg-green-2 rounded-full flex items-center justify-center">
        <span class="text-white">Green 2</span>
      </div>
      <div class="w-16 h-16 bg-gold-2 rounded-full flex items-center justify-center">
        <span class="text-black">Gold</span>
      </div>
      <div class="w-16 h-16 bg-light rounded-full flex items-center justify-center">
        <span class="text-gray-4">Light</span>
      </div>
      <div class="w-16 h-16 bg-dark-2 rounded-full flex items-center justify-center">
        <span class="text-white">Dark 2</span>
      </div>
    </div>

    <div class="mb-8">
      <p class="text-paragraph">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto autem nisi, dolorum facere quis omnis accusamus delectus itaque repellendus esse, pariatur dignissimos corrupti error vero repellat eveniet vel amet cumque.
      </p>
    </div>

    
    <div class="mb-8">
      <button class="bg-gold text-black text-button px-6 py-3 rounded-md mr-4">Кнопка</button>
      <button class="bg-gold text-black text-button-small px-4 py-2 rounded-md">Мала кнопка</button>
    </div>

    
    <div class="mb-8">
      <p class="text-caption">Lorem ipsum dolor sit.</p>
    </div>

    
    <div>
      <a href="#" class="text-link text-gold-2">Link</a>
    </div>
    <button @click="toggleTheme" class="bg-blue-2 text-white px-4 py-2 rounded-md mt-4">
        Theme dark/Lihgt
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

    const toggleTheme = () => {
      currentTheme.value = currentTheme.value === 'theme1' ? 'theme2' : 'theme1';
    };

    return {
      themeClasses,
      toggleTheme,
    };
  },
};
</script>




<style scoped>
.theme1 {
  @apply bg-blue text-white;
}

.theme2 {
  @apply bg-dark-2 text-white;
}

.theme-toggle-button {
  @apply bg-blue-2 text-white px-4 py-2 rounded-md mt-4;
}
</style>
