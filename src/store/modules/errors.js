export default {
  namespaced: true,
  state: {
    error: null,
    list: []
  },
  mutations: {
    add: state => state.list.push(state.error),
    set: (state, error) => state.error = error,
    remove: (state, error) => state.list.shift(error)
  },
  getters: {
    current: state => state.list[0]
  }
};
