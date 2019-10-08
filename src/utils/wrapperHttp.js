export default async (http, vm) => {
  try {
    return await http();
  } catch (err) {
    if (err.message === 'REFRESH_TOKEN_INVALID') vm.$router.push({ name: 'login' });
  }
};
