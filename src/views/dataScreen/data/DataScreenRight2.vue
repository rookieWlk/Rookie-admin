<template>
  <div ref="chartRef" style="width: 100%; height: 100%" />
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { graphic } from "echarts/core";
import { random } from "lodash-es";
import { useECharts } from "@pureadmin/utils";
import { useIntervalFn } from "@vueuse/core";

defineOptions({
  name: "DataScreenRight2"
});

// 初始化ECharts
const chartRef = ref();
const { setOptions, getInstance } = useECharts(chartRef);

// 定义数据源
const data = ref([
  { name: "一月", sales: random(20, 50), growth: random(0, 100) },
  { name: "二月", sales: random(20, 50), growth: random(0, 100) },
  { name: "三月", sales: random(20, 50), growth: random(0, 100) },
  { name: "四月", sales: random(20, 50), growth: random(0, 100) },
  { name: "五月", sales: random(20, 50), growth: random(0, 100) },
  { name: "六月", sales: random(20, 50), growth: random(0, 100) }
]);

// 初始化图表
onMounted(() => {
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
        boundaryGap: false,
        splitLine: {
          show: false
        },
        axisLabel: {
          color: "#eee"
        },
        data: data.value.map(item => item.name)
      }
    ],
    yAxis: [
      {
        type: "value",
        name: "销售额",
        axisLabel: {
          formatter: "{value} 万元",
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
      },
      {
        type: "value",
        name: "增长率",
        axisLabel: {
          formatter: "{value} %",
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
    series: [
      {
        name: "销售额",
        type: "bar",
        data: data.value.map(item => item.sales),
        itemStyle: {
          borderRadius: [10, 10, 0, 0],
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
        barWidth: 15
      },
      {
        name: "增长率",
        type: "line",
        yAxisIndex: 1,
        smooth: true,
        showAllSymbol: false,
        symbol: "circle",
        symbolSize: 2,
        lineStyle: {
          color: "#00b3f4"
        },
        itemStyle: {
          color: "#00b3f4"
        },
        tooltip: {
          show: true
        },
        areaStyle: {
          color: new graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              {
                offset: 0,
                color: "rgba(0,179,244,0.3)"
              },
              {
                offset: 1,
                color: "rgba(0,179,244,0)"
              }
            ],
            false
          ),
          shadowColor: "rgba(0,179,244, 0.9)",
          shadowBlur: 20
        },
        data: data.value.map(item => item.growth)
      }
    ]
  });
});

// 定期更新数据
useIntervalFn(() => {
  data.value = data.value.map(item => ({
    name: item.name,
    sales: random(20, 50),
    growth: random(0, 100)
  }));
  getInstance()!.setOption({
    xAxis: [
      {
        data: data.value.map(item => item.name)
      }
    ],
    series: [
      {
        data: data.value.map(item => item.sales)
      },
      {
        data: data.value.map(item => item.growth)
      }
    ]
  });
}, 2000);
</script>
