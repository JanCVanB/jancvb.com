<template lang="pug">
  el-menu.selector(
    v-bind:default-active='value'
    v-on:select='handleSelect'
  )
    el-menu-item(
      v-for='option in options'
      v-bind:index='option.id'
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
      value: {
        required: true,
        type: String
      }
    },
    methods: {
      handleSelect (optionId) {
        this.$emit('input', optionId)
      }
    }
  }
</script>

<style lang="sass" scoped>
  .selector
    display: inline-block
    height: 100%
    width: 320px
</style>
