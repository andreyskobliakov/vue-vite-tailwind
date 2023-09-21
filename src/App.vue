<template>
  <div class="bg-blue-100 min-h-screen flex justify-center items-center">
    <div class="w-1/2 p-6 bg-blue-300 rounded-lg shadow-lg transition-transform transform hover:scale-105">
      <TextInput label="Text Input" v-model="textInputValue" class="p-2 mb-4 w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />

      <CustomInput label="Password" type="password" class="p-2 mb-4">
        <input v-model="passwordValue" type="password" class="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </CustomInput>

      <CustomEmailInput label="Email" type="email" class="p-2 mb-4">
        <input v-model="emailValue" type="email" class="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:bg-blue-500" />
      </CustomEmailInput>

      <TextareaInput label="Textarea" v-model="textareaValue" class="p-2 mb-4 w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"/>
      <SelectInput label="Select" v-model="selectedValue" :options="selectOptions" class="p-2 mb-4 w-full border rounded focus:outline-none ring-2 focus:ring-blue-500" />

      <ControlledInput label="Controlled Input (Checkbox)" v-model="checkboxValue" inputType="checkbox" :options="checkboxOptions" class="p-2 mb-4 w-full" />

      <ControlledInput label="Controlled Input (Radio)" v-model="radioValue" inputType="radio" :options="radioOptions" class="p-2 mb-4 w-full" />

    </div>
  </div>
</template>


<script>
import CustomInput from './components/wrapper/CustomInput.vue';
import CustomEmailInput from './components/wrapper/CustomEmailInput.vue';
import TextareaInput from './components/wrapper/Textarea-input.vue';
import TextInput from './components/wrapper/text-input.vue';
import SelectInput from './components/wrapper/Select-input.vue';
import ControlledInput from './components/wrapper/Controlled-input.vue';

export default {
  components: {
    CustomInput,
    CustomEmailInput,
    TextareaInput,
    TextInput,
    SelectInput,
    ControlledInput,
  },
  data() {
    return {
      passwordValue: '',
      emailValue: '',
      textareaValue: '',
      textInputValue: '',
      selectedValue: '',
      checkboxValue: false,
      radioValue: '',
      selectOptions: [
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 2', value: 'option2' },
        { label: 'Option 3', value: 'option3' },
      ],
      checkboxOptions: [
        { label: 'Option A', value: 'optionA' },
        { label: 'Option B', value: 'optionB' },
        { label: 'Option C', value: 'optionC' },
      ],
      radioOptions: [
        { label: 'Option X', value: 'optionX' },
        { label: 'Option Y', value: 'optionY' },
        { label: 'Option Z', value: 'optionZ' },
      ],
    };
  },
};
</script>
