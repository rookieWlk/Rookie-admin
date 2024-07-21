import { defineStore } from "pinia";
import {
  type appType,
  store,
  getConfig,
  storageLocal,
  deviceDetection,
  responsiveStorageNameSpace
} from "../utils";

// 使用 defineStore 定义一个名为 "pure-app" 的应用程序状态存储
export const useAppStore = defineStore({
  id: "pure-app",
  state: (): appType => ({
    // 定义侧边栏的状态
    sidebar: {
      // 从本地存储中读取侧边栏的打开状态,如果不存在则使用默认配置
      opened:
        storageLocal().getItem<StorageConfigs>(
          `${responsiveStorageNameSpace()}layout`
        )?.sidebarStatus ?? getConfig().SidebarStatus,
      // 是否没有动画效果
      withoutAnimation: false,
      // 是否通过点击折叠
      isClickCollapse: false
    },
    // 从本地存储中读取应用程序的布局设置,如果不存在则使用默认配置
    layout:
      storageLocal().getItem<StorageConfigs>(
        `${responsiveStorageNameSpace()}layout`
      )?.layout ?? getConfig().Layout,
    // 根据设备检测,确定当前设备是 "mobile" 还是 "desktop"
    device: deviceDetection() ? "mobile" : "desktop",
    // 记录浏览器窗口的可视区域大小
    viewportSize: {
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
    },
    // 一个标志,用于跟踪拖拽排序组件的状态
    sortSwap: false
  }),
  getters: {
    // 获取侧边栏的打开状态
    getSidebarStatus(state) {
      return state.sidebar.opened;
    },
    // 获取当前设备类型
    getDevice(state) {
      return state.device;
    },
    // 获取浏览器窗口的可视宽度
    getViewportWidth(state) {
      return state.viewportSize.width;
    },
    // 获取浏览器窗口的可视高度
    getViewportHeight(state) {
      return state.viewportSize.height;
    }
  },
  actions: {
    // 切换侧边栏的打开/关闭状态,并将状态保存到本地存储
    TOGGLE_SIDEBAR(opened?: boolean, resize?: string) {
      const layout = storageLocal().getItem<StorageConfigs>(
        `${responsiveStorageNameSpace()}layout`
      );
      if (opened && resize) {
        this.sidebar.withoutAnimation = true;
        this.sidebar.opened = true;
        layout.sidebarStatus = true;
      } else if (!opened && resize) {
        this.sidebar.withoutAnimation = true;
        this.sidebar.opened = false;
        layout.sidebarStatus = false;
      } else if (!opened && !resize) {
        this.sidebar.withoutAnimation = false;
        this.sidebar.opened = !this.sidebar.opened;
        this.sidebar.isClickCollapse = !this.sidebar.opened;
        layout.sidebarStatus = this.sidebar.opened;
      }
      storageLocal().setItem(`${responsiveStorageNameSpace()}layout`, layout);
    },
    // 是 TOGGLE_SIDEBAR 的异步版本
    async toggleSideBar(opened?: boolean, resize?: string) {
      await this.TOGGLE_SIDEBAR(opened, resize);
    },
    // 切换设备类型
    toggleDevice(device: string) {
      this.device = device;
    },
    // 设置应用程序的布局
    setLayout(layout) {
      this.layout = layout;
    },
    // 设置浏览器窗口的可视区域大小
    setViewportSize(size) {
      this.viewportSize = size;
    },
    // 设置拖拽排序组件的状态
    setSortSwap(val) {
      this.sortSwap = val;
    }
  }
});

// 定义一个用于在其他组件中使用 useAppStore 的函数
export function useAppStoreHook() {
  return useAppStore(store);
}
