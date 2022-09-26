<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

/**
 * FAQs component
 */
export default {
  page: {
    title: "FAQs Page",
    meta: [{ name: "description", content: appConfig.description }]
  },
  components: { Layout, PageHeader },
  data() {
    return {
      title: "FAQs Page",
      items: [
        {
          text: "Extra Pages",
          href: "/"
        },
        {
          text: "FAQs",
          active: true
        }
      ]
    };
  }
};
</script>
<template>
  <Layout :title="title" :items="items">
    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-body">
            <div class="row justify-content-center mb-5">
              <div class="col-lg-5">
                <div class="text-center py-4">
                  <div class="py-3">
                    <i class="ti-comments text-danger h3"></i>
                  </div>
                  <h5>Can't find what you are looking for?</h5>
                  <p
                    class="text-muted"
                  >If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages.</p>
                  <button type="button" class="btn btn-primary mt-1 mr-1">Email Us</button>
                  <button type="button" class="btn btn-danger mt-1">Send us a tweet</button>
                </div>
              </div>
            </div>

            <div class="row justify-content-center">
              <div class="col-lg-5">
                <div class="mt-4">
                  <h4 class="font-size-18 faq-title mb-5">
                    <i class="ti-help-alt mr-3 text-danger"></i>General Questions
                  </h4>

                  <div class="faq-box mb-4">
                    <div class="float-left faq-icon mr-4">
                      <i class="mdi mdi-help font-size-16 bg-soft-danger text-danger"></i>
                    </div>
                    <div class="overflow-hidden">
                      <h5 class="font-size-16 mt-0">What is Lorem Ipsum?</h5>
                      <p
                        class="text-muted"
                      >New common language will be more simple and regular than the existing European languages. It will be as simple as occidental.</p>
                    </div>
                  </div>
                  <div class="faq-box mb-4">
                    <div class="float-left faq-icon mr-4">
                      <i class="mdi mdi-help font-size-16 bg-soft-danger text-danger"></i>
                    </div>
                    <div class="overflow-hidden">
                      <h5 class="font-size-16 mt-0">Where does it come from?</h5>
                      <p
                        class="text-muted"
                      >Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators to achieve this it would be necessary</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-5 offset-lg-1">
                <div class="mt-4">
                  <h4 class="font-size-18 faq-title mb-5">
                    <i class="ti-shield mr-3 text-danger"></i> Privacy Policy
                  </h4>

                  <div class="faq-box mb-4">
                    <div class="float-left faq-icon mr-4">
                      <i class="mdi mdi-help font-size-16 bg-soft-danger text-danger"></i>
                    </div>
                    <div class="overflow-hidden">
                      <h5 class="font-size-16 mt-0">Where can I get some?</h5>
                      <p
                        class="text-muted"
                      >Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary pronunciation.</p>
                    </div>
                  </div>
                  <div class="faq-box mb-4">
                    <div class="float-left faq-icon mr-4">
                      <i class="mdi mdi-help font-size-16 bg-soft-danger text-danger"></i>
                    </div>
                    <div class="overflow-hidden">
                      <h5 class="font-size-16 mt-0">Why do we use it?</h5>
                      <p
                        class="text-muted"
                      >At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- end row -->

            <div class="row justify-content-center">
              <div class="col-lg-5">
                <div class="mt-4">
                  <h4 class="font-size-18 mb-5 faq-title">
                    <i class="ti-headphone-alt mr-3 text-danger"></i>Support
                  </h4>

                  <div class="faq-box mb-4">
                    <div class="float-left faq-icon mr-4">
                      <i class="mdi mdi-help font-size-16 bg-soft-danger text-danger"></i>
                    </div>
                    <div class="overflow-hidden">
                      <h5 class="font-size-16 mt-0">Why do we use it?</h5>
                      <p
                        class="text-muted"
                      >At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas</p>
                    </div>
                  </div>

                  <div class="faq-box mb-4">
                    <div class="float-left faq-icon mr-4">
                      <i class="mdi mdi-help font-size-16 bg-soft-danger text-danger"></i>
                    </div>
                    <div class="overflow-hidden">
                      <h5 class="font-size-16 mt-0">Where does it come from?</h5>
                      <p
                        class="text-muted"
                      >Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators to achieve this it would be necessary</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-5 offset-lg-1">
                <div class="mt-4">
                  <h4 class="font-size-18 mb-5 faq-title">
                    <i class="ti-bookmark-alt mr-3 text-danger"></i> Pricing & Plans
                  </h4>

                  <div class="faq-box mb-4">
                    <div class="float-left faq-icon mr-4">
                      <i class="mdi mdi-help font-size-16 bg-soft-danger text-danger"></i>
                    </div>
                    <div class="overflow-hidden">
                      <h5 class="font-size-16 mt-0">Where can I get some?</h5>
                      <p
                        class="text-muted"
                      >Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary pronunciation.</p>
                    </div>
                  </div>

                  <div class="faq-box mb-4">
                    <div class="float-left faq-icon mr-4">
                      <i class="mdi mdi-help font-size-16 bg-soft-danger text-danger"></i>
                    </div>
                    <div class="overflow-hidden">
                      <h5 class="font-size-16 mt-0">What is Lorem Ipsum?</h5>
                      <p
                        class="text-muted"
                      >New common language will be more simple and regular than the existing European languages. It will be as simple as occidental.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- ed row -->
          </div>
        </div>
      </div>
    </div>
    <!-- end row -->
  </Layout>
</template>