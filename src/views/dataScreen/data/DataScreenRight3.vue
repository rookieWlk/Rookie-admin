<template>
  <div ref="chartRef" style="width: 100%; height: 100%" />
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useIntervalFn } from "@vueuse/core";
import { useDark, useECharts } from "@pureadmin/utils";

const { isDark } = useDark();

let theme = computed(() => {
  return isDark.value ? "dark" : "default";
});

const chartRef = ref();
const { setOptions, getInstance } = useECharts(chartRef, { theme });

let xData = (() => {
  let data: any[] = [];
  for (let i = 1; i < 31; i++) {
    data.push(`${i}日`);
  }
  return data;
})();

setOptions(
  {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow"
      }
    },
    grid: {
      borderWidth: 0
    },
    calculable: true,
    xAxis: [
      {
        triggerEvent: true,
        type: "category",
        splitLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLine: {
          lineStyle: {
            color: "#06a1fb"
          }
        },
        data: xData
      }
    ],
    yAxis: [
      {
        triggerEvent: true,
        type: "value",
        splitLine: {
          show: false
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: "#06a1fb"
          }
        }
      }
    ],
    dataZoom: [
      {
        type: "slider",
        show: false,
        realtime: true,
        startValue: 0,
        endValue: 24
      }
    ],
    series: [
      {
        name: "访问量",
        type: "line",
        symbolSize: 10,
        symbol: "circle",
        lineStyle: {
          color: "#00c4ff"
        },
        markPoint: {
          label: {
            color: "#fff"
          },
          data: [
            {
              type: "max",
              name: "最大值"
            },
            {
              type: "min",
              name: "最小值"
            }
          ]
        },
        data: [
          509, 917, 2455, 2610, 2719, 3033, 3044, 3085, 2708, 2809, 2117, 2000,
          1455, 1210, 719, 733, 944, 2285, 2208, 3372, 3936, 3693, 2962, 2810,
          3519, 2455, 2610, 2719, 2484, 2078
        ]
      }
    ],
    addTooltip: true
  },
  {
    name: "click",
    callback: params => {
      console.log("click", params);
    }
  },
  {
    name: "contextmenu",
    callback: params => {
      console.log("contextmenu", params);
    }
  },
  {
    type: "zrender",
    name: "click",
    callback: params => {
      console.log("点击空白处", params);
    }
  }
);

let a = 1;
useIntervalFn(() => {
  if (a == xData.length - 24) {
    a = 0;
  }
  getInstance()!.dispatchAction({
    type: "dataZoom",
    startValue: a,
    endValue: a + 24
  });
  a++;
}, 2000);
</script>
