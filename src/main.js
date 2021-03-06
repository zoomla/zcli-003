import '@babel/polyfill'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 自定义组件
import ZoomlaFoot from './components/ZoomlaFoot.vue'
import ZoomlaKefu from './components/ZoomlaKefu.vue'
import Zoomla_plus_iteam from './components/Zoomla_plus_iteam.vue'


// 自定义引用
import "zico/css/zico.min.css";
import Meta from 'vue-meta'


Vue.config.productionTip = false
Vue.component('ZoomlaFoot', ZoomlaFoot)
Vue.component('ZoomlaKefu', ZoomlaKefu)
Vue.component('Zoomla_plus_iteam', Zoomla_plus_iteam)
Vue.use(Meta)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
