<template>
  <div class="detailArea detailTable">
    <xbtn />
    <div class="detailTitle"><span>General</span></div>
    <div class="tableBox">
      <table>
        <tr>
          <th>Partner Grade</th>
          <td>{{ detail.grade }}</td>
        </tr>
        <tr>
          <th>Group</th>
          <td>
            {{ detail.group }}({{ detail.rate1 }}% : {{ detail.rate2 }}% :
            {{ detail.rate3 }}%)
          </td>
        </tr>
        <tr>
          <th>Username</th>
          <td>
            <span class="name">{{ detail.username }}</span>
            <a href="javascript:;" class="reset" @click="resetPassword(detail)"
              >[Reset Password]</a
            >
          </td>
        </tr>
        <tr>
          <th>Rank</th>
          <td>{{ detail.rank }}</td>
        </tr>
        <tr>
          <th>Partner code</th>
          <td>{{ detail.partnerCode }}</td>
        </tr>
        <tr>
          <th>Mobile</th>
          <td>{{ detail.mobile }}</td>
        </tr>
        <tr>
          <th>Email</th>
          <td>
            <span class="email">{{ detail.email }}</span>
            <span class="date" v-if="detail.emailConfirmed">
              <img src="img/icon_check_green.png" />
            </span>
          </td>
        </tr>
        <tr>
          <th>Status</th>
          <td>{{ detail.status }}</td>
        </tr>
        <tr>
          <th>Join</th>
          <td>
            {{ detail.joinedAt | formatDate
            }}<span class="time">{{ detail.joinedAt | formatTime }}</span>
          </td>
        </tr>
        <tr>
          <th>Last sign in</th>
          <td>
            {{ detail.lastLoggedInAt | formatDate
            }}<span class="time">{{ detail.lastLoggedInAt | formatTime }}</span>
          </td>
        </tr>
        <tr>
          <th>Country</th>
          <td>{{ detail.country }}</td>
        </tr>
        <tr>
          <th>IP</th>
          <td>{{ detail.registerationIP }}</td>
        </tr>
      </table>
    </div>

    <div class="detailTitle"><span>Balance</span></div>
    <div class="tableBox">
      <table>
        <tr>
          <th>Cash($)</th>
          <td>{{ detail.cash | formatCurrency }}</td>
        </tr>
        <tr>
          <th>Bonus($)</th>
          <td>
            <span class="number">{{ detail.bonus | formatCurrency }}</span>
            <a
              href="javascript:;"
              class="detailBtn"
              @click="viewBonusLog(detail)"
              >[Detail]</a
            >
          </td>
        </tr>
        <tr>
          <th>Wagered</th>
          <td>{{ detail.wagered | formatCurrency }}</td>
        </tr>
        <tr>
          <th>Total Win</th>
          <td>
            <span class="number">{{ detail.totalWin | formatCurrency }}</span>
            <a
              href="javascript:;"
              class="detailBtn"
              @click="viewGameLog(detail)"
              >[Detail]</a
            >
          </td>
        </tr>
        <tr>
          <th>Total Lose</th>
          <td>
            <span class="number">{{ -detail.totalLose | formatCurrency }}</span>
            <a
              href="javascript:;"
              class="detailBtn"
              @click="viewGameLog(detail)"
              >[Detail]</a
            >
          </td>
        </tr>
        <tr>
          <th>Total Deposit</th>
          <td>
            <span class="number">{{
              detail.totalDeposit | formatCurrency
            }}</span>
            <a
              href="javascript:;"
              class="detailBtn"
              @click="viewCashLog(detail)"
              >[Detail]</a
            >
          </td>
        </tr>
        <tr>
          <th>Total Withdrawal</th>
          <td>
            <span class="number">{{
              detail.totalWithdrawal | formatCurrency
            }}</span>
            <a
              href="javascript:;"
              class="detailBtn"
              @click="viewCashLog(detail)"
              >[Detail]</a
            >
          </td>
        </tr>
        <tr>
          <th>Total Tip (Received)</th>
          <td>
            <span class="number">{{
              detail.totalTipRecv | formatCurrency
            }}</span>
          </td>
        </tr>
        <tr>
          <th>Total Tip (Sent)</th>
          <td>
            <span class="number">{{
              detail.totalTipSent | formatCurrency
            }}</span>
            <a href="javascript:;" class="tip" @click="giveTip">TIP</a>
            <a href="javascript:;" class="detailBtn" @click="viewTipLog(detail)"
              >[Detail]</a
            >
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<style lang="scss"></style>

<script>
import simplebar from 'simplebar-vue';
import PasswordResetModal, {
  MODAL_KEY,
} from '@/components/password-reset-modal';

export default {
  components: { simplebar, PasswordResetModal },
  props: {
    userId: { type: Number, default: 0 },
    onClose: {},
  },
  mounted() {
    this.load();
  },
  computed: {
    uid() {
      return this.detail.email;
    },
  },
  data() {
    return {
      detail: {},
    };
  },
  methods: {
    async load() {
      if (!this.userId) return;
      var r = await loadView(this, `/partners/views/users/${this.userId}`, {});
      this.detail = r;
      console.log('detail', UV(r));
    },
    close() {
      this.onClose();
    },
    async resetPassword(data) {
      this.$store.commit('MODAL', {
        key: MODAL_KEY,
        data: { isVisible: true, userId: this.userId, email: this.uid },
      });
    },
    viewBonusLog(data) {
      showModal({
        self: this,
        key: 'bonus-log-modal',
        data: { userId: this.userId },
      });
    },
    viewGameLog(data) {
      showModal({
        self: this,
        key: 'game-log-modal',
        data: { userId: this.userId },
      });
    },
    viewCashLog(data) {
      showModal({
        self: this,
        key: 'cash-log-modal',
        data: { userId: this.userId },
      });
    },
    viewTipLog(data) {
      showModal({
        self: this,
        key: 'tip-log-modal',
        data: { userId: this.userId },
      });
    },
    giveTip(data) {
      showModal({
        self: this,
        key: 'tip-modal',
        data: {
          userId: this.userId,
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
  },
};
import { userDetail } from '@/services/partner';
import BSSelect from '@/components/bsselect';
import { showModal, hideModal } from '@/utils';
</script>
