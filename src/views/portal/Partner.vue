<template>
  <el-scrollbar wrap-class="scroll-wrap-partner">
    <div class="partner-main hidden-xs-only">
      <portal-header active-menu="partner" />
      <div class="partner-content">
        <div class="banner">
          <main>
            <div class="banner-title">合作伙伴计划</div>
            <div class="banner-description">
              XXXXXXXXX,XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX,XXXXXXXXXXXXXXXXXX,XXXXX期待与您共同成长
            </div>

            <el-button
              href="https://github.com/rookieWlk"
              rel="noopener noreferrer"
              tag="a"
              target="_blank"
              type="primary"
            >
              查看源码
            </el-button>
            <el-button
              href="https://github.com/rookieWlk"
              plain
              rel="noopener noreferrer"
              tag="a"
              target="_blank"
              type="primary"
            >
              产品演示
            </el-button>
            <div class="image-bg" />
            <el-image :src="avatar" />
          </main>
        </div>
        <main>
          <ul>
            <li
              v-for="(item, index) in list"
              :key="index"
              class="partner-detail"
            >
              <el-image :src="item.logo" />
              <div class="partner-detail-discription">
                <div class="partner-detail-name">
                  {{ item.name }}
                </div>
                <div class="partner-detail-label">
                  {{ item.label }}
                </div>
              </div>
            </li>
          </ul>
        </main>
      </div>
      <portal-divider active-menu="partner" style="margin-top: 12px" />
    </div>
    <el-backtop target="#app .scroll-wrap-partner" />
  </el-scrollbar>
</template>

<script lang="ts" setup>
import { reactive, onMounted } from "vue";
import portalHeader from "./components/PortalHeader.vue";
import portalDivider from "./components/PortalDivider.vue";
import avatar from "@/assets/logo.png";

defineOptions({
  name: "Partner"
});

const list = reactive<any>([
  {
    logo: "https://wanglikai.cn/img/avatar.png",
    name: "XX科技有限公司",
    label:
      "汉皇重色思倾国，御宇多年求不得。杨家有女初长成，养在深闺人未识。天生丽质难自弃，一朝选在君王侧。回眸一笑百媚生，六宫粉黛无颜色。春寒赐浴华清池，温泉水滑洗凝脂。侍儿扶起娇无力，始是新承恩泽时。云鬓花颜金步摇，芙蓉帐暖度春宵。春宵苦短日高起，从此君王不早朝。承欢侍宴无闲暇，春从春游夜专夜。后宫佳丽三千人，三千宠爱在一身。"
  },
  {
    logo: "https://wanglikai.cn/img/avatar.png",
    name: "XX科技有限公司",
    label:
      "寻寻觅觅，冷冷清清，凄凄惨惨戚戚。乍暖还寒时候，最难将息。三杯两盏淡酒，怎敌他、晚来风急！雁过也，正伤心，却是旧时相识。满地黄花堆积，憔悴损，如今有谁堪摘？守着窗儿，独自怎生得黑？梧桐更兼细雨，到黄昏、点点滴滴。这次第，怎一个愁字了得"
  }
]);
onMounted(() => {
  document.documentElement.classList.remove("dark");
});
</script>

<style lang="scss" scoped>
.partner-main {
  display: flex;
  flex-direction: column;
  height: 100vh;

  .partner-content {
    flex: 1;
  }

  main {
    position: relative;
    width: 1152px;
    min-height: calc(100vh - 550px);
    padding: 10px 0 0;
    margin-right: auto;
    margin-left: auto;
  }

  .banner {
    position: relative;
    width: 100%;
    height: 430px;
    background: #ecf5ff;

    &-title {
      margin-top: 150px;
      margin-bottom: 12px;
      font-size: 40px;
      font-weight: 600;
      line-height: 60px;
      color: #000;
    }

    &-description {
      width: 600px;
      margin-bottom: 40px;
      font-size: 16px;
      line-height: 20px;
    }

    .image-bg {
      position: absolute;
      top: 150px;
      right: 30px;
      width: 192px;
      height: 192px;
      background-image: linear-gradient(0deg, #2e65e7 50%, #fff 50%);
      filter: blur(40px);
      border-radius: 50%;
    }

    :deep() {
      .el-image {
        position: absolute;
        top: 155px;
        right: 35px;
        width: 170px;
      }
    }
  }

  ul {
    padding: 0;
    margin-top: -10px;
  }

  .partner-detail {
    display: flex;
    align-items: center;
    padding-top: 30px;
    padding-bottom: 30px;
    border-bottom: 1px solid var(--el-border-color);

    &-discription {
      flex: 1;
      margin-left: 20px;
    }

    &-name {
      padding-top: 10px;
      font-size: var(--el-font-size-bigger);
      font-weight: 600;
      color: #333437;
    }

    &-label {
      padding-top: 10px;
      font-size: var(--el-font-size-default);
      line-height: 1.5;
      color: #808592;
    }

    :deep() {
      .el-image {
        width: 55px;
        height: 55px;
      }
    }
  }
}
</style>
