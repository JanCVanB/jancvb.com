<template lang="pug">
  div.viewer
    div.viewer-inner
      h1 {{ interest.name }}
      connections(
        v-bind:ids='interest.projects'
        v-bind:isProjects='true'
        v-bind:lookup='projects'
      )
      connections(
        v-bind:ids='interest.blogs'
        v-bind:isBlogs='true'
        v-bind:lookup='blogs'
      )
</template>

<script>
  import { mapGetters } from 'vuex'
  import * as getterNames from '../store/getterNames'
  import Connections from './Connections'

  export default {
    name: 'interest-viewer',
    props: {
      interest: {
        required: true,
        type: Object
      }
    },
    computed: {
      ...mapGetters([
        getterNames.blogs,
        getterNames.projects
      ])
    },
    components: {
      Connections
    }
  }
</script>

<style lang="sass" scoped>
</style>
