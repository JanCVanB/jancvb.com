<template lang="pug">
  el-menu.selector(
    v-bind:default-active='urlPrefix + value'
    v-bind:router='true'
    v-on:select='handleSelect'
  )
    el-menu-item(
      v-for='option in options'
      v-bind:index='urlPrefix + option.id'
      v-bind:key='option.id'
    )
      i(v-if='iconClass' v-bind:class='iconClass')
      | {{ option.name }}
</template>

<script>
  export default {
    name: 'selector',
    props: {
      iconClass: {
        required: false,
        type: String
      },
      options: {
        required: true,
        type: Array
      },
      urlPrefix: {
        required: true,
        type: String
      },
      value: {
        required: true,
        type: String
      }
    },
    methods: {
      handleSelect (optionUrl) {
        const optionId = optionUrl.slice(this.urlPrefix.length)
        this.$emit('input', optionId)
      }
    }
  }
</script>

<style lang="sass" scoped>
  .selector
    display: inline-block
    height: 100%
    overflow: scroll
    width: 320px

  @media (max-width: 1130px)
    .selector
      width: 200px
</style>
