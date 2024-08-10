// 模拟后端动态生成路由
import { defineFakeRoute } from "vite-plugin-fake-server/client";
import { system, monitor, goods } from "@/router/enums";

/**
 * roles：页面级别权限，这里模拟二种 "admin"、"common"
 * admin：管理员角色
 * common：普通角色
 */

const systemManagementRouter = {
  path: "/system",
  meta: {
    icon: "ri:settings-3-line",
    title: "menus.pureSysManagement",
    rank: system
  },
  children: [
    {
      path: "/system/user/index",
      name: "SystemUser",
      meta: {
        icon: "ri:admin-line",
        title: "menus.pureUser",
        roles: ["admin"]
      }
    },
    {
      path: "/system/role/index",
      name: "SystemRole",
      meta: {
        icon: "ri:admin-fill",
        title: "menus.pureRole",
        roles: ["admin"]
      }
    },
    {
      path: "/system/menu/index",
      name: "SystemMenu",
      meta: {
        icon: "ep:menu",
        title: "menus.pureSystemMenu",
        roles: ["admin"]
      }
    },
    {
      path: "/system/dept/index",
      name: "SystemDept",
      meta: {
        icon: "ri:git-branch-line",
        title: "menus.pureDept",
        roles: ["admin"]
      }
    },
    {
      path: "/system/dict/index",
      name: "SystemDictionary",
      meta: {
        icon: "ep:memo",
        title: "menus.pureDictionary",
        roles: ["admin"]
      }
    }
  ]
};

const systemMonitorRouter = {
  path: "/monitor",
  meta: {
    icon: "ep:monitor",
    title: "menus.pureSysMonitor",
    rank: monitor
  },
  children: [
    {
      path: "/monitor/online-user",
      component: "monitor/online/index",
      name: "OnlineUser",
      meta: {
        icon: "ri:user-voice-line",
        title: "menus.pureOnlineUser",
        roles: ["admin"]
      }
    },
    {
      path: "/monitor/login-logs",
      component: "monitor/logs/login/index",
      name: "LoginLog",
      meta: {
        icon: "ri:window-line",
        title: "menus.pureLoginLog",
        roles: ["admin"]
      }
    },
    {
      path: "/monitor/operation-logs",
      component: "monitor/logs/operation/index",
      name: "OperationLog",
      meta: {
        icon: "ri:history-fill",
        title: "menus.pureOperationLog",
        roles: ["admin"]
      }
    },
    {
      path: "/monitor/system-logs",
      component: "monitor/logs/system/index",
      name: "SystemLog",
      meta: {
        icon: "ri:file-search-line",
        title: "menus.pureSystemLog",
        roles: ["admin"]
      }
    }
  ]
};
// 数据大屏
// 最简代码，也就是这些字段必须有
const dataScreenRouter = {
  path: "/dataScreen",
  meta: {
    icon: "ep:data-analysis",
    title: "menus.dataScreen"
  },
  children: [
    {
      // path随便写，但前面必须有个 `/`
      path: "/dataScreen",
      // component对应的值前不需要加 / 值对应的是实际业务 `.vue` 或 `.tsx` 代码路径
      component: "dataScreen/index.vue",
      name: "dataScreen",
      meta: {
        title: "menus.dataScreen"
      }
    }
  ]
};
// 门户网站
const portalRouter = {
  path: "/portal",
  meta: {
    icon: "ep:guide",
    title: "menus.portal"
  },
  children: [
    {
      // path随便写，但前面必须有个 `/`
      path: "/portal",
      // component对应的值前不需要加 / 值对应的是实际业务 `.vue` 或 `.tsx` 代码路径
      component: "portal/index.vue",
      name: "portal",
      meta: {
        title: "menus.portal"
      }
    },
    {
      // path随便写，但前面必须有个 `/`
      path: "/portal",
      // component对应的值前不需要加 / 值对应的是实际业务 `.vue` 或 `.tsx` 代码路径
      component: "portal/index.vue",
      name: "portal",
      meta: {
        title: "menus.portal"
      }
    }
  ]
};
// 商品管理
const goodsRouter = {
  path: "/goods",
  meta: {
    icon: "ep:handbag",
    title: "menus.goods",
    rank: goods
  },
  children: [
    {
      path: "/goods/GoodsManagement",
      component: "goods/GoodsManagement",
      name: "GoodsManagement",
      meta: {
        title: "menus.goods",
        roles: ["admin"]
      }
    },
    {
      path: "/goods/GoodsList",
      component: "goods/GoodsList",
      name: "GoodsList",
      meta: {
        title: "menus.goodsList",
        roles: ["admin"]
      }
    }
  ]
};

export default defineFakeRoute([
  {
    url: "/get-async-routes",
    method: "get",
    response: () => {
      return {
        success: true,
        data: [
          systemManagementRouter,
          systemMonitorRouter,
          dataScreenRouter,
          portalRouter,
          goodsRouter
        ]
      };
    }
  }
]);
