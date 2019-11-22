import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import store from './../vuex/store'
// import store from './../vuex/store'
import routes from './routes'
let router = new Router({
  routes
});
router.beforeEach((to, from, next) => {
  // if(to.name!="login"){
  //   if(!store.state.user || !localStorage.getItem("token")){
  //     next({name:"login"})
  //   }
  // }
  if (to.meta.title) {
      document.title = to.meta.title;
  }
  next();
})
export default router 