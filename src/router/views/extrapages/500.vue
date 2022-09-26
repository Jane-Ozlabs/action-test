<script>
import Layout from "../../layouts/auth";
import appConfig from "@/app.config";

/**
 * 500 error page
 */
export default {
  page: {
    title: "500 Error Page",
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
            <div class="card shadow-none overflow-hidden">
              <div class="card-body">
                <div class="text-center">
                  <h1 class="display-2 font-weight-normal mt-0">500</h1>
                  <h4>Internal Server Error</h4>
                  <p class="text-muted mb-5">If several languages coalesce, the grammar peson</p>
                </div>
              </div>
              <div>
                <img src="@/assets/images/error.png" alt class="img-fluid mx-auto d-block" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>
