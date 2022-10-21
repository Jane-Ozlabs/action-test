<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <div class="table-responsive">
              <b-table-simple class="table table-striped table-centered table-bordered table-fixed" fixed>
                <b-thead head-variant="dark">
                  <tr>
                    <th>ID</th>
                    <th>{{detail.id}}</th>
                    <th></th>
                  </tr>
                </b-thead>
                <tbody>
                  <tr>
                    <td>Email</td>
                    <td>{{ detail.email }}</td>
                    <td>
                      <a href="javascript:void(0);" class="text-primary" data-toggle="tooltip" data-placement="top" v-b-tooltip.hover title="Change" @click="changeEmail(detail)">
                        Change
                      </a>
                      <span>{{ detail.verifyStatus }}</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Join</td>
                    <td>{{ detail.registeredOn | formatDateTime }}</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Last Sign in</td>
                    <td>{{ detail.lastLogin | formatDateTime }}</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Status</td>
                    <td>{{ detail | formatUserStatus }}</td>
                    <td>
                      <a href="javascript:void(0);" class="text-primary" data-toggle="tooltip" data-placement="top" v-b-tooltip.hover title="Block" @click="blockPlayer(detail)">
                        Block
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>Referral Code</td>
                    <td>{{ detail.referral }}</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Registration IP</td>
                    <td>{{ detail.ipAddress }}</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Local</td>
                    <td>{{ detail.local }}</td>
                    <td></td>
                  </tr>
                </tbody>
              </b-table-simple>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-body">

            <div class="table-responsive">
              <b-table-simple class="table table-striped table-centered table-bordered table-fixed" fixed>
                <b-thead head-variant="dark">
                  <tr>
                    <th>Metamask</th>
                    <th>{{ detail.metamask }}</th>
                    <th></th>
                  </tr>
                </b-thead>
                <tbody>
                  <tr>
                    <td>Balance</td>
                    <td>{{ detail.balance | formatCurrency }}</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Wagered</td>
                    <td>{{ detail.wagered | formatCurrency }}</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Total Lose</td>
                    <td>{{ -detail.totalLose | formatCurrency }}</td>
                    <td rowspan="2">
                      <a href="javascript:void(0);" class="text-primary" data-toggle="tooltip" data-placement="top" v-b-tooltip.hover title="Game Detail" @click="viewGameLog(detail)">Detail</a>
                    </td>
                  </tr>
                  <tr>
                    <td>Total Win</td>
                    <td>{{ detail.totalWin | formatCurrency }}</td>
                  </tr>
                  <tr>
                    <td>Total Deposit</td>
                    <td>{{ detail.totalDeposit | formatCurrency }}</td>
                    <td>
                      <a href="javascript:void(0);" class="text-primary" data-toggle="tooltip" data-placement="top" v-b-tooltip.hover title="Deposit Detail" @click="viewDepositLog(detail)">Detail</a>
                    </td>
                  </tr>
                  <tr>
                    <td>Total Withdrawal</td>
                    <td>{{ detail.totalWithdrawal | formatCurrency }}</td>
                    <td>
                      <a href="javascript:void(0);" class="text-primary" data-toggle="tooltip" data-placement="top" v-b-tooltip.hover title="Withdrawal Detail" @click="viewWithdrawalLog(detail)">Detail</a>
                    </td>
                  </tr>
                  <tr>
                    <td>Tip(Received)</td>
                    <td>{{ detail.totalTipRecv | formatCurrency }}</td>
                    <td>
                    </td>
                  </tr>
                  <tr>
                    <td>Tip(Sent)</td>
                    <td>{{ detail.totalTipSent | formatCurrency }}</td>
                    <td>
                      <a href="javascript:void(0);" class="text-primary" data-toggle="tooltip" data-placement="top" v-b-tooltip.hover title="Tip Detail" @click="viewTipLog(detail)">Detail</a>
                    </td>
                  </tr>
                  <tr>
                    <td>Total Bonus</td>
                    <td>{{ detail.totalBonus | formatCurrency }}</td>
                    <td>
                      <a href="javascript:void(0);" class="text-primary" data-toggle="tooltip" data-placement="top" v-b-tooltip.hover title="Bonus Detail" @click="viewBonusLog(detail)">Detail</a>
                    </td>
                  </tr>
                </tbody>
              </b-table-simple>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import Layout from "@/router/layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

export default {
  page: {
    title: "User Detail",
    meta: [{ name: "description", content: appConfig.description }],
  },
  components: { Layout, PageHeader },
  data() {
    return {
      title: "User " + this.$route.params.id,
      items: [{ text: "User", href: "/user/user" }, { text: "User", href: "/user/user" }, { text: "User Detail", href: "/user/user/" + this.$route.params.id }],
      detail: {},
    };
  },
  filters: {
    formatStatus(item) { return 'Active' },
  },
  mounted() {
    this.load();
  },
  computed: {
    uid() { return this.detail.email }
  },
  methods: {
    async load() {
      this.$store.dispatch("user/userDetail", { id: this.$route.params.id }).then((data) => {
        console.log(data);
        this.detail = data;
      });
    },
    viewGameLog() {
      var id = this.$route.params.id;
      this.$router.push({ name: 'UserBalance', params: { filters: { id: this.uid, content: 'game', days: '7' } } })
    },
    viewDepositLog() {
      var id = this.$route.params.id;
      this.$router.push({ name: 'UserBalance', params: { filters: { id: this.uid, content: 'deposit', days: '7' } } })
    },
    viewWithdrawalLog() {
      var id = this.$route.params.id;
      this.$router.push({ name: 'UserBalance', params: { filters: { id: this.uid, content: 'withdrawal', days: '7' } } })
    },
    viewTipLog() {
      var id = this.$route.params.id;
      this.$router.push({ name: 'UserBalance', params: { filters: { id: this.uid, content: 'tip', days: '7' } } })
    },
    viewBonusLog() {
      var id = this.$route.params.id;
      this.$router.push({ name: 'UserBalance', params: { filters: { id: this.uid, content: 'bonus', days: '7' } } })
    },
  }
};
</script>
