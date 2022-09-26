<script>
import Layout from "../../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

import { productListData } from "./data";

/**
 * Products-list component
 */
export default {
  page: {
    title: "Products List",
    meta: [{ name: "description", content: appConfig.description }]
  },
  components: { Layout, PageHeader },
  data() {
    return {
      productListData: productListData,
      title: "Products List",
      items: [
        {
          text: "Ecommerce",
          href: "/"
        },
        {
          text: "Products List",
          active: true
        }
      ],
      filter: "",
      pageOptions: [10, 20, 30],
      value: 10,
      perPage: 10,
      currentPage: 1,
      rows: 30
    };
  }
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col-sm-12 col-md-6">
                <div id="productlist-table_length" class="dataTables_length">
                  <label class="d-inline-flex align-items-center">
                    Show&nbsp;
                    <b-form-select v-model="value" size="sm" :options="pageOptions"></b-form-select>&nbsp;entries
                  </label>
                </div>
              </div>
              <!-- Search -->
              <div class="col-sm-12 col-md-6">
                <div id="productlist-table_filter" class="dataTables_filter text-md-right">
                  <label class="d-inline-flex align-items-center">
                    Search:
                    <b-form-input
                      v-model="filter"
                      type="search"
                      placeholder="Search..."
                      class="form-control form-control-sm ml-2"
                    ></b-form-input>
                  </label>
                </div>
              </div>
              <!-- End search -->
            </div>
            <div class="table-responsive">
              <table class="table table-striped table-centered">
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Product Name</th>
                    <th>Added Date</th>
                    <th>Amount</th>
                    <th>No. of Units</th>
                    <th>Stock</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="data of productListData" :key="data.id">
                    <td class="product-list-img sorting_1" tabindex="0">
                      <img :src="`${data.image}`" class="img-fluid avatar-sm rounded" alt="tbl" />
                    </td>
                    <td>
                      <h6 class="mt-0 mb-1">{{ data.name }}</h6>
                      <p class="m-0 font-size-14">{{ data.text }}</p>
                    </td>
                    <td>{{data.date}}</td>
                    <td>{{data.amount}}</td>
                    <td>{{data.units}}</td>
                    <td>
                      <b-progress height="5px" :value="data.stock" />
                    </td>
                    <td>
                      <a
                        href="javascript:void(0);"
                        class="mr-3 text-primary"
                        data-toggle="tooltip"
                        data-placement="top"
                        v-b-tooltip.hover
                        title="Edit"
                      >
                        <i class="mdi mdi-pencil font-size-18"></i>
                      </a>
                      <a
                        href="javascript:void(0);"
                        class="text-danger"
                        data-toggle="tooltip"
                        data-placement="top"
                        v-b-tooltip.hover
                        title="Delete"
                      >
                        <i class="mdi mdi-close font-size-18"></i>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="row">
              <div class="col">
                <div class="dataTables_paginate paging_simple_numbers float-right">
                  <ul class="pagination pagination-rounded mb-0">
                    <!-- pagination -->
                    <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage"></b-pagination>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>