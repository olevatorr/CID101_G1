import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior() {
    return { top: 0 }
  },

  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
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
      path: '/Knowledge',
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
      path: '/ProfileView',
      name: 'ProfileView',
      component: () => import('../views/ProfileView.vue')
    },
    {
      path: '/beachgame',
      name: 'beachgame',
      component: () => import('../views/BeachgameView.vue')
    },
    {
      path: '/Mbti',
      name: 'Mbti',
      component: () => import('../views/MbtiView.vue')
    },
    {
      path: '/mallcart',
      name: 'mallcart',
      component: () => import('../views/MallcartView.vue')
    },
    {
      path: '/news',
      name: 'news',
      component: () => import('../views/NewsView.vue')
    },
    {
      path: '/Newsinner/:id',
      name: 'Newsinner',
      component: () => import('../views/NewsinnerView.vue')
    },
    {
      path: '/TestView',
      name: 'TestView',
      component: () => import('../views/TestView.vue')
    },
    {
      path: '/DonatePage',
      name: 'DonatePage',
      component: () => import('../views/DonatePage.vue') // 捐款確認頁面
    },
    {
      path: '/Donate',
      name: 'Donate',
      component: () => import('../views/DonateView.vue') // 捐款表單頁面
    },
  ]
});

export default router;
