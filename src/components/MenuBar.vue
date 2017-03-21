<template lang="pug">
  el-menu.menu-bar(
    v-bind:default-active='activePath'
    mode='horizontal'
    v-bind:router='true'
  )
    el-menu-item(v-bind:index='projectsPath') Projects
    el-menu-item(v-bind:index='interestsPath') Interests
    el-menu-item(v-bind:index='blogsPath') Blogs
    el-menu-item(v-bind:index='mePath') Me
</template>

<script>
  import { blogsPath, interestsPath, mePath, projectsPath } from '@/constants'

  export default {
    name: 'menu-bar',
    data () {
      return {
        activePath: projectsPath,
        blogsPath: blogsPath,
        interestsPath: interestsPath,
        mePath: mePath,
        projectsPath: projectsPath
      }
    }
  }
</script>

<style lang="sass" scoped>
  .menu-bar
    text-align: center
</style>
