import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import SignIn from '@/views/SignIn.vue'
import UserDashboard from '@/views/UserDashboard.vue'
import ManagerDashboard from '@/views/ManagerDashboard.vue'
import AdminDashboard from '@/views/AdminDashboard.vue'
import SignUp from '@/views/SignUp.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/signIn',
    name: 'signIn',
    component: SignIn
  },
  {
    path: '/signup',
    name: 'signUp',
    component: SignUp
  },
  {
    path: '/dashboard/user',
    name: 'userDashboard',
    component: UserDashboard
  },
  {
    path: '/dashboard/manager',
    name: 'managerDashboard',
    component: ManagerDashboard
  },
  {
    path: '/dashboard/admin',
    name: 'adminDashboard',
    component: AdminDashboard
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
