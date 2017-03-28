<template lang="pug">
  div.me
    div.viewer
      div.viewer-inner
        img.avatar(src='static/flowers-square.png')
        div.avatar-text
          h2.no-bold
            | I'm an #[b.avoid-wrap ex-NASA software engineer]
            | and #[b.avoid-wrap full-stack web developer].
          h2.no-bold
            | I'm currently working on a few projects in #[b.avoid-wrap Burbank, CA, USA].
          h3.no-bold
            | Contact me at
            br
            a(href='mailto:JanCVanBruggen@gmail.com' target='_top')
              | JanCVanBruggen@gmail.com
            br
            | for contracting, consulting, or collaborating.
        div.resume
          div.resume-row
            img(src='static/ucla.png')
            span B.S. Physics
          div.resume-row
            img(src='static/caltech.png')
            span M.S. Electrical Engineering
          div.resume-row.nasa
            img(src='static/nasa-jpl.png')
            span Software Engineer
        div.tweets
          transition(name='tweets-fade')
            div(v-show='showTweets')
              a.twitter-timeline(href="https://twitter.com/JanCVanB")
</template>

<script>
  export default {
    name: 'me',
    data () {
      return {
        showTweets: false
      }
    },
    mounted () {
      require('../assets/twitterTimeline')
      delete require.cache[require.resolve('../assets/twitterTimeline')]
      setTimeout(() => {
        console.log('now!')
        this.showTweets = true
      }, 1000)
    }
  }
</script>

<style lang="sass" scoped>
  $avatarWidth: 300px

  .me > .viewer
    margin-left: 200px

  .viewer-inner
    height: calc(100% - 120px)
    padding: 40px

  .avatar
    display: inline-block
    vertical-align: top
    width: $avatarWidth

  .avatar-text
    display: inline-block
    padding-left: 20px
    vertical-align: top
    width: calc(100% - #{$avatarWidth} - 40px)
    white-space: normal
    word-wrap: break-word

  .no-bold
    font-weight: normal

  .avoid-wrap
    display: inline-block

  .resume
    display: inline-block
    font-size: 16pt
    padding-top: 10px
    vertical-align: top
    width: 400px

  .resume-row
    height: 40px
    padding-top: 10px

  .resume img
    padding-bottom: 7px
    vertical-align: bottom
    width: 100px

  .resume span + img
    margin-left: 20px

  .resume span
    margin-left: 10px
    vertical-align: bottom

  .resume-row.nasa img,
  .resume-row.nasa span
    padding-bottom: 0
    vertical-align: middle

  .tweets
    display: inline-block
    vertical-align: top
    width: calc(100% - 400px)

  .tweets-fade-enter-active, .tweets-fade-leave-active
    transition: opacity 3s

  .tweets-fade-enter, .tweets-fade-leave-to
    opacity: 0


  @media (max-width: 1130px)
    .me > .viewer
      margin-left: 200px
</style>
