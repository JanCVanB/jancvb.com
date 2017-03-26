<template lang="pug">
  div.viewer
    div.viewer-inner
      h1 {{ project.name }}
      connections(
        v-bind:ids='project.interests'
        v-bind:isInterests='true'
        v-bind:lookup='interests'
      )
      connections(
        v-bind:ids='project.blogs'
        v-bind:isBlogs='true'
        v-bind:lookup='blogs'
      )
</template>

<script>
  import { mapGetters } from 'vuex'
  import * as getterNames from '../store/getterNames'
  import Connections from './Connections'

  export default {
    name: 'project-viewer',
    props: {
      project: {
        required: true,
        type: Object
      }
    },
    computed: {
      ...mapGetters([
        getterNames.blogs,
        getterNames.interests
      ])
    },
    components: {
      Connections
    }
  }
</script>

<style lang="sass" scoped>
</style>
