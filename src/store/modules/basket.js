const state = {
  basketProducts: [],
};
const getters = {
  getBasketProducts: state => {
    return state.basketProducts;
  },
};
const mutations = {
  ADD_BASKET_PRODUCT(state, product) {
    state.basketProducts.push(product)
  },
  REMOVE_BASKET_PRODUCT(state, index) {
    state.basketProducts.splice(index, 1)
  },
};
const actions = {
  ADD_BASKET_PRODUCT: (context, payload) => {
    context.commit('ADD_BASKET_PRODUCT', payload);
  },
  REMOVE_BASKET_PRODUCT: (context, payload) => {
    context.commit('REMOVE_BASKET_PRODUCT', payload);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
