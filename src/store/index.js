import Vue from 'vue'
import Vuex from 'vuex'

import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";

//安装插件
Vue.use(Vuex)

//创建Store对象
const store = new Vuex.Store({
  state:{
    cartList:[]
  },
  mutations,
  actions,
  getters
})

//挂载在Vue实例上
export default store
