<template lang="pug">
  div.viewer
    div.viewer-inner
      h1 {{ project.name }}
</template>

<script>
  export default {
    name: 'project-viewer',
    props: {
      project: {
        required: true,
        type: Object
      }
    }
  }
</script>

<style lang="sass" scoped>
</style>
