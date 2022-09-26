<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <!-- Search -->
              <div class="col-sm-12 col-md-6">
                <div class="d-flex flex-row justify-content-start">
                  <div class="form-group w-25">
                    <div>
                      <select class="form-control">
                        <option>전체</option>
                        <option>ID</option>
                        <option>Email</option>
                      </select>
                    </div>
                  </div>
                    <b-form-input v-model="filter" type="search" placeholder="Search..." class="form-control ml-2"></b-form-input>
                    <b-button variant="secondary" class="form-control w-25 ml-2">Search</b-button>
                </div>
              </div>
              <div class="col-sm-12 col-md-6">
                <b-button class="float-right" variant="primary" @click="gotoAccountCreate"><i class="mdi mdi-settings mr-2"></i>New Account</b-button>
              </div>
              <!-- End search -->
            </div>
            <div class="table-responsive">
              <table class="table table-striped table-centered">
                <thead>
                  <tr>
                    <th>NO</th>
                    <th>ID</th>
                    <th>Email</th>
                    <th>Status</th>
                    <th>Join</th>
                    <th>Last Sign in</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="data of accountList" :key="data.id">
                    <td>{{ data.id }}</td>
                    <td>{{ data.userName }}</td>
                    <td>{{ data.email }}</td>
                    <td>{{ data | formatStatus }}</td>
                    <td>{{ data.createdDate | formatDateTime }}</td>
                    <td>{{ data.lastLogin | formatDateTime }}</td>
                    <td>
                      <a href="javascript:void(0);" class="text-danger" data-toggle="tooltip" data-placement="top" v-b-tooltip.hover title="Reset Password" @click="resetPassword(data)">
                        Reset Password
                      </a>
                      <a href="javascript:void(0);" class="mr-3 text-primary" data-toggle="tooltip" data-placement="top" v-b-tooltip.hover title="Update User" @click="updateUser(data)">
                        Update User
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="row">
              <div class="col">
                <div class="overflow-auto mt-8">
                  <b-pagination pills v-model="currentPage" :total-rows="rows" :per-page="perPage" limit="10" align="center" @input="load()"></b-pagination>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
    <PasswordResetModal />
  </Layout>
</template>

<script>
import Layout from "@/router/layouts/main";
import PageHeader from "@/components/page-header";
import PasswordResetModal, {MODAL_KEY} from "@/components/password-reset-modal";
import appConfig from "@/app.config";

export default {
  page: {
    title: "Account",
    meta: [{ name: "description", content: appConfig.description }],
  },
  components: { Layout, PageHeader, PasswordResetModal },
  data() {
    return {
      title: "Account",
      items: [{ text: "Admin", href: "/admin/account" }, { text: "Account", href: "/admin/account" }],
      accountList: [],
      filter: "",
      pageOptions: [10, 30, 50],
      value: 50,
      perPage: 50,
      currentPage: 1,
      rows: 50,
    };
  },
  filters: {
      formatStatus(item) { return item.isActive ? (item.lastLogin ? 'Active' : 'Ready') : 'Block' }
  },
  mounted() {
    this.$store.dispatch("admin/accountList", {}).then((data) => {
      var { isSuccess, totalCount, rowsPerPage, currentPage, rows } = data;
      console.log(data);
      this.currentPage = currentPage;
      this.perPage = rowsPerPage;
      this.rows = totalCount;
      this.accountList = rows;
    });
  },
  methods: {
    async load() {

    },
    gotoAccountCreate() {
      this.$router.push({ name: "AccountCreate" });
    },
    async resetPassword(data) {
      var { id } = data;
      this.$store.commit("MODAL", { key: MODAL_KEY, data: { isVisible: true, id } });
    },
    async updateUser(data) {
      var { id } = data;
      this.$router.push({ name: "AccountEdit", params: { id } });
    }
  }
};
</script>
