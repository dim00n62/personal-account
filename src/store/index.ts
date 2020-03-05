import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

interface AppState {
  userName: string;
}

export default new Vuex.Store({
  state: {
    userName: 'User\'s name'
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
  getters: {
    userName(state: AppState) {
      return state.userName;
    }
  }
});
