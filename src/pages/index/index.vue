<template>
  <view class="content w-500">
    <view class="text-area">
      <text class="title w-400">{{ title }}</text>
    </view>
  </view>
</template>

<script setup lang="ts">
  import { ref } from "vue";
  const title = ref("Hello");
</script>

<style lang="scss">
  .text-area {
    background: #007aff;
    @apply w-300;
    @apply h-200;
  }
</style>
