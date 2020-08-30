import Vue from 'vue'
import App from './App.vue'
import router from './router'


// Загрузка шаблонов
import MainLayout from "./layouts/main/index";
import EmptyCenterLayout from "./layouts/empty-center/index";

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
// Регистрация шаблонов
Vue.component('main-layout', MainLayout);
Vue.component('empty-center-layout', EmptyCenterLayout);


Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
