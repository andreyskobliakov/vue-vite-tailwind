<template>
    <div>
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
    <div class="flex flex-col justify-center items-center px-4 py-8 md:px-10 md:py-8">
  <div class="grid grid-cols-4 gap-8 items-center" :class="themeClasses">
    <template v-for="(items, index) in baseColors" :key="index + selectedTheme">
      <template v-for="item in items" :key="item.label">
        <div class="w-full">
          <ColorCard
            :card-classes="item.value"
            :label="item.label"
            :hideDescription="item.hideDescription"
            class="border border-gray-300 rounded-xl p-7 shadow-xl text-center"
          />
        </div>
      </template>
    </template>
  </div>
</div>

</div>
</div>

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
  <div class="p-4">
      <div class="mb-4">
        <h2 class="text-xl font-semibold mb-2">BUTTON Style</h2>
        <div class="flex space-x-4">
          <AppButton color="primary">Default</AppButton>
          <AppButton color="secondary">Outlined</AppButton>
          <AppButton color="success">Tonal</AppButton>
          <AppButton color="danger">TEXT</AppButton>
          <AppButton color="warning">Plain</AppButton>
          <AppButton color="secondary" type="contained" size="medium" class="m-2" :disabled="true">Disabled Button</AppButton>
        </div>
      </div>
      <div class="container mx-auto mt-8 p-4">
        <div class="mb-4">
          <AppButton color="customButton" type="customButton" size="medium" class="CustomButton">
            <template #icon>
              <Icon iconName="chat"></Icon>
            </template>
            CALL TO ACTION
          </AppButton>
        </div>
        <div class="mb-4">
          <AppButton class= "bg-gradient-to-t from-blue-500 via-blue-600 to-blue-700 text-white font-semibold py-2 px-4 rounded hover:bg-gradient-to-t hover:from-green-500 hover:via-green-600 hover:to-green-700 transition duration-300 ease-in-out" size="small">
            LOGIN
          </AppButton>
        </div>
        </div>
        <div class="Aroww icon">
          <div class="mt-8 icons flex space-x-4">
            <Icon iconName="arrow_back_ios_new"></Icon>
            <Icon iconName="arrow_forward_ios"></Icon>
            <Icon iconName="expand_less"></Icon>
            <Icon iconName="expand_more"></Icon>
          </div>
          <div class="icons">
            <div class="mt-8 icons flex space-x-4">
              <Icon iconName="home"></Icon>
              <Icon iconName="close"></Icon>
              <Icon iconName="visibility"></Icon>
              <Icon iconName="visibility_off"></Icon>
              <Icon iconName="favorite"></Icon>
              <Icon iconName="calendar_today"></Icon>
              <Icon iconName="check"></Icon>
              <Icon iconName="edit"></Icon>
              <Icon iconName="delete"></Icon>
              <Icon iconName="star"></Icon>
              <Icon iconName="star_half"></Icon>
            </div>
  </div>
          </div>
    <div class="flex justify-center space-x-4">
    <AppButton color="CustomButtonLink" size="large" href="https://www.google.com">GOOGLE</AppButton>
    <AppButton color="customButton" size="large" to="/about">ABOUT</AppButton>
  </div>
  </div>

  <div id="app">
    <custom-button :showButton="true" buttonText="Start">
      <template v-slot:icon>
        <i class="fa fa-star"></i> 
      </template>
    </custom-button>

    <custom-button :showButton="false">
      <template v-slot:icon>
        <i class="fa fa-star"></i> 
      </template>
    </custom-button>
  </div>
  <div>
  <AppButton color="button" size="large" shape="square" value="Click me!"><i class="fa fa-trash"></i> Delete </AppButton>
  <AppButton color="button" size="medium" shape="fab" value="Click me!"><i class="fa fa-cart-plus"></i></AppButton>
  </div>
  </template>
  
  <script>
import { ref, computed } from 'vue';
import AppButton from './components/AppButton.vue';
import Icon from './components/Icon.vue';
import ColorCard from './components/ColorCard.vue';
import InputWrapper from './components/Wrapper/InputWrapper.vue';
import CustomInput from './components/Wrapper/CustomInput.vue';
import baseColors from './base/Colors.json';
import CustomEmailInput from './components/Wrapper/CustomEmailInput.vue';
import TextareaInput from './components/Wrapper/TextareaInput.vue';
import TextInput from './components/wrapper/TextInput.vue';
import SelectInput from './components/wrapper/SelectInput.vue';
import ControlledInput from './components/wrapper/ControlledInput.vue';
import CustomButton from "./components/CustomButton.vue";


export default {
  components: {
    AppButton,
    Icon,
    ColorCard,
    CustomInput,
    CustomEmailInput,
    TextareaInput,
    TextInput,
    SelectInput,
    ControlledInput,
    InputWrapper,
    CustomButton,
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
      baseColors: baseColors,
    };
  },
  setup() {
    const themes = ['default', 'secondary'];
    const selectedTheme = ref('default');
    const defaultInputValue = ref('');

    const themeClasses = computed(() => `theme-${selectedTheme.value}`);

    const onSetTheme = (newTheme) => {
      selectedTheme.value = newTheme;
    };

    const updateDefaultInputValue = () => {
      defaultInputValue.value = selectedTheme.value;
    };

    const updateCustomInputValue = () => {
      selectedTheme.value = defaultInputValue.value;
    };

    return {
      themes,
      selectedTheme,
      defaultInputValue,
      themeClasses,
      onSetTheme,
      updateDefaultInputValue,
      updateCustomInputValue,
    };
  },
};
</script>

  
  <style scoped>
  </style>
  