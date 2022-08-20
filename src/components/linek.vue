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
        title: {
          text: "前端框架熟练程度值",
          left: "center",
        },
        grid: {
          top: "30%",
          left: "15%",
          right: "15%",
          bottom: "20%",
          containLabel: false,
        },
        xAxis: {
          type: "category",
          boundaryGap: true,
          data: [
            "Vue",
            "uni-app",
            "原生微信小程序",
            "原生支付宝小程序",
            "React",
            "数据可视化",
          ],
          axisLabel: {
            //x轴文字的配置
            show: true,
            interval: 0, //使x轴文字显示全
            formatter: function (params) {
              var newParamsName = "";
              var paramsNameNumber = params.length;
              var provideNumber = 5; //一行显示几个字
              var rowNumber = Math.ceil(paramsNameNumber / provideNumber);
              if (
                paramsNameNumber > provideNumber &&
                window.innerWidth > 1200
              ) {
                for (var p = 0; p < rowNumber; p++) {
                  var tempStr = "";
                  var start = p * provideNumber;
                  var end = start + provideNumber;
                  if (p == rowNumber - 1) {
                    tempStr = params.substring(start, paramsNameNumber);
                  } else {
                    tempStr = params.substring(start, end) + "\n";
                  }
                  newParamsName += tempStr;
                }
              } else if (window.innerWidth < 1200) {
                return `${params.slice(0, 3)}...`;
              } else {
                newParamsName = params;
              }
              return newParamsName;
            },
          },
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [1820, 1652, 1551, 1100, 1000, 1300],
            type: "line",
            smooth: true,
          },
          {
            // 设置涟漪特效动画
            type: "effectScatter",
            // 有三种: cartesian2d(二维的直角坐标系) polar(极坐标系) geo(地理坐标系) ,此需求使用cartesian2d
            coordinateSystem: "cartesian2d",
            // 单个闪烁点 ↓
            // data: [{ value: ["Mon", 820], symbolSize: 8 }], //2d坐标系--[x轴, y轴, 标记大小]

            // 多个闪烁点 ↓
            // 方法一 -- start:
            data: [
              { value: ["Vue", 1820], symbolSize: 10 },
              { value: ["uni-app", 1652], symbolSize: 10 },
              { value: ["原生微信小程序", 1551], symbolSize: 10 },
              { value: ["原生支付宝小程序", 1100], symbolSize: 10 },
              { value: ["React", 1000], symbolSize: 10 },
              { value: ["数据可视化", 1300], symbolSize: 10 },
              // { value: ["Sun", 1320], symbolSize: 10 },
            ],
            // 方法一 -- end

            // 方法二 -- start:
            // data: [['Mon',820],['Tue',932]], //2d坐标系--[x轴, y轴, 标记大小]
            // symbolSize: 10,
            // 方法二 -- end

            // 何时显示特效:'render'-绘制完成后显示特效 'emphasis'-高亮（hover）的时候显示特效
            showEffectOn: "render",
            // 涟漪特效配置
            rippleEffect: {
              // 波纹的绘制方式,可选'stroke'和'fill'
              brushType: "stroke",
            },
            zlevel: 1,
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
