import Vuex from 'vuex'
import Vue from 'vue'
import counter from './counter'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    counter
  }
})
