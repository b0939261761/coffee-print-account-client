import { checkToken, checkTokenExp } from '@/utils/token';

// ------------------------------------

export default {
  namespaced: true,
  state: {
    refreshToken: null,
    accessToken: null,
    refreshTokenExp: null,
    accessTokenExp: null,
    roleId: null,
    userId: null
  },
  mutations: {
    setRefreshToken: (state, token) => state.refreshToken = token,
    setAccessToken: (state, token) => state.accessToken = token,
    setRefreshTokenExp: (state, exp) => state.refreshTokenExp = exp,
    setAccessTokenExp: (state, exp) => state.accessTokenExp = exp,
    setUserId: (state, id) => state.userId = id,
    setRoleId: (state, id) => state.roleId = id
  },
  actions: {
    init: ({ dispatch }) => {
      const refreshToken = localStorage.getItem('refreshToken');
      const accessToken = localStorage.getItem('accessToken');
      dispatch('setTokens', { refreshToken, accessToken });
    },
    setTokens: ({ commit }, tokens) => {
      const {
        token: refreshToken, exp: refreshTokenExp
      } = checkToken(tokens.refreshToken);

      commit('setRefreshToken', refreshToken);
      commit('setRefreshTokenExp', refreshTokenExp);
      localStorage.setItem('refreshToken', refreshToken);
      const {
        token: accessToken, exp: accessTokenExp, userId, roleId
      } = refreshToken ? checkToken(tokens.accessToken) : {};

      commit('setAccessToken', accessToken);
      commit('setAccessTokenExp', accessTokenExp);
      commit('setUserId', userId);
      commit('setRoleId', roleId);
      localStorage.setItem('accessToken', accessToken);
    },
    getAccessToken: ({ state, dispatch }) => {
      if (checkTokenExp(state.accessTokenExp)) {
        return state.accessToken;
      }

      return void dispatch('removeAccessToken');
    },
    getRefreshToken: ({ state, dispatch }) => {
      if (checkTokenExp(state.refreshTokenExp)) {
        return state.refreshToken;
      }

      return void dispatch('removeTokens');
    },
    removeAccessToken: ({ commit }) => {
      commit('setAccessToken', null);
      localStorage.removeItem('accessToken');
    },
    removeTokens: ({ commit, dispatch }) => {
      commit('setRefreshToken', null);
      localStorage.removeItem('refreshToken');
      dispatch('removeAccessToken');
    }
  }
};
