<template>
  <div class="detailArea detailTable">
    <xbtn />
    <div class="detailTitle"><span>Send email list</span></div>
      <div class="tableBox">
        <table>
            <tr>
                <th>No</th>
                <td>{{emailId}}</td>
              </tr>
            <tr>
                <th>From</th>
                <td>{{from}}</td>
              </tr>
            <tr>
                <th>Subject</th>
                <td>{{subject}}</td>
              </tr>
            <tr>
                <th>To</th>
                <td>{{to}}</td>
              </tr>
            <tr>
                <th>Date</th>
                <td>{{updatedAt | formatDateTime }}</td>
              </tr>
            <tr>
                <th>Status/Progress</th>
                <td>{{status}}, {{sent}} / {{total}}</td>
              </tr>
          </table>
          <div class="email_contents" v-html="this.content">
          </div>
      </div>
      <div class="bottomBtn">
        <a href="javascript:;" class="blue" @click="edit">Edit&Send</a>
        <a href="javascript:;" @click="del">Delete</a>
      </div>
  </div>
</template>

<style lang="scss"></style>

<script>
import simplebar from "simplebar-vue";
import Swal from "sweetalert2";
import { VueEditor, Quill } from "vue2-editor";

export default {
  components: { simplebar, VueEditor },
  props: { emailId: {}, onReload: {}, },
  mounted() {
    this.load();
  },
  computed: {
  },
  data() {
    return {
      toolbar: [[],],
      from: "",
      to: "",
      subject: "",
      content: "",
      status: "",
      sent: 0,
      total: 0,
      updatedAt: "",
    };
  },
  methods: {
    async load() {
      console.log(this.emailId);
      var ed = await emailDetail({ id: this.emailId });
      console.log(ed);
      var { from, toAgentKey, to, subject, content, status, sent, total, updatedAt } = ed;
      this.from = from;
      this.to = to;
      this.toAgentKey = toAgentKey;
      this.subject = subject;
      this.content = content;
      this.status = status;
      this.sent = sent;
      this.total = total;
      this.updatedAt = updatedAt;
    },
    async edit() {
      this.$emit("edit", this.emailId);
    },
    async del() {
      var r = await Swal.fire({ text: "삭제하시겠습니까?",  showCancelButton: true, confirmButtonColor: "#34c38f", cancelButtonColor: "#f46a6a", confirmButtonText: "삭제" });
      if(!r.value) return;

      await emailDelete({ id: this.emailId });

      await Swal.fire({ text: "삭제되었습니다..",  showCancelButton: false, confirmButtonColor: "#34c38f" });

      this.$emit("reload");
    },
  },
  watch: {
    emailId: function () {
      this.load();
    }
  }
};
import {emailDetail,emailDelete} from "@/services/partner";
import {showModal,hideModal} from "@/utils";
</script>

