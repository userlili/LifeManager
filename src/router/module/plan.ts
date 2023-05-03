import { RouteRecordRaw } from "vue-router";

export default {
  name: "plan",
  path: "/plan",
  component: () => import("@/layouts/common-page.vue"),
  meta: { auth: true, menu: { title: "router.plan", icon: "List" , sort: 3} },
  children: [
    {
      name: "planIndex",
      path: "index",
      component: () => import("@/views/plan/Plan.vue"),
      meta: { menu: { title: "router.plan_index" }, keepAlive: true }
    }
  ]
} as RouteRecordRaw;
