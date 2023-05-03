import { RouteRecordRaw } from "vue-router";

export default {
  name: "bill",
  path: "/bill",
  component: () => import("@/layouts/common-page.vue"),
  meta: { auth: true, menu: { title: "router.bill", icon: "Coin" , sort: 2} },
  children: [
    {
      name: "billIndex",
      path: "index",
      component: () => import("@/views/bill/Bill.vue"),
      meta: { menu: { title: "router.bill_index" }, keepAlive: true }
    },
    {
      name: "billTypeIndex",
      path: "type",
      component: () => import("@/views/bill/BillType.vue"),
      meta: { menu: { title: "router.bill_type" }, keepAlive: true }
    }
  ]
} as RouteRecordRaw;
