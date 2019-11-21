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
  if(to.name!="login"){
    if(!store.state.user || !localStorage.getItem("token")){
      next({name:"login"})
    }
  }
  let meta = document.getElementsByTagName("meta");
  if(to.name=='pdf'){
    meta[2]["content"]='width=device-width, initial-scale=1';
    //next()
  }else{
    meta[2]["content"]='width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no';
  /// next()
  }
  if (to.meta.title) {
      document.title = to.meta.title;
  }
  next();
})
export default router 