<template lang="pug">
  div.full-height
    selector(
      v-bind:value='selectedInterestId'
      v-bind:options='sortedInterests'
      v-on:input='handleUserSelectInterestId'
    )
    interestViewer(v-bind:interest='selectedInterest')
</template>

<script>
  import { mapGetters } from 'vuex'
  import * as getterNames from '../store/getterNames'
  import InterestViewer from '@/components/InterestViewer'
  import Selector from '@/components/Selector'

  export default {
    name: 'interests',
    data () {
      return {
        userSelectedInterestId: null
      }
    },
    computed: {
      ...mapGetters([
        getterNames.interests,
        getterNames.sortedInterests
      ]),
      selectedInterest () {
        return this.interests[this.selectedInterestId]
      },
      selectedInterestId () {
        if (this.userSelectedInterestId === null) {
          return this.sortedInterests[0].id
        } else {
          return this.userSelectedInterestId
        }
      }
    },
    methods: {
      handleUserSelectInterestId (interestId) {
        this.userSelectedInterestId = interestId
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
