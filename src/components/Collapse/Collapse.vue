<template>
  <div>
    <el-collapse
      v-model="config.value"
      :accordion="config.accordion"
      v-on="$listeners">
      <slot></slot>
    </el-collapse>
  </div>
</template>

<script>
export default {
  name: 'Collapse',
  props: {
    config: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
