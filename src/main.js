import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import style from './style'

window.$ = window.jQuery = require('jquery');
createApp(App).use(store).use(style).use(router).mount('#app')
