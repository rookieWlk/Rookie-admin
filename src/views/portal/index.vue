<template>
  <el-scrollbar wrap-class="scroll-wrap-portal">
    <div class="portal-main">
      <portal-header active-menu="portal" />
      <main class="w-[1152px] pt-10 mt-20 mx-auto">
        <el-row :gutter="0">
          <el-col :span="24">
            <el-carousel
              arrow="always"
              height="420px"
              :interval="3000"
              @change="handleChange"
            >
              <el-carousel-item />
              <el-carousel-item />
              <el-carousel-item />
              <el-carousel-item />
            </el-carousel>
          </el-col>
          <el-col :span="24">
            <div class="bg-[#f5f7fa]">
              <div
                class="w-full h-32 flex items-center justify-center bg-white border border-gray-300 rounded-b-lg"
              >
                <span
                  class="text-7xl leading-none bg-gradient-to-r from-fuchsia-500 to-blue-400 text-transparent bg-clip-text"
                  >Rooike Admin</span
                >
              </div>
            </div>
          </el-col>
        </el-row>
      </main>
      <main class="w-[1152px] h-[800px] pt-10 mt-5 mx-auto bg-blue-500" />
      <portal-divider active-menu="portal" class="mt-5" />
    </div>
    <el-backtop target="#app .scroll-wrap-portal" />
  </el-scrollbar>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import portalHeader from "./components/PortalHeader.vue";
import portalDivider from "./components/PortalDivider.vue";

defineOptions({
  name: "Portal"
});

const background = ref<string>("");

const handleChange = (value: any) => {
  switch (value) {
    case 0: {
      background.value = `url('https://www-file.huawei.com/-/media/corp2020/home/banner/11/hc2024-cn2.jpg')`;
      break;
    }
    case 1: {
      background.value = `url('https://www-file.huawei.com/-/media/corp2020/home/banner/11/hwcloud-flexus-pc.jpg')`;
      break;
    }
    case 2: {
      background.value = `url('https://www-file.huawei.com/-/media/corp2020/home/banner/11/hc2024-cn2.jpg')`;
      break;
    }

    default: {
      background.value = `url('https://www-file.huawei.com/-/media/corp2020/home/banner/11/hwcloud-flexus-pc.jpg')`;
      break;
    }
  }
};
onMounted(() => {
  document.documentElement.classList.remove("dark");
  document.documentElement.classList.add("light");
});
</script>

<style lang="scss" scoped>
.portal-main {
  main {
    .el-carousel--horizontal {
      border-top-left-radius: 15px;
      border-top-right-radius: 15px;
    }

    .el-carousel__item:nth-of-type(1) {
      background: url("https://www-file.huawei.com/-/media/corp2020/home/banner/11/hc2024-cn2.jpg");
      background-size: cover;
    }

    .el-carousel__item:nth-of-type(2) {
      background: url("https://www-file.huawei.com/-/media/corp2020/home/banner/11/hwcloud-flexus-pc.jpg");
      background-size: cover;
    }

    .el-carousel__item:nth-of-type(3) {
      background: url("https://www-file.huawei.com/-/media/corp2020/home/banner/11/hc2024-cn2.jpg");
      background-size: cover;
    }

    .el-carousel__item:nth-of-type(4) {
      background: url("https://www-file.huawei.com/-/media/corp2020/home/banner/11/hwcloud-flexus-pc.jpg");
      background-size: cover;
    }
  }
}
</style>
