// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

// Vue.config.productionTip = false
Vue.config.devetools = true

Vue.directive('translate-attr', {
  bind (el, binding) {
    el[binding.arg] = store.getters.dictionary[store.getters.lang][binding.expression]
  },
  update (el, binding) {
    el[binding.arg] = store.getters.dictionary[store.getters.lang][binding.expression]
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
