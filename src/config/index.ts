import axios from "axios";
import type { App } from "vue";

// 初始化配置对象
let config: object = {};
// 从环境变量中获取 VITE_PUBLIC_PATH 值
const { VITE_PUBLIC_PATH } = import.meta.env;

// 设置全局配置
const setConfig = (cfg?: unknown) => {
  // 将新的配置与原有配置合并
  config = Object.assign(config, cfg);
};

// 获取全局配置
const getConfig = (key?: string): PlatformConfigs => {
  // 如果传入了 key
  if (typeof key === "string") {
    // 将 key 按 '.' 分割为数组
    const arr = key.split(".");
    // 如果数组存在且长度大于 0
    if (arr && arr.length) {
      // 初始化 data 为全局配置对象
      let data = config;
      // 遍历数组,逐层获取配置值
      arr.forEach(v => {
        // 如果 data 存在且 data[v] 不是 undefined
        if (data && typeof data[v] !== "undefined") {
          // 将 data 赋值为 data[v]
          data = data[v];
        } else {
          // 否则将 data 设为 null
          data = null;
        }
      });
      // 返回获取到的配置值
      return data;
    }
  }
  // 如果没有传入 key,直接返回全局配置对象
  return config;
};

/** 获取项目动态全局配置 */
export const getPlatformConfig = async (app: App): Promise<undefined> => {
  // 将全局配置注入到 app 实例
  app.config.globalProperties.$config = getConfig();
  // 发起 GET 请求获取远程配置
  return axios({
    method: "get",
    url: `${VITE_PUBLIC_PATH}platform-config.json`
  })
    .then(({ data: config }) => {
      // 获取注入到 app 实例的全局配置
      let $config = app.config.globalProperties.$config;
      // 如果 app 实例和全局配置存在,并且远程配置是对象类型
      if (app && $config && typeof config === "object") {
        // 将远程配置与原有全局配置合并
        $config = Object.assign($config, config);
        // 更新注入到 app 实例的全局配置
        app.config.globalProperties.$config = $config;
        // 设置全局配置
        setConfig($config);
      }
      // 返回合并后的全局配置
      return $config;
    })
    .catch(() => {
      // 如果发生错误,抛出异常
      throw "请在public文件夹下添加platform-config.json配置文件";
    });
};

/** 本地响应式存储的命名空间 */
const responsiveStorageNameSpace = () => getConfig().ResponsiveStorageNameSpace;

// 导出相关函数
export { getConfig, setConfig, responsiveStorageNameSpace };
