<template>
  <el-scrollbar>
    <slot></slot>
  </el-scrollbar>
</template>

<script>
export default {
  name: 'CBFScrollbar',
  props: {
    config: {
      type: Object,
      default: () => { }
    }
  }
}
</script>
<style>
/*隐藏水平滚动条*/
.el-scrollbar__wrap {
  overflow-x: hidden !important;
}
</style>
