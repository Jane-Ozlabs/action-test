<template>
  <div class="detailArea registration">
    <a href="javascript:;" class="xBtn" @click="$emit('close')"><img src="img/icon_close.png"></a>
    <div class="detailTitle"><span>Account registration</span></div>
      <div class="tableBox">
        <table>
            <tr>
              <th>Grade</th>
              <td>
                <AgentFilter ref="agentFilter" :agentLines="agentLines" :level="agentLevel" noTitle="1" noSearch="1"/>
              </td>
            </tr>
            <tr>
              <th>Group</th>
              <td>
                <BSSelect v-model="agentGroup" :options="agentGroupOptions"/>
                <p class="per">({{selectedAgentGroup.r1}}% : {{selectedAgentGroup.r2}}% : {{selectedAgentGroup.r3}}%)</p>
              </td>
            </tr>
            <tr>
                <th>Username (Partner code)</th>
                <td>
                    <div class="inputBox"><input type="text" name="" value="" v-model="username"></div>
                  </td>
              </tr>
            <tr>
                <th>Password</th>
                <td>
                    <div class="inputBox"><input type="password" name="" value="" v-model="password"></div>
                  </td>
              </tr>
            <tr>
                <th>Confirm<br>Password</th>
                <td>
                    <div class="inputBox"><input type="password" name="" value="" v-model="password2"></div>
                  </td>
              </tr>
            <tr>
                <th>Email</th>
                <td>
                    <div class="inputBox"><input type="text" name="" value="" v-model="email"></div>
                  </td>
              </tr>
          </table>
      </div>
      <div class="bottomBtn">
        <a href="javascript:;" @click="register">Registration</a>
      </div>
  </div>
</template>

<style lang="scss"></style>

<script>
import simplebar from "simplebar-vue";
import Swal from "sweetalert2";
import AgentFilter from "@/components/agent-filter";

export default {
  components: { simplebar, AgentFilter, BSSelect },
  props: ["onReload", "onClose" ],
  setup () {
    return {
      v$: useVuelidate()
    }
  },  
  mounted() {
    this.load()
  },
  computed: {
    agentGroupOptions() { return this.agentGroups.map(x => ({ value: x.id, text: x.name })) },
    selectedAgentGroup() { return this.agentGroups.find(x => x.id == this.agentGroup) || { r1: 0, r2: 0, r3: 0 } },
    ...mapState({
      registrationModalResult: state => { return state.modals['account-registration-modal'] && !state.modals['account-registration-modal'].isVisible && state.modals['account-registration-modal'].result || null },
    }),
  },
  data() {
    return {
      referral: "",
      group: "0",
      username: "",
      password: "",
      password2: "",
      email: "",
      groups: [],

      agentLines: [],
      agentGroups: [],
      agentGroup: "0",
      agentLevel: 1,
    };
  },
  validations: {
    username: { required },
    email: { required },
    password: { required },
    password2: { required },
  },
  methods: {
    async load() {
      var r = await loadView(this, `/partners/views/register`, {});
      console.log("loadView res:", UV(r))
      this.agentGroups = r.agentGroups;
      this.agentLines = r.agentLines;
    },
    async register() {
      var isvalid = await this.v$.$validate();
      console.log(UV(this.v$));
      if(!isvalid) return;

      var user = {
        agent1: this.$refs.agentFilter.filters.id1,
        agent2: this.$refs.agentFilter.filters.id2,
        agent3: this.$refs.agentFilter.filters.id3,
        referral: this.referral,
        username: this.username,
        password: this.password,
        password2: this.password,
        email: this.email,
        agentGroup: this.agentGroup,
      };
      if(user.password != user.password2) {
        return Swal.fire({ text: "Passwords not match",  showCancelButton: false, confirmButtonColor: "#34c38f" });
      }
      
      console.log(user);

      await registerUser(user);

      this.$store.commit("MODAL", { key: "account-registration-modal", data: { isVisible: true, onClose: () => { console.warn("onClose", this); this.$emit("reload")} }, });
    },
  },
  watch: {
    userId: function () { this.load(); },
    registrationModalResult: function ()
    {
      console.log("registrationModalResult", this.registrationModalResult)
      if(!this.registrationModalResult) {
        this.onReload();
        hideRightPanel();
      }
    },
    agentGroup(x) {
      console.log("watch:agentGroup", x);
    },
  }
};

import {registerUser} from "@/services/partner";
import BSSelect from "@/components/bsselect";
import {showModal,hideModal, hideRightPanel,dispatchPaged,} from "@/utils";
import { mapState } from 'vuex';
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import { minLength } from "@/utils/validators"

</script>
