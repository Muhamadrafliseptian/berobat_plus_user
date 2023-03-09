import { createApp } from 'vue'
import App from './App.vue'
import  router from './router'
import 'bootstrap'
import store from './store'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import './app.css'
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'


createApp(App).use(router).use(store).use(VueSweetalert2).use('VueDatePicker', VueDatePicker).mount('#app')