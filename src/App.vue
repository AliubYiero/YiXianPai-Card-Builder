<style lang = "scss" scoped>
@use "libs/css/mixins";

@mixin view-width() {
  width: 80%;
}

/* 总布局容器样式 */
.container {
  @include view-width;
  @include mixins.container-center;
}
</style>

<template>
  <!-- 总布局容器 -->
  <main class = "container">
    <RouterView />
  </main>
</template>

<script lang = "ts" setup>
import { RouterView } from 'vue-router'
</script>
