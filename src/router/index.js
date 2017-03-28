import Vue from 'vue'
import Router from 'vue-router'
import Blogs from '@/components/Blogs'
import Interests from '@/components/Interests'
import Me from '@/components/Me'
import Projects from '@/components/Projects'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/blog',
      name: 'Blogs',
      component: Blogs
    },
    {
      path: '/blog/:id',
      name: 'Blog',
      component: Blogs
    },
    {
      path: '/interest',
      name: 'Interests',
      component: Interests
    },
    {
      path: '/interest/:id',
      name: 'Interest',
      component: Interests
    },
    {
      path: '/me',
      name: 'Me',
      component: Me
    },
    {
      path: '/project',
      name: 'Projects',
      component: Projects,
      alias: '/'
    },
    {
      path: '/project/:id',
      name: 'Project',
      component: Projects
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
