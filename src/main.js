import Vue from 'vue'
import App from './App.vue'
import router from './router'


// Загрузка шаблонов
import MainLayout from "./layouts/main/index";
import EmptyCenterLayout from "./layouts/empty-center/index";
// Регистрация шаблонов
Vue.component('main-layout', MainLayout);
Vue.component('empty-center-layout', EmptyCenterLayout);


Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
