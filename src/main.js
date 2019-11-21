import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vant from 'vant';
import 'vant/lib/index.css';
//import store from './vuex/store'
import store from './vuex/store'
Vue.use(Vant);
import common from "./assets/js/main";      //公共方法
Vue.use(common)
import 'lib-flexible/flexible.js'
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
