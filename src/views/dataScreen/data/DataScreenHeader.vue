<template>
  <el-row>
    <el-col :span="24">
      <div class="data-screen-header">
        <div target="_blank" @click="router.go(-1)">
          <div class="data-go-home">
            <el-icon style="margin-top: 1rem" :size="24">
              <IconifyIconOffline :icon="Home" />
            </el-icon>
          </div>
        </div>
        <span>Rookie Admin 数据大屏</span>
        <div class="data-fullscreen" @click="toggle">
          <el-icon style="margin-top: 1rem" :size="24">
            <IconifyIconOffline
              :icon="isFullscreen ? ExitFullscreen : Fullscreen"
            />
          </el-icon>
        </div>
      </div>
    </el-col>
  </el-row>
</template>
<script setup lang="ts">
import { useRouter } from "vue-router";
import { useFullscreen } from "@vueuse/core";
import Home from "@iconify-icons/ep/home-filled";
import Fullscreen from "@iconify-icons/ri/fullscreen-fill";
import ExitFullscreen from "@iconify-icons/ri/fullscreen-exit-fill";
const { isFullscreen, toggle } = useFullscreen();

const router = useRouter();
</script>
<style lang="scss" scoped>
.data-screen-header {
  width: 100%;
  margin-bottom: 20px;
  text-align: center;
  background: url("@/assets/data_screen_images/bgtop.png") no-repeat;
  background-size: 100% 100%;

  .data-fullscreen {
    position: fixed;
    top: 13px;
    right: 40px;
    z-index: 999;
    width: 60px;
    height: 60px;
    background: #395dfe;
    border-radius: 50%;
    box-shadow: 0 2px 12px 0 #395dfe;

    :deep() {
      [class*="ri-"] {
        font-size: 20px;
      }
    }
  }

  .data-go-home {
    position: fixed;
    top: 13px;
    left: 40px;
    z-index: 999;
    width: 60px;
    height: 60px;
    background: #395dfe;
    border-radius: 50%;
    box-shadow: 0 2px 12px 0 #395dfe;

    // :deep() {
    //   [class*="ri-"] {
    //     font-size: 20px;
    //     color: #fff;
    //   }
    // }
  }

  span {
    @keyframes flare {
      0% {
        background-position: -400px;
      }

      30% {
        background-position: 0;
      }

      100% {
        background-position: 400px;
        opacity: 0;
      }
    }

    position: relative;
    font-size: 30px;
    font-weight: bold;
    color: #33e6fa;
    background: linear-gradient(
      -90deg,
      #7cedfb 0%,
      #2ba3ff 0%,
      #02efff 50.2686%,
      #2ea5f9 100%
    );
    background-clip: text;
    -webkit-text-fill-color: transparent;

    &::before {
      position: absolute;
      left: 0;
      display: block;
      width: 100%;
      color: #fff;
      content: "Rookie Admin 数据大屏";
      background-image: linear-gradient(
        65deg,
        transparent 10%,
        rgb(255 255 255 / 100%) 20%,
        rgb(255 255 255 / 100%) 27.5%,
        transparent 30%,
        transparent 100%
      );
      background-clip: text;
      animation: flare 3s infinite;
    }

    &::after {
      position: absolute;
      top: 0;
      z-index: -1;
      display: block;
      color: #fff;
      content: "Rookie Admin 数据大屏";
    }
  }
}
</style>
