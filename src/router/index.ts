import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
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
    component: () => import(/* webpackChunkName: "Home" */ '../views/Home.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import(/* webpackChunkName: "Panel" */ '../views/Panel.vue'),
        children: [
          {
            path: '/my/details',
            name: 'details',
            component: () => import(/* webpackChunkName: "Details" */ '../views/Details.vue')
          }
        ]
      },
      {
        path: '/colleagues',
        name: 'colleagues'
      },
      {
        path: '/plan',
        name: 'plan'
      },
      {
        path: '/recommendation',
        name: 'recommendation'
      },
      {
        path: '/settings',
        name: 'settings'
      },
    ]
  }
];

const router = new VueRouter({
  routes,
});

export default router;
