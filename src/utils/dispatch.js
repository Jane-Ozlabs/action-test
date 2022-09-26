
export async function dispatchPaged({ self, key, data }) {
  var filters = self.filter || self.filters;
  var page = self.page;
  var limit = self.perPage;
  
  var data = await self.$store.dispatch(key, { filters, page, limit, ...data })
  var { total, perPage, page, rows } = data; console.log(data);
  self.page = page; self.perPage = perPage; self.data = rows; self.total = total;
  return data;
}
