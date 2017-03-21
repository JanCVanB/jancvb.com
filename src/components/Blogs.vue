<template lang="pug">
  div.full-height
    selector(
      v-model='selectedBlogId'
      v-bind:options='sortedBlogs'
    )
    blogViewer(v-bind:blog='selectedBlog')
</template>

<script>
  import BlogViewer from '@/components/BlogViewer'
  import Selector from '@/components/Selector'

  const blogs = {
    a: {
      id: 'a',
      name: 'A'
    },
    b: {
      id: 'b',
      name: 'B'
    },
    c: {
      id: 'c',
      name: 'C'
    }
  }
  const sortedBlogIds = ['a', 'b', 'c']

  export default {
    name: 'blogs',
    data () {
      return {
        blogs,
        selectedBlogId: sortedBlogIds[0],
        sortedBlogIds
      }
    },
    computed: {
      sortedBlogs () {
        return this.sortedBlogIds.map(id => this.blogs[id])
      },
      selectedBlog () {
        return this.blogs[this.selectedBlogId]
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
