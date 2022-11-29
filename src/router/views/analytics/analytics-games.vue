<template>
  <Layout :breadcrumb="items">
    <div class="mainTitle"><span>Game Usage</span></div>

    <Header
      ref="header"
      :agentLines="agentLines"
      @input="updateFilters"
      @action="action"
      :btnData="true"
    />

    <div class="summary">
      <span><b>Group :</b> {{ summary.group }}</span>
      <span><b>Date :</b> {{ summary.dateFrom }} ~ {{ summary.dateTo }}</span>
      <span><b>Member :</b> {{ summary.numUsers }}</span>
    </div>
    <div class="scrollBox">
      <GamesTop20 title="CASINO" :data="casino" />
      <GamesTop20 title="SPORTS" :data="sports" />
      <GamesTop20 title="POKER" :data="poker" />
    </div>
  </Layout>
</template>
<script>
export default {
  page: {
    title: '게임 이용 현황',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: {
    Layout,
    Header,
    PageHeader,
    AgentFilter,
    DayFilter,
    UserFilter,
    GamesTop20,
  },
  data() {
    return {
      title: '게임 이용 현황',
      items: [
        { text: 'Game User Status', href: '/analytics' },
        { text: 'Game User Status', href: '/analytics/games' },
      ],
      agentLines: [],
      filters: {
        page: 1,
        perPage: 50,
        total: 0,
        agent1: 0,
        agent2: 0,
        agent3: 0,
      },
      summary: { group: '', numUsers: 0, dateFrom: '', dateTo: '' },
      rows: [],

      casino: [],
      sports: [],
      poker: [],
    };
  },
  filters: {},
  computed: {},
  mounted() {
    console.log(this.$route.params);
    var { filters } = this.$route.params;
    setMainAreaClass('mainGame');
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
        var view = await loadPagedView(
          this,
          '/partners/views/analytics/games',
          {},
        );

        this.casino = view.casino;
        this.sports = view.sports;
        this.poker = view.poker;

        this.agentLines = view.agentLines;

        hideRightPanel();
      }
    },
    async updateFilters() {
      if (this.$refs.header) {
        this.filters.agent1 = this.$refs.header.filters.id1;
        this.filters.agent2 = this.$refs.header.filters.id2;
        this.filters.agent3 = this.$refs.header.filters.id3;
        this.filters.dateFrom = this.$refs.header.filters.dateFrom;
        this.filters.dateTo = this.$refs.header.filters.dateTo;
        this.filters.username = this.$refs.header.filters.username;
      } else {
        this.filters = {
          agent1: 0,
          agent2: 0,
          agent3: 0,
          dateFrom: moment().utc().startOf('day').format('YYYY-MM-DD'),
          dateTo: moment().utc().endOf('day').format('YYYY-MM-DD'),
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
      await download(this, '/partners/views/analytics/games', {});
    },
  },
};
import Header from './analytics-games-header.vue';
import Layout from '@/router/layouts/main';
import PageHeader from '@/components/page-header';
import AgentFilter from '@/components/agent-filter';
import DayFilter from '@/components/day-filter';
import UserFilter from '@/components/user-filter';
import GamesTop20 from './games-top20';
import appConfig from '@/app.config';
import { analyticsGamesView } from '@/services/partner';
const moment = require('moment');
import { showRightPanel, hideRightPanel, setMainAreaClass } from '@/utils';
</script>
