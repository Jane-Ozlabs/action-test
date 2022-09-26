<script>
import appConfig from "@/app.config";
import Layout from "../../layouts/auth";

/**
 * Login-1 page
 */
export default {
  page: {
    title: "Login-1",
    meta: [{ name: "description", content: appConfig.description }]
  },
  components: {
    Layout
  }
};
</script>

<template>
  <Layout>
    <div class="home-btn d-none d-sm-block">
      <router-link tag="a" to="/" class="text-white">
        <i class="fas fa-home h2"></i>
      </router-link>
    </div>
    <div class="account-pages my-5 pt-5">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-8 col-lg-6 col-xl-5">
            <div class="card bg-pattern shadow-none">
              <div class="card-body">
                <div class="text-center mt-4">
                  <div class="mb-3">
                    <a routerLink="/">
                      <img src="@/assets/images/logo-dark.png" height="20" alt="logo" />
                    </a>
                  </div>
                </div>
                <div class="p-3">
                  <h4 class="font-size-18 mt-2 text-center">Welcome Back !</h4>
                  <p class="text-muted text-center mb-4">Sign in to continue to Dashbiz.</p>
                  <form class="form-horizontal">
                    <div class="form-group">
                      <label for="username">Username</label>
                      <input
                        type="text"
                        class="form-control"
                        id="username"
                        placeholder="Enter username"
                      />
                    </div>

                    <div class="form-group">
                      <label for="userpassword">Password</label>
                      <input
                        type="password"
                        class="form-control"
                        id="userpassword"
                        placeholder="Enter password"
                      />
                    </div>

                    <div class="custom-control custom-checkbox">
                      <input type="checkbox" class="custom-control-input" id="customControlInline" />
                      <label class="custom-control-label" for="customControlInline">Remember me</label>
                    </div>

                    <div class="mt-3">
                      <button class="btn btn-primary btn-block" type="submit">Log In</button>
                    </div>

                    <div class="mt-4 text-center">
                      <router-link tag="a" to="/pages/recoverpwd-1">
                        <i class="mdi mdi-lock"></i> Forgot your password?
                      </router-link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div class="mt-5 text-center text-white-50">
              <p>
                Don't have an account ?
                <router-link
                  tag="a"
                  to="/pages/register-1"
                  class="font-weight-bold text-white"
                >Signup now</router-link>
              </p>
              <p>
                © {{ new Date().getFullYear() }} Dashbiz. Crafted with
                <i
                  class="mdi mdi-heart text-danger"
                ></i> by Themesbrand
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>