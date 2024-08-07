<template>
  <div ref="chartRef" style="width: 100%; height: 100%" />
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { graphic } from "echarts/core";
import { useECharts } from "@pureadmin/utils";
import { useIntervalFn } from "@vueuse/core";

defineOptions({
  name: "DataScreenLeft1"
});

// 初始化ECharts
const chartRef = ref();
const { setOptions, getInstance } = useECharts(chartRef);

// 随机生成数据
function getRandomData() {
  return [
    Math.floor(Math.random() * 2199 + 100),
    Math.floor(Math.random() * 2199 + 100),
    Math.floor(Math.random() * 2199 + 100),
    Math.floor(Math.random() * 350 + 100)
  ];
}

// 根据配置项渲染ECharts
onMounted(() => {
  setOptions({
    grid: {
      left: "0",
      right: "0",
      bottom: "0",
      top: "10px",
      containLabel: true
    },
    tooltip: {
      trigger: "axis"
    },
    xAxis: {
      show: false,
      type: "value",
      axisLabel: {
        color: "#eee"
      },
      boundaryGap: ["0", "0"] as [string, string],
      splitLine: {
        show: false
      }
    },
    yAxis: [
      {
        type: "category",
        inverse: true,
        data: ["访客数量", "订单数量", "下单人数", "退款数量"],
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        splitLine: {
          show: false
        },
        axisLabel: {
          color: "#eee"
        }
      }
    ],
    series: {
      name: "",
      type: "bar",
      zlevel: 1,
      itemStyle: {
        borderRadius: 10,
        color: new graphic.LinearGradient(0, 0, 1, 0, [
          {
            offset: 0,
            color: "rgb(57,89,255,1)"
          },
          {
            offset: 1,
            color: "rgb(46,200,207,1)"
          }
        ])
      },
      barWidth: 15,
      data: getRandomData(),
      label: {
        show: true,
        position: "inside",
        color: "#fff"
      }
    }
  });
});

useIntervalFn(() => {
  // 重新渲染图表
  getInstance()!.setOption({
    series: {
      data: getRandomData()
    }
  });
}, 2000);
</script>
