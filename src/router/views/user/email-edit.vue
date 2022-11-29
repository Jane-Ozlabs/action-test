<template>
  <div class="detailArea detailSendEmail">
    <xbtn />
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
              <input type="text" id="" name="" value="" v-model="subject" />
            </div>
          </td>
        </tr>
        <tr>
          <th>To</th>
          <td>
            <AgentFilter
              ref="agentFilter"
              :agentLines="agentLines"
              :onChange="onAgentChange"
              :noSearch="1"
              action="Add"
              :onAction="add"
            />
            <vue-tags-input
              placeholder="type email"
              v-model="tag"
              :tags="tags"
              @tags-changed="newTags => (tags = newTags)"
              :save-on-key="[13, ':', ';']"
            />
            <!-- <div class="inputBox" style="margin-top: 10px"></div> -->
          </td>
        </tr>
      </table>
      <div class="textArea">
        <ckeditor
          v-model="content"
          :editor="editor"
          tag-name="textarea"
          :disabled="false"
        ></ckeditor>
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
  components: {
    simplebar,
    VueEditor,
    AgentFilter,
    ckeditor: CKEditor.component,
    VueTagsInput,
  },
  props: { emailId: {} },
  mounted() {
    this.load();
  },
  computed: {},
  data() {
    return {
      agentLines: [],
      from: '',
      filters: {},
      subject: '',
      content: '',
      group: '',
      editor: ClassicEditor,
      tag: '',
      tags: [],
    };
  },
  methods: {
    async load() {
      var r = await loadView(
        this,
        `/partners/views/emails/${this.emailId}`,
        {},
      );
      console.log('loadView res:', UV(r));
      this.from = r.from;
      this.subject = r.subject;
      this.content = r.content;
      this.agentLines = r.agentLines;
      this.tags = this.tagTarget(r.targets);
    },
    async save() {
      var em = this.payload('draft');
      var r = await save(this, `/partners/emails/${this.emailId}`, null, em);
      await Swal.fire({
        text: 'Sucess!',
        showCancelButton: false,
        confirmButtonColor: '#34c38f',
      });
      this.$emit('reload');
    },
    async send() {
      var em = this.payload('send');
      var r = await save(this, `/partners/emails/${this.emailId}`, null, em);
      await Swal.fire({
        text: 'Sucess!',
        showCancelButton: false,
        confirmButtonColor: '#34c38f',
      });
      this.$emit('reload');
    },
    payload(action) {
      var payload = {
        subject: this.subject,
        content: this.content,
        targets: this.tags.map(x => x.value || x.text).join(';'),
        action: action,
      };
      return payload;
    },
    add() {
      var text =
        agentLineText({
          agentLines: this.agentLines,
          agent1: this.$refs.agentFilter.filters.id1,
          agent2: this.$refs.agentFilter.filters.id2,
          agent3: this.$refs.agentFilter.filters.id3,
        }) + ' all members';
      this.tags.push({
        text: text,
        value: `${this.$refs.agentFilter.filters.id1}#${this.$refs.agentFilter.filters.id2}#${this.$refs.agentFilter.filters.id3}`,
      });
    },
    tagTarget(target) {
      let targetArr = target.split(';');
      let tags = targetArr.map(x => {
        if (!x.includes('#')) {
          return { text: x, value: x };
        } else {
          return {
            text:
              agentLineText({
                agentLines: this.agentLines,
                agent1: x.split('#')[0],
                agent2: x.split('#')[1],
                agent3: x.split('#')[2],
              }) + ' all members',
            value: x,
          };
        }
      });
      return tags;
    },
    onAgentChange() {
      this.group =
        agentLineText({
          agentLines: this.agentLines,
          agent1: this.$refs.agentFilter.filters.id1,
          agent2: this.$refs.agentFilter.filters.id2,
          agent3: this.$refs.agentFilter.filters.id3,
        }) + ' all members';
    },
  },
  watch: {
    userId: function () {
      this.load();
    },
  },
};
import { emailSend } from '@/services/partner';
import { showModal, hideModal, agentLineText } from '@/utils';
import simplebar from 'simplebar-vue';
import Swal from 'sweetalert2';
import { VueEditor, Quill } from 'vue2-editor';
import AgentFilter from '@/components/agent-filter';
import CKEditor from '@ckeditor/ckeditor5-vue';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import VueTagsInput from '@johmun/vue-tags-input';
</script>
