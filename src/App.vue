<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

// 标签元素以表格单元格的形式呈现，使元素类似于td标签   解决ElementUI table组件表头与表格不对成问题
body .el-table th.gutter{
  display: table-cell!important;
}
</style>