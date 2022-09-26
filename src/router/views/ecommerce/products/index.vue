<script>
import Layout from "../../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

import { productsData } from "./data";

/**
 * Products component
 */
export default {
  page: {
    title: "Products",
    meta: [{ name: "description", content: appConfig.description }]
  },
  components: { Layout, PageHeader },
  data() {
    return {
      productsData: productsData,
      title: "Products",
      items: [
        {
          text: "Ecommerce",
          href: "/"
        },
        {
          text: "Products",
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
      <div class="col-xl-3 col-md-6" v-for="product of productsData" :key="product.id">
        <div class="card product-box">
          <div class="card-body">
            <div class="product-img">
              <img
                :src="`${product.image}`"
                class="img-fluid rounded-top mx-auto d-block"
                alt="work-thumbnail"
              />
              <div class="product-overlay">
                <ul class="list-inline product-links social-links mb-0">
                  <li class="list-inline-item">
                    <a
                      href="javascript: void(0);"
                      data-toggle="tooltip"
                      data-placement="top"
                      v-b-tooltip.hover
                      title="Like"
                    >
                      <i class="dripicons-heart"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a
                      href="javascript: void(0);"
                      data-toggle="tooltip"
                      data-placement="top"
                      v-b-tooltip.hover
                      title="Add to Wishlist"
                    >
                      <i class="dripicons-shopping-bag"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a
                      href="javascript: void(0);"
                      data-toggle="tooltip"
                      data-placement="top"
                      v-b-tooltip.hover
                      title="Add to Cart"
                    >
                      <i class="dripicons-cart"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="detail mt-3">
              <h4 class="font-size-16">
                <a href class="text-dark">{{ product.name }}</a>
              </h4>
              <p class="text-muted">
                <i class="mdi mdi-star text-warning"></i>
                <i class="mdi mdi-star text-warning"></i>
                <i class="mdi mdi-star text-warning"></i>
                <i class="mdi mdi-star text-warning"></i>
                <i class="mdi mdi-star text-warning"></i>
              </p>
              <h5 class="my-0 font-size-16 float-right">
                <span class="text-muted mr-2">
                  <del>{{ product.oldprice }}</del>
                </span>
                <b>{{ product.newprice }}</b>
              </h5>
              <span :class="`badge badge-soft-${product.color}`">{{ product.discount }}</span>
            </div>
          </div>
        </div>
        <!-- end product-box -->
      </div>
    </div>
  </Layout>
</template>