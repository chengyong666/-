<template>
  <div id="barchart"></div>
</template>

<script  lang="ts">
import {
  nextTick,
  onMounted,
  defineComponent,
  ref,
  reactive,
  toRefs,
} from "vue";
import * as echarts from "echarts";

export default defineComponent({
  name: "",
  setup() {
    function line() {
      var chartDom = document.getElementById("barchart")!;
      var myChart = echarts.init(chartDom);
      type EChartsOption = echarts.EChartsOption;
      var option: EChartsOption;
      option = {
        grid: {
          top: "30%",
          left: "15%",
          right: "15%",
          bottom: "20%",
          containLabel: false,
        },
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: "line",
            smooth: true,
          },
        ],
      };
      myChart.resize();
      myChart.setOption(option);
    }

    const data = reactive({});
    function resizeTheChart() {
      var chartDom = document.getElementById("barchart")!;
      var myChart = echarts.init(chartDom);
      if (myChart) {
        myChart.resize();
      }
    }
    onMounted(() => {
      window.addEventListener("resize", resizeTheChart);
      setTimeout(() => {
        line();
      }, 1000);
    });
    return {
      ...toRefs(data),
    };
  },
});
</script>

<style less='scss' scoped>
.echarts {
  width: 100%;
  height: 100%;
}
#barchart {
  /* width: 799px; */
  height: 100%;
}
#barchart > div {
  width: 100%;
}
</style>
