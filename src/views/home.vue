<template>
  <div class="wrp">
    <div class="content">
      <div class="topTitle">
        <dv-decoration-8 class="leftTitle" />
        <dv-decoration-11 class="titleName"
          >个人求职信息数据可视化展示平台
          <a href="/resume.pdf" download="程雍个人简历.pdf"
            ><span></span>PDF简历下载</a
          ></dv-decoration-11
        >
        <dv-decoration-8 class="righttTitle" :reverse="true" />
      </div>
      <div class="buttom_conent">
        <div class="left">
          <dv-border-box-8 ref="left_1" class="left_1">
            <div class="left_1_content">
              <div class="left_1_top">
                <div class="left_title">
                  Vue<span class="left_num">熟练</span>
                </div>
                <div class="left_title">
                  uni-app<span class="left_num">熟练</span>
                </div>
                <div class="left_title">
                  原生微信小程序<span class="left_num">熟练</span>
                </div>
                <div class="left_title">
                  原生支付宝小程序<span class="left_num">熟悉</span>
                </div>
                <div class="left_title">
                  React<span class="left_num">熟悉</span>
                </div>
                <div class="left_title">
                  数据可视化<span class="left_num">熟练</span>
                </div>
              </div>
              <div class="both"></div>
              <div class="left_1_buttom">
                <linek></linek>
              </div>
            </div>
          </dv-border-box-8>
          <dv-border-box-8
            :style="{
              height: contHeight,
            }"
            class="left_2"
            ><project-list :config="config"></project-list
          ></dv-border-box-8>
        </div>
        <!-- —————————————————————————————————————— -->
        <div class="middle">
          <dv-border-box-8 class="middle_border" :reverse="true">
            <div class="neirong" flex="dir:top box:first">
              <div class="nvr">
                <div class="cotnent">
                  <div class="title">姓名:<span>程雍</span></div>
                  <div class="title">学历:<span>本科</span></div>
                  <div class="title">tel:<span>17733858288</span></div>
                </div>
                <div class="cotnent">
                  <div class="title">微信:<span>837095241</span></div>
                  <div class="title">工作经验:<span>4年</span></div>
                  <div class="title">性别:<span>男</span></div>
                </div>

                <!-- <div class="pic"><img src="../assets/tou.jpg" alt="" /></div> -->
                <dv-decoration-5 style="width: 100%x; height: 40px" />
              </div>
              <div class="dayin">
                <dayin></dayin>
              </div>
            </div>
          </dv-border-box-8>
        </div>
        <!-- —————————————————————————————————————————————— -->
        <div class="right">
          <dv-border-box-8 class="right_content">
            <div class="right_content_">
              <div class="right_top">
                <div class="right_top_t">
                  <div class="jishu_title">技术统计</div>
                  <div class="tuan">
                    <dv-decoration-3 style="width: 250px; height: 30px" />
                  </div>
                </div>
                <div class="right_top_b">
                  <jsihulist></jsihulist>
                </div>
              </div>

              <div class="right_bottom">
                <dv-decoration-10 style="width: 100%; height: 5px" />
                <h2 class="titles">个人评价</h2>
                <div class="ziwopingjia">
                  <div class="ping">1、能够尽快熟悉业务，能快速融入团队</div>
                  <div class="ping">
                    2、富有团队合作精神，做事勤勉，服从领导命令
                  </div>
                  <div class="ping">
                    3、性格外向,喜欢唱歌也会喝酒，项目的气氛活跃者
                  </div>
                </div>
                <h2 class="qiwangxinzi">期望薪资:</h2>
                <div class="xinzi">
                  <dv-decoration-9 class="xinzia">16k</dv-decoration-9>
                  <dv-decoration-10 style="width: 30px; height: 5px" />
                  <dv-decoration-9 class="xinzia">17k</dv-decoration-9>
                </div>
              </div>
            </div>
          </dv-border-box-8>
        </div>
      </div>
    </div>
  </div>
</template>

