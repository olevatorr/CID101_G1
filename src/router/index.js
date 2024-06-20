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
      component: HomeView,
      meta: {title:"藍色警戒 BLUE ALERT"}
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      meta: {title:"關於我們"}
    },
    {
      path: '/events',
      name: 'events',
      component: () => import('../views/EventsView.vue'),
      meta: {title:"活動頁面"}
    },
    {
      path: '/Member',
      name: 'Member',
      component: () => import('../views/MemberView.vue'),
      meta: {title:"會員登入"}
    },
    {
      path: '/Knowledge',
      name: 'Knowledge',
      component: () => import('../views/KnowledgeView.vue'),
      meta: {title:"教育中心"}
    },
    {
      path: '/ForgetPasswordView',
      name: 'ForgetPasswordView',
      component: () => import('../views/ForgetPasswordView.vue'),
      meta: {title:"忘記密碼"}
    },
    {
      path: '/RegisterView',
      name: 'RegisterView',
      component: () => import('../views/RegisterView.vue'),
      meta: {title:"會員註冊"}
    },
    {
      path: '/shop',
      name: 'shop',
      component: () => import('../views/ShopView.vue'),
      meta: {title:"購物商城"}
    },
    {
      path: '/productinfo',
      name: 'productinfo',
      component: () => import('../views/ProductinfoView.vue'),
      meta: {title:"商品資訊"}
    },
    {
      path: '/ProfileView',
      name: 'ProfileView',
      component: () => import('../views/ProfileView.vue'),
      meta: {title:"會員專區"}
    },
    {
      path: '/beachgame',
      name: 'beachgame',
      component: () => import('../views/BeachgameView.vue'),
      meta: {title:"淨灘小遊戲"}
    },
    {
      path: '/Mbti',
      name: 'Mbti',
      component: () => import('../views/MbtiView.vue'),
      meta: {title:"海廢Q&A"}
    },
    {
      path: '/mallcart',
      name: 'mallcart',
      component: () => import('../views/MallcartView.vue'),
      meta: {title:"結帳頁面"}
    },
    {
      path: '/news',
      name: 'news',
      component: () => import('../views/NewsView.vue'),
      meta: {title:"最新消息"}
    },
    {
      path: '/Newsinner/:id',
      name: 'Newsinner',
      component: () => import('../views/NewsinnerView.vue'),
      meta: {title:"消息頁面"}
    },
    {
      path: '/TestView',
      name: 'TestView',
      component: () => import('../views/TestView.vue')
    },
    {
      path: '/DonatePage',
      name: 'DonatePage',
      component: () => import('../views/DonatePage.vue'), // 捐款確認頁面
      meta: {title:"捐款頁面"}
    },
    {
      path: '/Donate',
      name: 'Donate',
      component: () => import('../views/DonateView.vue'),// 捐款表單頁面
      meta: {title:"捐款專區"} 
    },
  ]
});

export default router;

router.beforeEach((to, from, next) => {
  // 如果路由中有 meta.title，則設置頁面title
  if (to.meta.title) {
    document.title = to.meta.title;
  } else {
    document.title = '默認標題'; //默認標題
  }
  next();
});
