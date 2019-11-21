import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state = {
    user:localStorage.getItem("token")?JSON.parse(localStorage.getItem("user")):null,
    post:null
}
export default new Vuex.Store({
    state,
    mutations:{
        SETUser(state,value){
           state.user=value;
        },
        getpost(state,value){
            state.post=value;
        }
    },
    actions:{
        setuser({commit},value){
            commit('SETUser',value)
        },
        potpost({commit},value){
            commit('getpost',value)
        }
    },
})
