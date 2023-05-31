import Vue from 'vue';
import Vuex from 'vuex';
import favorites from './modules/favorites';
import basket from './modules/basket';
import menu from './modules/menu';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    favorites,
    basket,
    menu,
  }
});

export default store;
