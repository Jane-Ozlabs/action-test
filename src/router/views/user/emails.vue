<template>
  <Layout :breadcrumb="items">
    <div class="mainTitle"><span>Send email</span></div>
      <div class="sortBox">
          <div class="searchBox">
              <div class="inputBox">
                <input type="text" id="" name="" placeholder="Search" v-model="filters.subject">
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
                    <th style="width:12%"><p>Progress (Sent/Total)</p></th>
                    <th style="width:20%"><p>Date</p></th>
                  </tr>
                  <tr v-for="item of rows" :key="item.id" @click="review(item, $event)">
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
        <a href="javascript:;" class="sendBtn" @click="write">Send email</a>
      </div>

    <template v-slot:right>
      <EmailWrite :from="from" @reload="load" v-if="mode == 'write'" />
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
  components: { Layout, EmailReview, EmailWrite, EmailEdit, Pagination },
  data() {
    return {
      title: "이메일 발송",
      filterSubject: '',
      items: [ { text: "Member Management", href: "/user" }, { text: "Send email", href: "/user/emails" }, ],
      filters: { page: 1, perPage: 10, total: 0, subject: "" },
      rows: [],
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
      this.filterSubject = this.filters.subject

      this.rows = [];
      var res = await loadPagedView(this, "/partners/views/emails", {});
      hideRightPanel();
      if(this.filterSubject == undefined || this.filterSubject == ''){
        return;
      }
    },
    async search() {
      this.page = 1;
      this.total = 0;
      await this.load();
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
  }
};
import Layout from "@/router/layouts/main";
import EmailReview from "./email-review";
import EmailWrite from "./email-write";
import EmailEdit from "./email-edit";
import appConfig from "@/app.config";
import Pagination from "@/components/pagination";
import {showRightPanel,hideRightPanel,setMainAreaClass} from "@/utils";
</script>
