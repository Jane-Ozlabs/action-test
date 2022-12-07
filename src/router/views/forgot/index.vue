<template>
  <Layout>
    <div class="login forgot">
    	<div class="logo"><img :src="iconURL.logo"></div>
        <div v-if="!complete">
          <div class="formBox">
            <div class="formText">
                Forgot your login details?<br>
                  Please enter your account details below.<br>
                  If it's on our system, we'll send you an email containing <br>
                  <font color="#dc2f00">your username</font> and instructions on how to reset <font color="#dc2f00">your password.</font>
              </div>
              <div class="inputBox">
                <label>Email</label>
                  <img :src="iconURL.email" class="icon">
                  <input type="text" id="" name="" placeholder="email@verification.com" v-model="email">
                  <img :src="iconURL.checkRed" class="checked">
              </div>
              <div class="warningText">
                  Please enter a valid account details.
              </div>
          </div>
          <div class="btnBox marginT">
              <a href="javascript:;" @click="submit">SUBMIT</a>
          </div>
        </div>
        <div v-if="complete">
          <div class="textBox">
            <div class="title">Thank you!</div>
            <div class="subTitle">
                You should receive an email soon, with a link<br>
          to reset your password.
            </div>
          </div>
          <div class="btnBox marginT">
            <router-link tag="a" to="/">CLOSE</router-link>
          </div>
        </div>
    </div>
  </Layout>
</template>

<script>
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
      email: "",
      loading: false,
      message: ``,
      remember: false,
      complete: false,
      iconURL: this.$store.getters.iconURL
    }
  },
  validations: {
    email: { required },
  },
  computed: {
    loggedIn() { return IsAuthenticated(); },
  },
  mounted() {
  },
  methods: {
    async submit() {
      console.log("submit", this.email)
      var rp = await requestNoAuth("get", "/partners/iforgot", { email: this.email });
      console.log("rp", rp);
      this.complete = true;
    },
    async ok() {
      this.$router.push("/");
    }
  }
};
import { resetPasswordUser } from "@/services/auth";
import { required } from "vuelidate/lib/validators";
import appConfig from "@/app.config";
import Layout from "@/router/layouts/auth";
</script>
