<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

/**
 * Alert Email component
 */
export default {
  page: {
    title: "Alert Email",
    meta: [{ name: "description", content: appConfig.description }]
  },
  components: { Layout, PageHeader },
  data() {
    return {
      title: "Alert Email",
      items: [
        {
          text: "Email Templates",
          href: "/"
        },
        {
          text: "Alert Email",
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
      <div class="col-12">
        <table
          class="body-wrap"
          style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; width: 100%; background-color: #f3f3f3; margin: 0;"
          bgcolor="#f3f3f3"
        >
          <tr
            style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"
          >
            <td
              style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0;"
              valign="top"
            ></td>
            <td
              class="container"
              width="600"
              style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; display: block !important; max-width: 600px !important; clear: both !important; margin: 0 auto;"
              valign="top"
            >
              <div
                class="content"
                style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; max-width: 600px; display: block; margin: 0 auto; padding: 20px;"
              >
                <table
                  class="main"
                  width="100%"
                  cellpadding="0"
                  cellspacing="0"
                  style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; border-radius: 3px; background-color: #fff; margin: 0; box-shadow: 0px 0px 13px 0px rgba(236, 236, 241, 0.44);"
                  bgcolor="#fff"
                >
                  <tr
                    style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"
                  >
                    <td
                      class="alert alert-warning"
                      style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 16px; vertical-align: top; color: #fff; font-weight: 500; text-align: center; border-radius: 3px 3px 0 0; background-color: #4090cb; margin: 0; padding: 20px;"
                      align="center"
                      bgcolor="#71b6f9"
                      valign="top"
                    >Warning: You're approaching your limit. Please upgrade.</td>
                  </tr>
                  <tr
                    style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"
                  >
                    <td
                      class="content-wrap"
                      style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 20px;"
                      valign="top"
                    >
                      <table
                        width="100%"
                        cellpadding="0"
                        cellspacing="0"
                        style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"
                      >
                        <tr
                          style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"
                        >
                          <td
                            class="content-block"
                            style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 0 0 20px;"
                            valign="top"
                          >
                            You have
                            <strong
                              style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"
                            >
                              <span
                                style="background-color: #47bd9a;color: #ffffff;padding: 5px 8px; font-size: 12px; border-radius: 4px"
                              >
                                1
                                free report
                              </span>
                            </strong> remaining.
                          </td>
                        </tr>
                        <tr
                          style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"
                        >
                          <td
                            class="content-block"
                            style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 0 0 20px;"
                            valign="top"
                          >Add your credit card now to upgrade your account to a premium plan to ensure you don't miss out on any reports.</td>
                        </tr>
                        <tr
                          style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"
                        >
                          <td
                            class="content-block"
                            style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 0 0 20px;"
                            valign="top"
                          >
                            <a
                              href="javascript: void(0);"
                              class="btn-primary"
                              style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; color: #FFF; text-decoration: none; line-height: 2em; font-weight: bold; text-align: center; cursor: pointer; display: inline-block; border-radius: 5px; text-transform: capitalize; background-color: #e74c5e; margin: 0; border-color: #e74c5e; border-style: solid; border-width: 8px 16px;"
                            >
                              Upgrade
                              my account
                            </a>
                          </td>
                        </tr>
                        <tr
                          style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"
                        >
                          <td
                            class="content-block"
                            style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 0 0 20px;"
                            valign="top"
                          >
                            Thanks for choosing
                            <b>Dashbiz</b> Admin.
                          </td>
                        </tr>
                        <tr
                          style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"
                        >
                          <td
                            class="content-block"
                            style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 0 0 20px;"
                            valign="top"
                          >
                            <b>Dashbiz</b>
                            <p>Support Team</p>
                          </td>
                        </tr>

                        <tr
                          style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"
                        >
                          <td
                            class="content-block"
                            style="text-align: center;font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 0;"
                            valign="top"
                          >?? {{ new Date().getFullYear() }} Dashbiz</td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </div>
            </td>
          </tr>
        </table>
        <!-- end table -->
      </div>
    </div>
    <!-- end row -->
  </Layout>
</template>