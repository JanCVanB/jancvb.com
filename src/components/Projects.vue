<template lang="pug">
  div.full-height
    selector(
      v-bind:value='selectedProjectId'
      v-bind:options='sortedProjects'
      v-on:input='handleUserSelectProjectId'
    )
    projectViewer(v-bind:project='selectedProject')
</template>

<script>
  import { mapGetters } from 'vuex'
  import * as getterNames from '../store/getterNames'
  import ProjectViewer from '@/components/ProjectViewer'
  import Selector from '@/components/Selector'

  export default {
    name: 'projects',
    data () {
      return {
        userSelectedProjectId: null
      }
    },
    computed: {
      ...mapGetters([
        getterNames.projects,
        getterNames.sortedProjects
      ]),
      selectedProject () {
        return this.projects[this.selectedProjectId]
      },
      selectedProjectId () {
        if (this.userSelectedProjectId === null) {
          return this.sortedProjects[0].id
        } else {
          return this.userSelectedProjectId
        }
      }
    },
    methods: {
      handleUserSelectProjectId (projectId) {
        this.userSelectedProjectId = projectId
      }
    },
    components: {
      ProjectViewer,
      Selector
    }
  }
</script>

<style lang="sass" scoped>
</style>
