<script>
export default {
  data() {
    return {
      transactions: [
        {
          image: require("@/assets/images/users/avatar-2.jpg"),
          name: "David Wiley",
          date: "On 02 Jun, 2019",
          producttype: "Desktop",
          status: "Confirm",
          amount: "$2105"
        },
        {
          image: require("@/assets/images/users/avatar-3.jpg"),
          name: "Michael Gatlin",
          date: "On 03 Jun, 2019",
          producttype: "Laptop",
          status: "Payment expired",
          amount: "$1825"
        },
        {
          image: require("@/assets/images/users/avatar-4.jpg"),
          name: "Steve Dietrich",
          date: "On 05 Jun, 2019",
          producttype: "Tablet",
          status: "Waiting payment",
          amount: "$1460"
        },
        {
          image: require("@/assets/images/users/avatar-1.jpg"),
          name: "James Harris",
          date: "On 07 Jun, 2019",
          producttype: "Mobile",
          status: "Confirm",
          amount: "$1434"
        },
        {
          image: require("@/assets/images/users/avatar-3.jpg"),
          name: "Clay Johnson",
          date: "On 08 Jun, 2019",
          producttype: "Laptop",
          status: "Confirm",
          amount: "$1759"
        }
      ]
    };
  }
};
</script>

<template>
  <div class="card">
    <div class="card-body">
      <h4 class="card-title mb-4">Latest Transactions</h4>
      <div class="table-responsive">
        <table class="table table-centered table-nowrap mb-0">
          <tbody>
            <tr v-for="data of transactions" :key="data.name">
              <td style="width: 60px;">
                <img :src="`${data.image}`" alt class="avatar-sm rounded-circle" />
              </td>
              <td>
                {{data.name}}
                <p class="m-0 text-muted">{{data.date}}</p>
              </td>
              <td>{{data.producttype}}</td>
              <td>
                <i
                  class="mdi mdi-checkbox-blank-circle mr-1"
                  :class="{
                    'text-success': `${data.status}` === 'Confirm',
                    'text-danger': `${data.status}` === 'Payment expired',
                    'text-warning': `${data.status}` === 'Waiting payment',
                    }"
                ></i>
                {{data.status}}
              </td>
              <td>
                {{data.amount}}
                <p class="m-0 text-muted font-size-14">Amount</p>
              </td>
              <td>
                <div>
                  <a href="javascript: void(0);" class="btn btn-primary btn-sm">Edit</a>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>