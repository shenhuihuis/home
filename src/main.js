import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vant from 'vant';
import VueAMap from 'vue-amap';
import 'vant/lib/index.css';
//import store from './vuex/store'
Vue.use(Vant);
Vue.use(common)
Vue.use(VueAMap);


import store from './vuex/store'

import common from "./assets/js/main";      //公共方法

import 'lib-flexible/flexible.js'
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
VueAMap.initAMapApiLoader({
  key: '512cf58d3cf2f18c7a05d799b78e6eab',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
  // 默认高德 sdk 版本为 1.4.4
  v: '1.4.4'
});