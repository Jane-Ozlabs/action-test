<script>
import Layout from "../../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

import { pricingData } from "./data";

/**
 * Pricing component
 */
export default {
  page: {
    title: "Pricing Page",
    meta: [{ name: "description", content: appConfig.description }]
  },
  components: { Layout, PageHeader },
  data() {
    return {
      pricingData: pricingData,
      title: "Pricing",
      items: [
        {
          text: "Extra Pages",
          href: "/"
        },
        {
          text: "Pricing",
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
      <div class="col-xl-3 col-md-6" v-for="price of pricingData" :key="price.name">
        <div class="card plan-box text-center">
          <div class="card-body">
            <div class="py-3">
              <h5 class="font-size-20 mt-0">{{price.name}}</h5>
              <p class="text-muted">{{price.text}}</p>
              <div class="py-4">
                <h2>
                  <sup>
                    <small>$</small>
                  </sup>
                  {{price.package}}/
                  <span class="font-size-14">Per month</span>
                </h2>
              </div>
              <div class="plan-icon py-3">
                <i :class="`${price.icon} h2 px-4 position-relative`"></i>
              </div>
            </div>
            <div class="plan-features mb-4">
              <p>Free Live Support</p>
              <p>Unlimited User</p>
              <p>No Time Tracking</p>
              <p>Free Setup</p>
            </div>
            <div class="pt-3">
              <a href="javascript: void(0);" class="btn btn-primary btn-block">Sign up Now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>