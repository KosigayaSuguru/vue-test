import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Bar from '@/components/Bar'
import Screen1 from '@/components/Screen1'

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
    }
  ]
})
