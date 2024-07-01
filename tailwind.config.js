/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx,vue}", "./index.html"],
  extract: {
    // 忽略部分文件夹
    exclude: ["node_modules", ".git", "dist"],
  },
  corePlugins: {
    // 禁用掉在小程序环境中不可能用到的 plugins
    // container: false,
  },
  theme: {
    extend: {
      spacing: {},
    },
    spacing: {
      200: "200px",
      300: "300px",
      400: "400px",
    },
  },
  plugins: [],
};
