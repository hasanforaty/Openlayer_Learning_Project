import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Vuetify from "./plugins/vuetify.ts";
import Router from "./router";
import './assets/fonts/font.css'
import './assets/css/style.css'
import '@fortawesome/fontawesome-free/css/all.css' // Ensure your project is capable of handling css files

const app = createApp(App)

app.use(Vuetify)
app.use(Router)

app.mount('#app')
