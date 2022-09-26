<script>
import appConfig from "@/app.config";

export default {
  page: {
    title: "Lock-screen-2",
    meta: [{ name: "description", content: appConfig.description }]
  }
};
</script>
<template>
  <div class="account-page-full-height bg-primary">
    <div class="container-fluid">
      <div class="row align-items-center">
        <div class="col-xl-3 card rounded-0 shadow-none mb-0">
          <div class="account-page-full-height">
            <div class="py-4">
              <div>
                <div class="text-center py-4">
                  <a href="/">
                    <img src="@/assets/images/logo-dark.png" height="20" alt="logo" />
                  </a>
                </div>
                <div class="text-left p-3">
                  <h4 class="font-size-18 mt-2 text-center">Locked</h4>
                  <p
                    class="text-muted text-center"
                  >Hello Anthony, enter your password to unlock the screen!</p>

                  <form class="form-horizontal mt-5">
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
                        <button
                          class="btn btn-primary w-md"
                          type="submit"
                        >Unlock</button>
                      </div>
                    </div>
                  </form>
                </div>
                <div class="mt-5 text-center">
                  <p>
                    Not you ? return
                    <router-link
                      tag="a"
                      to="/pages/login-2"
                      class="font-weight-bold text-primary"
                    >Sign In</router-link>
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
        <div class="col-xl-9">
          <div class="text-white">
            <div class="row">
              <div class="col-xl-4">
                <div class="text-center account-process p-4">
                  <h5
                    class="mt-0 mb-5 d-inline-block p-3 bg-primary rounded-circle border border-white position-relative"
                  >01</h5>
                  <div class="mb-4">
                    <i class="ti-pencil-alt h1"></i>
                  </div>
                  <h5>Free register</h5>
                  <p class="text-white-50">Sed ut perspiciatis unde omnis iste</p>
                </div>
              </div>
              <div class="col-xl-4">
                <div class="text-center account-process p-4">
                  <h5
                    class="mt-0 mb-5 d-inline-block p-3 bg-primary rounded-circle border border-white position-relative"
                  >02</h5>
                  <div class="mb-4">
                    <i class="ti-user h1"></i>
                  </div>
                  <h5>Log in account</h5>
                  <p class="text-white-50">emo enim ipsam voluptatem quia</p>
                </div>
              </div>
              <div class="col-xl-4">
                <div class="text-center p-4">
                  <h5
                    class="mt-0 mb-5 d-inline-block p-3 bg-primary rounded-circle border border-white position-relative"
                  >03</h5>
                  <div class="mb-4">
                    <i class="ti-bookmark-alt h1"></i>
                  </div>
                  <h5>Get product</h5>
                  <p class="text-white-50">Sed ut perspiciatis unde omnis iste</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- end row -->
    </div>
    <!-- end container-fluid -->
  </div>
</template>