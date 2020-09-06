import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'


import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.min.css'


Vue.use(VueAxios, axios);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);


// Загрузка шаблонов
import MainLayout from "./layouts/main/index";
import EmptyCenterLayout from "./layouts/empty-center/index";

// Регистрация шаблонов
Vue.component('main-layout', MainLayout);
Vue.component('empty-center-layout', EmptyCenterLayout);


Vue.config.productionTip = false;
axios.defaults.baseURL = 'http://api.dev.cmtyomg.com/cto1';

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
