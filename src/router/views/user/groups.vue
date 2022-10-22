<template>
  <Layout :breadcrumb="items">
    <div class="mainTitle"><span>Revenue share</span></div>
      <div class="scrollBox">
        <div class="tableBox">
            <table>
                <tr>
                    <th style="width:10%"><p>NO</p></th>
                    <th style="width:30%" class="radiusRight"><p>Group name</p></th>
                    <th style="width:20%" class="radiusLeft"><p>Level 1</p></th>
                    <th style="width:20%"><p>Level 2</p><span class="absText">Revenue share ratio (%)</span></th>
                    <th style="width:20%"><p>Level 3</p></th>
                  </tr>
                  <tr v-for="item of rows" :key="item.id" @click="edit(item, $event)">
                    <td>{{ item.id }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.rate1 }}</td>
                    <td>{{ item.rate2 }}</td>
                    <td>{{ item.rate3 }}</td>
                  </tr>
              </table>
          </div>
      </div>
      <Pagination v-model="filters.page" :totalRows="filters.total" :perPage="filters.perPage" limit="10" @input="load()"/>
      <div class="bottomBtn">
        <a href="javascript:;" class="addGroupBtn" @click="create()">Add Group</a>
      </div>
    <template v-slot:right>
        <GroupsEdit ref="editor" :groupId="groupId" @reload="load" v-if="editVisible" />
    </template>
  </Layout>
</template>

<script>
export default {
  page: {
    title: "수익 분배 관리",
    meta: [{ name: "description", content: appConfig.description }]
  },
  components: { Layout, PageHeader, GroupsEdit, Pagination },
  data() {
    return {
      title: "수익 분배 관리",
      items: [ { text: "Member Management", href: "/user" }, { text: "Revenue distribution", href: "/user/commissions" }, ],
      filters: { page: 1, perPage: 10, total: 0 },
      rows: [],

      editVisible: false,
      groupId: null,
    };
  },
  filters: {
  },
  computed: {
  },
  mounted() {
    setMainAreaClass("mainRevenueShare");
    this.load();
  },
  methods: {
    async load(id) {
      this.updateFilters();

      console.log("filters", UV(this.filters));
      this.rows = [];
      var res = await loadPagedView(this, "/partners/views/groups", {});
      console.log("loadPagedView", UV(res));
    },
    updateFilters() {

    },
    create() {
      this.groupId = 0;
      this.editVisible = true;

      showRightPanel();
      this.$nextTick(() => this.$refs.editor.reset());
    },
    edit(item) {
      this.groupId = item.id;
      this.editVisible = true;

      showRightPanel();
    },
  },
};
import Pagination from "@/components/pagination";
import {showModal,hideModal,toggleRightSidebar,showRightSidebar,hideRightSidebar,dispatchPaged,} from "@/utils";
import {showRightPanel,hideRightPanel,setMainAreaClass} from "@/utils";
const moment = require('moment');
import Layout from "@/router/layouts/main";
import PageHeader from "@/components/page-header";
import GroupsEdit from "./groups-edit.vue";
import appConfig from "@/app.config";
</script>
