import Vue from 'vue'
import Vuex from 'vuex'
import content from './modules/content'

Vue.use(Vuex)

const DEBUG = process.env.NODE_ENV === 'development'

export default new Vuex.Store({
  modules: {
    content
  },
  strict: DEBUG
})
