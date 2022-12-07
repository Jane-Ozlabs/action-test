<template>
    <div class="detailArea detailTable">
        <xbtn />
        <div class="detailTitle">
            <span>Date : {{ summary.date | formatDate }}, Username : {{ summary.username }}</span>
        </div>
        <div class="tableBox">
            <table class="tb02">
                <tr>
                    <th><p>Date</p></th>
                    <th><p>Game</p></th>
                    <th><p>Bet</p></th>
                    <th><p>Win/Lose</p></th>
                </tr>
                <tr class="total">
                    <th>&nbsp;</th>
                    <th>Total</th>
                    <th>{{ summary.bet | formatCurrency }}</th>
                    <th>
                        <font color="#dd3100">{{ summary.winLose | formatCurrency }}</font>
                    </th>
                </tr>
                <tr v-for="x of rows" :key="x.id">
                    <td>{{ x.dateTime | formatDateTime }}</td>
                    <td>{{ x.game }}</td>
                    <td>{{ x.bet | formatCurrency }}</td>
                    <td>
                        <font :color="colorWinLose(x)">{{ x.winLose | formatCurrency }}</font>
                    </td>
                </tr>
            </table>
              <Pagination v-model="filters.page" :totalRows="filters.total" :perPage="filters.perPage" limit="10" @input="load" />
        </div>
          
    </div>
</template>
<script>
import moment from "moment";
import Layout from "@/router/layouts/main";
import PageHeader from "@/components/page-header";
import Pagination from "@/components/pagination";
import AgentFilter from "@/components/agent-filter";
import DayFilter from "@/components/day-filter";
import UserFilter from "@/components/user-filter";
import appConfig from "@/app.config";

export default {
    page: {
        title: "일별 매출 현황",
        meta: [{ name: "description", content: appConfig.description }],
    },
    components: { Layout, PageHeader, AgentFilter, DayFilter, UserFilter, Pagination },
    props: { userId: {}, date: {} },
    data() {
        return {
            title: "일별 매출 현황",
            filters: { dateFrom: "", dateTo: "", username: "", page: 1, perPage: 10, total: 0 },
            rows: [],
            summary: { date: "", username: "", bet: 0, winLose: 0 },
        };
    },

    mounted() {
        this.load();
    },
    methods: {
        async load(page) {
            this.updateFilters(page);
            this.rows = [];
            var res = await loadPagedView(this, `/partners/views/revenue/daily/${this.userId}`, {});
            console.log("loadPagedView", UV(res));

            this.summary = res.summary;
        },
        updateFilters(page) {
          this.filters = {
            dateFrom: moment(this.date).startOf("day").format("YYYY-MM-DD"),
            dateTo: moment(this.date).startOf("day").add(1, "day").format("YYYY-MM-DD"),
            page,
            total: 0,
            perPage:10
          }
        },
        colorWinLose(x) {
            return x.winLose < 0 ? "#006cff" : "#dd3100";
        },
    },
    watch: {
        userId() {
            this.load();
        },
        date() {
            this.load();
        },
    },
};
</script>
