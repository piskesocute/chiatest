import Vue from 'vue'
import Vuex from 'vuex'
import modules from '@/store/modules'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isMobile: false,
    isLoading: false
  },
  getters: {
    isMobile(state) {
      return state.isMobile
    },
    isLoading(state) {
      return state.isLoading
    }
  },
  mutations: {
    SET_IS_MOBILE(state, isMobile) {
      state.isMobile = isMobile
    },
    SET_IS_LOADING(state, isLoading) {
      state.isLoading = isLoading
    }
  },
  actions: {
    setIsMobile({ commit }, isMobile) {
      commit('SET_IS_MOBILE', isMobile)
    },
    setIsLoading({ commit }, isLoading) {
      commit('SET_IS_LOADING', isLoading)
    }
  },
  modules
})
