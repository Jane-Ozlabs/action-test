const API_URL = process.env.VUE_APP_API_URL;

export const loadView = async (self, path, params) => {
  try {
    var filters = self.filters;

    console.log("loadView", path, unvue(filters), unvue(params));

    await refreshToken();
    var res = await requestAuth("get", path, { ...filters, ...(params||{}) });

    self.filters = { ...res.filters };
    self.summary = res.summary;
    self.rows = res.rows;

    console.log("loadView res:", path, unvue(res), unvue(self.filters), unvue(params));
    return res;
  } catch(e) {
    throw e;
  }
}

export const loadPagedView = async (self, path, params) => {
  try {
    var filters = self.filters;

    console.log("loadPagedView", path, unvue(filters), unvue(params));

    await refreshToken();
    var res = await requestAuth("get", path, { ...filters, ...(params||{}) });

    self.filters = { ...res.filters, page: res.page, perPage: res.perPage, total: res.total };
    self.summary = res.summary;
    self.rows = res.rows;

    console.log("loadPagedView res:", path, unvue(res), unvue(self.filters), unvue(params));
    return res;
  } catch(e) {
    throw e;
  }
}

export const downloadView = async (self, path, params) => {
  try {
    var filters = self.filters;

    console.log("downloadView", path, unvue(filters), unvue(params));

    await refreshToken();
    var res = await requestAuth("get", path, { ...filters, ...(params||{}), download: true });

    console.log("downloadView res:", path, unvue(res), unvue(self.filters), unvue(params));
    return res;
  } catch(e) {
    throw e;
  }
}

export const save = async (self, path, params, body) => {
  try {
    console.log("save", path, unvue(params), unvue(body));

    await refreshToken();
    var res = await requestAuth("post", path, params, body);

    console.log("save res:", path, unvue(res));
    return res;
  } catch(e) {
    throw e;
  }
}

export const saveNoAuth = async (self, path, params, body) => {
  try {
    console.log("saveNoAuth", path, unvue(params), unvue(body));

    var res = await requestNoAuth("post", path, params, body);

    console.log("saveNoAuth res:", path, unvue(res));
    return res;
  } catch(e) {
    throw e;
  }
}

export const refreshTokenImportant = async () => {
    try {
        var res = await request("post", `${API_URL}/partners/refreshtoken`, null, null, { ...authHeaders() });
        console.log("refreshToken: res:", unvue(res));
        var { token: access_token, refresh_token = null, username, email, name, roles, permissions, userAgent } = res;
        SetAuth({ access_token, refresh_token, username, email, name, roles, permissions, userAgent });
        var auth = GetAuth();
        return { auth };
    } catch(e) {
        ResetAuth();
        throw e;
    }
}

export const refreshToken = async () => {
  return; // FIXME:
    try {
        var res = await request("post", `${API_URL}/partners/refreshtoken`, null, null, { ...authHeaders() });
        console.log("refreshToken: res:", unvue(res));
        var { token: access_token, refresh_token = null, username, email, name, roles, permissions, userAgent } = res;
        SetAuth({ access_token, refresh_token, username, email, name, roles, permissions, userAgent });
        var auth = GetAuth();
        return { auth };
    } catch(e) {
        ResetAuth();
        throw e;
    }
}
import { requestAuth, requestNoAuth } from "./service";
import { request, unvue, UV } from "@/utils";
import store, {SetAuth,GetAuth,ResetAuth} from "@/store";
import authHeaders from "./auth-headers";
