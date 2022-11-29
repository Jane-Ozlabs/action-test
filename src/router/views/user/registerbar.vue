<template>
  <div class="detailArea registration">
    <a href="javascript:;" class="xBtn" @click="$emit('close')"
      ><img src="img/icon_close.png"
    /></a>
    <div class="detailTitle"><span>Account registration</span></div>
    <div class="tableBox">
      <table>
        <tr>
          <th>Grade</th>
          <td>
            <AgentFilter
              ref="agentFilter"
              :agentLines="agentLines"
              :level="agentLevel"
              noTitle="1"
              noSearch="1"
              new="1"
              @update="load"
            />
          </td>
        </tr>
        <tr>
          <th>Group</th>
          <td>
            <BSSelect
              v-model="group"
              :options="agentGroupOptions"
              :readonly="agentGroupOptions.length <= 1"
            />
            <p class="per">
              ({{ selectedAgentGroup.rate1 }}% : {{ selectedAgentGroup.rate2 }}%
              : {{ selectedAgentGroup.rate3 }}%)
            </p>
          </td>
        </tr>
        <tr>
          <th>Username (Partner code)</th>
          <td>
            <div class="inputBox">
              <input type="text" name="" value="" v-model="username" />
            </div>
          </td>
        </tr>
        <tr>
          <th>Password</th>
          <td>
            <div class="inputBox">
              <input type="password" name="" value="" v-model="password" />
            </div>
          </td>
        </tr>
        <tr>
          <th>Confirm<br />Password</th>
          <td>
            <div class="inputBox">
              <input type="password" name="" value="" v-model="password2" />
            </div>
          </td>
        </tr>
        <tr>
          <th>Email</th>
          <td>
            <div class="inputBox">
              <input type="text" name="" value="" v-model="email" />
            </div>
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
import Swal from 'sweetalert2';
import AgentFilter from '@/components/agent-filter';

export default {
  components: { AgentFilter, BSSelect },
  props: ['onClose'],
  mounted() {
    this.load();
  },
  computed: {
    agentGroupOptions() {
      return this.agentGroups.map(x => ({ value: x.id, text: x.name }));
    },
    selectedAgentGroup() {
      return (
        this.agentGroups.find(x => x.id == this.group) || {
          r1: 0,
          r2: 0,
          r3: 0,
        }
      );
    },
    ...mapState({
      registrationModalResult: state => {
        return (
          (state.modals['account-registration-modal'] &&
            !state.modals['account-registration-modal'].isVisible &&
            state.modals['account-registration-modal'].result) ||
          null
        );
      },
    }),
  },
  data() {
    return {
      filters: { agent1: 0, agent2: 0, agent3: 0 },
      username: '',
      password: '',
      password2: '',
      email: '',
      agentLines: [],
      agentGroups: [],
      group: '0',
      agentLevel: 1,
    };
  },
  validations() {
    return {
      group: {
        group: helpers.withMessage('Please select a valid group.', x => x > 0),
      },
      username: {
        required: helpers.withMessage(
          'Please input a valid username',
          required,
        ),
        mustBeUsername: helpers.withMessage(
          'Please enter a valid username.',
          mustBeUsername,
        ),
      },
      email: {
        email: helpers.withMessage(
          'Please ensure you enter a valid email address.',
          email,
        ),
        required: helpers.withMessage(
          'Please enter a valid email address.',
          required,
        ),
      },
      password: {
        required: helpers.withMessage(
          'Please enter a valid password',
          required,
        ),
        length: helpers.withMessage(
          'Your password should be 6~18 characters long.',
          and(minLength(6), maxLength(18)),
        ),
        password: helpers.withMessage(
          'Your password must contain letter and at least one character category among the digits and special characters(!@#$%^&()*).',
          mustBePassword,
        ),
      },
      password2: {
        password2: helpers.withMessage(
          'Your passwords do not match. Please try again.',
          sameAs(this.password),
        ),
      },
    };
  },
  methods: {
    async load() {
      this.filters = {
        ...this.filters,
        agent1: Number(this.$refs.agentFilter.filters.id1) || 0,
        agent2: Number(this.$refs.agentFilter.filters.id2) || 0,
        agent3: Number(this.$refs.agentFilter.filters.id3) || 0,
      };
      var r = await loadView(this, `/partners/views/register`, {});
      console.log('loadView res:', UV(r));
      this.agentGroups = r.agentGroups;
      this.agentLines = r.agentLines;
      if (this.agentGroups.length <= 1)
        this.group = this.agentGroupOptions[0].value;
    },

    async register() {
      if (!(await ValidOrError(this, 'Account registration'))) return;

      var user = {
        agent1: this.$refs.agentFilter.filters.id1,
        agent2: this.$refs.agentFilter.filters.id2,
        agent3: this.$refs.agentFilter.filters.id3,
        username: this.username,
        password: this.password,
        password2: this.password2,
        email: this.email,
        agentGroup: this.group,
      };
      if (user.password != user.password2) {
        return Swal.fire({
          text: 'Passwords not match',
          showCancelButton: false,
          confirmButtonColor: '#34c38f',
        });
      }
      if (user.agent1 != '+' && user.agent2 != '+' && user.agent3 != '+') {
        return Swal.fire({
          text: 'Please select Grade',
          showCancelButton: false,
          confirmButtonColor: '#34c38f',
        });
      }
      user.agent1 = Number(user.agent1) || 0;
      user.agent2 = Number(user.agent2) || 0;
      user.agent3 = Number(user.agent3) || 0;

      await registerUser(user);
      this.$store.commit('MODAL', {
        key: 'account-registration-modal',
        data: {
          isVisible: true,
          onClose: () => {
            console.warn('onClose', this);
            this.$emit('reload');
          },
        },
      });
    },
  },
  watch: {
    userId: function () {
      this.load();
    },
    registrationModalResult: function () {
      console.log('registrationModalResult', this.registrationModalResult);
      this.$emit('reload');
      hideRightPanel();
    },
  },
  setup() {
    return {
      v$: useVuelidate({ $lazy: true, $autoDirty: true }),
    };
  },
};

import { registerUser } from '@/services/partner';
import { ValidOrError } from '@/services/validation';
import { loadView } from '@/services';
import BSSelect from '@/components/bsselect';
import { hideRightPanel, UV } from '@/utils';
import { mapState } from 'vuex';
import { useVuelidate } from '@vuelidate/core';
import {
  required,
  email,
  sameAs,
  minLength,
  maxLength,
  and,
  helpers,
} from '@vuelidate/validators';
import { mustBePassword, mustBeUsername } from '@/utils/validators';
</script>
