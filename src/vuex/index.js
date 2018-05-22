import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex)

const state = {
    isLogin:false
}

const mutations = {
    changeLogin(state,status){
        state.isLogin = status
    }
}

const actions = {
    loginAction({commit}){
        commit('changeLogin',true)
    }
}

export default new Vuex.Store({
    state,
    mutations,
    actions
})