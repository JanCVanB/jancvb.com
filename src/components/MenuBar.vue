<template lang="pug">
  el-menu.menu-bar(
    v-bind:default-active='activePath'
    mode='horizontal'
    v-bind:router='true'
  )
    el-menu-item(index='/project') Projects
    el-menu-item(index='/interest') Interests
    el-menu-item(index='/blog') Blogs
    el-menu-item(index='/me') Me
</template>

<script>
  export default {
    name: 'menu-bar',
    data () {
      const currentRoutePathSteps = this.$router.currentRoute.path.split('/')
      const currentRoutePathShallow = '/' + currentRoutePathSteps[1]
      return {
        activePath: currentRoutePathShallow
      }
    }
  }
</script>

<style lang="sass" scoped>
  .menu-bar
    text-align: center
</style>
