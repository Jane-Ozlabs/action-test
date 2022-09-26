import { request } from '@/utils';
import authHeaders from './auth-headers';

const API_URL = `${process.env.VUE_APP_API_URL}/admin/user`;

class UserService {
  async userList({ ...rest }) {
    var data = await request("get", API_URL + '/list', { ...rest }, null, { ...authHeaders() });
    return data;
  }
  async userDetail({ ...rest }) {
    var data = await request("get", API_URL + '/detail', { ...rest }, null, { ...authHeaders() });
    return data;
  }
  async balanceLogs({ ...rest }) {
    var data = await request("get", API_URL + '/balance-logs', { ...rest }, null, { ...authHeaders() });
    return data;
  }
}
export default new UserService();
