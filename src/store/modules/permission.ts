import { defineStore } from "pinia";
import {
  type cacheType,
  store,
  debounce,
  ascending,
  getKeyList,
  filterTree,
  constantMenus,
  filterNoPermissionTree,
  formatFlatteningRoutes
} from "../utils";
import { useMultiTagsStoreHook } from "./multiTags";

// 1. 定义 usePermissionStore
export const usePermissionStore = defineStore({
  // 2. 给 store 设置一个唯一的 ID
  id: "pure-permission",

  // 3. 定义 state
  state: () => ({
    // 静态路由生成的菜单
    constantMenus,
    // 整体路由生成的菜单（静态、动态）
    wholeMenus: [],
    // 整体路由（一维数组格式）
    flatteningRoutes: [],
    // 缓存页面 keepAlive
    cachePageList: []
  }),

  // 4. 定义 actions
  actions: {
    /** 组装整体路由生成的菜单 */
    handleWholeMenus(routes: any[]) {
      // 过滤无权限的路由菜单,并按照升序排列
      this.wholeMenus = filterNoPermissionTree(
        filterTree(ascending(this.constantMenus.concat(routes)))
      );
      // 将路由菜单扁平化处理
      this.flatteningRoutes = formatFlatteningRoutes(
        this.constantMenus.concat(routes)
      );
    },

    // 缓存页面操作
    cacheOperate({ mode, name }: cacheType) {
      const delIndex = this.cachePageList.findIndex(v => v === name);
      switch (mode) {
        case "refresh":
          // 从缓存列表中移除指定页面
          this.cachePageList = this.cachePageList.filter(v => v !== name);
          break;
        case "add":
          // 添加页面到缓存列表
          this.cachePageList.push(name);
          break;
        case "delete":
          // 从缓存列表中删除指定页面
          delIndex !== -1 && this.cachePageList.splice(delIndex, 1);
          break;
      }

      // 监听缓存页面是否存在于标签页,不存在则删除
      debounce(() => {
        // 获取缓存页面列表的长度
        let cacheLength = this.cachePageList.length;
        // 获取标签页列表的 name 列表
        const nameList = getKeyList(useMultiTagsStoreHook().multiTags, "name");
        // 循环缓存页面列表
        while (cacheLength > 0) {
          // 检查缓存页面是否在标签页列表中
          // 如果不在,则从缓存页面列表中删除该页面
          nameList.findIndex(v => v === this.cachePageList[cacheLength - 1]) ===
            -1 &&
            this.cachePageList.splice(
              this.cachePageList.indexOf(this.cachePageList[cacheLength - 1]),
              1
            );
          // 减少缓存页面列表的长度
          cacheLength--;
        }
      })();
    },

    // 清空缓存页面
    clearAllCachePage() {
      this.wholeMenus = [];
      this.cachePageList = [];
    }
  }
});

// 5. 定义 usePermissionStoreHook 函数
export function usePermissionStoreHook() {
  return usePermissionStore(store);
}
