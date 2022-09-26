<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body container">
            <ValidationObserver v-slot="{ handleSubmit }">
              <b-form @submit.prevent="handleSubmit(onSubmit)">
                <b-table-simple hover caption-top responsive bordered striped fixed>
                  <caption></caption>
                  <b-thead head-variant="dark">
                    <b-tr>
                      <b-th>ID</b-th>
                      <b-th>{{ id }}</b-th>
                      <b-th></b-th>
                    </b-tr>
                  </b-thead>
                  <b-tbody>
                    <b-tr>
                      <b-th>Email</b-th>
                      <b-td>{{ form.email }}</b-td>
                      <b-td></b-td>
                    </b-tr>
                    <b-tr>
                      <b-th>Join</b-th>
                      <b-td>{{ form.createdDate | formatDateTime }}</b-td>
                      <b-td></b-td>
                    </b-tr>
                    <b-tr>
                      <b-th>Last Sign in</b-th>
                      <b-td>{{ form.lastLogin | formatDateTime }}</b-td>
                      <b-td></b-td>
                    </b-tr>
                    <b-tr>
                      <b-th>Status</b-th>
                      <b-td>{{ form | formatStatus }}</b-td>
                      <b-td></b-td>
                    </b-tr>
                    <b-tr>
                      <b-th>Auth</b-th>
                      <b-td>
                        <b-form-checkbox-group
                          id="permissions"
                          v-model="form.permissions"
                          name="Permissions"
                          stacked
                        >
                          <b-form-checkbox value="admin/admin">Admin</b-form-checkbox>
                          <b-form-checkbox value="admin/user">User</b-form-checkbox>
                          <b-form-checkbox value="admin/analytics"
                            >Analytics</b-form-checkbox
                          >
                          <b-form-checkbox value="admin/log">Log</b-form-checkbox>
                        </b-form-checkbox-group>
                      </b-td>
                      <b-td></b-td>
                    </b-tr>
                    <b-tr>
                      <b-td colspan="3" class="text-center">
                        <b-button variant="danger" class="text-center" centered @click="handleDelete">Delete</b-button>                        
                      </b-td>
                    </b-tr>
                  </b-tbody>
                </b-table-simple>
              </b-form>
            </ValidationObserver>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import Layout from "@/router/layouts/main";
import PageHeader from "@/components/page-header";
import PasswordResetModal, {
  MODAL_KEY,
} from "@/components/password-reset-modal";
import appConfig from "@/app.config";

export default {
  page: {
    title: "Update User",
    meta: [{ name: "description", content: appConfig.description }],
  },
  components: { Layout, PageHeader, PasswordResetModal },
  data() {
    return {
      title: "Account",
      items: [
        { text: "Admin", href: "/admin/account" },
        { text: "Account", href: "/admin/account" },
        {
          text: "Update User",
          href: `/admin/account/edit/${this.$route.params.id}`,
        },
      ],
      id: this.$route.params.id,
      form: {},
    };
  },
  filters: {
    formatStatus(item) {
      return item.isActive ? (item.lastLogin ? "Active" : "Ready") : "Block";
    },
  },
  mounted() {
    this.load();
  },
  methods: {
    async load() {
      var data = await this.$store.dispatch("admin/account", { id: this.id });
      var {} = data;
      console.log(data);
      this.form = data;
    },
    async handleDelete() {
      console.log("handleDelete", this.id);
      var data = await this.$store.dispatch("admin/accountDelete", { id: this.id });

      this.$bvToast.toast('account successfully deleted', { title: this.title, variant: 'success', solid: true });

      setTimeout(() => this.$router.push("/admin/account"), 1000);
    },
    async handleSubmit() {
      console.log("handleSubmit");
    },
    async resetPassword(data) {
      var { id } = data;
      this.$store.commit("MODAL", {
        key: MODAL_KEY,
        data: { isVisible: true, id },
      });
    },
  },
};
</script>
