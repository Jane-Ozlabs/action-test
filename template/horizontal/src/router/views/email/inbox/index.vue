<script>
import PageHeader from "@/components/page-header";

import Layout from "../../../layouts/main";

import appConfig from "@/app.config";

import Toolbar from "../toolbar";

import { emailData } from "./data";

/**
 * Email-inbox component
 */
export default {
  page: {
    title: "Inbox",
    meta: [{ name: "description", content: appConfig.description }]
  },
  components: { PageHeader, Toolbar, Layout },
  data() {
    return {
      emailData: emailData,
      paginatedEmailData: emailData,
      title: "Inbox",
      items: [
        {
          text: "Email",
          href: "/"
        },
        {
          text: "Inbox",
          active: true
        }
      ],
      // page number
      currentPage: 1,
      // default page size
      perPage: 15,

      // start and end index
      startIndex: 1,
      endIndex: 15
    };
  },
  computed: {
    rows() {
      return this.emailData.length;
    }
  },
  created() {
    this.startIndex = 0;
    this.endIndex = this.perPage;

    this.paginatedEmailData = this.emailData.slice(
      this.startIndex,
      this.endIndex
    );
  },
  methods: {
    onPageChange() {
      this.startIndex = (this.currentPage - 1) * this.perPage;
      this.endIndex = (this.currentPage - 1) * this.perPage + this.perPage;

      this.paginatedEmailData = this.emailData.slice(
        this.startIndex,
        this.endIndex
      );
    }
  }
};
</script>

<template>
  <Layout :title="title" :items="items">
    <div class="row">
      <!-- Right Sidebar -->
      <div class="col-12">
        <div class="email-leftbar card">
          <router-link tag="a" to="/email/compose" class="btn btn-danger">Compose</router-link>
          <div class="mail-list mt-4">
            <a href="javascript: void(0);" class="active">
              <i class="mdi mdi-email-outline mr-2"></i> Inbox
              <span class="ml-1 float-right">(18)</span>
            </a>
            <a href="javascript: void(0);">
              <i class="mdi mdi-star-outline mr-2"></i>Starred
            </a>
            <a href="javascript: void(0);">
              <i class="mdi mdi-diamond-stone mr-2"></i>Important
            </a>
            <a href="javascript: void(0);">
              <i class="mdi mdi-file-outline mr-2"></i>Draft
            </a>
            <a href="javascript: void(0);">
              <i class="mdi mdi-email-check-outline mr-2"></i>Sent Mail
            </a>
            <a href="javascript: void(0);">
              <i class="mdi mdi-trash-can-outline mr-2"></i>Trash
            </a>
          </div>

          <h6 class="mt-4">Labels</h6>

          <div class="mail-list mt-1">
            <a href="javascript: void(0);">
              <span class="mdi mdi-arrow-right-drop-circle text-info float-right"></span>Theme Support
            </a>
            <a href="javascript: void(0);">
              <span class="mdi mdi-arrow-right-drop-circle text-warning float-right"></span>Freelance
            </a>
            <a href="javascript: void(0);">
              <span class="mdi mdi-arrow-right-drop-circle text-primary float-right"></span>Social
            </a>
            <a href="javascript: void(0);">
              <span class="mdi mdi-arrow-right-drop-circle text-danger float-right"></span>Friends
            </a>
            <a href="javascript: void(0);">
              <span class="mdi mdi-arrow-right-drop-circle text-success float-right"></span>Family
            </a>
          </div>

          <h6 class="mt-4">Chat</h6>

          <div class="mt-2">
            <a href="javascript: void(0);" class="media">
              <img
                class="d-flex mr-3 rounded-circle"
                src="@/assets/images/users/avatar-2.jpg"
                alt="Generic placeholder image"
                height="36"
              />
              <div class="media-body chat-user-box">
                <p class="user-title m-0">Scott Median</p>
                <p class="text-muted">Hello</p>
              </div>
            </a>

            <a href="javascript: void(0);" class="media">
              <img
                class="d-flex mr-3 rounded-circle"
                src="@/assets/images/users/avatar-3.jpg"
                alt="Generic placeholder image"
                height="36"
              />
              <div class="media-body chat-user-box">
                <p class="user-title m-0">Julian Rosa</p>
                <p class="text-muted">What about our next..</p>
              </div>
            </a>

            <a href="javascript: void(0);" class="media">
              <img
                class="d-flex mr-3 rounded-circle"
                src="@/assets/images/users/avatar-4.jpg"
                alt="Generic placeholder image"
                height="36"
              />
              <div class="media-body chat-user-box">
                <p class="user-title m-0">David Medina</p>
                <p class="text-muted">Yeah everything is fine</p>
              </div>
            </a>

            <a href="javascript: void(0);" class="media">
              <img
                class="d-flex mr-3 rounded-circle"
                src="@/assets/images/users/avatar-6.jpg"
                alt="Generic placeholder image"
                height="36"
              />
              <div class="media-body chat-user-box">
                <p class="user-title m-0">Jay Baker</p>
                <p class="text-muted">Wow that's great</p>
              </div>
            </a>
          </div>
        </div>
        <div class="email-rightbar mb-3">
          <div class="card">
            <div class="btn-toolbar p-3">
              <Toolbar />
            </div>
            <div class="mt-3">
              <ul class="message-list">
                <li
                  v-for="(email,index) in paginatedEmailData"
                  :key="index"
                  :class="{ 'unread': `${email.unread}` === 'true' }"
                >
                  <div class="col-mail col-mail-1">
                    <div class="checkbox-wrapper-mail">
                      <input :id="`chk-${index}`" type="checkbox" />
                      <label :for="`chk-${index}`"></label>
                    </div>
                    <span :class="`star-toggle far fa-star text-${email.text}`"></span>
                    <a class="title">{{email.title}}</a>
                  </div>
                  <div class="col-mail col-mail-2">
                    <a class="subject">{{email.subject}}</a>
                    <div class="date">{{email.date}}</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="row justify-content-md-between align-items-md-center">
            <div class="col-xl-7">Showing {{startIndex}} - {{endIndex}} of {{rows}}</div>
            <!-- end col-->
            <div class="col-xl-5">
              <div class="text-md-right float-xl-right mt-2 pagination-rounded">
                <b-pagination
                  v-model="currentPage"
                  :total-rows="rows"
                  :per-page="perPage"
                  @input="onPageChange"
                ></b-pagination>
              </div>
            </div>
            <!-- end col-->
          </div>
        </div>
      </div>
    </div>
    <!-- </div> -->
  </Layout>
</template>