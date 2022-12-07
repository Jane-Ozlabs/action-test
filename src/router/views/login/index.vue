<template>
  <Layout>
    <div class="login">
    	<div class="logo"><img :src="iconURL.logo"></div>
        <form v-on:submit.prevent="handleLogin">
          <div class="formBox">
              <div class="inputBox">
                  <img src="@/assets/images/icon_username.png" class="icon">
                  <input type="text" id="username" name="username" value="" placeholder="Username" v-model="form.username">
                  <img src="@/assets/images/icon_check_red.png" class="checked">
              </div>
              <div class="inputBox">
                  <img src="@/assets/images/icon_password.png" class="icon">
                  <input type="password" id="password" name="password" value="" placeholder="Password" v-model="form.password" v-on:keyup.enter="handleLogin">
                  <img src="@/assets/images/icon_check_red.png" class="checked">
              </div>
              <div class="warningText">{{message}}</div>
          </div>
          <div class="checkBox">
              <input type="checkbox" id="saveUsername" v-model="rememberMe"><label for="saveUsername">Save username</label>
              <router-link tag="a" class="forgotBtn" to="/forgot">Forgot your login details?</router-link>
          </div>
          <div class="btnBox">
              <a href="javascript:;;" @click="handleLogin">LOGIN</a>
          </div>
        </form>
    </div>
  </Layout>
</template>

<script>
/**
 * Login page
 */
export default {
  page: {
    title: "Login",
    meta: [{ name: "description", content: appConfig.description }]
  },
  components: {
    Layout
  },
  data() {
    return {
      form: { username: '', password: '' },
      loading: false,
      message: ``,
      rememberMe: false,
      iconURL: this.$store.getters.iconURL
    }
  },
  computed: {
    loggedIn() { return IsAuthenticated(); },
  },
  mounted() {
    if(this.loggedIn) this.$router.push("/");
    this.rememberMe = GetSettings().rememberMe;
    if(this.rememberMe) this.form.username = GetSettings().savedUsername;
  },
  methods: {
    async handleLogin() {
      var isvalid = await this.v$.$validate();
      console.log("validate", isvalid, UV(this.form))
      if(!isvalid) return;

      this.loading = true;
      try {
        var { auth } = await login(this.form);
        console.log("loggedIn", this.loggedIn)
        if(!this.loggedIn) return;
        SetSettings({ rememberMe: this.rememberMe, savedUsername: this.rememberMe ? this.form.username : "" });          
        this.$router.push("/revenue/daily");
      } catch(e) {
        console.error(e);
      }
      this.loading = false;
    },
  },
  setup () {
    return {
      v$: useVuelidate()
    }
  },  
  validations: {
    form: {
      username: { required },
      password: { required }
    }
  },
};

import { login } from "@/services/auth";
import { IsAuthenticated, GetSettings, SetSettings } from "@/store";
import Layout from "@/router/layouts/auth";
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import { minLength } from "@/utils/validators"
import appConfig from "@/app.config";
</script>
