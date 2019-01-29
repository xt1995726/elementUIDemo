import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App'
import Form from '@/components/form/form'

Vue.use(Router)

export default new Router({
  'linkActiveClass': 'active',
  routes: [
    {
      path: '/',
      component: App,
      children: [
        { path: '/form', component: Form, name: 'form', class: 'fa-newspaper-o'}
      ]
    }
  ]
})
