import type { App } from "vue";
import { createPinia } from "pinia";
// 1. 创建 Pinia 实例
const store = createPinia();
// 2. 定义 setupStore 函数
export function setupStore(app: App<Element>) {
  // 3. 将 Pinia 实例挂载到 Vue 应用上
  app.use(store);
}
// 4. 导出 Pinia 实例
export { store };
