<template lang="pug">
  el-tag.connection(
    v-bind:close-transition='true'
    v-bind:hit='isHovered'
    v-bind:type='type'
    v-on:mouseover.native='isHovered = true'
    v-on:mouseleave.native='isHovered = false'
  )
    | {{ name }}
</template>

<script>
  export default {
    name: 'connection',
    props: {
      isBlog: {
        default: false,
        type: Boolean
      },
      isInterest: {
        default: false,
        type: Boolean
      },
      isProject: {
        default: false,
        type: Boolean
      },
      name: {
        required: true,
        type: String
      }
    },
    data () {
      return {
        isHovered: false
      }
    },
    computed: {
      type () {
        if (this.isBlog) {
          return 'gray'
        }
        if (this.isInterest) {
          return 'success'
        }
        if (this.isProject) {
          return 'primary'
        }
        return ''
      }
    }
  }
</script>

<style lang="sass" scoped>
</style>
