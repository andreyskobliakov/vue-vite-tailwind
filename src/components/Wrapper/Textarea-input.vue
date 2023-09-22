<template>
    <div class="relative">
      <label
        :for="id"
        class="label text-sm text-gray-600 bg-yellow-200 font-semibold px-2 py-1 rounded-md transition-transform transform-gpu absolute top-0 left-4"
        :class="{ 'translate-y-0 scale-100': isActive, 'translate-y-3 scale-125': !isActive }"
      >{{ label }}</label>
      <textarea
        :id="id"
        v-model="inputValue"
        @input="handleInput"
        class="input border border-gray-300 p-2 pl-5 rounded-md transition-colors duration-300 focus:border-blue-500"
        :class="{ 'border-blue-500': isActive }"
        @focus="isFocused = true"
        @blur="isFocused = false"
      ></textarea>
    </div>
  </template>
  
  

<script>
export default {
  props: {
    label: String,
    id: String,
    value: String,
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
      this.$emit("input", this.inputValue);
    },
  },
  watch: {
    value(newValue) {
      this.inputValue = newValue;
    },
  },
};
</script>

<style scoped>
.label {
  transition: transform 0.2s, font-size 0.2s;
}

.input {
  width: 100%;
  padding: 1rem;
}
</style>
