<!-- lili:顶部栏 -->
<script lang="ts" setup>
import Breadcrumb from "../breadcrumb/index.vue";
import Drawer from "../drawer/index.vue";

import Themme from "../theme/index.vue";
import Avatar from "../avatar/index.vue";
import Fullscreen from "../fullscreen/index.vue";
import Translate from "../translate/index.vue";
</script>

<template>
  <el-header
    class="border-b border-base border-solid flex justify-between"
    style="text-align: right; font-size: 12px"
  >
    <div class="flex align-center items-center">
      <!-- lili:主界面，左上角的抽屉按钮-->
      <Drawer />
    </div>
    <div class="flex align-center items-center">
      <!-- lili:主界面，左上角的面包屑功能-->
      <Breadcrumb />
    </div>
    <div class="flex items-center gap-2 justify-end h-full flex-1">
      <!-- lili:顶部栏的 翻译、全屏、主题、头像-->
      <Translate />
      <Fullscreen />
      <Themme />
      <Avatar />
    </div>
  </el-header>
</template>

<style scoped></style>
