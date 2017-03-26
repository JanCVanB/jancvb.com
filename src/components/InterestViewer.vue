<template lang="pug">
  div.viewer
    div.viewer-inner
      h1 {{ interest.name }}
      h3 Projects
      ul
        li(v-for='projectId in interest.projects')
          | {{ projects[projectId].name }}
      h3 Blogs
      ul
        li(v-for='blogId in interest.blogs')
          | {{ blogs[blogId].name }}
</template>

<script>
  import { mapGetters } from 'vuex'
  import * as getterNames from '../store/getterNames'

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
    }
  }
</script>

<style lang="sass" scoped>
</style>
