import Vue from 'vue'
import Router from 'vue-router'
const Home = r => require.ensure([], () => r(require('@/views/Home.vue')), 'Home')
const List = r => require.ensure([], () => r(require('@/views/List.vue')), 'List')
const ListDetail = r => require.ensure([], () => r(require('@/views/ListDetail.vue')), 'ListDetail')
const City = r => require.ensure([], () => r(require('@/views/City.vue')), 'City')
Vue.use(Router)

export default new Router({
  base: '/adkh5/',
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      meta: { title: '项目册' },
      component: Home
    },
    {
      path: '/list',
      name: 'list',
      meta: { title: '项目列表' },
      component: List
    },
    {
      path: '/listDetail',
      name: 'listDetail',
      meta: { title: '项目详情' },
      component: ListDetail
    },
    {
      path: '/city',
      name: 'city',
      meta: { title: '选择城市' },
      component: City
    }
  ]
})
