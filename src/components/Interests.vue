<template lang="pug">
  div.full-height
    selector(
      v-model='selectedInterestId'
      v-bind:options='sortedInterests'
    )
    interestViewer(v-bind:interest='selectedInterest')
</template>

<script>
  import InterestViewer from '@/components/InterestViewer'
  import Selector from '@/components/Selector'

  const interests = {
    ed: {
      id: 'ed',
      name: 'Education'
    },
    si: {
      id: 'si',
      name: 'Simulations'
    },
    mu: {
      id: 'mu',
      name: 'Music'
    }
  }
  const sortedInterestIds = ['ed', 'si', 'mu']

  export default {
    name: 'interests',
    data () {
      return {
        interests,
        selectedInterestId: sortedInterestIds[0],
        sortedInterestIds
      }
    },
    computed: {
      sortedInterests () {
        return this.sortedInterestIds.map(id => this.interests[id])
      },
      selectedInterest () {
        return this.interests[this.selectedInterestId]
      }
    },
    components: {
      InterestViewer,
      Selector
    }
  }
</script>

<style lang="sass" scoped>
</style>
