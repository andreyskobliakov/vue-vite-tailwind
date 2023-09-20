<template>
  <div>
    <input
      :value="value"
      @input="updateValue($event)"
      class="border rounded p-2"
      :placeholder="placeholder"
    />
    <p>Name Theme: {{ value }}</p>
    <input v-model="defaultValue" class="border rounded p-2" :placeholder="defaultPlaceholder" />
  </div>
</template>

<script>
export default {
    props: {
  modelValue: {
    type: String,
    required: true,
  },
  placeholder: String,
  defaultPlaceholder: String,
},
  data() {
    return {
      value: this.modelValue,
      defaultValue: '',
    };
  },
  watch: {
    modelValue(newValue) {
      this.value = newValue;
    },
    defaultValue(newValue) {
      this.value = newValue;
    },
    value(newValue) {
      if (newValue.toLowerCase() === 'default') {
        this.$emit('change-theme', 'default'); 
      } else if (newValue.toLowerCase() === 'secondary') {
        this.$emit('change-theme', 'secondary');
      }
    },
  },
  methods: {
    updateValue(newValue) {
      this.value = newValue;
      this.$emit('update:modelValue', newValue);
      this.defaultValue = newValue;
    },
  },
};
</script>
