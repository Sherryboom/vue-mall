import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store";
import toast from 'components/common/toast'
import VueLazyload from "vue-lazyload";

import FastClick from 'fastclick'

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()

// 安装toast插件，use会调用toast的install函数
Vue.use(toast)

//解决移动端的300ms延迟
FastClick.attach(document.body)

Vue.use(VueLazyload, {
  loading: require('./assets/img/common/placeholder.png')
})

new Vue({
  render: h => h(App),
  router,
  store,
  // toast
}).$mount('#app')
