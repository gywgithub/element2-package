<template>
  <el-container 
    :direction="config.direction"
  >
    <slot></slot>
  </el-container>
</template>

<script>
export default {
  name: 'CBFContainer',
  props: {
    config: {
      type: Object,
      default: () => { }
    }
  }
}
</script>
