export const versionCodeToName = val => val.toString()
  .replace(/(\d{1,2})(\d{2})(\d{2})/, '$1.$2.$3').replace(/\.0/g, '.');

export default {
  versionCodeToName
};
