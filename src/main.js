import { createApp } from 'vue'
import App from './App.vue'
import  router from './router'
import 'bootstrap'
import store from './store'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import VueFormulate from '@braid/vue-formulate'

createApp(App).use(router).use(store).use(VueSweetalert2).use(VueFormulate.default).mount('#app')