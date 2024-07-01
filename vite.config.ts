import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import uniTailwind from "@uni-helper/vite-plugin-uni-tailwind";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [uni(), uniTailwind()],
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
});
