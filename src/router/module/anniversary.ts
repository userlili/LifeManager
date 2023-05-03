import { RouteRecordRaw } from "vue-router";

export default {
  name: "anniversary",
  path: "/anniversary",
  component: () => import("@/layouts/common-page.vue"),
  meta: { auth: true, menu: { title: "router.anniversary",hideParent: true, icon: "Timer" , sort: 4} },
  children: [
    {
      name: "anniversaryIndex",
      path: "index",
      component: () => import("@/views/anniversary/Anniversary.vue"),
      meta: { menu: { title: "router.anniversary" }, keepAlive: true }
    }
  ]
} as RouteRecordRaw;
