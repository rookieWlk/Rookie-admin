<template>
  <div class="data-screen-left3">
    <div class="scroll">
      <div ref="scrollRef" class="scroll-box">
        <SeamlessScroll
          ref="scroll"
          :data="listData"
          :class-option="classOption"
          class="warp"
        >
          <div v-for="item in listData" :key="item.id" class="scroll-item">
            <el-avatar
              fit="fill"
              :size="25"
              src="https://wanglikai.cn/img/avatar.png"
            />
            <span class="name">{{ item.name }}</span>
            <span class="address">{{ item.address }}</span>
          </div>
        </SeamlessScroll>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from "vue";
import SeamlessScroll from "@/components/ReSeamlessScroll";
defineOptions({
  name: "DataScreenLeft3"
});

const scrollRef = ref<any>(null);
const listData = reactive<any>([
  {
    avatar: "https://wanglikai.cn/img/avatar.png",
    name: "WLK",
    address: "Rookie Admin data screen list NO.1"
  },
  {
    avatar: "https://wanglikai.cn/img/avatar.png",
    name: "WLK",
    address: "Rookie Admin data screen list NO.2"
  },
  {
    avatar: "https://wanglikai.cn/img/avatar.png",
    name: "WLK",
    address: "Rookie Admin data screen list NO.3"
  },
  {
    avatar: "https://wanglikai.cn/img/avatar.png",
    name: "WLK",
    address: "Rookie Admin data screen list NO.4"
  },
  {
    avatar: "https://wanglikai.cn/img/avatar.png",
    name: "WLK",
    address: "Rookie Admin data screen list NO.5"
  },
  {
    avatar: "https://wanglikai.cn/img/avatar.png",
    name: "WLK",
    address: "Rookie Admin data screen list NO.6"
  },
  {
    avatar: "https://wanglikai.cn/img/avatar.png",
    name: "WLK",
    address: "Rookie Admin data screen list NO.7"
  },
  {
    avatar: "https://wanglikai.cn/img/avatar.png",
    name: "WLK",
    address: "Rookie Admin data screen list NO.8"
  },
  {
    avatar: "https://wanglikai.cn/img/avatar.png",
    name: "WLK",
    address: "Rookie Admin data screen list NO.9"
  },
  {
    avatar: "https://wanglikai.cn/img/avatar.png",
    name: "WLK",
    address: "Rookie Admin data screen list NO.10"
  },
  {
    avatar: "https://wanglikai.cn/img/avatar.png",
    name: "WLK",
    address: "Rookie Admin data screen list NO.11"
  },
  {
    avatar: "https://wanglikai.cn/img/avatar.png",
    name: "WLK",
    address: "Rookie Admin data screen list NO.12"
  },
  {
    avatar: "https://wanglikai.cn/img/avatar.png",
    name: "WLK",
    address: "Rookie Admin data screen list NO.13"
  },
  {
    avatar: "https://wanglikai.cn/img/avatar.png",
    name: "WLK",
    address: "Rookie Admin data screen list NO.14"
  },
  {
    avatar: "https://wanglikai.cn/img/avatar.png",
    name: "WLK",
    address: "Rookie Admin data screen list NO.15"
  }
]);

const classOption = reactive({
  direction: "top"
});
</script>

<style lang="scss" scoped>
.data-screen-left3 {
  display: flex;
  flex-direction: column;
  height: calc(100% - 40px);
  margin-top: 20px;
  overflow: hidden;

  .scroll {
    width: 100%;
    height: 100%;

    .scroll-box {
      width: 100%;
      height: 100%;
      overflow: hidden;

      .scroll-item {
        display: flex;
        align-items: center;
        height: 50px;
        border-bottom: 1px solid #101f58;

        .name {
          margin-left: 10px;
        }

        .address {
          margin-left: 10px;
        }
      }
    }
  }
}
</style>
