<template lang="pug">
  div#app
    menu-bar
    router-view
</template>

<script>
  import MenuBar from '@/components/MenuBar'

  export default {
    name: 'app',
    components: {
      MenuBar
    }
  }
</script>

<style lang="sass">
  body
    margin: 0

  #app
    font-family: 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    text-align: center
    color: #2c3e50
</style>
