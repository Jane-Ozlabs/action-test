<template>
  <Layout>
    <div class="login change" v-if="!complete">
    	<div class="logo"><img src="img/logo.png"></div>
        <div class="formBox">
        	<div class="textBox">
            	<div class="title">Change Password</div>
            	<div class="subTitle">
                	You must change your password when you log in for the <br>
					first time. Please change your password periodically.
                </div>
            </div>
            <div class="formTitle">Current password</div>
            <div class="inputBox">
                <img src="img/icon_password.png" class="icon">
                <input type="password" id="oldpassword" name="" value="" placeholder="" v-model="password">
                <img src="img/icon_check_red.png" class="checked">
            </div>
            
            <div class="formTitle">New Password</div>
            <div class="inputBox">
                <img src="img/icon_password.png" class="icon">
                <input type="password" id="password" name="" value="" placeholder="" v-model="newpassword">
                <img src="img/icon_check_red.png" class="checked">
            </div>
            
            <div class="formTitle">Confirm Password</div>
            <div class="inputBox">
                <img src="img/icon_password.png" class="icon">
                <input type="password" id="password2" name="" value="" placeholder="" v-model="newpassword2">
                <img src="img/icon_check_red.png" class="checked">
            </div>
        </div>
        <div class="btnBox marginT">
            <a href="javascript:;;" @click="submit">SUBMIT</a>
        </div>
    </div>
    <div class="login forgot" v-if="complete">
    	<div class="logo"><img src="img/logo.png"></div>
        <div class="textBox">
        	<div class="title">Thank you!</div>
        	<div class="subTitle">
            	Your password has been successfully reset <br>and you can now log in. 
            </div>
        </div>
        <div class="btnBox marginT">
            <router-link to="/">LOGIN</router-link>
        </div>
    </div>    
  </Layout>
</template>

<script>
export default {
  page: {
    title: "Change password",
    meta: [{ name: "description", content: appConfig.description }]
  },
  components: {
    Layout
  },
  data() {
    return {
      password: "",
      newpassword: "",
      newpassword2: "",
      complete: false,
      loading: false,
    }
  },
  computed: {
    loggedIn() { return IsAuthenticated(); },
  },
  mounted() {
  },
  methods: {
    async submit() {
      if(!await ValidOrError(this.v$, "Change password")) return;

      await saveNoAuth(this, "/partners/changepassword", null, {email: this.$route.query.e, password: this.password, newPassword: this.newpassword, newPasswordConfirmation: this.newpassword2, token: this.$route.query.c })

      this.complete = true;
    },
  },
  setup () {
    return {
      v$: useVuelidate({ $lazy: true, $autoDirty: true })
    }
  },  
  validations() {
    return {
      password: { required: helpers.withMessage("Please enter a valid password", required), 
        length: helpers.withMessage("Your password should be 6~18 characters long.", and(minLength(6), maxLength(18))),
        password: helpers.withMessage("Your password must contain letter and at least one character category among the digits and special characters(!@#$%^&()*).", mustBePassword) },
      newpassword: { required: helpers.withMessage("Please enter a valid password", required), 
        length: helpers.withMessage("Your password should be 6~18 characters long.", and(minLength(6), maxLength(18))),
        password: helpers.withMessage("Your password must contain letter and at least one character category among the digits and special characters(!@#$%^&()*).", mustBePassword) },
      newpassword2: { password2: helpers.withMessage("Your passwords do not match. Please try again.", sameAs(this.newpassword)) },
    }
  },
};

import {ValidOrError} from "@/services/validation";
import { IsAuthenticated, GetSettings, SetSettings } from "@/store";
import { useVuelidate } from '@vuelidate/core'
import { required, email, sameAs, minLength, maxLength, and, or, helpers } from '@vuelidate/validators'
import { mustBePassword } from "@/utils/validators"
import appConfig from "@/app.config";
import Layout from "@/router/layouts/auth";
</script>
