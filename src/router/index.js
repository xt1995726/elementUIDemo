import Vue from 'vue'
import Router from 'vue-router'
import Form from '@/components/form/form'
import Table from '@/components/table/table'

Vue.use(Router)

let routes = [
  { path: '/form', component: Form, name: 'form', class: 'fa-newspaper-o' },
  { path: '/table', component: Table, name: 'table', class: 'fa-table' },
];

export default new Router({
  'linkActiveClass': 'active',
  routes
})
