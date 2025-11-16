import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import IlLocale from '../views/IlLocale.vue'
import Gin from '../views/Gin.vue'
import News from '../views/News.vue'
import Menu from '../views/Menu.vue'
import Galleria from '../views/Galleria.vue'
import Contatti from '../views/Contatti.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/il-locale',
    name: 'IlLocale',
    component: IlLocale
  },
  {
    path: '/gin',
    name: 'Gin',
    component: Gin
  },
  {
    path: '/news',
    name: 'News',
    component: News
  },
  {
    path: '/menu',
    name: 'Menu',
    component: Menu
  },
  {
    path: '/galleria',
    name: 'Galleria',
    component: Galleria
  },
  {
    path: '/contatti',
    name: 'Contatti',
    component: Contatti
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router
