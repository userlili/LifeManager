import { fetchRouteInfo } from "@/api/routes";
import { userStore } from "@/store/user";
import { Router, RouteRecordRaw } from "vue-router";
import autoloadModuleRoutes from "./module";

let routes: RouteRecordRaw[] = autoloadModuleRoutes();

/**
 * 收集嵌套路由元信息并组装
 * @param children 嵌套的子路由
 * @returns 路由元信息
 */
function filterNestedChildren(children: RouteRecordRaw[]) {
  const user = userStore();
  if (user.info?.permission === undefined) return children;

  return children.filter((r) => {
    const permissions = r.meta?.permissions;

    if (r.children) {
      r.children = filterNestedChildren(r.children);
    }

    return permissions ? permissions?.includes(user.info!.permission) : true;
  });
}

/**
 * 过滤从服务器回传的路由元数据
 * @param route 远程路由
 * @returns 过滤后的路由
 */
function filterRemoteRoute(route: RouteRecordRaw[]): RouteRecordRaw[] {
  return route.map((r) => {
    if (r.children) {
      r.children = filterRemoteRoute(r.children);
    }
    const path = `../../${r.component}.vue`;
    r.component = () => import(/* @vite-ignore */ path.toString());
    return r;
  });
}

/**
 * 获取远程路由元数据
 * @returns 远程路由
 */
async function fetchRemoteRoute() {
  const res = await fetchRouteInfo();
  return filterRemoteRoute(res.data);
}

/**
 * 路由自动装配
 * @param router 路由实例
 * @param remoteFlag 是否从远程获取路由
 */
async function autoload(router: Router, remoteFlag = false) {
  if (remoteFlag) {
    const remoteRoutes = await fetchRemoteRoute();
    routes = [...routes, ...remoteRoutes];
  }

  routes = routes.map((route) => {
    route.children = filterNestedChildren(route.children!);
    return route;
  });

  routes.forEach((r) => router.addRoute(r));
}

export default autoload;
