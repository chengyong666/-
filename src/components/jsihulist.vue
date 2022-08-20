<template>
  <div id="barcharts"></div>
</template>

<script  lang="ts">
import { onMounted, defineComponent, ref, reactive, toRefs } from "vue";
import * as echarts from "echarts";
export default defineComponent({
  name: "",
  setup() {
    const data = reactive({});
    function jishu() {
      var chartDom = document.getElementById("barcharts")!;
      var myChart = echarts.init(chartDom);
      type EChartsOption = echarts.EChartsOption;
      var option: EChartsOption;
      option = {
        title: {
          // text: "Nightingale Chart",
          // subtext: "Fake Data",
          // left: "center",
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)",
        },
        legend: {
          left: "center",
          top: "bottom",
          data: [
            "rose1",
            "rose2",
            "rose3",
            "rose4",
            "rose5",
            "rose6",
            "rose7",
            "rose8",
          ],
        },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            restore: { show: true },
            saveAsImage: { show: true },
          },
        },
        series: [
          {
            name: "技术使用率",
            type: "pie",
            radius: [20, 140],
            center: ["48%", "50%"],
            roseType: "area",
            itemStyle: {
              borderRadius: 9,
            },
            data: [
              { value: 100, name: "html" },
              { value: 100, name: "felx" },
              { value: 100, name: "css" },
              { value: 100, name: "css3" },
              { value: 80, name: "webpack搭建项目环境" },
              { value: 100, name: "ArcoDesign" },
              { value: 100, name: "ElementUI" },
              { value: 100, name: "MintUi " },
              { value: 100, name: "Vant " },
              { value: 100, name: "VantWeapp " },
              { value: 100, name: "AntDsign " },
              { value: 100, name: "uview " },
              { value: 100, name: "微信小程序 " },
              { value: 80, name: "支付宝小程序 " },
              { value: 100, name: "uin-app " },
              { value: 100, name: "scss less " },
              { value: 60, name: "node.js " },
              { value: 80, name: "Echarts" },
              { value: 60, name: "canvas " },
              { value: 100, name: "vue3.0" },
              { value: 100, name: "svn/git " },
              { value: 60, name: " react " },
              { value: 50, name: "hooks" },
            ],
          },
        ],
      };
      myChart.resize();
      myChart.setOption(option);
    }
    function resizeTheChart() {
      console.log("111");
      var chartDom = document.getElementById("barcharts")!;
      var myChart = echarts.init(chartDom);
      if (myChart) {
        myChart.resize();
      }
    }
    onMounted(() => {
      window.addEventListener("resize", resizeTheChart);
      setTimeout(() => {
        jishu();
      }, 1000);
    });
    return {
      ...toRefs(data),
    };
  },
});
</script>

<style scoped>
#barcharts {
  /* width: 799px; */
  width: 100%;
  height: 100%;
}
#barcharts > div {
  width: 100%;
}
</style>
