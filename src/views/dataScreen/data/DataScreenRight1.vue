<template>
  <div ref="chartRef" style="width: 100%; height: 100%" />
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { graphic } from "echarts/core";
import { random } from "lodash-es";
import { useECharts } from "@pureadmin/utils";
import { useIntervalFn } from "@vueuse/core";

defineOptions({
  name: "DataScreenRight1"
});
const chartRef = ref();
const { setOptions, getInstance } = useECharts(chartRef);
setOptions({
  grid: {
    left: "0",
    right: "0",
    bottom: "20px",
    top: "40px",
    containLabel: true
  },
  tooltip: {
    trigger: "axis"
  },
  xAxis: [
    {
      type: "category",
      axisLine: {
        show: true,
        lineStyle: {
          color: "#00a1ff"
        }
      },
      splitLine: {
        show: false
      },
      axisLabel: {
        color: "#eee"
      }
    }
  ],
  yAxis: [
    {
      type: "value",
      axisLabel: {
        color: "#eee"
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: "#00a1ff"
        }
      },
      splitLine: {
        show: false
      }
    }
  ],
  series: {
    symbolSize: 10,
    itemStyle: {
      color: new graphic.LinearGradient(
        0,
        0,
        0,
        1,
        [
          {
            offset: 0,
            color: "#2fc4d1"
          },
          {
            offset: 1,
            color: "rgba(0,179,244, 0.9)"
          }
        ],
        false
      ),
      shadowColor: "rgba(0,179,244, 0.9)",
      shadowBlur: 20
    },
    data: [
      [random(1, 20), random(1, 20)],
      [random(1, 20), random(1, 20)],
      [random(1, 20), random(1, 20)],
      [random(1, 20), random(1, 20)],
      [random(1, 20), random(1, 20)],
      [random(1, 20), random(1, 20)],
      [random(1, 20), random(1, 20)],
      [random(1, 20), random(1, 20)],
      [random(1, 20), random(1, 20)],
      [random(1, 20), random(1, 20)],
      [random(1, 20), random(1, 20)],
      [random(1, 20), random(1, 20)],
      [random(1, 20), random(1, 20)],
      [random(1, 20), random(1, 20)],
      [random(1, 20), random(1, 20)],
      [random(1, 20), random(1, 20)],
      [random(1, 20), random(1, 20)],
      [random(1, 20), random(1, 20)],
      [random(1, 20), random(1, 20)],
      [random(1, 20), random(1, 20)],
      [random(1, 20), random(1, 20)],
      [random(1, 20), random(1, 20)],
      [random(1, 20), random(1, 20)]
    ],
    type: "scatter"
  }
});
const data = ref([]);

useIntervalFn(() => {
  data.value = [
    [random(1, 20), random(1, 20)],
    [random(1, 20), random(1, 20)],
    [random(1, 20), random(1, 20)],
    [random(1, 20), random(1, 20)],
    [random(1, 20), random(1, 20)],
    [random(1, 20), random(1, 20)],
    [random(1, 20), random(1, 20)],
    [random(1, 20), random(1, 20)],
    [random(1, 20), random(1, 20)],
    [random(1, 20), random(1, 20)],
    [random(1, 20), random(1, 20)],
    [random(1, 20), random(1, 20)],
    [random(1, 20), random(1, 20)],
    [random(1, 20), random(1, 20)],
    [random(1, 20), random(1, 20)],
    [random(1, 20), random(1, 20)],
    [random(1, 20), random(1, 20)],
    [random(1, 20), random(1, 20)],
    [random(1, 20), random(1, 20)],
    [random(1, 20), random(1, 20)],
    [random(1, 20), random(1, 20)],
    [random(1, 20), random(1, 20)],
    [random(1, 20), random(1, 20)]
  ];
  // 重新渲染图表
  getInstance()!.setOption({
    series: {
      data: data.value
    }
  });
}, 2000);
</script>
