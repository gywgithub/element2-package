<template>
  <el-header 
    :height="config.height"
  >
    <slot></slot>
  </el-header>
</template>

<script>
export default {
  name: 'CBFHeader',
  props: {
    config: {
      type: Object,
      default: () => { }
    }
  }
}
</script>
