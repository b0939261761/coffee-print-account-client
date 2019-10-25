export const formatDateTime = date => {
  const dd = `${date.getDate()}`.padStart(2, '0');
  const MM = `${date.getMonth() + 1}`.padStart(2, '0'); // January is 0!
  const yyyy = date.getFullYear();
  const hh = `${date.getHours()}`.padStart(2, '0');
  const mm = `${date.getMinutes()}`.padStart(2, '0');
  const ss = `${date.getSeconds()}`.padStart(2, '0');
  return `${dd}.${MM}.${yyyy} ${hh}:${mm}:${ss}`;
};

export const numToFormatDateTime = number => formatDateTime(new Date(number));

export default {
  formatDateTime,
  numToFormatDateTime
};
