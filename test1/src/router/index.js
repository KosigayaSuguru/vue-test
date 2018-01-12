import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Screen1 from '@/components/Screen1'
import Store from '@/components/Store'
import Image from '@/components/imageList/Image'
import Movie from '@/components/movieList/Movie'
import Input from '@/components/input/Input'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
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
    },
    {
      path: '/movie',
      name: 'Movie',
      component: Movie
    },
    {
      path: '/input',
      name: 'Input',
      component: Input
    }
  ]
})
