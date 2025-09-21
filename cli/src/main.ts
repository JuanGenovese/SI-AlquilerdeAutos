import { createApp } from 'vue';
import { Quasar } from 'quasar';
import { createPinia } from 'pinia'
import App from './App.vue'
import router from '../src/router/index.js'
import './assets/base.css'


import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'


const app = createApp(App).use(Quasar, {
    plugins: {},
    config: {
        iconSet: 'material-icons'
    }
})
app.use(router)
app.use(createPinia())
app.mount('#app')





