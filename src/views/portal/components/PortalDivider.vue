<template>
  <div class="flex items-center justify-center">
    <el-link :class="activeMenu === 'portal' ? 'active' : ''" to="/portal"
      >主页</el-link
    >
    <el-divider direction="vertical" />
    <el-link :class="activeMenu === 'product' ? 'active' : ''" to="/product"
      >产品简介</el-link
    >
    <el-divider direction="vertical" />
    <el-link :class="activeMenu === 'partner' ? 'active' : ''" to="/partner"
      >合作伙伴</el-link
    >
    <el-divider direction="vertical" />
    <el-link to="/index">后台管理</el-link>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, defineOptions } from "vue";
defineOptions({
  name: "PortalDivider"
});

defineProps({
  activeMenu: {
    type: String,
    default: "portal"
  }
});
</script>
