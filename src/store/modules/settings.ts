import { defineStore } from "pinia";
import { type setType, store, getConfig } from "../utils";

// 1. 定义 useSettingStore
export const useSettingStore = defineStore({
  // 2. 给 store 设置一个唯一的 ID
  id: "pure-setting",

  // 3. 定义 state
  state: (): setType => ({
    // 从 getConfig() 获取配置信息
    title: getConfig().Title,
    fixedHeader: getConfig().FixedHeader,
    hiddenSideBar: getConfig().HiddenSideBar
  }),

  // 4. 定义 getters
  getters: {
    getTitle(state) {
      return state.title;
    },
    getFixedHeader(state) {
      return state.fixedHeader;
    },
    getHiddenSideBar(state) {
      return state.hiddenSideBar;
    }
  },

  // 5. 定义 actions
  actions: {
    CHANGE_SETTING({ key, value }) {
      // 使用 Reflect.has() 检查 key 是否存在于 state 中
      if (Reflect.has(this, key)) {
        this[key] = value;
      }
    },
    changeSetting(data) {
      // 调用 CHANGE_SETTING 方法更新设置
      this.CHANGE_SETTING(data);
    }
  }
});

// 6. 定义 useSettingStoreHook 函数
export function useSettingStoreHook() {
  return useSettingStore(store);
}
