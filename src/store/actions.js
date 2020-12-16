import {
  ADD_COUNTER,
  ADD_TO_CART
} from "./mutation-types";

export default {
  addCart(context, payload){
    return new Promise((resolve, reject)=>{
      // [state, commit] = context
      // 对比iid是否重复，重复则数量加一，新的则添加
      let oldproduct = context.state.cartList.find(item => item.iid===payload.iid)

      if (oldproduct){
        context.commit(ADD_COUNTER, oldproduct)
        resolve('当前商品+1')
      }else{
        payload.count = 1
        context.commit(ADD_TO_CART, payload)
        resolve('加入购物车')
      }
    })
  }
}
