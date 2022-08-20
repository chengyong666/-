<template>
  <router-view />
</template>

<style lang="scss">
/* 设置滚动条的样式 */
::-webkit-scrollbar {
  width: 0px;
  height: 8px;
  background-color: #d0e8ff;
}

/* 滚动槽 */
::-webkit-scrollbar-track {
  border-radius: 10px;
}

/* 滚动条滑块 */
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: #6eade0;
}
html {
  height: 100%;
}

body {
  height: 100%;
  padding: 0;
  margin: 0;
}
#app {
  height: 100%;
}
</style>
