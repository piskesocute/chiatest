import Vue from 'vue'
import VueRouter from 'vue-router'
import { auth } from '@/plugins/firebase'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/sign-in',
    name: 'SignIn',
    component: () => import('../views/SignIn.vue'),
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/items',
    name: 'Items',
    component: () => import('../views/StoreManageTools/Items.vue'),
    meta: {
      requiresAuth: true
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const currentUser = auth.currentUser
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!currentUser) {
      next({ name: 'SignIn', query: { redirect: to.fullPath } });
      return
    } 
  }
  next();
});

export default router
