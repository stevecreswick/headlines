import Vue from 'vue';
import Router from 'vue-router';
import Home from '../containers/home';
import Sources from '../components/sources/sources';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/sources/:id',
      name: 'sourceShow',
      component: Sources
    }
    // {
    //   path: '/articles',
    //   name: 'post-list',
    //   component: Articles
    // }
  ]
})