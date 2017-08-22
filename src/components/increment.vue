<template>
  <div>
    <input type="text" v-translate-attr:placeholder="'Home' | translate">
    <button @click.prevent="activate">+1</button>
  </div>
</template>

<script>
import store from '../store/'

export default {
  methods: {
    activate () {
      store.dispatch('increment')
    },
    translate () {
      console.log(this)
    }
  }
}
</script>

<style>
</style>
