import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Bar from '@/components/Bar'
import Screen1 from '@/components/Screen1'
import Store from '@/components/Store'
import Image from '@/components/imageList/Image'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/bar',
      name: 'Bar',
      component: Bar
    },
    {
      path: '/screen1',
      name: 'Screen1',
      component: Screen1
    },
    {
      path: '/store',
      name: 'Store',
      component: Store
    },
    {
      path: '/image',
      name: 'Image',
      component: Image
    }
  ]
})
