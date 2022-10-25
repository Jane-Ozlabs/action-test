<template>
  <Layout :breadcrumb="items">
    <div class="mainTitle"><span>All Members</span></div>
    <div class="sortBox">
      <AgentFilter ref="agentFilter" :agentLines="agentLines" :agentLevel="agentLevel" noTitle="1" :onAction="action" />
      <div class="searchBox">
        <BSSelect v-model="userFilterType" :options="userFilterOptions" :onChange="userFilterChanged"/>
          <div class="inputBox">
            <input type="text" id="" name="" placeholder="Search" v-model="userFilterValue">
              <a href="javascript:;" class="searchBtn" @click="search"><img src="img/icon_search.png"></a>
          </div>
          <a href="javascript:;" class="btn" @click="download">Download</a>
      </div>
    </div>
    <div class="summary"><span><b>Group :</b> {{ summary.group }}</span> <span><b>Member :</b> {{ summary.numUsers }}</span></div>
    <div class="scrollBox">
      <div class="tableBox">
          <table>
              <tr>
                  <th><p>NO</p></th>
                  <th><p>Grade</p></th>
                  <th><p>Group</p></th>
                  <th><p>Username</p></th>
                  <th><p>Partner code</p></th>
                  <th><p>Mobile</p></th>
                  <th><p>Email</p></th>
                  <th><p>Balance($)</p></th>
                  <th><p>Join</p></th>
                  <th><p>Last sign in</p></th>
                </tr>
                <tr v-for="data of rows" :key="data.id" @click="viewDetail(data, $event)">
                  <td>{{ data.id }}</td>
                    <td>{{ data.grade }}</td>
                    <td>{{ data.group }}</td>
                    <td>{{ data.username }}</td>
                    <td>{{ data.partnerCode }} <a href="javascript:;" class="xrefBtn" @click="openReferral(data)"></a></td>
                    <td>{{ data.mobile }}</td>
                    <td>{{ data.email }}</td>
                    <td>{{ data.balance | formatCurrency }}</td>
                    <td>{{ data.joinedAt | formatDate }}<span class="time">{{ data.joinedAt | formatTime }}</span></td>
                    <td>{{ data.lastLoggedInAt | formatDate }}<span class="time">{{ data.lastLoggedInAt | formatTime }}</span></td>
                </tr>
            </table>
        </div>
    </div>

    <Pagination v-model="filters.page" :totalRows="filters.total" :perPage="filters.perPage" limit="10" @input="load()"/>

    <div class="bottomBtn">
      <a href="javascript:;" class="registBtn" @click="register()">Registration</a>
    </div>
    <template v-slot:right>
      <RegisterBar @reload="load" @close="closeRightPanel" v-if="registerVisible"/>
      <UserInfoBar :userId="userId" :agentLines="agentLines" :agentLevel="agentLevel" :onClose="closeRightPanel" v-if="userInfoVisible" @reload="load"/>
    </template>
  </Layout>
</template>

<script>
export default {
  page: {
    title: "All Members",
    meta: [{ name: "description", content: appConfig.description }],
  },
  components: { Layout, PageHeader, UserInfoBar, RegisterBar, AgentFilter, Pagination, BSSelect },
  data() {
    return {
      title: "User",
      items: [ { text: "Member Management", href: "/user" }, { text: "All Members", href: "/user/users" }, ],
      agentLines: [],
      agentLevel: 1,
      agentGroups: [],

      filters: { page: 1, perPage: 10, agent1: 0, agent2: 0, agent3: 0 },
      summary: { group: "", numUsers: 0 },
      rows: [],

      userFilterType: "all",
      userFilterValue: "",
      userFilterOptions: [{ text: "All", value: "all" }, { text: "Username", value: "username" }, { text: "Email", value: "email" }],
      agentLines: [],
      registerVisible: false,
      userInfoVisible: false,
    };
  },
  filters: {},
  mounted() {
    setMainAreaClass("");
    this.load();
  },
  computed: {
    userFilterTypeSelected() { var x = this.userFilterOptions.find(x => x.value == this.userFilterType ); return x && x.text || ""}
  },
  methods: {
    async load() {
      this.updateFilters();

      console.log("filters", UV(this.filters));
      this.rows = [];
      var res = await loadPagedView(this, "/partners/views/users", {});
      console.log("loadPagedView", UV(res));
      var agentLines = this.agentLines = res.agentLines;
      var { a1, a2, a3 } = agentOptions({ agentLines, agent1: this.filters.agent1, agent2: this.filters.agent2, agent3: this.filters.agent3 });
      console.log("agentLines", UV(agentLines), a1, a2, a3);

      hideRightPanel();
    },
    async search() {
      this.page = 1;
      this.total = 0;
      await this.load();
    },    
    async download() {
      this.updateFilters();
      await downloadView(this, "/partners/views/users");
    },
    updateFilters() {
      this.userFilterType == "all" && (this.filters.usertext = this.userFilterValue);
      this.userFilterType == "username" && (this.filters.username = this.userFilterValue);
      this.userFilterType == "email" && (this.filters.email = this.userFilterValue);

      this.filters.agent1 = this.$refs.agentFilter.filters.id1;
      this.filters.agent2 = this.$refs.agentFilter.filters.id2;
      this.filters.agent3 = this.$refs.agentFilter.filters.id3;
    },
    async action(action) {
      if(action == "search") await this.search()
      if(action == "download") await this.download()
    },

    async resetPassword(data) {
      console.log(data);
      var { id, email } = data;
      this.$store.commit("MODAL", { key: MODAL_KEY, data: { isVisible: true, userId: id, email }, });
    },
    async openReferral(data) {
      var { id, email, referral } = data;
      this.$store.commit("MODAL", { key: "referral-modal", data: { isVisible: true, referral: referral }, });
    },
    async viewDetail(data, e) {
      this.userInfoVisible = true;
      this.registerVisible = false;
      this.userId = data.id;
      //setTimeout(() => this.showRightSidebar(), 1);
      showRightPanel();
    },
    async register() {
      this.userInfoVisible = false;
      this.registerVisible = true;
      showRightPanel();
    },
    async closeRightPanel() {
      this.userInfoVisible = false;
      this.registerVisible = false;
      hideRightPanel();
    },
    userFilterChanged(x) {
      console.log("userFilterChanged", x);
    },
  },
  watch: {
    filters: {
      deep: true,
      handler(val) {
        console.log("watch:filters", UV(val));
      }
    }
  }
};
import {usersView} from "@/services/partner";
import {showRightPanel, hideRightPanel, agentOptions, setMainAreaClass} from "@/utils";
import Layout from "@/router/layouts/main";
import PageHeader from "@/components/page-header";
import UserInfoBar from "./userinfobar";
import RegisterBar from "./registerbar";
import appConfig from "@/app.config";
import AgentFilter from "@/components/agent-filter";
import Pagination from "@/components/pagination";
import BSSelect from "@/components/bsselect";
</script>
