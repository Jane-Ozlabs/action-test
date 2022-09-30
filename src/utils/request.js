//
export const request = async function(method, url, params, data, headers)
{
    console.log("request", method, url, unvue(params), unvue(data), unvue(headers));
    try {
        store.commit("LOADING", true);

        var { download } = params||{};
        var res = await axios({
            method,
            url,
            headers,
            params,
            data,
            responseType: download ? 'arraybuffer' : undefined,
        });
        if(download) {
            console.log(res);

            let blob = new Blob([res.data], { type: res.headers['content-type'] })
            var m = res.headers['content-disposition'].match(/filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/);
            let fileName = decodeURI(m && m[1] && m[1].replace(/['"]/g, '') || "export.csv")
            if (window.navigator.msSaveOrOpenBlob) {
                window.navigator.msSaveOrOpenBlob(blob, fileName)}
            else {
              let link = document.createElement('a')
              link.href = window.URL.createObjectURL(blob)
              link.target = '_self'
              if (fileName) link.download = fileName
              link.click()
            }
        }
        console.log("response", unvue(res.data));
        return res.data;
    } catch(e) {
        var status = e.response && e.response.status || 500;
        //var error = e.response && e.response.data && e.response.data.ClassName || e.name;
        var error = e.response && e.response.data && e.name;
        var message = e.response && e.response.data && e.response.data.Message || e.message;
        console.error("request", status, error, message, e);
        store.commit("ERROR", { error, message });
        throw e;
    } finally {
        store.commit("LOADING", false);
    }
}

import axios from 'axios';
import store from '@/store';
import { unvue } from '@/utils';