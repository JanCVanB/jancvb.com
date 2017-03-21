import Vue from 'vue'
import Router from 'vue-router'
import Blogs from '@/components/Blogs'
import Interests from '@/components/Interests'
import Me from '@/components/Me'
import Projects from '@/components/Projects'
import { blogsPath, interestsPath, mePath, projectsPath } from '@/constants'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: blogsPath,
      name: 'Blogs',
      component: Blogs
    },
    {
      path: interestsPath,
      name: 'Interests',
      component: Interests
    },
    {
      path: mePath,
      name: 'Me',
      component: Me
    },
    {
      path: projectsPath,
      name: 'Projects',
      component: Projects,
      alias: '/'
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
