import { request } from '@/utils/request';
import authHeaders from './auth-headers';
import store from '@/store'

const API_URL = `${process.env.VUE_APP_API_URL}`;

export async function requestAuthPaged(self, method, url, params, body, headers) {
  var filters = self.filter || self.filters;
  var page = self.page;
  var limit = self.perPage;

  method = (method ? method : 'get').toLowerCase();
  if(method == "get") params = {filters, page, limit, ...(params||{})}; else body = {filters, page, limit, ...(body||{})};

  var data = await requestAuth(method, url, params, body, headers);
  var { total, perPage, page, rows, meta } = data; console.log(data);
  self.page = page; self.perPage = perPage; self.data = rows; self.total = total; self.meta = meta;
  return data;
}

export async function requestNoAuthPaged(self, method, url, params, body, headers) {
  var filters = self.filter || self.filters;
  var page = self.page;
  var limit = self.perPage;

  method = (method ? method : 'get').toLowerCase();
  if(method == "get") params = {filters, page, limit, ...(params||{})}; else body = {filters, page, limit, ...(body||{})};

  var data = await requestNoAuth(method, url, params, body, headers);
  var { total, perPage, page, rows, meta } = data; console.log(data);
  self.page = page; self.perPage = perPage; self.data = rows; self.total = total; self.meta = meta;
  return data;
}

export async function requestAuth(method, url, params, body, headers) {
  var h = authHeaders();
  if(!h || !h.Authorization) throw {name: "not_logged_in", message: "not logged in"};
  var data = await request(method, `${API_URL}${url}`, {...(params||{})}, {...(body||{})}, {...h, ...(headers||{})});
  return data;
}

export async function requestNoAuth(method, url, params, body, headers) {
  var data = await request(method, `${API_URL}${url}`, {...(params||{})}, {...(body||{})}, {...(headers||{})});
  return data;
}
