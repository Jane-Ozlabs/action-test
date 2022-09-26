<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body container">
            <ValidationObserver v-slot="{ handleSubmit }">
              <b-form @submit.prevent="handleSubmit(onSubmit)">
                <b-form-group label="Email" label-for="email" label-cols-sm="2" label-cols-lg="2">
                  <b-form-input id="email" v-model="form.email" type="email" required></b-form-input>
                </b-form-group>
                <b-form-group label="Name" label-for="username" label-cols-sm="2" label-cols-lg="2">
                  <b-form-input id="username" v-model="form.username" required></b-form-input>
                </b-form-group>
                  <ValidationProvider rules="confirmed:confirmation" v-slot="{ errors }">
                    <b-form-group label="Password" label-for="password" label-cols-sm="2" label-cols-lg="2">
                      <b-form-input id="password" v-model="form.password" type="password" required></b-form-input>
                    </b-form-group>
                    <span class="text-danger">{{ errors[0] }}</span>
                  </ValidationProvider>
                  <ValidationProvider v-slot="{ errors }" vid="confirmation">
                    <b-form-group label="Password Confirmation" label-for="passwordconfirm" label-cols-sm="2" label-cols-lg="2">
                      <b-form-input id="passwordconfirm" v-model="form.passwordconfirm" type="password" required></b-form-input>
                    </b-form-group>
                    <span class="text-danger">{{ errors[0] }}</span>
                  </ValidationProvider>
                <b-form-group label="Permissions" label-for="permissions" label-cols-sm="2" label-cols-lg="2">
                  <b-form-checkbox-group id="permissions" v-model="form.permissions" name="Permissions" stacked>
                    <b-form-checkbox value="admin/admin">Admin</b-form-checkbox>
                    <b-form-checkbox value="admin/user">User</b-form-checkbox>
                    <b-form-checkbox value="admin/analytics">Analytics</b-form-checkbox>
                    <b-form-checkbox value="admin/log">Log</b-form-checkbox>
                  </b-form-checkbox-group>
                </b-form-group>
                <b-row>
                  <b-col class="text-center">
                    <b-button type="submit" variant="danger" class="text-center" centered>Create</b-button>
                  </b-col>
                </b-row>
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
import appConfig from "@/app.config";

export default {
  page: {
    title: "New Account",
    meta: [{ name: "description", content: appConfig.description }],
  },
  components: { Layout, PageHeader },
  data() {
    return {
      title: "Account",
      items: [{ text: "Admin", href: "/admin/account" }, { text: "Account", href: "/admin/account" }, { text: "New Account", href: "/admin/account/create" }],
      form: {},
    };
  },
  filters: {
      formatStatus(item) { return item.isActive ? (item.lastLogin ? 'Active' : 'Ready') : 'Block' }
  },
  mounted() {
  },
  methods: {
    async onSubmit() {
      console.log(this.form);

      var data = await this.$store.dispatch("admin/accountCreate", { ...this.form });
      console.log(data);
      
      this.$bvToast.toast('account successfully created', { title: this.title, variant: 'success', solid: true });
      setTimeout(() => this.$router.push("/admin/account"), 3000);
    },
  }
};
</script>
