<template>
  <el-row 
    :gutter="config.gutter"
    :type="config.type"
    :justify="config.justify"
    :align="config.align"
    :tag="config.tag"
  >
    <slot></slot>
  </el-row>
</template>

<script>
export default {
  name: 'CBFRow',
  props: {
    config: {
      type: Object,
      default: () => { }
    }
  }
}
</script>
