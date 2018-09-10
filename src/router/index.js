import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/views/Index'
import Detail from '@/views/Detail'
import Pano from '@/views/Pano'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Default',
      component: Index
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
     {
      path: '/detail',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/pano',
      name: 'Pano',
      component: Pano
    }
  ]
})
