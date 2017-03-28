<template lang="pug">
  div.me
    div.viewer
      div.viewer-inner
        h1 Me
</template>

<script>
  export default {
    name: 'me'
  }
</script>

<style lang="sass" scoped>
  .me > .viewer
    margin-left: 320px

  .viewer-inner
    height: calc(90% - 100px)
    padding: 40px

  @media (max-width: 1130px)
    .me > .viewer
      margin-left: 200px
</style>
