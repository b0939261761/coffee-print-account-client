const jwtDecode = token => {
  if (token) {
    const payload = (token.match(/(?:\.(.*)\.)/) || [])[1];

    try {
      return payload && JSON.parse(window.atob(payload));
    } catch {}
  }
  return null;
};

export const checkTokenExp = exp => Math.floor(new Date().getTime() / 1000) < exp;

export const checkToken = token => {
  if (token) {
    const tokenData = jwtDecode(token);
    if (tokenData && checkTokenExp(tokenData.exp)) return { token, ...tokenData };
  }
  return {};
};

export default {
  checkTokenExp,
  checkToken
};
