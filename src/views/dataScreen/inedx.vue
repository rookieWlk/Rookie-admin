<template>
  <div
    id="data-screen-container"
    class="data-screen-container vab-data-fullscreen"
  >
    <div class="hidden-xs-only">
      <data-screen-header
        :style="{
          height: headerContentHeight,
          'line-height': headerContentHeight
        }"
      />
      <div style="padding: 30px 40px 0">
        <el-row :gutter="20">
          <el-col :span="6">
            <div class="data-screen-card" :style="{ height: leftCardHeight1 }">
              <div class="card-title">数据聚合</div>
              <data-screen-left1 />
            </div>
            <div class="data-screen-card" :style="{ height: leftCardHeight2 }">
              <div class="card-title">人群画像</div>
              <data-screen-left2 />
            </div>
            <div class="data-screen-card" :style="{ height: leftCardHeight3 }">
              <div class="card-title">人员分布</div>
              <data-screen-left3 />
            </div>
          </el-col>
          <el-col :span="12">
            <div class="data-screen-card" :style="{ height: topCardHeight }">
              <data-screen-map />
            </div>
            <div class="data-screen-card" :style="{ height: bottomCardHeight }">
              <data-screen-bottom />
            </div>
          </el-col>
          <el-col :span="6">
            <div class="data-screen-card" :style="{ height: rightCardHeight1 }">
              <div class="card-title">数据散点</div>
              <data-screen-right1 />
            </div>
            <div class="data-screen-card" :style="{ height: rightCardHeight2 }">
              <div class="card-title">销售额</div>
              <data-screen-right2 />
            </div>
            <div class="data-screen-card" :style="{ height: rightCardHeight3 }">
              <div class="card-title">访问量</div>
              <data-screen-right3 />
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <!-- <vab-theme-setting /> -->
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import DataScreenHeader from "./data/DataScreenHeader.vue";
import DataScreenLeft1 from "./data/DataScreenLeft1.vue";
import DataScreenLeft2 from "./data/DataScreenLeft2.vue";
import DataScreenLeft3 from "./data/DataScreenLeft3.vue";
import DataScreenMap from "./data/DataScreenMap.vue";
import DataScreenBottom from "./data/DataScreenBottom.vue";
import DataScreenRight1 from "./data/DataScreenRight1.vue";
import DataScreenRight2 from "./data/DataScreenRight2.vue";
import DataScreenRight3 from "./data/DataScreenRight3.vue";
defineOptions({
  name: "DataScreen"
});

const headerContentHeight = ref<any>("60px");
const topCardHeight = ref<any>("calc((100vh - 320px)");
const bottomCardHeight = ref<any>("174px");

const leftCardHeight1 = ref<any>("calc((100vh - 165px) / 3)");
const leftCardHeight2 = ref<any>("calc((100vh - 165px) / 2.63)");
const leftCardHeight3 = ref<any>("calc((100vh - 165px) / 3.5)");

const rightCardHeight1 = ref<any>("calc((100vh - 165px) / 3)");
const rightCardHeight2 = ref<any>("calc((100vh - 165px) / 2.63)");
const rightCardHeight3 = ref<any>("calc((100vh - 165px) / 3.5)");

onMounted(() => {
  setTimeout(() => {
    // $baseMessage("点击右上角【全屏】按钮使用效果更佳", "success", "hey");
  }, 1000);
  document.querySelectorAll("body")[0].className = "";

  if (
    location.hostname === "vue-admin-beautiful.com" ||
    location.hostname === "chu1204505056.gitee.io"
  ) {
    // 数据大屏占用内存较大，演示地址每隔3分钟刷新一次页面缓解浏览器压力
    setTimeout(
      () => {
        location.reload();
      },
      1000 * 10 * 60
    );
  }
});
</script>

<style lang="scss" scoped>
#data-screen-container.data-screen-container.vab-data-fullscreen {
  height: 100vh;
  overflow: auto;
  color: #fff;
  background: #01022e !important;

  :deep() {
    .vab-theme-setting {
      background: #01022e;
      border: 1px solid #101f58;

      section {
        > div {
          &:nth-child(1),
          &:nth-child(2),
          &:nth-child(3),
          &:nth-child(4) {
            display: none;
          }
        }
      }
    }
  }

  .data-screen-card {
    position: relative;
    width: 100%;
    min-height: 160px;
    padding: 20px;
    margin-bottom: 20px;
    border: 3px solid #01ffff;
    border-radius: 5px;

    .card-title {
      height: 20px;
      padding-left: 10px;
      font-size: 14px;
      line-height: 20px;
      text-align: left;
      border-left: 3px solid #01ffff;
    }

    &::before {
      position: absolute;
      top: -3px;
      bottom: -3px;
      left: 30px;
      z-index: 0;
      width: calc(100% - 60px);
      pointer-events: none;
      content: "";
      border-top: 3px solid #101f58;
      border-bottom: 3px solid #101f58;
    }

    &::after {
      position: absolute;
      top: 30px;
      right: -3px;
      left: -3px;
      z-index: 0;
      height: calc(100% - 60px);
      pointer-events: none;
      content: "";
      border-right: 3px solid #101f58;
      border-left: 3px solid #101f58;
    }
  }
}
</style>
