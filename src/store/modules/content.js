import _ from 'underscore'
import blogs from '../../content/blogs'
import interests from '../../content/interests'
import projects from '../../content/projects'
import * as getterNames from '../getterNames'

const state = {
  blogs,
  interests,
  projects
}

const getters = {
  [getterNames.blogs]: (state, getters) => state.blogs,
  [getterNames.sortedBlogs]: (state, getters) => {
    return _.sortBy(_.values(state.blogs), blog => blog.dateModified)
  },
  [getterNames.interests]: (state, getters) => state.interests,
  [getterNames.sortedInterests]: (state, getters) => {
    return (
      _.sortBy(_.values(state.interests), interest => interest.dateModified)
    )
  },
  [getterNames.projects]: (state, getters) => state.projects,
  [getterNames.sortedProjects]: (state, getters) => {
    return _.sortBy(_.values(state.projects), project => project.dateModified)
  }
}

const actions = {
}

const mutations = {
}

export default {
  state,
  getters,
  actions,
  mutations
}
