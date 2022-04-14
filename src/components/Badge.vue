<template>
  <div>
    <el-badge
      :value="config.value"
      :max="config.max"
      :is-dot="config.isDot"
      :hidden="config.hidden"
      :type="config.type">
      <slot></slot>
    </el-badge>
  </div>
</template>

<script>
export default {
  name: 'Badge',
  props: {
    config: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
