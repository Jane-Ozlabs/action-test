<template>
  <div class="detailArea detailSendEmail">
    <a href="javascript:;" class="xBtn"><img src="img/icon_close.png" /></a>
    <div class="detailTitle"><span>Send email</span></div>
    <div class="tableBox">
      <table>
        <tr>
          <th>From</th>
          <td>{{ from }}</td>
        </tr>
        <tr>
          <th>Subject</th>
          <td>
            <div class="inputBox">
              <input type="text" id="" name="" value="" v-model="subject"/>
            </div>
          </td>
        </tr>
        <tr>
          <th>To</th>
          <td>
            <AgentFilter ref="agentFilter" :agentLines="agentLines" :onChange="onAgentChange" :noSearch="1" action="Add" :onAction="add"/>
            <vue-tags-input placeholder="type email" v-model="tag" :tags="tags" @tags-changed="newTags => tags = newTags" :save-on-key="[13, ':', ';']"/>
            <!-- <div class="inputBox" style="margin-top: 10px"></div> -->
          </td>
        </tr>
      </table>
      <div class="textArea">
        <ckeditor v-model="content" :editor="editor" tag-name="textarea" :disabled="false"></ckeditor>
      </div>
    </div>
    <div class="bottomBtn">
      <a href="javascript:;" class="blue" @click="save">Save</a>
      <a href="javascript:;" @click="send">Send</a>
    </div>
  </div>
</template>
<style>
.ck-editor__editable {
  font-size: 14px;
  width: 100%;
  height: 460px;
}
</style>
<style lang="scss"></style>

<script>
export default {
  components: { simplebar, VueEditor, AgentFilter, ckeditor: CKEditor.component, VueTagsInput },
  props: { },
  mounted() {
    this.load();
  },
  computed: {},
  data() {
    return {
      agentLines: [],
      from: "",
      filters: {},
      subject: "",
      content: "",
      group: "",
      editor: ClassicEditor,
      tag: "",
      tags: [],
    };
  },
  methods: {
    async load() {
      var r = await loadView(this, `/partners/views/emails/new`, {});
      console.log("loadView res:", UV(r))
      this.from = r.from;
      this.agentLines = r.agentLines;
    },
    async save() {
      var em = this.payload("draft");

      console.log("save", UV(em));

      var r = await save(this, `/partners/emails`, null, em);

      await Swal.fire({ text: "임시 저장되었습니다", showCancelButton: false, confirmButtonColor: "#34c38f", });

      this.$emit("reload")
    },
    async send() {
      var em = this.payload("send");

      console.log("send", UV(em));

      var r = await save(this, `/partners/emails`, null, em);

      await Swal.fire({ text: "발송되었습니다", showCancelButton: false, confirmButtonColor: "#34c38f", });

      this.$emit("reload")
    },
    payload(action) {
      var payload = {
        subject: this.subject,
        content: this.content,
        targets: this.tags.map(x => x.value || x.text).join(";"),
        action: action,
      };
      return payload;
    },
    add() {
      var text = agentLineText({
          agentLines: this.agentLines,
          agent1: this.$refs.agentFilter.filters.id1,
          agent2: this.$refs.agentFilter.filters.id2,
          agent3: this.$refs.agentFilter.filters.id3,
        }) + " 전체회원";
      console.log(UV(text));
      this.tags.push({ text: text, value: `${this.$refs.agentFilter.filters.id1}#${this.$refs.agentFilter.filters.id2}#${this.$refs.agentFilter.filters.id3}` })
    },
    targetText(target) {

    },
    onAgentChange() {
      this.group =
        agentLineText({
          agentLines: this.agentLines,
          agent1: this.$refs.agentFilter.filters.id1,
          agent2: this.$refs.agentFilter.filters.id2,
          agent3: this.$refs.agentFilter.filters.id3,
        }) + " 전체회원";
    },
  },
  watch: {
    userId: function () {
      this.load();
    },
  },
};
import { emailSend } from "@/services/partner";
import { showModal, hideModal, agentLineText } from "@/utils";
import simplebar from "simplebar-vue";
import Swal from "sweetalert2";
import { VueEditor, Quill } from "vue2-editor";
import AgentFilter from "@/components/agent-filter";
import CKEditor from "@ckeditor/ckeditor5-vue";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import VueTagsInput from '@johmun/vue-tags-input';
</script>
