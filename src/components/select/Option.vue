<template>
  <div>
     <el-option
        :value="content.value"
        :label="content.label"
        :disabled="content.disabled"
      >
        <slot></slot>
      </el-option>
  </div>
</template>

<script>
export default {
  name: 'Option',
  props: {
    content: {
      type: Object,
      default: () => {}
    }
  },
}
</script>
