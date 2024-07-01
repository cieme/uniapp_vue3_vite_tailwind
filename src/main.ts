import { createSSRApp } from "vue";
import uviewPlus, { setConfig } from "uview-plus";
import App from "./App.vue";
setConfig({
  // 修改$u.config对象的属性
  config: {
    // 修改默认单位为rpx，相当于执行 uni.$u.config.unit = 'rpx'
    unit: "rpx",
  },
});
export function createApp() {
  const app = createSSRApp(App);
  app.use(uviewPlus);
  return {
    app,
  };
}
