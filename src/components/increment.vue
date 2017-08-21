<template>
  <div>
    <button @click.prevent="activate">+1</button>
  </div>
</template>

<script>
import store from '../store/'

export default {
  methods: {
    activate () {
      store.dispatch('increment')
    }
  }
}
</script>

<style>
</style>
