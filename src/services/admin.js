import { request } from '@/utils';
import authHeaders from './auth-headers';

const API_URL = `${process.env.VUE_APP_API_URL}/partners`;

class AdminService {
  async accountList({ filters }) {
    var data = await request("get", API_URL + '/account', { filters }, null, { ...authHeaders() });
    return data;
  }
  async accountCreate({ ...rest }) {
    var data = await request("post", API_URL + '/account', null, { ...rest }, { ...authHeaders() });
    return data;
  }
  async account({ id }) {
    var data = await request("get", API_URL + `/account/${id}`, null, null, { ...authHeaders() });
    return data;
  }
  async accountUpdate({ id, ...rest }) {
    var data = await request("put", API_URL + `/account/${id}`, null, { ...rest }, { ...authHeaders() });
    return data;
  }
  async accountDelete({ id }) {
    var data = await request("delete", API_URL + `/account/${id}`, null, null, { ...authHeaders() });
    return data;
  }
}
export default new AdminService();
