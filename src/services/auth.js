const API_URL = process.env.VUE_APP_API_URL;

export const login = async (data) => {
    try {
        console.log("login", unvue(data));
        var res = await request("post", `${API_URL}/partners/token`, null, data, { ...authHeaders() });
        console.log("login: res:", unvue(res));
        var { token: access_token, refresh_token = null, username, email, name, roles, permissions, userAgent } = res;
        SetAuth({ access_token, refresh_token, username, email, name, roles, permissions, userAgent });
        var auth = GetAuth();
        return { auth };
    } catch(e) {
        ResetAuth();
        throw e;
    }
}

export const logout = async () => {
    ResetAuth();
}


class AuthService {
    async verifyToken() {
        var access_token = store.getters["auth/accessToken"];
        if (!access_token) throw { name: "not_logged_in", message: "not logged in" };
        //console.log('verifyToken', access_token);
        var data = await request("post", process.env.VUE_APP_API_URL + "/partners/refreshtoken", null, null, { ...authHeaders() });
        return data;
    }
    async login(user) {
        var data = await request("post", process.env.VUE_APP_API_URL + "/partners/token", null, { username: user.username, password: user.password }, { ...authHeaders() });
        return data;
    }
    async logout() {}
    async register(user) {
        var data = await request("post", process.env.VUE_APP_API_URL + "/partners/register", null, { username: user.username, email: user.email, password: user.password }, { ...authHeaders() });
        return data;
    }
}
export default new AuthService();

import { refreshToken } from "@/services";
import { request, unvue } from "@/utils";
import store, {SetAuth,GetAuth,ResetAuth} from "@/store";
import authHeaders from "./auth-headers";
