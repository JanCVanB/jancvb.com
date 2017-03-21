<template lang="pug">
  div.viewer
    div.viewer-inner
      h1 {{ interest.name }}
</template>

<script>
  export default {
    name: 'interest-viewer',
    props: {
      interest: {
        required: true,
        type: Object
      }
    }
  }
</script>

<style lang="sass" scoped>
</style>
