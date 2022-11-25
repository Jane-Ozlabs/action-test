
<template>
  <div class="detailArea addGroup detailTable">
    <xbtn />
    <div class="detailTitle"><span>Revenue share ratio</span></div>
      <div class="tableBox">
        <table>
            <tr>
                <th>Group Name</th>
                <td>
                  <div class="inputBox">
                    <input type="text" id="" name="" value="Group Name" v-model="form.name">
                  </div>
                </td>
              </tr>
              <tr>
                <th>Level 1 (%)</th>
                <td>
                  <div class="inputBox small">
                    <input type="number" id="" name="" value="10" v-model="form.rate1" >
                  </div>
                  <span class="per">%</span>
                </td>
              </tr>
              <tr>
                <th>Level 2 (%)</th>
                <td>
                  <div class="inputBox small">
                    <input type="number" id="" name="" value="10" v-model="form.rate2" >
                  </div>
                  <span class="per">%</span>
                </td>
              </tr>
              <tr>
                <th>Level 3 (%)</th>
                <td>
                    <div class="inputBox small">
                      <input type="number" id="" name="" value="10" v-model="form.rate3" >
                    </div>
                    <span class="per">%</span>
                  </td>
              </tr>                    
          </table>
      </div>
      <div class="bottomBtn">
        <a href="javascript:;" class="blue" @click="save()">Save</a>
      </div>
  </div>
</template>

<style lang="scss"></style>

<script>
import simplebar from "simplebar-vue";
import Swal from "sweetalert2";

export default {
  components: { simplebar },
  props: {
    groupId: {},
  },
  mounted() {
    this.load();
  },
  computed: {
    ...mapState({
      confirmModalResult: state => { var k = 'commissions-save-modal'; return state.modals[k] && !state.modals[k].isVisible && state.modals[k].result || null },
    }),

  },
  data() {
    return {
      form: { id: null, name: "", rate1: 0, rate2: 0,  rate3: 0 },
    };
  },
  methods: {
    async reset() {
      this.form = { id: null, name: "", rate1: 0, rate2: 0,  rate3: 0 }
    },
    async load() {
      if(!this.groupId) {
        this.form = { id: null, name: "", rate1: 0, rate2: 0,  rate3: 0 }
        return
      }

      var r = await loadView(this, `/partners/views/groups/${this.groupId}`, {});

      this.form.id = r.id;
      this.form.name = r.name;
      this.form.rate1 = r.rate1;
      this.form.rate2 = r.rate2;
      this.form.rate3 = r.rate3;
    },
    async save() {
      var isvalid = await this.v$.$validate();
      console.log("validate", isvalid, UV(this.form))
      if(!isvalid) return;

      if(!this.form.name) return Swal.fire({ text: "Please enter a group name.",  showCancelButton: false, confirmButtonColor: "#34c38f" })

      console.log(Number(this.form.rate1)+Number(this.form.rate2)+Number(this.form.rate3));
      if(Number(this.form.rate1)+Number(this.form.rate2)+Number(this.form.rate3) != 100) return Swal.fire({ text: "Please input rate values so that total is 100%",  showCancelButton: false, confirmButtonColor: "#34c38f" })

      showModal({ self: this, key: 'commissions-save-modal' });
    },
    async saveOk() {
      var r = await save(this, `/partners/groups`, null, { ...this.form })

      this.form.id = r.id;
      this.form.name = r.name;
      this.form.rate1 = r.rate1;
      this.form.rate2 = r.rate2;
      this.form.rate3 = r.rate3;

      await Swal.fire({ text: "Sucess!",  showCancelButton: false, confirmButtonColor: "#34c38f" });

      this.$emit("reload");
    }
  },
  watch: {
    groupId() {
      console.log("watch:groupId", UV(this.groupId));
      this.load();
    },
    confirmModalResult() {
      if(this.confirmModalResult != 1) return;
      this.saveOk();
    }
  },
  setup () {
    return {
      v$: useVuelidate()
    }
  },
  validations: {
    form: {
    }
  },
};
import {commissionDetail, commissionSave} from "@/services/partner";
import {showModal, hideModal, setModalResult} from "@/utils";
import { mapState } from 'vuex';
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import { minLength } from "@/utils/validators"
</script>
