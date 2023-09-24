<template>
    <div class="p-4">
      <div class="mb-4">
        <h2 class="text-xl font-semibold mb-2">BUTTON Style</h2>
        <div class="flex space-x-4">
          <Button color="primary">Default</Button>
          <Button color="secondary">Outlined</Button>
          <Button color="success">Tonal</Button>
          <Button color="danger">TEXT</Button>
          <Button color="warning">Plain</Button>
          <Button color="secondary" style="contained" size="medium" additionalClasses="m-2" :disabled="true">Disabled Button</Button>
        </div>
      </div>
      <div class="container mx-auto mt-8 p-4">
        <div class="mb-4">
          <Button color="custom" style="custom" size="medium" additionalClasses="my-custom-classes">
            <template #icon>
              <Icon iconName="chat"></Icon>
            </template>
            CALL TO ACTION
          </Button>
        </div>
        <div class="mb-4">
          <Button color="customlogin" style="customlogin" size="small" additionalClasses="custom-login">
            <template #icon>
              <Icon iconName="login"></Icon>
            </template>
            LOGIN
          </Button>
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
  import Button from './components/Button.vue';
  import Icon from './components/Icon.vue';
  
  export default {
    components: {
      Button,
      Icon,
    },
  };
  </script>
  
  <style scoped>
  </style>
  