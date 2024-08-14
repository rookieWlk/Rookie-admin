<script setup lang="ts">
import { ref } from "vue";
import { useGoodsList } from "./utils/hook";
import { useRenderIcon } from "@/components/ReIcon/src/hooks";

import Refresh from "@iconify-icons/ep/refresh";
defineOptions({
  name: "GoodsList"
});
const formRef = ref();
const { form, onShelves, offShelves, goodsList } = useGoodsList();
</script>

<template>
  <div class="main">
    <el-form
      ref="formRef"
      :inline="true"
      :model="form"
      class="search-form bg-bg_color w-[99/100] pl-8 pt-[12px] mb-4 overflow-auto"
    >
      <el-form-item label="商品名称：" prop="name">
        <el-input
          v-model="form.name"
          placeholder="请输入商品名称"
          clearable
          class="!w-[180px]"
        />
      </el-form-item>
      <el-form-item label="状态：" prop="status">
        <el-select
          v-model="form.status"
          placeholder="请选择状态"
          clearable
          class="!w-[180px]"
        >
          <el-option label="上架" :value="1" />
          <el-option label="下架" :value="0" />
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" :icon="useRenderIcon('ri:search-line')">
          搜索
        </el-button>
        <el-button :icon="useRenderIcon(Refresh)"> 重置 </el-button>
      </el-form-item>
    </el-form>

    <div
      class="bg-bg_color w-[99/100] p-4 overflow-auto grid grid-cols-5 gap-5"
    >
      <el-card
        v-for="(item, index) in goodsList"
        :key="index"
        style="max-width: 480px"
      >
        <template #header
          ><img
            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
            style="width: 100%"
        /></template>
        <div class="flex justify-between items-center">
          <div class="flex-1 w-2/3">
            <div class="font-bold truncate">{{ item.label }}</div>
            <div class="text-sm truncate">规格：{{ item.specification }}</div>
            <div class="text-sm text-red-500 truncate">¥{{ item.price }}</div>
          </div>
          <div class="flex">
            <el-button type="primary" size="small" @click="onShelves(item)"
              >上架</el-button
            >
            <el-button type="danger" size="small" @click="offShelves(item)"
              >下架</el-button
            >
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.search-form {
  :deep(.el-form-item) {
    margin-bottom: 12px;
  }
}

:deep() {
  .el-card.is-always-shadow {
    box-shadow: none;
  }

  .el-card__header {
    padding: 0;
    border-bottom: none;
  }

  .el-card__body {
    padding: 5px 15px;
  }
}
</style>
