const state = {
  isMenuOpened: false,
};
const getters = {
  getIsMenuOpened: state => {
    return state.isMenuOpened;
  },
};
const mutations = {
  OPEN_MENU(state) {
    state.isMenuOpened = true
  },
  CLOSE_MENU(state) {
    state.isMenuOpened = false
  },
  TOGGLE_MENU(state) {
    state.isMenuOpened = !state.isMenuOpened
  },
};

export default {
  state,
  getters,
  mutations,
};
