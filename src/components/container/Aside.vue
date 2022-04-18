<template>
  <el-aside 
    :width="config.width"
  >
    <slot></slot>
  </el-aside>
</template>

<script>
export default {
  name: 'CBFAside',
  props: {
    config: {
      type: Object,
      default: () => { }
    }
  }
}
</script>
