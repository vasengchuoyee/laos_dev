import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutViewVue from '../views/AboutView.vue'
// import Test from '../views/Test.vue'
import Logins from '../views/Logins.vue'
import Admins from '../views/Admins.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/',
      name: 'about',
      component: AboutViewVue,
    },
    // {
    //   path: '/test',
    //   name: 'test',
    //   component: Test,
    // },
    {
      path: '/logins',
      name: 'logins',
      component: Logins,
    },
    {
      path: '/admins',
      name: 'admins',
      component: Admins,
    },
  ]
})

export default router
