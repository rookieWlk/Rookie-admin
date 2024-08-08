import { $t } from "@/plugins/i18n";
const Layout = () => import("@/layout/index.vue");

export default [
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/login/index.vue"),
    meta: {
      title: $t("menus.pureLogin"),
      showLink: false,
      rank: 101
    }
  },
  {
    path: "/redirect",
    component: Layout,
    meta: {
      title: $t("status.pureLoad"),
      showLink: false,
      rank: 102
    },
    children: [
      {
        path: "/redirect/:path(.*)",
        name: "Redirect",
        component: () => import("@/layout/redirect.vue")
      }
    ]
  },
  // 下面是一个无layout菜单的例子（一个全屏空白页面），因为这种情况极少发生，所以只需要在前端配置即可（配置路径：src/router/modules/remaining.ts）
  {
    path: "/empty",
    name: "Empty",
    component: () => import("@/views/empty/index.vue"),
    meta: {
      title: $t("menus.pureEmpty"),
      showLink: false,
      rank: 103
    }
  },
  // 数据大屏 无layout页
  {
    path: "/dataScreen",
    name: "DataScreen",
    component: () => import("@/views/dataScreen/inedx.vue"),
    meta: {
      title: $t("menus.dataScreen"),
      showLink: false,
      rank: 104
    }
  },
  {
    path: "/portal",
    name: "Portal",
    component: () => import("@/views/portal/index.vue"),
    meta: {
      title: $t("menus.portal"),
      showLink: false,
      rank: 105
    }
  },
  {
    path: "/product",
    name: "Product",
    component: () => import("@/views/portal/Product.vue"),
    meta: {
      title: "产品简介",
      showLink: false,
      rank: 106
    }
  },
  {
    path: "/partner",
    name: "Partner",
    component: () => import("@/views/portal/Partner.vue"),
    meta: {
      title: "合作伙伴",
      showLink: false,
      rank: 107
    }
  },
  {
    path: "/account-settings",
    name: "AccountSettings",
    component: () => import("@/views/account-settings/index.vue"),
    meta: {
      title: $t("buttons.pureAccountSettings"),
      showLink: false,
      rank: 108
    }
  }
] satisfies Array<RouteConfigsTable>;
