import Vuex from 'vuex'
import Vue from 'vue'
import counter from './counter'
import lang from './lang'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    counter,
    lang
  }
})
