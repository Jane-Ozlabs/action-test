<template>
  <Layout :breadcrumb="items">
    <div class="mainTitle"><span>Monthly Revenue</span></div>

    <Header
      ref="header"
      :agentLines="agentLines"
      @input="updateFilters"
      @action="action"
    />

    <div class="scrollBox">
      <div class="tableBox">
        <table>
          <tr>
            <th><p>Date</p></th>
            <th><p>Grade</p></th>
            <th><p>Group</p></th>
            <th><p>Username</p></th>
            <th><p>Bet</p></th>
            <th class="radiusRight"><p>Win/Lose</p></th>

            <th class="radiusLeft"><p>Level 1</p></th>
            <th>
              <p>Level 2</p>
              <span class="absText">Revenue share</span>
            </th>
            <th><p>Level 3</p></th>
          </tr>
          <tr class="total" v-if="summary">
            <th><p>Total</p></th>
            <th>
              <p>
                {{ summary.date | formatMonth }}~{{
                  summary.dateTo | formatMonth
                }}
              </p>
            </th>
            <th><p>&nbsp;</p></th>
            <th><p>&nbsp;</p></th>
            <th>
              <p>{{ summary.bet | formatCurrency }}</p>
            </th>
            <th>
              <p>
                <font color="#dd3100">{{
                  summary.winLose | formatCurrency
                }}</font>
              </p>
            </th>
            <th>
              <p>{{ summary.rS1 | formatCurrency }}</p>
            </th>
            <th>
              <p>{{ summary.rS2 | formatCurrency }}</p>
            </th>
            <th>
              <p>{{ summary.rS3 | formatCurrency }}</p>
            </th>
          </tr>
          <tr v-for="x of rows" :key="x.id" @click="viewDetail(x)">
            <td>{{ x.date | formatMonth }}</td>
            <td>{{ x.grade }}</td>
            <td>{{ x.group }}</td>
            <td>{{ x.username }}</td>
            <td>{{ x.bet | formatCurrency }}</td>
            <td>{{ x.winLose | formatCurrency }}</td>
            <td>{{ x.rS1 | formatCurrency }}</td>
            <td>{{ x.rS2 | formatCurrency }}</td>
            <td>{{ x.rS3 | formatCurrency }}</td>
          </tr>
        </table>
      </div>
    </div>
    <Pagination
      v-model="filters.page"
      :totalRows="filters.total"
      :perPage="filters.perPage"
      limit="10"
      @input="load()"
    />
    <template v-slot:right>
      <UserMonthView :userId="userId" :date="date" v-if="detailVisible" />
    </template>
  </Layout>
</template>
<script>
export default {
  page: {
    title: '?????? ?????? ??????',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: {
    Layout,
    Header,
    PageHeader,
    AgentFilter,
    MonthFilter,
    UserFilter,
    MonthlyView,
    Pagination,
    UserMonthView,
  },
  data() {
    return {
      title: '?????? ?????? ??????',
      items: [
        { text: 'Sales Management', href: '/revenue' },
        { text: 'Sales Monthly', href: '/revenue/monthly' },
      ],
      filters: {
        agent1: 0,
        agent2: 0,
        agent3: 0,
        dateFrom: '',
        dateTo: '',
        username: '',
        page: 1,
        perPage: 50,
        total: 0,
      },
      summary: { bet: 0, winLose: 0, rs1: 0, rs2: 0, rs3: 0 },
      rows: [],
      agentLines: [],

      detailVisible: false,
      userId: 0,
      username: '',
      date: '',
    };
  },
  computed: {},
  mounted() {
    console.log(this.$route.params);
    setMainAreaClass('mainSales');
    this.load();
  },
  methods: {
    async load() {
      this.updateFilters();

      if (
        this.filters.dateFrom.split('-').join('') >
        this.filters.dateTo.split('-').join('')
      ) {
        alert('Please re-enter the date');
      } else {
        this.rows = [];
        var res = await loadPagedView(
          this,
          '/partners/views/revenue/monthly',
          {},
        );

        this.agentLines = res.agentLines;
        this.summary = res.summary;

        hideRightPanel();
      }
    },
    async updateFilters() {
      if (this.$refs.header) {
        this.filters.agent1 = this.$refs.header.filters.id1;
        this.filters.agent2 = this.$refs.header.filters.id2;
        this.filters.agent3 = this.$refs.header.filters.id3;
        this.filters.dateFrom = moment(
          this.$refs.header.filters.dateFrom,
          'YYYY-MM',
        ).format('YYYY-MM-DD');
        this.filters.dateTo = moment(this.$refs.header.filters.dateTo)
          .add(1, 'day')
          .format('YYYY-MM-DD');
        this.filters.username = this.$refs.header.filters.username;
      } else {
        this.filters = {
          agent1: 0,
          agent2: 0,
          agent3: 0,
          dateFrom: moment().utc().startOf('day').format('YYYY-MM-DD'),
          dateTo: moment()
            .utc()
            .startOf('month')
            .add(1, 'months')
            .format('YYYY-MM-DD'),
          username: '',
          page: 1,
          perPage: 50,
          total: 0,
        };
      }

      console.log('updateFilters', UV(this.filters));
    },
    async action(action) {
      if (action == 'search') await this.search();
      if (action == 'download') await this.download();
    },
    async search() {
      await this.load();
    },
    async download() {
      await download(this, '/partners/views/revenue/monthly', {});
    },
    async viewDetail(x) {
      console.log(UV(x));
      this.detailVisible = true;
      this.userId = x.userId;
      this.date = x.date;

      showRightPanel();
    },
  },
};
import Header from './revenue-monthly-header.vue';
import Pagination from '@/components/pagination';
import Layout from '@/router/layouts/main';
import PageHeader from '@/components/page-header';
import AgentFilter from '@/components/agent-filter';
import MonthFilter from '@/components/month-filter';
import UserFilter from '@/components/user-filter';
import MonthlyView from './monthly';
import UserMonthView from './user-month';
import appConfig from '@/app.config';
const moment = require('moment');
import {
  showModal,
  hideModal,
  toggleRightSidebar,
  showRightSidebar,
  hideRightSidebar,
  dispatchPaged,
} from '@/utils';
import { showRightPanel, hideRightPanel, setMainAreaClass } from '@/utils';
</script>
