import Vue from 'vue'
import App from './App.vue'
import router from './router'


Vue.use(VueAxios, axios);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);


// Загрузка шаблонов
import MainLayout from "./layouts/main/index";
import EmptyCenterLayout from "./layouts/empty-center/index";

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import axios from 'axios'
import VueAxios from 'vue-axios'

// Регистрация шаблонов
Vue.component('main-layout', MainLayout);
Vue.component('empty-center-layout', EmptyCenterLayout);


Vue.config.productionTip = false;
axios.defaults.baseURL = 'http://api.dev.cmtyomg.com/cto1';

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
