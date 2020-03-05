import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'entrance',
    component: () => import(/* webpackChunkName: "Entrance" */ '../views/Entrance.vue'),
    children: [
      {
        path: '/',
        name: 'Login',
        component: () => import(/* webpackChunkName: "Login" */ '../views/Login.vue')
      },
      {
        path: '/register',
        name: 'Register',
        component: () => import(/* webpackChunkName: "Register" */ '../views/Register.vue')
      }
    ]
  },
  {
    path: '/my',
    name: 'my',
    component: () => import(/* webpackChunkName: "Home" */ '../views/Home.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import(/* webpackChunkName: "Register" */ '../views/Register.vue')
      },
      {
        path: '/colleagues',
        name: 'colleagues',
        component: () => import(/* webpackChunkName: "Register" */ '../views/Register.vue')
      },
      {
        path: '/plan',
        name: 'plan',
        component: () => import(/* webpackChunkName: "Register" */ '../views/Register.vue')
      },
      {
        path: '/recommendation',
        name: 'recommendation',
        component: () => import(/* webpackChunkName: "Register" */ '../views/Register.vue')
      },
      {
        path: '/settings',
        name: 'settings',
        component: () => import(/* webpackChunkName: "Register" */ '../views/Register.vue')
      },
    ]
  }
];

const router = new VueRouter({
  routes,
});

export default router;
