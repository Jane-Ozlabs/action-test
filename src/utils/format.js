const moment = require('moment');

export function formatCurrency(value) {
  try { let val = (value||0).toFixed(2); return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); } catch(e) { console.error(e) }
}

export function formatCryptoCurrency(value) { // TODO:
  let val = (value||0).toFixed(8).split("."); return val[0].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + (val[1] ? "." + val[1] : "");
}

export function formatNumber(value) {
  let val = (value||0).toFixed(0); return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function formatMonth(value) {
  return value ? moment(value).format("YYYY-MM") : "";
}

export function formatDate(value) {
  return value ? moment(value).format("YYYY-MM-DD") : "";
}

export function formatDateTime(value) {
  return value ? moment(value).format("YYYY-MM-DD HH:mm:ss") : "";
}

export function formatTime(value) {
  return value && value != "0001-01-01T00:00:00" ? moment(value).format("HH:mm:ss") : "";
}

export function formatUTCDateTime(value) {
  return value ? moment(value).utc().format("YYYY-MM-DD HH:mm:ss") : "";
}

export function formatTimestamp(value) {
  return value ? moment.unix(value).utc().format("YYYY-MM-DD HH:mm:ss") : "";
}

export function formatUserStatus(data) {
  return data.isActive ? (data.lastLogin ? 'Active' : 'Ready') : 'Block';
}

export function unvue(data) { return data && JSON.parse(JSON.stringify(data)) || null; }
export const UV = unvue;
