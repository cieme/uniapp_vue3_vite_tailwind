<script setup lang="ts">
  import { onLaunch, onShow, onHide } from "@dcloudio/uni-app";
  onLaunch(() => {
    console.log("App Launch");
  });
  onShow(() => {
    console.log("App Show");
  });
  onHide(() => {
    console.log("App Hide");
  });
</script>
<style lang="scss">
  /* @tailwind base; */
  @import 'tailwindcss/base';
  @import 'tailwindcss/components';
  @import 'tailwindcss/utilities';
  @import "uview-plus/index.scss";
</style>
