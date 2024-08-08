<template>
  <el-scrollbar wrap-class="scroll-wrap-portal">
    <div class="portal-main hidden-xs-only">
      <portal-header active-menu="portal" />
      <div class="carousel-background" :style="{ background: background }" />
      <main style="margin-top: 85px">
        <el-row :gutter="0">
          <el-col :span="24">
            <el-carousel
              arrow="always"
              height="420px"
              :interval="3000"
              @change="handleChange"
            >
              <el-carousel-item
                @click="
                  openWindow('https://vue-admin-beautiful.com/admin-plus>')
                "
              />
              <el-carousel-item
                @click="
                  openWindow('https://vue-admin-beautiful.com/shop-vite>')
                "
              />
              <el-carousel-item
                @click="openWindow('https://vue-admin-beautiful.com/admin-pro')"
              />
            </el-carousel>
          </el-col>
          <el-col :span="24">
            <div style="background-color: #f5f7fa">
              <div class="description-box">
                <el-row>
                  <el-col :span="6">
                    <div class="show-box">
                      <div style="float: left">
                        <h1>
                          <span class="clip">Vue Shop Vite</span>
                        </h1>
                        <p class="text">全新一代的前端模板</p>
                      </div>
                    </div>
                    <!-- <vab-divider direction="vertical" /> -->
                  </el-col>
                  <el-col :span="6">
                    <div class="show-box">
                      <div
                        class="system-class-icon"
                        style="background: #20c2dc"
                      >
                        <!-- <vab-icon icon="bubble-chart-line" /> -->
                      </div>
                      <div class="describe">高效 Efficient</div>
                    </div>
                    <!-- <vab-divider direction="vertical" /> -->
                  </el-col>
                  <el-col :span="6">
                    <div class="show-box">
                      <div
                        class="system-class-icon"
                        style="background: #f7753f"
                      >
                        <!-- <vab-icon icon="medal-fill" /> -->
                      </div>
                      <div class="describe">专业 Major</div>
                    </div>
                    <!-- <vab-divider direction="vertical" /> -->
                  </el-col>
                  <el-col :span="6">
                    <div class="show-box">
                      <div
                        class="system-class-icon"
                        style="background: #6a59f4"
                      >
                        <!-- <vab-icon icon="seedling-fill" /> -->
                      </div>
                      <div class="describe">美观 Beautiful</div>
                    </div>
                  </el-col>
                </el-row>
              </div>
            </div>
          </el-col>
        </el-row>
      </main>
      <main style="margin-top: 30px">
        <el-row :gutter="20">
          <el-col :span="8">
            <div class="news-tit"><h2>今日要闻</h2></div>
            <el-image class="news-img" :src="banner_1" />
          </el-col>
          <el-col :span="16">
            <div class="news-tit"><h2>动态资讯</h2></div>
            <!-- <icon-list /> -->
          </el-col>
        </el-row>
      </main>
      <main>
        <el-row :gutter="20">
          <el-col :span="8">
            <div class="news-tit"><h2>工作日程</h2></div>
            <el-calendar
              v-model="date"
              style="border: 1px solid var(--el-border-color)"
            />
          </el-col>
          <el-col :span="16">
            <div class="news-tit"><h2>互动留言</h2></div>
            <el-table
              :data="tableData"
              max-height="355"
              style="border: 1px solid var(--el-border-color)"
            >
              <el-table-column label="Date" prop="date" />
              <el-table-column label="Name" prop="name" />
              <el-table-column label="Address" prop="address" />
            </el-table>
          </el-col>
        </el-row>
        <portal-divider active-menu="portal" style="margin-top: 12px" />
      </main>

      <!-- <vab-footer /> -->
    </div>
    <el-backtop target="#app .scroll-wrap-portal" />
    <!-- <vab-theme-setting /> -->
  </el-scrollbar>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import portalHeader from "./components/PortalHeader.vue";
import portalDivider from "./components/PortalDivider.vue";
import banner_1 from "@/assets/portal_images/banner_1.jpg";
import carousel_1 from "@/assets/portal_images/carousel_1.jpg";
import carousel_2 from "@/assets/portal_images/carousel_2.jpg";
import carousel_3 from "@/assets/portal_images/carousel_3.jpg";

defineOptions({
  name: "Portal"
});

const background = ref<string>("");

