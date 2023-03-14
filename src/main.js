import { createApp } from 'vue'
import { createPinia } from 'pinia'
import axios from 'axios'
import VueAxios from 'vue-axios'

import App from './App.vue'
import router from './router'

import './assets/main.css'
//theme
import "primevue/resources/themes/arya-orange/theme.css";     
    
//core
import "primevue/resources/primevue.min.css";

//icons
import "primeicons/primeicons.css";

import Button from "primevue/button"

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueAxios, axios)

app.component('p-button', Button);

app.mount('#app')
