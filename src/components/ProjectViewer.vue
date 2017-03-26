<template lang="pug">
  div.viewer
    div.viewer-inner
      h1 {{ project.name }}
      h3 Interests
      ul
        li(v-for='interestId in project.interests')
          | {{ interests[interestId].name }}
      h3 Blogs
      ul
        li(v-for='blogId in project.blogs')
          | {{ blogs[blogId].name }}
</template>

<script>
  import { mapGetters } from 'vuex'
  import * as getterNames from '../store/getterNames'

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
    }
  }
</script>

<style lang="sass" scoped>
</style>
