import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/events',
      name: 'events',
      component: () => import('../views/EventsView.vue')
    },
    {
      path: '/Member',
      name: 'Member',
      component: () => import('../views/MemberView.vue')
    },
    {
      path: '/KnowledgeView',
      name: 'Knowledge',
      component: () => import('../views/KnowledgeView.vue')
    },
    {
      path: '/ForgetPasswordView',
      name: 'ForgetPasswordView',
      component: () => import('../views/ForgetPasswordView.vue')
    },
    {
      path: '/RegisterView',
      name: 'RegisterView',
      component: () => import('../views/RegisterView.vue')
    },
    {
      path: '/shop',
      name: 'shop',
      component: () => import('../views/ShopView.vue')
    },
    {
      path: '/productinfo',
      name: 'productinfo',
      component: () => import('../views/ProductinfoView.vue')
    },
    {
<<<<<<< HEAD
      path: '/news',
      name: 'news',
      component: () => import('../views/NewsView.vue')
    },
    {
      path: '/beachgameView',
      name: 'beachgame',
      component: () => import('../views/BeachgameView.vue')
    },
    {
      path: '/mbti',
      name: 'mbti',
      component: () => import('../views/MbtiView.vue')
    },
=======
      path: '/mallcart',
      name: 'mallcart',
      component: () => import('../views/MallcartView.vue')
    }
    // {
    //   path: '/news',
    //   name: 'news',
    //   component: () => import('../views/NewsView.vue')
    // }
>>>>>>> shop
  ]
})

export default router
