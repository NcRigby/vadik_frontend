import { createRouter, createWebHashHistory } from 'vue-router'
import app from '../App.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: app
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
