<template lang="pug">
  div.viewer
    div.viewer-inner
      h1 {{ blog.name }}
</template>

<script>
  export default {
    name: 'blog-viewer',
    props: {
      blog: {
        required: true,
        type: Object
      }
    }
  }
</script>

<style lang="sass" scoped>
</style>
