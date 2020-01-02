import { zeroStart } from '@/utils/tools';

const getDateTime = (date = new Date()) => (date instanceof Date ? date : new Date(date));

export const formatDate = (mask, datePar) => {
  if (!mask) return '';
  const date = getDateTime(datePar);

  const values = {
    YYYY: date.getFullYear().toString(),
    YY: date.getFullYear().toString().slice(2),
    MM: zeroStart(date.getMonth() + 1),
    DD: zeroStart(date.getDate()),
    HH: zeroStart(date.getHours()),
    mm: zeroStart(date.getMinutes()),
    ss: zeroStart(date.getSeconds()),
    SSS: zeroStart(date.getMilliseconds(), 3)
  };

  return mask.toString().replace(/(ss|mm|HH|DD|MM|YYYY|YY)/g, match => values[match]);
};

export const parseDate = (mask, str) => {
  if (!mask) return new Date(str);

  const values = {};
  for (const { 0: key, index } of mask.matchAll(/(SSS|ss|mm|HH|DD|MM|YYYY|YY)/g)) {
    values[key] = parseInt(str.substr(index, key.length)) || 0;
  }

  const year = values.YYYY || (values.YY && `20${values.YY}`) || 0;
  const month = (values.MM || 1) - 1;
  const day = values.DD || 0;
  const hour = values.HH || 0;
  const minute = values.mm || 0;
  const second = values.ss || 0;
  const millisecond = values.SSS || 0;

  return new Date(Date.UTC(year, month, day, hour, minute, second, millisecond));
};

export default {
  formatDate,
  parseDate
};
