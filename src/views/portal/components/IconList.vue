<template>
  <el-row :gutter="20">
    <el-col v-for="(item, index) in iconList" :key="index" :span="6">
      <!-- <vab-card class="icon-panel" @click="handleMore">
        <vab-icon :icon="item.icon" :style="{ backgroundColor: item.color }" />
        <p>{{ item.title }}</p>
      </vab-card> -->
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import { ref } from "vue";
// 卡片图标
const iconList = ref<any>([
  {
    icon: "baidu-line",
    title: "百科",
    color: "#5b38b9"
  },
  {
    icon: "cast-line",
    title: "订阅",
    color: "#f46e53"
  },
  {
    icon: "award-line",
    title: "收藏",
    color: "#6a59f4"
  },
  {
    icon: "ball-pen-line",
    title: "OKR",
    color: "#2a7bff"
  },
  {
    icon: "video-line",
    title: "学习",
    color: "#eb6d0b"
  },
  {
    icon: "cellphone-line",
    title: "汇报",
    color: "#138eee"
  },
  {
    icon: "code-box-line",
    title: "动态",
    color: "#21df97"
  },
  {
    click: "handleMore",
    icon: "chat-1-line",
    title: "帮助",
    color: "#ff3256"
  }
]);

const handleMore = () => {
  // $baseAlert("敬请期待！");
};
</script>

<style lang="scss" scoped>
.icon-panel {
  cursor: pointer;
  border-radius: 10px !important;

  :deep() {
    .el-card__body {
      max-height: 55px;
      padding: 10px !important;

      i {
        display: block;
        float: left;
        width: 46px;
        height: 46px;
        margin: auto auto 10px;
        font-size: 28px;
        line-height: 46px;
        color: var(--el-color-white);
        border-radius: 10px;
        transition: all ease-in-out 0.3s;
      }

      p {
        float: left;
        width: calc(100% - 77px);
        margin-left: 10px;
        text-align: left;
      }
    }
  }
}
</style>
