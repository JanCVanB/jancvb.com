<template lang="pug">
  div.full-height
    selector(
      v-model='selectedProjectId'
      v-bind:options='sortedProjects'
    )
    projectViewer(v-bind:project='selectedProject')
</template>

<script>
  import ProjectViewer from '@/components/ProjectViewer'
  import Selector from '@/components/Selector'

  const projects = {
    ju: {
      id: 'ju',
      name: 'Jump'
    },
    ts: {
      id: 'ts',
      name: 'Trapezoid Suite'
    },
    ep: {
      id: 'ep',
      name: 'EncycloPDF'
    }
  }
  const sortedProjectIds = ['ju', 'ts', 'ep']

  export default {
    name: 'projects',
    data () {
      return {
        projects,
        selectedProjectId: sortedProjectIds[0],
        sortedProjectIds
      }
    },
    computed: {
      selectedProject () {
        return this.projects[this.selectedProjectId]
      },
      sortedProjects () {
        return this.sortedProjectIds.map(id => this.projects[id])
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
