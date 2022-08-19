<template>
  <div class="wrp">
    <div class="content">
      <div class="topTitle">
        <dv-decoration-8 class="leftTitle" />
        <dv-decoration-11 class="titleName"
          >数据可视化数据展示平台</dv-decoration-11
        >
        <dv-decoration-8 class="righttTitle" :reverse="true" />
      </div>
      <div class="buttom_conent">
        <div class="left">
          <dv-border-box-8 class="left_1">
            <div class="left_1_content">
              <div class="left_1_top">
                <div class="left_title">
                  今日喜欢:<span class="left_num">1234</span>
                </div>
                <div class="left_title">
                  今日喜欢:<span class="left_num">1234</span>
                </div>
                <div class="left_title">
                  今日喜欢:<span class="left_num">1234</span>
                </div>
                <div class="left_title">
                  今日喜欢:<span class="left_num">1234</span>
                </div>
                <div class="left_title">
                  今日喜欢:<span class="left_num">1234</span>
                </div>
                <div class="left_title">
                  今日喜欢:<span class="left_num">1234</span>
                </div>
              </div>
              <div class="both"></div>
              <div class="left_1_buttom">
                <linek></linek>
              </div>
            </div>
          </dv-border-box-8>
          <dv-border-box-8 class="left_2">dv-border-box-8</dv-border-box-8>
        </div>
        <div class="middle"></div>
        <div class="right"></div>
      </div>
    </div>
  </div>
</template>

<script  lang="ts">
import linek from "@/components/linek.vue";
import { defineComponent, ref, reactive, toRefs } from "vue";
export default defineComponent({
  name: "",
  components: {
    linek,
  },
  setup() {
    const data = reactive({});
    return {
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
      height: 50px;
      flex: 1;
    }
    .titleName {
      width: 420px;
      height: 70px;
      font-size: 30px;
      color: #fff;
    }
    .righttTitle {
      flex: 1;
      // width: 300px;
      height: 50px;
    }
  }
  .buttom_conent {
    display: flex;
    flex: 1;
    height: 100%;
    padding-top: 20px;
    padding-bottom: 20px;
    .left {
      width: 31%;
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
      }
    }
    .middle {
      width: 31%;
      height: 100%;
    }
    .right {
      width: 31%;
      height: 100%;
    }
  }
  .line {
    width: 100%;
    height: 90%;
  }
}
</style>
