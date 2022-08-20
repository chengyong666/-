<template>
  <div id="scroll-board">
    <div class="title">项目名称与周期</div>
    <dv-scroll-ranking-board :config="config" class="projectNum" />
  </div>
</template>

<script  lang="ts">
import { defineComponent, ref, reactive, toRefs } from "vue";
export default defineComponent({
  name: "",
  props: ["config"],
  setup(props, contex) {
    const data = reactive({});
    return {
      ...toRefs(data),
    };
  },
});
</script>

<style lang="scss" scoped>
#scroll-board {
  box-sizing: border-box;
  margin-left: 20px;
  margin-right: 20px;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  .title {
    height: 20px;
    margin-top: 10px;
    font-size: 18px;
    color: #fff;
  }
}
.projectNum {
  font-size: 20px;
  ::v-deep .ranking-value {
    color: pink;
  }
  // width: 100%;
  // height: 100%;
}
</style>
