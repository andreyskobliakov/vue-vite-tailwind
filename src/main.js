import { createApp } from 'vue'
import './assets/css/app.scss'
import App from './App.vue'
import Color from './components/Color.vue' // Путь к вашему Color.vue компоненту

const app = createApp(App)

app.component('Color', Color) // Регистрируем компонент

app.mount('#app')