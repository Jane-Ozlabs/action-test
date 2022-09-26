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
                    <a href="/">
                      <img src="@/assets/images/logo-dark.png" height="20" alt="logo" />
                    </a>
                  </div>
                </div>
                <div class="p-3">
                  <h4 class="font-size-18 mt-2 text-center">Free Register</h4>
                  <p class="text-muted text-center mb-4">Get your free Dashbiz account now.</p>
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

                    <div class="mt-4">
                      <button class="btn btn-primary btn-block" type="submit">Register</button>
                    </div>

                    <div class="mt-4 text-center">
                      <p class="mb-0">
                        By registering you agree to the Dashbiz
                        <a
                          href="javascript: void(0);"
                          class="text-primary"
                        >Terms of Use</a>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div class="mt-5 text-center text-white-50">
              <p>
                Already have an account ?
                <router-link tag="a" to="/pages/login-1" class="font-weight-bold text-white">Login</router-link>
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