<script  lang="ts">
import linek from "@/components/linek.vue";
import projectList from "@/components/projuct.vue";
import dayin from "@/components/dayinji.vue";
import jsihulist from "@/components/jsihulist.vue";
import {
  onMounted,
  nextTick,
  defineComponent,
  ref,
  reactive,
  toRefs,
} from "vue";
export default defineComponent({
  name: "",
  components: {
    linek,
    projectList,
    dayin,
    jsihulist,
  },
  setup() {
    const data = reactive({
      contHeight: 0,
    });
    const left_1: any = ref(null);
    const config = ref({
      data: [
        {
          name: "零研官网（腾信公司开发）",
          value: 3,
        },
        {
          name: "微笑健康小程序（腾信公司开发）",
          value: 3,
        },
        {
          name: "MISE 系统后台管理权限（营口巨成教学科技开发有限公司石家庄分公司开发）项目 0 到 1 独立开发",
          value: 24,
        },
        {
          name: "心肺管理系统（营口巨成教学科技开发有限公司石家庄分公司开发）项目 0 到 1 独立开发",
          value: 24,
        },
        {
          name: "天衍官网（腾信公司开发",
          value: 3,
        },
        {
          name: "物联消费小程序（莱峰物联网开发）",
          value: 6,
        },
        {
          name: "支付宝小程序（莱峰物联网开发）",
          value: 2,
        },
        {
          name: "人保有氧微信小程序（莱峰物联网开发）",
          value: 2,
        },
      ],
      index: true,
      // columnWidth: [50, 170, 300],
      align: ["center"],
      rowNum: 3,
      unit: "个月",
      headerBGC: "#1981f6",
      headerHeight: 10,
    });

    onMounted(() => {
      // 当界面挂载出来后就会自动执行
      data.contHeight = left_1.value.$el.clientHeight;
      console.log(left_1.value.$el.clientHeight);
    });
    return {
      config,
      left_1,
      ...toRefs(data),
    };
  },
});
</script>

<style lang="scss" scoped>
.wrp {
  background-color: black;
  width: 100%;
  height: 100%;
}
.content {
  // padding-top: 20px;
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  .topTitle {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 50px;
    margin-top: 20px;
    .leftTitle {
      // width: 300px;
      min-width: 100px;
      height: 50px;
      flex-shrink: 1;
    }
    .titleName {
      flex-shrink: 1;
      // width: 300px;
      height: 70px;
      min-width: 100px;
      font-size: 30px;
      color: #fff;
      a {
        font-size: 16px;
        color: #fff;
        text-decoration: none;
        margin-left: 15px;
        &:hover {
          color: pink;
        }
      }
    }
    .righttTitle {
      flex-shrink: 1;
      min-width: 100px;
      height: 50px;
    }
  }
  .buttom_conent {
    display: flex;
    flex: 1;
    height: 100%;
    padding-top: 20px;
    padding-bottom: 20px;
    justify-content: center;
    .left {
      width: 31%;
      margin-right: 1%;
      height: 100%;
      display: flex;
      flex-direction: column;
      .left_1 {
        flex: 1;

        width: 100%;
        height: 100%;
        .left_1_content {
          display: flex;
          flex-direction: column;
          width: 100%;
          height: 100%;
          .left_1_top {
            flex: 1;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            .left_title {
              color: #fff;
              width: 31%;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              .left_num {
                color: burlywood;
              }
              .left_title:nth-child(3n) {
              }
            }
          }
          .both {
            clear: both;
          }
          .left_1_buttom {
            // width: 100%;
            height: 100%;
            flex: 1;
          }
        }
      }
      .left_2 {
        flex: 1;
        width: 100%;

        // overflow: hidden;
        // box-sizing: border-box;
        height: 100%;
      }
    }
    .middle {
      width: 31%;
      height: 100%;
      margin-right: 1%;
      overflow: hidden;
      .middle_border {
        width: 100%;
        height: 100%;
      }
      .neirong {
        height: 100%;
      }
      .dayin {
        flex: auto;
        padding: 10px;
        overflow: hidden;
        overflow-y: auto;
        margin-top: 30px;
      }
      .nvr {
        padding-top: 30px;
        height: 135px;
        .cotnent {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 20px;
          .title {
            text-indent: 10px;
            font-size: 18px;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            width: 33.33%;
            color: #fff;
            span {
              font-size: 18px;
              color: #fff;
            }
          }
        }

        .pic {
          width: 200px;
          height: 350x;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
    .right {
      width: 31%;
      height: 100%;
      .right_content {
        width: 100%;
        height: 100%;

        .right_content_ {
          display: flex;
          height: 100%;
          flex-direction: column;
        }
      }
      .right_top {
        flex: 1;
        display: flex;
        flex-direction: column;
        .right_top_t {
          height: 75px;
          .jishu_title {
            text-align: right;
          }
          .tuan {
            display: flex;
            justify-content: flex-end;
          }
        }
        .jishu_title {
          font-size: 30px;
          background: linear-gradient(to right, rgb(212, 255, 0), #6eade0);
          -webkit-background-clip: text;
          color: transparent;
        }
        .right_top_b {
          width: 100%;
          flex: 1;
          box-sizing: border-box;
        }
      }
      .right_bottom {
        width: 100%;
        flex: 1;
        padding: 10px;

        .titles {
          color: rgb(190, 33, 218);
        }
        .ziwopingjia {
          .ping {
            font-size: 15px;
            color: rgb(25, 206, 164);
          }
        }
        .qiwangxinzi {
          color: rgb(45, 191, 164);
        }
        .xinzi {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 20px;
          .xinzia {
            width: 150px;
            height: 150px;
            font-size: 17px;
            color: #fff;
          }
        }
      }
    }
  }
  .line {
    width: 100%;
    height: 90%;
  }
}
</style>
