<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

/**
 * Maintenance component
 */
export default {
  page: {
    title: "Maintenance Page",
    meta: [{ name: "description", content: appConfig.description }]
  },
  components: { Layout, PageHeader },
  data() {
    return {
      title: "Maintenance"
    };
  },
};
</script>
<template>
  <div class="bg-primary" id="maintenance">
    <div class="home-btn d-none d-sm-block">
      <a href="/" class="text-white">
        <i class="fas fa-home h2"></i>
      </a>
    </div>
    <div class="pt-5 my-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="text-center">
              <div class="mb-5">
                <img
                  src="@/assets/images/logo-light.png"
                  class="mx-auto d-block"
                  alt="logo"
                  height="20"
                />
              </div>
              <h3 class="text-white">Site is Under Maintenance</h3>
              <p class="text-white-50 mb-5">Please check back in sometime.</p>
            </div>
          </div>
        </div>

        <div class="row align-items-center">
          <div class="col-lg-6">
            <div class="mb-4 mb-lg-0">
              <img src="@/assets/images/maintenance-img.png" class="img-fluid mx-auto d-block" alt />
            </div>
          </div>

          <div class="col-lg-5 offset-lg-1">
            <div class="card maintenance-box shadow-none">
              <div class="card-body p-4">
                <div class="float-left mr-4">
                  <i class="ti-signal text-danger h4"></i>
                </div>
                <div class="overflow-hidden">
                  <h6 class="text-uppercase mt-0">Why is the Site Down?</h6>
                  <p class="text-muted mb-0">
                    There are many variations of passages of
                    Lorem Ipsum available, but the majority have suffered alteration.
                  </p>
                </div>
              </div>
            </div>
            <div class="card maintenance-box shadow-none">
              <div class="card-body p-4">
                <div class="float-left mr-4">
                  <i class="ti-timer text-danger h4"></i>
                </div>
                <div class="overflow-hidden">
                  <h6 class="text-uppercase mt-0">What is the Downtime?</h6>
                  <p
                    class="text-muted mb-0"
                  >Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical.</p>
                </div>
              </div>
            </div>
            <div class="card maintenance-box shadow-none">
              <div class="card-body p-4">
                <div class="float-left mr-4">
                  <i class="ti-email text-danger h4"></i>
                </div>
                <div class="overflow-hidden">
                  <h6 class="text-uppercase mt-0">Do you need Support?</h6>
                  <p class="text-muted mb-0">
                    If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embar..
                    <a
                      href="mailto:no-reply@domain.com"
                      class="text-decoration-underline"
                    >no-reply@domain.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>