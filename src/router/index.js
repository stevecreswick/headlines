import Vue from 'vue';
import Router from 'vue-router';
import Home from '../containers/home'
// import Articles from '../components/articles'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    // {
    //   path: '/articles',
    //   name: 'post-list',
    //   component: Articles
    // }
  ]
})