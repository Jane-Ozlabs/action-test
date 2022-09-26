<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

/**
 * Alerts component
 */
export default {
  page: {
    title: "Alerts",
    meta: [{ name: "description", content: appConfig.description }]
  },
  components: { Layout, PageHeader },
  data() {
    return {
      title: "Alerts",
      items: [
        {
          text: "UI Elements",
          href: "/"
        },
        {
          text: "Alerts",
          active: true
        }
      ]
    };
  }
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <div class="row">
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Default Alerts</h4>
            <p class="card-title-desc">
              Alerts are available for any length of
              text, as well as an optional dismiss button. For proper styling, use one
              of the four
              <strong>required</strong> contextual classes (e.g.,
              <code class="highlighter-rouge">.alert-success</code>). For inline
              dismissal, use the alerts jQuery plugin.
            </p>

            <div class>
              <b-alert show variant="primary">A simple primary alert—check it out!</b-alert>
              <b-alert show variant="secondary">A simple secondary alert—check it out!</b-alert>
              <b-alert show variant="success">A simple success alert—check it out!</b-alert>
              <b-alert show variant="danger">A simple danger alert—check it out!</b-alert>
              <b-alert show variant="warning">A simple warning alert—check it out!</b-alert>
              <b-alert show variant="info">A simple info alert—check it out!</b-alert>
            </div>
          </div>
        </div>
      </div>
      <!-- end col -->

      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Link color</h4>
            <p class="card-title-desc">
              Use the
              <code class="highlighter-rouge">.alert-link</code> utility class to
              quickly provide matching colored links within any alert.
            </p>

            <div class>
              <b-alert show variant="primary">
                A simple primary alert with
                <a href="javascript: void(0);" class="alert-link">an example link</a>. Give it a click if you like.
              </b-alert>
              <b-alert show variant="secondary">
                A simple secondary alert with
                <a href="javascript: void(0);" class="alert-link">an example link</a>. Give it a click if you like.
              </b-alert>
              <b-alert show variant="success">
                A simple success alert with
                <a href="javascript: void(0);" class="alert-link">an example link</a>. Give it a click if you like.
              </b-alert>
              <b-alert show variant="danger">
                A simple danger alert with
                <a href="javascript: void(0);" class="alert-link">an example link</a>. Give it a click if you like.
              </b-alert>
              <b-alert show variant="warning">
                A simple warning alert with
                <a href="javascript: void(0);" class="alert-link">an example link</a>. Give it a click if you like.
              </b-alert>
              <b-alert show variant="info">
                A simple info alert with
                <a href="javascript: void(0);" class="alert-link">an example link</a>. Give it a click if you like.
              </b-alert>
            </div>
          </div>
        </div>
      </div>
      <!-- end col -->
    </div>

    <div class="row">
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Dismissing</h4>
            <p class="card-title-desc">
              Add a dismiss button and the
              <code>.alert-dismissible</code> class, which adds extra padding
              to the right of the alert and positions the
              <code>.close</code> button.
            </p>

            <div class>
              <b-alert show dismissible variant="primary">A simple primary alert—check it out!</b-alert>
              <b-alert show dismissible variant="secondary">A simple secondary alert—check it out!</b-alert>
              <b-alert show dismissible variant="success">A simple success alert—check it out!</b-alert>
              <b-alert show dismissible variant="danger">A simple danger alert—check it out!</b-alert>
              <b-alert show dismissible variant="warning">A simple warning alert—check it out!</b-alert>
              <b-alert show dismissible variant="info">A simple info alert—check it out!</b-alert>
            </div>
          </div>
        </div>
      </div>
      <!-- end col -->

      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title mb-4">With Icon</h4>

            <div class>
              <b-alert show dismissible variant="primary">
                <i class="mdi mdi-bullseye-arrow mr-2"></i>A simple primary alert—check it out!
              </b-alert>

              <b-alert show dismissible variant="secondary">
                <i class="mdi mdi-grease-pencil mr-2"></i>A simple secondary alert—check it out!
              </b-alert>

              <b-alert show dismissible variant="success">
                <i class="mdi mdi-check-all mr-2"></i>A simple success alert—check it out!
              </b-alert>
              <b-alert show dismissible variant="danger">
                <i class="mdi mdi-block-helper mr-2"></i>A simple danger alert—check it out!
              </b-alert>
              <b-alert show dismissible variant="warning">
                <i class="mdi mdi-alert-outline mr-2"></i>A simple warning alert—check it out!
              </b-alert>
              <b-alert show dismissible variant="info">
                <i class="mdi mdi-alert-circle-outline mr-2"></i>A simple info alert—check it out!
              </b-alert>
            </div>
          </div>
        </div>
      </div>
      <!-- end col -->
    </div>

    <div class="row">
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Custom Background Alert</h4>
            <p class="card-title-desc">
              Use
              <code>.bg-*</code>,
              <code>.text-white</code> classes.
            </p>
            <div>
              <b-alert class="bg-primary text-white" show>A simple primary alert—check it out!</b-alert>
              <b-alert class="bg-success text-white" show>A simple success alert—check it out!</b-alert>
              <b-alert class="bg-danger text-white" show>A simple danger alert—check it out!</b-alert>
              <b-alert class="bg-warning text-white" show>A simple warning alert—check it out!</b-alert>
              <b-alert class="bg-info text-white" show>A simple info alert—check it out!</b-alert>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Custom Outline Alert</h4>
            <p class="card-title-desc">
              Use
              <code>.bg-white</code>,
              <code>.border</code>,
              <code>.border-*</code> classes.
            </p>
            <div>
              <b-alert
                class="bg-white text-primary border-primary"
                show
              >A simple primary alert—check it out!</b-alert>
              <b-alert
                class="bg-white text-success border-success"
                show
              >A simple success alert—check it out!</b-alert>
              <b-alert
                class="bg-white text-danger border-danger"
                show
              >A simple danger alert—check it out!</b-alert>
              <b-alert
                class="bg-white text-warning border-warning"
                show
              >A simple warning alert—check it out!</b-alert>
              <b-alert class="bg-white text-info border-info" show>A simple info alert—check it out!</b-alert>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Additional content</h4>
            <p
              class="card-title-desc"
            >Alerts can also contain additional HTML elements like headings and paragraphs.</p>
            <div class="row">
              <div class="col-lg-4">
                <b-alert show dismissible variant="success">
                  <div class="text-center">
                    <div class="mb-4">
                      <i class="mdi mdi-checkbox-marked-circle-outline text-success display-4"></i>
                    </div>
                    <h4 class="alert-heading text-success font-size-18">Well done!</h4>
                    <p class="text-success">At vero eos et accusamus et iusto odio</p>
                    <div class="py-2">
                      <a href="javascript: void(0);" class="btn btn-success btn-rounded w-lg">Go to Next</a>
                    </div>
                  </div>
                </b-alert>
              </div>

              <div class="col-lg-4">
                <b-alert show dismissible variant="warning">
                  <div class="text-center">
                    <div class="mb-4">
                      <i class="mdi mdi-alert-outline text-warning display-4"></i>
                    </div>
                    <h4 class="alert-heading text-warning font-size-18">Something went wrong</h4>
                    <p class="text-warning">Ut enim ad nostrum minima veniam quis</p>
                    <div class="py-2">
                      <a href="javascript: void(0);" class="btn btn-warning btn-rounded w-lg">Go to Back</a>
                    </div>
                  </div>
                </b-alert>
              </div>

              <div class="col-lg-4">
                <b-alert show dismissible variant="danger">
                  <div class="text-center">
                    <div class="mb-4">
                      <i class="mdi mdi-block-helper text-danger display-4"></i>
                    </div>
                    <h4 class="alert-heading text-danger font-size-18">Error</h4>
                    <p class="text-danger">At vero eos et accusamus et iusto odio</p>
                    <div class="py-2">
                      <a href="javascript: void(0);" class="btn btn-danger btn-rounded w-lg">Try again</a>
                    </div>
                  </div>
                </b-alert>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>