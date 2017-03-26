<template lang="pug">
  div.full-height
    selector(
      v-bind:value='selectedBlogId'
      v-bind:options='sortedBlogs'
      urlPrefix='/blog/'
      v-on:input='handleUserSelectBlogId'
    )
    blogViewer(v-bind:blog='selectedBlog')
</template>

<script>
  import { mapGetters } from 'vuex'
  import * as getterNames from '../store/getterNames'
  import BlogViewer from '@/components/BlogViewer'
  import Selector from '@/components/Selector'

  export default {
    name: 'blogs',
    data () {
      return {
        userSelectedBlogId: null
      }
    },
    computed: {
      ...mapGetters([
        getterNames.blogs,
        getterNames.sortedBlogs
      ]),
      selectedBlog () {
        return this.blogs[this.selectedBlogId]
      },
      selectedBlogId () {
        if (this.userSelectedBlogId === null) {
          const routeBlogId = this.$route.params.id
          if (routeBlogId) {
            return routeBlogId
          } else {
            return this.sortedBlogs[0].id
          }
        } else {
          return this.userSelectedBlogId
        }
      }
    },
    methods: {
      handleUserSelectBlogId (blogId) {
        this.userSelectedBlogId = blogId
      }
    },
    components: {
      BlogViewer,
      Selector
    }
  }
</script>

<style lang="sass" scoped>
</style>
