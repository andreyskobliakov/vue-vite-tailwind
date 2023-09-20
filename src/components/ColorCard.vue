<template>
  <div class="flex flex-col gap-2.5">
    <div class="w-[100px] h-[100px]" ref="colorRef" :class="cardClasses" :style="{ backgroundColor: color }"/>
    <p class="capitalize">
      {{ label }}
    </p>
    {{ size }}
    <p v-if="!hideDescription && description" class="uppercase">
      {{ description }}
    </p>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import tinycolor from "tinycolor2";

const randomGenerator = () => "";

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    default: "md",
    validator(value) {
      return ["sm", "xs", "md"].includes(value);
    },
  },
  cardClasses: {
    type: [String, Array, Object],
  },
  hideDescription: Boolean,
  color: {
    type: String,
    required: true,
  },
});

const colorRef = ref(null);
const description = computed(() => {
  if (colorRef.value) {
    const bgColor = window.getComputedStyle(colorRef.value).getPropertyValue("background-color");
    const color = tinycolor(bgColor);
    if (color.isValid()) {
      return color.toHexString();
    }
  }
});
</script>
