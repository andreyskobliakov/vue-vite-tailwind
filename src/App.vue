<template>
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
          <AppButton color="CustomButtonlogin" style="customlogin" size="small" class="CustomButton-login">
            <template #icon>
              <Icon iconName="login"></Icon>
            </template>
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
      </div>
  </template>
  
  <script>
  import AppButton from './components/AppButton.vue';
  import Icon from './components/Icon.vue';
  
  export default {
    components: {
      AppButton,
      Icon,
    },
  };
  </script>
  
  <style scoped>
  </style>
  