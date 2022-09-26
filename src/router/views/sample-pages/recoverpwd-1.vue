<script>
import appConfig from "@/app.config";
import Layout from "../../layouts/auth";

/**
 * Register-1 page
 */
export default {
  page: {
    title: "Register-1",
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
      <a href="/" class="text-white">
        <i class="fas fa-home h2"></i>
      </a>
    </div>

    <div class="account-pages my-5 pt-5">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-8 col-lg-6 col-xl-5">
            <div class="card bg-pattern shadow-none">
              <div class="card-body">
                <div class="text-center mt-4">
                  <div class="mb-3">
                    <a href="/">
                      <img src="@/assets/images/logo-dark.png" height="20" alt="logo" />
                    </a>
                  </div>
                </div>
                <div class="p-3">
                  <h4 class="font-size-18 mt-2 text-center">Reset Password</h4>
                  <div
                    class="alert alert-success mt-4 text-success mb-5 text-center"
                    role="alert"
                  >Enter your Email and instructions will be sent to you!</div>

                  <form class="form-horizontal">
                    <div class="form-group">
                      <label for="useremail">Email</label>
                      <input
                        type="email"
                        class="form-control"
                        id="useremail"
                        placeholder="Enter email"
                      />
                    </div>

                    <div class="form-group row">
                      <div class="col-12 text-right">
                        <button class="btn btn-primary w-md" type="submit">Reset</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div class="mt-5 text-center text-white-50">
              <p>
                Remember It ?
                <router-link
                  tag="a"
                  to="/pages/login-1"
                  class="font-wight-bold text-white"
                >Sign In here</router-link>
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