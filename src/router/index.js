import Vue from 'vue'
import Router from 'vue-router'
import HomeView from '@/views/Home'
import IndexView from '@/views/Index'
import AboutView from '@/views/About'
import WorkView from '@/views/Work'
import ContactView from '@/views/Contact'
Vue.use(Router)

export default new Router({
  mode: 'hash',
  scrollBehavior: function () {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      redirect: '/About'
    },
    {
      path: '/About',
      name: 'About',
      component: AboutView
    },
    {
      path: '/Work',
      name: 'Work',
      component: WorkView
    },
    {
      path: '/Contact',
      name: 'Contact',
      component: ContactView
    }
  ]
})
