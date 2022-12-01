<template>
  <Layout :breadcrumb="items">
    <div class="mainTitle"><span>Send email</span></div>
      <div class="sortBox">
          <div class="searchBox">
              <div class="inputBox">
                <input type="text" id="" name="" placeholder="Search" v-model="filters.subject">
                  <a href="javascript:;" class="searchBtn" @click="search"><img src="img/icon_search.png"></a>
              </div>
              <a href="javascript:;" class="btn" @click="search">Search</a>
          </div>
      </div>
      <div class="scrollBox">
        <div class="tableBox">
            <table>
                <tr>
                    <th style="width:8%"><p>NO</p></th>
                    <th style="width:48%"><p style="text-align:left">Subject</p></th>
                    <th style="width:12%"><p>Status</p></th>
                    <th style="width:12%"><p>Progress</p></th>
                    <th style="width:20%"><p>Date</p></th>
                  </tr>
                  <tr v-for="item of rows2" :key="item.id" @click="review(item, $event)">
                    <td>{{ item.id }}</td>
                    <td style="text-align:left">{{ item.subject }}</td>
                    <td>{{ item.status }}</td>
                    <td>{{ item.sent }} / {{ item.total }}</td>
                    <td>{{ item.updatedAt | formatDateTime }}</td>
                  </tr>
              </table>
          </div>
      </div>
      <Pagination v-model="filters.page" :totalRows="filters.total" :perPage="filters.perPage" limit="10" @input="load()"/>
      <div class="bottomBtn">
        <a href="javascript:;" class="btn" @click="download">Download</a>
        <a href="javascript:;" class="sendBtn" @click="write">Send email</a>
      </div>

    <template v-slot:right>
      <EmailWrite :agentLines="agentLines" :from="from" @reload="load" v-if="mode == 'write'" />
      <EmailReview :emailId="emailId" @reload="load" @edit="edit" v-if="mode == 'review'" />
      <EmailEdit :emailId="emailId" @reload="load" v-if="mode == 'edit'" />
    </template>
  </Layout>
</template>

<script>
export default {
  page: {
    title: "이메일 발송",
    meta: [{ name: "description", content: appConfig.description }],
  },
  components: { Layout, PageHeader, EmailReview, EmailWrite, EmailEdit, Pagination },
  data() {
    return {
      title: "이메일 발송",
      rows2: [],
      filterSubject: '',
      items: [ { text: "Member Management", href: "/user" }, { text: "Send email", href: "/user/emails" }, ],
      filters: { page: 1, perPage: 10, total: 0, subject: "" },
      rows: [],

      agentLines: [],
      from: "",
      mode: "",
    };
  },
  filters: {
    formatStatus(item) { return 'Active' },
  },
  mounted() {
    setMainAreaClass("mainSendEmail");
    this.load();
  },
  computed: {
    uid() { return this.detail.email }
  },
  methods: {
    async load() {
      this.updateFilters();

      this.filterSubject = this.filters.subject
      this.filters.subject = "";

      console.log("filters", UV(this.filters));
      this.rows = [];
      var res = await loadPagedView(this, "/partners/views/emails", {});
      console.log("loadPagedView", UV(res));
      this.agentLines = res.agentLines;
      hideRightPanel();

      if(this.filterSubject == undefined || this.filterSubject == ''){
        this.rows2 = this.rows;
      }
    },
    async search() {
      this.page = 1;
      this.total = 0;
      this.rows2 = []
      await this.load();

      for(let i = 0; i<this.rows.length; i++){
        if(this.rows[i].subject.includes(this.filterSubject)){
          this.rows2.push(this.rows[i])
        }
      }
    },    
    async download() {
      await downloadView(this, "/partners/views/emails");
    },
    updateFilters() {
    },
    review(item) {
      this.emailId = item.id;
      this.mode = "review";
      showRightPanel();
    },
    write() {
      this.mode = "write";
      showRightPanel();
    },
    edit(id) {
      this.mode = "edit";
      this.emailId = id;
      showRightPanel();
    },
    download() {

    },
  }
};
import Layout from "@/router/layouts/main";
import PageHeader from "@/components/page-header";
import EmailReview from "./email-review";
import EmailWrite from "./email-write";
import EmailEdit from "./email-edit";
import appConfig from "@/app.config";
import {emailsView} from "@/services/partner";
import Pagination from "@/components/pagination";
import {showModal,hideModal,toggleRightSidebar,showRightSidebar,hideRightSidebar,dispatchPaged,} from "@/utils";
import {showRightPanel,hideRightPanel,setMainAreaClass} from "@/utils";
</script>
