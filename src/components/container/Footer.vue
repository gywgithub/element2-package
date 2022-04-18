<template>
  <el-footer 
    :height="config.height"
  >
    <slot></slot>
  </el-footer>
</template>

<script>
export default {
  name: 'CBFFooter',
  props: {
    config: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
