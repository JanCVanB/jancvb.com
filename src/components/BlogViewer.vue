<template lang="pug">
  div.viewer
    div.viewer-inner
      h1 {{ blog.name }}
      h3 Projects
      ul
        li(v-for='projectId in blog.projects')
          | {{ projects[projectId].name }}
      h3 Interests
      ul
        li(v-for='interestId in blog.interests')
          | {{ interests[interestId].name }}
</template>

<script>
  import { mapGetters } from 'vuex'
  import * as getterNames from '../store/getterNames'

  export default {
    name: 'blog-viewer',
    props: {
      blog: {
        required: true,
        type: Object
      }
    },
    computed: {
      ...mapGetters([
        getterNames.interests,
        getterNames.projects
      ])
    }
  }
</script>

<style lang="sass" scoped>
</style>
