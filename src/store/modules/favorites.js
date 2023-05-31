const state = {
  favoriteProducts: [],
};
const getters = {
  getFavoriteProducts: state => {
    return state.favoriteProducts;
  },
};
const mutations = {
  ADD_FAVORITE_PRODUCT(state, product) {
    state.favoriteProducts.push(product)
  },
  REMOVE_FAVORITE_PRODUCT(state, index) {
    state.favoriteProducts.splice(index, 1)
  },
};
const actions = {
  ADD_FAVORITE_PRODUCT: (context, payload) => {
    context.commit('ADD_FAVORITE_PRODUCT', payload);
  },
  REMOVE_FAVORITE_PRODUCT: (context, payload) => {
    context.commit('REMOVE_FAVORITE_PRODUCT', payload);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
