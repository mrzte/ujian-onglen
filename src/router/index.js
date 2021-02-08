import { createRouter, createWebHistory } from 'vue-router'
import ContentFrontend from '../views/Frontend/Content.vue'
import ContentBackend from '../views/Backend/Content.vue'
import store from '../store'
// import { replace } from 'core-js/fn/symbol'

const routes = [
  {
    path: '/',
    name: 'ContentFrontend',
    component: ContentFrontend,
    replace:true
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: ContentBackend,
    replace:true,
    meta:{
      requiresAuth:true
    }
  },
  {
    path: '/profile/:username',
    name: 'Profile',
    component: ContentBackend,
    replace:true
  },
]

const router = createRouter({ 
  history: createWebHistory(),
  routes
})

router.beforeEach(async(to, from, next) => {
  const isAuth = store.state.user[0].isAuth
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  if (requiresAuth && !isAuth) next({ name:'ContentFrontend'})
  else next()
})

export default router
