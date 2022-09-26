<script>
import Layout from "../../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

import { OrderData } from "./data";

/**
 * Order History component
 */
export default {
  page: {
    title: "Order History",
    meta: [{ name: "description", content: appConfig.description }]
  },
  components: { Layout, PageHeader },
  data() {
    return {
      OrderData: OrderData,
      title: "Order History",
      items: [
        {
          text: "Ecommerce",
          href: "/"
        },
        {
          text: "Order History",
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
      <div class="col">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col-sm-12 col-md-6">
                <div id="order-history-table_length" class="dataTables_length">
                  <label class="d-inline-flex align-items-center">
                    Show&nbsp;
                    <b-form-select v-model="value" size="sm" :options="pageOptions"></b-form-select>&nbsp;entries
                  </label>
                </div>
              </div>
              <!-- Search -->
              <div class="col-sm-12 col-md-6">
                <div id="order-history-table_filter" class="dataTables_filter text-md-right">
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
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th>Order ID</th>
                    <th>Amount</th>
                    <th>Order Date</th>
                    <th>Payment</th>
                    <th>Billing Name</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="data of OrderData" :key="data.id">
                    <td>
                      <a href="javascript: void(0);" class="font-weight-bold">{{data.id}}</a>
                    </td>
                    <td>{{data.amount}}</td>
                    <td>{{data.date}}</td>
                    <td>
                      <i :class="`fab ${data.paymenticon} text-muted font-size-20`"></i>
                    </td>
                    <td>{{data.name}}</td>
                    <td>
                      <span
                        class="badge badge-soft-success"
                        :class="{
                          'badge-soft-danger': `${data.status}` === 'Chargeback',
                          'badge-soft-warning': `${data.status}` === 'Refund'
                      }"
                      >{{data.status}}</span>
                    </td>
                    <td>
                      <a
                        href="javascript:void(0);"
                        class="mr-3 text-primary"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Edit"
                        v-b-tooltip.hover
                      >
                        <i class="mdi mdi-pencil font-size-18"></i>
                      </a>
                      <a
                        href="javascript:void(0);"
                        class="text-danger"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Delete"
                        v-b-tooltip.hover
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