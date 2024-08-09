<template>
  <el-card :body-style="{ padding: '20px 20px 20px 0' }">
    <template #header>
      <!-- <vab-icon icon="medal-line" /> -->
      榜单
    </template>
    <div class="medal-list">
      <div
        v-for="(item, index) in iconList"
        :key="index"
        class="medal-list-item"
      >
        <div class="medal-list-item-rank" />
        <div class="medal-list-item-img">
          <div :style="{ background: item.color }">
            <!-- <vab-icon :icon="item.icon" /> -->
          </div>
        </div>
        <div class="medal-list-item-right">
          <div class="item-title">把青春华章写在祖国大地上</div>
          <div class="item-type">type</div>
        </div>
      </div>
    </div>
  </el-card>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const iconList = ref<any>([
  {
    icon: "apple-line",
    color: "var(--el-color-primary)"
  },
  {
    icon: "qq-line",
    color: "var(--el-color-success)"
  },
  {
    icon: "wechat-line",
    color: "var(--el-color-warning)"
  },
  {
    icon: "twitter-line",
    color: "var(--el-color-danger)"
  },
  {
    icon: "twitch-line",
    color: "#ffc069"
  }
]);
</script>

<style lang="scss" scoped>
.medal-list {
  &-item {
    $position: (
      1: -5px -122px,
      2: -64px -83px,
      3: -123px -5px,
      4: -123px -39px,
      5: -123px -73px
    );

    @each $key, $item in $position {
      &:nth-child(#{$key}) {
        .medal-list-item-rank {
          background-position: $item;
        }
      }
    }

    position: relative;
    display: flex;
    width: 100%;
    height: 80px;
    clear: both;
    background: var(--el-color-white);
    border-radius: 0;

    &-img {
      float: left;
      margin: 10px 16px 25px 56px;
    }

    &-img > div {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 56px;
      height: 56px;
      margin: auto;
      line-height: 56px;
      text-align: center;
      border-radius: 12px;

      i {
        display: block;
        margin: auto;
        font-size: 30px;
        color: var(--el-color-white);
      }
    }

    &-rank {
      position: absolute;
      top: 26px;
      left: 20px;
      width: 24px;
      height: 24px;
      background-image: url("/@/assets/rank_images/rank.png");
      background-size: 152px 151px;
    }

    &-right {
      height: 48px;
      margin: 15px 0 0 -5px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;

      .item-title {
        margin-bottom: 10px;
        color: var(--el-color-grey);
      }

      .item-type {
        display: inline-block;
        padding: 0 8px;
        font-size: 14px;
        line-height: 20px;
        color: var(--el-color-white);
        background: var(--el-color-warning);
        border-radius: var(--el-border-radius-base);
      }
    }
  }
}
</style>
