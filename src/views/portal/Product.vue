<template>
  <el-scrollbar wrap-class="scroll-wrap-product">
    <div class="product-main hidden-xs-only">
      <portal-header active-menu="product" />
      <div class="banner">
        <main>
          <div class="banner-title">企业级通用型中后台前端框架</div>
          <div class="banner-description">
            便捷式全域数据采集，全域用户行为分析，深耕科学营销运营应用，智能化洞察用户行为，全方位驱动企业数字化经营。
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
          <el-image :src="logo" />
        </main>
      </div>

      <main>
        <div class="news-box">
          <div class="news-box-item">
            <a class="news-box-title">全链路监控营销推广</a>
            <div class="news-box-description">全链路监控营销推广</div>
          </div>
          <div class="news-box-item">
            <a class="news-box-title">全方位优化产品体验</a>
            <div class="news-box-description">全方位优化产品体验</div>
          </div>
          <div class="news-box-item">
            <a class="news-box-title">精准刻画用户画像</a>
            <div class="news-box-description">精准刻画用户画像</div>
          </div>
        </div>

        <div style="margin-top: 100px">
          <div class="intro-box">
            <div class="intro-box-title">
              客户数据平台解决方案，助力企业数字化营销运营增长
            </div>
            <div class="intro-box-description">
              为企业打造全端数据管理平台，提供全域用户行为洞见，实现数据驱动营销和运营决策，全场景赋能企业数字化经营，驱动业务持续增长
            </div>

            <el-row :gutter="20" style="margin-top: 50px">
              <el-col :span="8">
                <div class="solution-box">
                  <div class="solution-box-item">
                    <div class="solution-box-title">商务服务</div>
                    <div class="solution-box-description">
                      全生命周期客户管理
                    </div>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="solution-box">
                  <div class="solution-box-item">
                    <div class="solution-box-title">在线零售</div>
                    <div class="solution-box-description">
                      打造全域营销运营闭环
                    </div>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="solution-box">
                  <div class="solution-box-item">
                    <div class="solution-box-title">箱包服饰</div>
                    <div class="solution-box-description">
                      沉淀私域消费者数据资产
                    </div>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="solution-box">
                  <div class="solution-box-item">
                    <div class="solution-box-title">商用软件</div>
                    <div class="solution-box-description">
                      深度洞察企业客户需求
                    </div>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="solution-box">
                  <div class="solution-box-item">
                    <div class="solution-box-title">消费电子</div>
                    <div class="solution-box-description">
                      用户精准营销与智能触达通路
                    </div>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="solution-box">
                  <div class="solution-box-item">
                    <div class="solution-box-title">房产家具</div>
                    <div class="solution-box-description">
                      构建专属消费者大数据画像
                    </div>
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>
        </div>
        <portal-divider active-menu="product" />
      </main>
    </div>
    <el-backtop target="#app .scroll-wrap-product" />
  </el-scrollbar>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import portalHeader from "./components/PortalHeader.vue";
import portalDivider from "./components/PortalDivider.vue";
import logo from "@/assets/logo.png";

defineOptions({
  name: "Product"
});
onMounted(() => {
  document.documentElement.classList.remove("dark");
});
</script>

<style lang="scss" scoped>
.product-main {
  .banner {
    position: relative;
    width: 100%;
    height: 480px;
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

  main {
    position: relative;
    width: 1152px;
    min-height: calc(100vh - 550px);
    padding: 10px 0 0;
    margin-right: auto;
    margin-left: auto;

    .news-box {
      position: absolute;
      top: -60px;
      left: 50%;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      width: 1200px;
      height: 120px;
      padding: 40px 0;
      background-color: rgb(255 255 255 / 60%);
      backdrop-filter: blur(20px);
      border: 1.5px solid #fff;
      border-radius: 15px;
      box-shadow: 0 4px 33px rgb(190 196 207 / 28%);
      transform: translate(-50%, 0);
      -ms-flex-align: center;

      &-item {
        box-sizing: border-box;
        width: 33.3%;
        padding: 0 30px;
        border-right: 1px solid var(--el-border-color);

        &:last-child {
          border-right: 0;
        }
      }

      &-title {
        display: inline-block;
        margin-bottom: 12px;
        font-size: 16px;
        font-weight: 500;
        line-height: 22px;
        color: #282c33;
        cursor: pointer;

        &:hover {
          color: #0054e6;
        }
      }

      &-description {
        line-height: 20px;
        color: #848b99;
      }
    }

    .intro-box {
      position: relative;

      &-title {
        margin-bottom: 16px;
        font-size: 36px;
        font-weight: 600;
        line-height: 50px;
        color: #0a0b0d;
        text-align: center;
      }

      &-description {
        width: 740px;
        margin: 0 auto;
        font-size: 16px;
        line-height: 28px;
        color: #545b66;
        text-align: center;
      }
    }

    .solution-box {
      position: relative;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      height: 180px;
      padding: 0 16px 0 26px;
      margin-bottom: 32px;
      cursor: pointer;
      background-color: rgb(255 255 255 / 60%);
      border-radius: 10px;
      box-shadow: 0 12px 18px 2px rgb(204 204 204 / 17%);
      transition: transform 0.3s ease-out;

      &:hover {
        transform: translateY(-20px);
      }

      &-title {
        margin-bottom: 16px;
        font-size: 20px;
        font-weight: 500;
        line-height: 28px;
      }

      &-description {
        line-height: 22px;
        color: #848b99;
      }

      :deep() {
        [class*="ri-"] {
          margin-right: 20px;
          font-size: 50px;
          color: var(--el-color-primary);
        }
      }
    }
  }
}
</style>
