export const versionCodeToName = val => val.toString()
  .replace(/(\d{1,2})(\d{2})(\d{2})/, '$1.$2.$3').replace(/\.0/g, '.');

export const zeroStart = (num, digits = 2) => num.toString().padStart(digits, '0');

export default {
  versionCodeToName,
  zeroStart
};
