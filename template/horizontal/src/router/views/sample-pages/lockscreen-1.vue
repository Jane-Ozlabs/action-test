<script>
import appConfig from "@/app.config";
import Layout from "../../layouts/auth";

/**
 * Lockscreen-1 page
 */
export default {
  page: {
    title: "Lockscreen-1",
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
                  <h4 class="font-size-18 mt-2 text-center">Locked</h4>
                  <p
                    class="text-muted text-center"
                  >Hello Anthony, enter your password to unlock the screen!</p>

                  <form class="form-horizontal">
                    <div class="user-thumb text-center mb-4">
                      <img
                        src="@/assets/images/users/avatar-6.jpg"
                        class="rounded-circle img-thumbnail avatar-lg"
                        alt="thumbnail"
                      />
                      <h6 class="mt-3">Anthony McCarty</h6>
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

                    <div class="form-group row">
                      <div class="col-12 text-right">
                        <button class="btn btn-primary w-md" type="submit">Unlock</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div class="mt-5 text-center text-white-50">
              <p>
                Not you ? return
                <router-link tag="a" to="/pages/login-2" class="font-weight-bold text-white">Sign In</router-link>
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