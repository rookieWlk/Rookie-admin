import { defineStore } from "pinia";
import {
  store,
  getConfig,
  storageLocal,
  responsiveStorageNameSpace
} from "../utils";

// 定义Pinia store
export const useEpThemeStore = defineStore({
  id: "pure-epTheme", // 唯一标识符
  state: () => ({
    // 定义状态
    epThemeColor:
      // 从本地存储中获取主题颜色,如果没有则使用配置中的默认值
      storageLocal().getItem<StorageConfigs>(
        `${responsiveStorageNameSpace()}layout`
      )?.epThemeColor ?? getConfig().EpThemeColor,
    epTheme:
      // 从本地存储中获取主题,如果没有则使用配置中的默认值
      storageLocal().getItem<StorageConfigs>(
        `${responsiveStorageNameSpace()}layout`
      )?.theme ?? getConfig().Theme
  }),
  getters: {
    // 定义计算属性
    getEpThemeColor(state) {
      // 返回当前的主题颜色
      return state.epThemeColor;
    },
    /** 用于mix导航模式下hamburger-svg的fill属性 */
    fill(state) {
      // 根据当前主题确定hamburger图标的填充颜色
      if (state.epTheme === "light") {
        return "#409eff";
      } else {
        return "#fff";
      }
    }
  },
  actions: {
    // 定义action
    setEpThemeColor(newColor: string): void {
      // 从本地存储中获取布局配置
      const layout = storageLocal().getItem<StorageConfigs>(
        `${responsiveStorageNameSpace()}layout`
      );
      // 将当前主题赋值给state
      this.epTheme = layout?.theme;
      // 更新主题颜色
      this.epThemeColor = newColor;
      // 如果没有布局配置,则直接返回
      if (!layout) return;
      // 更新布局配置中的主题颜色
      layout.epThemeColor = newColor;
      // 将更新后的布局配置保存到本地存储
      storageLocal().setItem(`${responsiveStorageNameSpace()}layout`, layout);
    }
  }
});

// 导出一个包装函数,方便在组件中使用store
export function useEpThemeStoreHook() {
  return useEpThemeStore(store);
}