const handleChange = (value: any) => {
  switch (value) {
    case 0: {
      background.value = `url('${carousel_1}')`;
      break;
    }
    case 1: {
      background.value = `url('${carousel_2}')`;
      break;
    }
    case 2: {
      background.value = `url('${carousel_3}')`;
      break;
    }

    default: {
      background.value = `url('${carousel_1}')`;
      break;
    }
  }
};

const openWindow = (url: string) => {
  window.open(url);
};

const date = ref<any>(new Date());
const tableData = [
  {
    date: "2016-05-03",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles"
  },
  {
    date: "2016-05-02",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles"
  },
  {
    date: "2016-05-04",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles"
  },
  {
    date: "2016-05-01",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles"
  },
  {
    date: "2016-05-01",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles"
  },
  {
    date: "2016-05-01",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles"
  },
  {
    date: "2016-05-01",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles"
  },
  {
    date: "2016-05-01",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles"
  }
];
</script>

<style lang="scss" scoped>
.portal-main {
  &-mobile {
    height: 100vh;
    padding: var(--el-padding);
    background: var(--el-color-white);
  }

  .carousel-background {
    position: absolute;
    top: 0;
    width: 100%;
    height: 180px;
    background: url("/@/assets/portal_images/carousel_1.jpg");
    filter: blur(100px);
    opacity: 0.5;
  }

  main {
    width: 1152px;
    padding: 10px 0 0;
    margin-right: auto;
    margin-left: auto;
    border-top: 1px solid #f3f5f6;

    .left-tab {
      width: 100%;
      height: 420px;
      padding-top: 15px;
      background: #39364d;
      border-top-left-radius: 15px;

      :deep() {
        .el-menu-item.is-active {
          background-color: rgb(255 255 255 / 10%);
        }
      }
    }

    .el-carousel--horizontal {
      border-top-right-radius: 15px;
    }

    .el-carousel__item:nth-of-type(1) {
      background: url("/@/assets/portal_images/carousel_1.jpg");
      background-size: cover;
    }

    .el-carousel__item:nth-of-type(2) {
      background: url("/@/assets/portal_images/carousel_2.jpg");
      background-size: cover;
    }

    .el-carousel__item:nth-of-type(3) {
      background: url("/@/assets/portal_images/carousel_3.jpg");
      background-size: cover;
    }

    .description-box {
      width: 100%;
      height: 120px;
      padding: 10px 20px 20px;
      background: #fff;
      border: 1px solid var(--el-border-color);
      border-bottom-right-radius: 15px;
      border-bottom-left-radius: 15px;

      :deep() {
        .vab-divider--vertical {
          float: right;
          height: 6.5em;
          margin-top: -20px;
        }
      }

      h1 {
        margin-top: -10px;

        .clip {
          font-size: 32px;
          line-height: 0;
          background: linear-gradient(120deg, #bd34fe 30%, #41d1ff);
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }

      .text {
        margin-top: -10px;
        font-size: 24px;
        font-weight: bold;
      }

      .show-box {
        padding-top: 25px;
        padding-left: 20px;

        .system-class-icon {
          float: left;
          width: 50px;
          height: 50px;
          line-height: 50px;
          color: var(--el-color-white);
          text-align: center;
          border-radius: 100%;

          [class*="ri"] {
            font-size: 24px;
          }
        }

        .describe {
          float: left;
          margin-top: 15px;
          margin-left: 20px;
          font-family: PingFangSC-Medium, serif;
          font-size: var(--el-font-size-big);
          line-height: 22px;
          color: var(--el-color-grey);
          letter-spacing: 0.76px;
          white-space: nowrap;
        }
      }
    }

    .news-tit {
      position: relative;
      width: 100%;
      height: 78px;
      margin-top: -30px;
      line-height: 36px;

      h2 {
        float: left;
        font-size: 16px;
        line-height: 36px;
        color: #5184eb;
        border-bottom: 2px solid #5184eb;
      }
    }

    .news-img {
      border: 1px solid var(--el-border-color);
      border-radius: 15px;
    }

    :deep() {
      .el-calendar {
        padding: 0;
        margin-bottom: 20px;
        border-radius: 15px;

        &-table {
          padding: 0;
        }

        &-day {
          height: 42px;
          line-height: 42px;
          text-align: center;
        }
      }

      .el-table {
        border-radius: 15px;
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
