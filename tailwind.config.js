/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx,vue}", "./index.html"],
  extract: {
    // 忽略部分文件夹
    exclude: ["node_modules", ".git", "dist"],
  },
  corePlugins: {
    // 不需要 preflight，因为preflight主要是给 h5 的，小程序使用的独特的标签，导致preflight不起作用。
    // 如果你要同时开发小程序和 h5 端，你应该使用环境变量来控制它
    preflight: false,
  },
  theme: {
    extend: {
      spacing: {
        500: "500rpx",
      },
    },
    spacing: {
      200: "200rpx",
      300: "300rpx",
      400: "400rpx",
    },
  },
  plugins: [],
};
