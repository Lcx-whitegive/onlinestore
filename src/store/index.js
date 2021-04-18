import Vue from 'vue'
import Vuex from 'vuex'

import actions from './action'
import mutations from './mutation'
import getters from './getter'

import cart from './modules/cart'

Vue.use(Vuex)

const state = {

}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    cart
  }
})
