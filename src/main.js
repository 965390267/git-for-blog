// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/reset.css'

import  './assets/css/style.css'
import  './assets/css/bootstrap.css'
import './assets/css/loginstyle.css'
import  './assets/css/style-responsive.css'
import  './assets/css/table-responsive.css'
import  './assets/font-awesome/css/font-awesome.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false
// Vue.use(Menu)
// Vue.use(Submenu)
Vue.use(ElementUI);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
