import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/organization',
    name: 'Organization',
    component: () => import('../views/Organization.vue')
  },
  {
    path: '/edit/:id',
    name: 'Edit',
    component: () => import('../views/Edit.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
