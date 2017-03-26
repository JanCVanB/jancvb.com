import _ from 'underscore'
import blogs from '../../content/blogs'
import interests from '../../content/interests'
import projects from '../../content/projects'
import * as getterNames from '../getterNames'

const completeBlogs = _.mapObject(blogs, blog => {
  const doFlattenProjectInterestsShallowly = true
  const projectInterests = _.flatten(
    blog.projects.map(projectId => projects[projectId].interests),
    doFlattenProjectInterestsShallowly
  )
  const allInterests = _.uniq(blog.interests.concat(projectInterests))
  return { ...blog, interests: allInterests }
})

const completeProjects = _.mapObject(projects, project => {
  const blogs = _.filter(
    _.keys(completeBlogs),
    blogId => _.contains(completeBlogs[blogId].projects, project.id)
  )
  return { ...project, blogs }
})

const completeInterests = _.mapObject(interests, interest => {
  const blogs = _.filter(
    _.keys(completeBlogs),
    blogId => _.contains(completeBlogs[blogId].interests, interest.id)
  )
  const projects = _.filter(
    _.keys(completeProjects),
    projectId => _.contains(completeProjects[projectId].interests, interest.id)
  )
  return { ...interest, blogs, projects }
})

const state = {
  blogs: completeBlogs,
  interests: completeInterests,
  projects: completeProjects
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
