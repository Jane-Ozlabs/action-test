
export default function () {
    var auth = GetAuth();
    console.log("auth-headers", unvue(auth));
    var access_token = auth && auth.access_token || null;
    if(!access_token) return {};
    return { Authorization: `Bearer ${access_token}`};
}

import store, { GetAuth } from '@/store';
import { unvue } from "@/utils";
