import mutationTypes from '../mutationTypes'
import actionTypes from '../actionTypes'

export default {
    state: {
      cartList: [],
      isAllChecked: false
    },
    mutations: {
        [mutationTypes.ADDTOCART](state, payload) {
          if(state.cartList.some(item => item.iid == payload.product.iid)){
            state.cartList.forEach(item=> {
              if(item.iid == payload.product.iid){
                item.amount += 1
                this.$toast.show('商品数量+1')
              }
            })
          }else{
            state.cartList.push(payload.product)
            this.$toast.show('成功添加至购物车')
          }
        },
        [mutationTypes.INCREMENTAMOUNT](state, payload) {
          state.cartList.forEach(item=> {
            if(item.iid == payload.iid) {
              item.amount++
            }
          })
        },
        [mutationTypes.DECREMENTAMOUNT](state, payload) {
          state.cartList.forEach(item=> {
            if(item.iid == payload.iid) {
              item.amount--
            }
          })
        },
        [mutationTypes.ALLCHECKEDCHANGE](state) {
          state.isAllChecked = !state.isAllChecked
          state.cartList.forEach(item=> {
            item.isChecked = state.isAllChecked
          })
        },
        [mutationTypes.SINGLECHECKEDCHANGE](state, payload) {
          state.cartList.forEach(item=> {
            if(item.iid == payload.iid){
              item.isChecked = !item.isChecked
            }
          })
          state.isAllChecked = state.cartList.every(item => item.isChecked == true)
        }
    },
    actions: {
      [actionTypes.INCREMENTAMOUNT](context, payload) {
        setTimeout(() => {
          context.commit({
            type: mutationTypes.INCREMENTAMOUNT,
            iid: payload.iid
          })
        }, 1000)
      },
      [actionTypes.DECREMENTAMOUNT](context, payload) {
        setTimeout(() => {
          context.commit({
            type: mutationTypes.DECREMENTAMOUNT,
            iid: payload.iid
          })
        }, 1000)
      }
    },
    getters: {
      cartListCount(state) {
          return state.cartList.filter(item => item.isChecked == true).reduce((preValue, item) => {
            return preValue + item.price * item.amount
        },0)
      },
      cartListLength(state) {
        return state.cartList.length
      },
      cartListCheckedLength(state) {
        return state.cartList.filter(item => item.isChecked == true).length
      }
    }
}