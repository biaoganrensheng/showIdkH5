import Vue from 'vue'
import App from './App'
import router from './router'
import setWechatTitle from './configPro/setWecharTitle'
import './configPro/rem'
import FastClick from 'fastclick'

import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'

import {post, fetch, patch, put} from './configPro/fetch'

Vue.prototype.$post = post
Vue.prototype.$get = fetch
Vue.prototype.$patch = patch
Vue.prototype.$put = put

if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function () {
    FastClick.attach(document.body)
  }, false)
}
router.afterEach((transition) => {
  let title = transition.meta.title
  setWechatTitle(title)
})
Vue.use(Mint)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
