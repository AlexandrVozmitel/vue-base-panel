import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store';

import vuetify from './plugins/vuetify'


Vue.use(VueAxios, axios);


// Загрузка шаблонов
import MainLayout from "./layouts/main/index";
import EmptyCenterLayout from "./layouts/empty-center/index";

// Регистрация шаблонов
Vue.component('main-layout', MainLayout);
Vue.component('empty-center-layout', EmptyCenterLayout);


Vue.config.productionTip = false;
axios.defaults.baseURL = 'http://b951959k.beget.tech/apis/';

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app');
