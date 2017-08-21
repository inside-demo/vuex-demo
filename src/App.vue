<template>
  <div id="app">
    <img src="./assets/logo.png">
    <increment/>
    <counter/>
    <button @click.prevent="setRu">ru</button>
    <button @click.prevent="setEn">en</button>
  </div>
</template>

<script>
import Counter from './components/counter.vue'
import Increment from './components/increment.vue'
import store from './store'

export default {
  name: 'app',
  components: {
    Counter,
    Increment
  },
  methods: {
    setRu () {
      store.dispatch('changeLang', 'ru_RU')
    },
    setEn () {
      store.dispatch('changeLang', 'en_EN')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
