<template lang="pug">
  div.viewer
    div.viewer-inner
      h1 {{ blog.name }}
      connections(
        v-bind:ids='blog.projects'
        v-bind:isProjects='true'
        v-bind:lookup='projects'
      )
      connections(
        v-bind:ids='blog.interests'
        v-bind:isInterests='true'
        v-bind:lookup='interests'
      )
</template>

<script>
  import { mapGetters } from 'vuex'
  import * as getterNames from '../store/getterNames'
  import Connections from './Connections'

  export default {
    name: 'blog-viewer',
    props: {
      blog: {
        required: true,
        type: Object
      }
    },
    data () {
      return {
        hoveredId: null
      }
    },
    computed: {
      ...mapGetters([
        getterNames.interests,
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
