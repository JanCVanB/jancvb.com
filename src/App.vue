<template lang="pug">
  div#app
    menu-bar
    div.header Jan C. Van Bruggen
    router-view.full-lower-height
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
  @font-face
    font-family: 'NeoRetroDraw'
    src: url('assets/fonts/NeoRetroDraw.ttf')

  html, body
    background-color: #eff2f7
    height: 100%
    margin: 0

  #app
    font-family: 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    background-color: #eff2f7
    color: #2c3e50
    height: 100%
    position: relative

  .full-lower-height
    height: calc(100% - 60px)

  .viewer
    display: inline-block
    height: 100%
    vertical-align: top
    width: calc(100% - 640px)

  .viewer-inner
    background-color: #ffffff
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)
    height: calc(90% - 80px)
    margin: 10px
    overflow-y: scroll
    padding: 30px 40px
    width: calc(100% - 100px)

  .viewer-inner h1
    margin-top: 0

  @media (max-width: 1130px)
    .viewer
      width: calc(100% - 400px)
</style>

<style lang="sass" scoped>
  .header
    position: absolute
    left: 0
    right: 0
    top: 10px
    color: #0881db
    font-family: 'NeoRetroDraw'
    font-size: 30pt
    text-align: center
    pointer-events: none
</style>
