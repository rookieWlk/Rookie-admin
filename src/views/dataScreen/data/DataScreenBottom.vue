<template>
  <el-row class="data-screen-bottom">
    <el-col :span="6">
      <el-row>
        <el-col :span="12">
          <el-image class="data-screen-bottom-icon" :src="bottom_01" />
        </el-col>
        <el-col :span="12">
          <div class="data-screen-bottom-text">
            <ReNormalCountTo
              :startVal="countConfig1.startValue"
              :endVal="countConfig1.endValue"
            />
            <p>累计访问量</p>
          </div>
        </el-col>
      </el-row>
    </el-col>
    <el-col :span="6">
      <el-row>
        <el-col :span="12">
          <el-image class="data-screen-bottom-icon" :src="bottom_02" />
        </el-col>
        <el-col :span="12">
          <div class="data-screen-bottom-text">
            <ReNormalCountTo
              :startVal="countConfig2.startValue"
              :endVal="countConfig2.endValue"
            />
            <p>累计用户数</p>
          </div>
        </el-col>
      </el-row>
    </el-col>
    <el-col :span="6">
      <el-row>
        <el-col :span="12">
          <el-image class="data-screen-bottom-icon" :src="bottom_03" />
        </el-col>
        <el-col :span="12">
          <div class="data-screen-bottom-text">
            <ReNormalCountTo
              :startVal="countConfig3.startValue"
              :endVal="countConfig3.endValue"
            />
            <p>累计成交订单</p>
          </div>
        </el-col>
      </el-row>
    </el-col>
    <el-col :span="6">
      <el-row>
        <el-col :span="12">
          <el-image class="data-screen-bottom-icon" :src="bottom_04" />
        </el-col>
        <el-col :span="12">
          <div class="data-screen-bottom-text">
            <ReNormalCountTo
              :prefix="'¥'"
              :startVal="countConfig4.startValue"
              :endVal="countConfig4.endValue"
            />
            <p>累计成交额：万</p>
          </div>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import { reactive, onBeforeUnmount } from "vue";
import { ReNormalCountTo } from "@/components/ReCountTo";
import { random } from "lodash-es";
import bottom_01 from "@/assets/data_screen_images/bottom_01.png";
import bottom_02 from "@/assets/data_screen_images/bottom_02.png";
import bottom_03 from "@/assets/data_screen_images/bottom_03.png";
import bottom_04 from "@/assets/data_screen_images/bottom_04.png";

defineOptions({
  name: "DataScreenBottom"
});

const countConfig1 = reactive({
  startValue: 0,
  endValue: random(1000, 2000)
});

const countConfig2 = reactive({
  startValue: 0,
  endValue: random(1000, 2000)
});

const countConfig3 = reactive({
  startValue: 0,
  endValue: random(1000, 2000)
});

const countConfig4 = reactive({
  startValue: 0,
  endValue: random(100, 2000)
});

const timer = setInterval(() => {
  countConfig1.endValue = countConfig1.endValue + random(0, 100);
  countConfig2.endValue = countConfig2.endValue + random(0, 100);
  countConfig3.endValue = countConfig3.endValue + random(0, 100);
  countConfig4.endValue = countConfig4.endValue + random(0, 100);
}, 1000 * 5);

onBeforeUnmount(() => {
  clearInterval(timer);
});
</script>

<style lang="scss" scoped>
.data-screen-bottom {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  &-icon {
    display: block;
    width: 70px;
    height: 70px;
    padding: 15px 18px;
    margin: 8px auto 0;
    background: #101f58;
    border-radius: 50%;
    animation: twink 3s linear infinite;
  }

  &-text {
    margin-top: 10px;
    font-size: 30px;
    color: #64c5d9;
    text-align: left;

    p {
      font-size: 14px;
      color: #fff;
    }
  }
}
</style>
