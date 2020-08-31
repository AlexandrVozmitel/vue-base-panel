import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
  // Базовый маршруты
  {
    path: '/sign-in',
    name: 'signIn', // Вход
    component: () => import('./pages/signIn.vue'),
    meta: {
      auth: 'guest',
      layout: 'empty-center',
    },
  },
  {
    path: '/sign-up',
    name: 'signUp', // Регистрация
    component: () => import('./pages/signUp.vue'),
    meta: {
      auth: 'guest',
      layout: 'empty-center',
    },
  },
  {
    path: '/password-reset',
    name: 'passwordReset', // Сброс пароля
    component: () => import('./pages/passwordResetNew.vue'),
    meta: {
      auth: 'guest',
      layout: 'empty-center',
    },
  },
  {
    path: '/password-reset/:code',
    component: () => import('./pages/passwordResetEdit.vue'),
    meta: {
      auth: 'guest',
      layout: 'empty-center',
    },
  },


  // Главные маршруты
  {
    path: '/',
    name: 'home', // Главная
    component: () => import('./pages/home.vue'),
    meta: {
      layout: 'main',
    },
  },

  {
    path: '/host-group',
    name: 'hostGroup',
    component: () => import('./pages/host/group'),
    meta: {
      layout: 'main',
    },
  },
  {
    path: '/host-group/:group_id',
    name: 'hostGroupEdit',
    component: () => import('./pages/host/groupEdit'),
    meta: {
      layout: 'main',
    },
  },
  {
    path: '/host-group/:group_id/link',
    name: 'hostGroupLink',
    component: () => import('./pages/host/groupLink'),
    meta: {
      layout: 'main',
    },
  },


  // Админские маршруты
  {
    path: '/admin/users',
    name: 'userList', // Таблица с пользователями
    component: () => import('./pages/admin/userList.vue'),
    meta: {
      layout: 'main',
    },
  },
  {
    path: '/admin/user/:id',
    name: 'userEdit', // Редактирование пользователя
    component: () => import('./pages/admin/userEdit.vue'),
    meta: {
      layout: 'main',
    },
  },



];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
