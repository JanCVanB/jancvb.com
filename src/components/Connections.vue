<template lang="pug">
  transition-group.connections(name='connections' tag='div')
    span.label(v-bind:class='{ empty: !ids.length }' key='label') {{ label }}
    router-link(
      v-for='id in ids'
      v-bind:key='id'
      v-bind:to='urlPrefix + id'
    )
      connection(
        v-bind:isBlog='isBlogs'
        v-bind:isInterest='isInterests'
        v-bind:isProject='isProjects'
        v-bind:name='lookup[id].name'
      )
</template>

<script>
  import Connection from './Connection'

  export default {
    name: 'connections',
    props: {
      ids: {
        required: true,
        type: Array
      },
      isBlogs: {
        default: false,
        type: Boolean
      },
      isInterests: {
        default: false,
        type: Boolean
      },
      isProjects: {
        default: false,
        type: Boolean
      },
      lookup: {
        required: true,
        type: Object
      }
    },
    computed: {
      label () {
        if (this.isBlogs) {
          return 'Related blogs'
        }
        if (this.isInterests) {
          return 'Related interests'
        }
        if (this.isProjects) {
          return 'Related projects'
        }
        return ''
      },
      urlPrefix () {
        if (this.isBlogs) {
          return '/blog'
        }
        if (this.isInterests) {
          return '/interest'
        }
        if (this.isProjects) {
          return '/project'
        }
        return '/error'
      }
    },
    components: {
      Connection
    }
  }
</script>

<style lang="sass" scoped>
  .connections
    height: 24px
    margin-bottom: 10px

  .connections a
    display: inline-block
    margin-right: 10px
    transition: all 1s

  .connections-enter
    opacity: 0
    transform: translateX(-100px)

  .connections-move
    transition: transform 1s

  .connections-leave-active
    position: absolute

  .connections-leave-to
    opacity: 0
    transform: translateX(300px)

  .label
    margin-right: 10px
    vertical-align: middle

  .label.empty
    color: #d3dce6
</style>
