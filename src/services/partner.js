import { requestAuth, requestNoAuth } from "./service";

export const usersView = async ({ ...filters }) => await requestAuth("get", "/partners/views/users", { ...filters });
export const userDetail = async ({ id }) => await requestAuth("get", `/partners/views/users/${id}`);
export const registerUser = async (user) => await requestAuth("post", "/partners/users", null, user);

export const emailsView = async ({ ...filters }) => await requestAuth("get", "/partners/views/emails", { ...filters });
export const emailDetail = async ({ id }) => await requestAuth("get", `/partners/views/emails/${id}`, {});
export const emailSend = async (data) => await requestAuth("post", `/partners/emails`, null, data);
export const emailDelete = async ({ id }) => await requestAuth("delete", `/partners/emails/${id}`);

export const commissionsView = async (filters) => await requestAuth("get", "/partners/views/commissions", filters);
export const commissionDetail = async ({ id }) => await requestAuth("get", `/partners/views/commissions/${id}`);
export const commissionSave = async (commissions) => await requestAuth("post", "/partners/commissions", null, commissions);

export const revenueDailyView = async (filters) => await requestAuth("get", `/partners/views/revenue/daily`, filters);
export const revenueDailyUserView = async ({ id, date }) => await requestAuth("get", `/partners/views/revenue/daily/${id}`, { date });
export const revenueMonthlyView = async (filters) => await requestAuth("get", `/partners/views/revenue/monthly`, filters);
export const revenueMonthlyUserView = async ({ id, date }) => await requestAuth("get", `/partners/views/revenue/monthly/${id}`, { date });

export const settlementsView = async (filters) => await requestAuth("get", `/partners/views/settlements`, filters);

export const analyticsGamesView = async (filters) => await requestAuth("get", `/partners/views/analytics/games`, filters);
export const analyticsBettingsView = async (filters) => await requestAuth("get", `/partners/views/analytics/bettings`, filters);

export default {
  usersView, userDetail,
  emailsView, emailDetail, emailSend, emailDelete,
  commissionsView, commissionDetail, commissionSave,
  revenueDailyView, revenueDailyUserView,
  revenueMonthlyView, revenueMonthlyUserView,
  settlementsView,
  analyticsGamesView, 
  analyticsBettingsView,
}
