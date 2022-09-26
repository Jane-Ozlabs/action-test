import { request } from '@/utils';
import authHeaders from './auth-headers';

const API_URL = `${process.env.VUE_APP_API_URL}/admin/analytics`;

class AnalyticsService {
  async monthlyList({ ...rest }) {
    var data = await request("get", API_URL + '/monthly', { ...rest }, null, { ...authHeaders() });
    return data;
  }
  async dailyList({ ...rest }) {
    var data = await request("get", API_URL + '/daily', { ...rest }, null, { ...authHeaders() });
    return data;
  }
  async contentMonthlyList({ ...rest }) {
    var data = await request("get", API_URL + '/content/monthly', { ...rest }, null, { ...authHeaders() });
    return data;
  }
  async contentDailyList({ ...rest }) {
    var data = await request("get", API_URL + '/content/daily', { ...rest }, null, { ...authHeaders() });
    return data;
  }
  async contentServerList({ ...rest }) {
    var data = await request("get", API_URL + '/content/server', { ...rest }, null, { ...authHeaders() });
    return data;
  }
}
export default new AnalyticsService();
