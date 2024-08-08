<template>
  <el-scrollbar wrap-class="scroll-wrap-partner">
    <div class="partner-main hidden-xs-only">
      <portal-header active-menu="partner" />
      <div class="partner-content">
        <div class="banner">
          <main>
            <div class="banner-title">合作伙伴计划</div>
            <div class="banner-description">
              虚位以待，合作共赢，国内Vue3前端付费模板连续多年销量Top1，Vue Shop
              Vite期待与您共同成长
            </div>

            <el-button
              href="https://github.com/rookieWlk"
              rel="noopener noreferrer"
              tag="a"
              target="_blank"
              type="primary"
            >
              立即购买
            </el-button>
            <el-button
              href="https://github.com/rookieWlk"
              plain
              rel="noopener noreferrer"
              tag="a"
              target="_blank"
              type="primary"
            >
              进入产品
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
      <!-- <vab-footer /> -->
    </div>
    <el-backtop target="#app .scroll-wrap-partner" />
    <!-- <vab-theme-setting /> -->
  </el-scrollbar>
</template>

<script lang="ts" setup>
import { reactive } from "vue";
import portalHeader from "./components/PortalHeader.vue";
import avatar from "@/assets/login/avatar.svg";

defineOptions({
  name: "Partner"
});

const list = reactive<any>([
  {
    logo: avatar,
    name: "某某科技有限公司",
    label:
      "致力于成为全球电力行业数字化转型的优选伙伴，随着能源转型的不断深入，新型电力系统源侧低碳化、网侧数字化、荷侧电气化的趋势已经成为行业共识，坚持平台+生态战略，把创新ICT技术、电力数字平台与行业实践经验深度结合。"
  },
  {
    logo: avatar,
    name: "某某科技有限公司",
    label:
      "致力于为客户提供在线数据监测、数据整合、数据分析与挖掘、数据产品和智能应用以及数据化运营决策支持体系建设相关的工具、技术开发、咨询服务及企业培训。为国内众多知名企业输出高质量的数据分析服务，在业内获得广泛好评。"
  }
]);
</script>

<style lang="scss" scoped>
.partner-main {
  display: flex;
  flex-direction: column;
  height: 100vh;

  .partner-content {
    flex: 1;
  }

  &-mobile {
    height: 100vh;
    padding: var(--el-padding);
    background: var(--el-color-white);
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
    background: var(--el-color-primary-light-9);

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
      background-image: linear-gradient(-45deg, #2e65e7 50%, #50d79a 50%);
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

:deep() {
  .vab-footer {
    margin-top: 0;
    background: #f6f8f9;
    border: 0;
  }

  .vab-theme-setting {
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
</style>
