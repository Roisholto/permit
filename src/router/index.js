import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    redirect:{name:'home'}
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/permit',
    component: ()=>import(/* webpackChunkName: "rpermit" */ '@/components/RequestPermit.vue'),
    children:[
      {
      path:'work',
      name: 'request-work',
      component: () => import(/* webpackChunkName: "rpermit" */ '@/components/WorkPermit.vue')
      },
      {
      path:'personal',
      name: 'request-personal',
      component: () => import(/* webpackChunkName: "rpermit" */ '@/components/PersonalPermit.vue')
      },
    ]

  }
]

const router = new VueRouter({
  routes
})

export default router
