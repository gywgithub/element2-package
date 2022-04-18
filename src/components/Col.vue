<template>
  <el-col 
    :span="config.span"
    :offset="config.offset"
    :push="config.push"
    :pull="config.pull"
    :xs="config.xs"
    :sm="config.sm"
    :md="config.md"
    :lg="config.lg"
    :xl="config.xl"
    :tag="config.tag"
  >
    <slot></slot>
  </el-col>
</template>

<script>
export default {
  name: 'CBFCol',
  props: {
    config: {
      type: Object,
      default: () => { }
    }
  }
}
</script>
