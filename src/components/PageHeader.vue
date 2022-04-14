<template>
  <div>
    <el-page-header
      @back="goBack"
      :content="config.content"
      :title="config.title"
    >
      <slot></slot>
    </el-page-header>
  </div>
</template>

<script>
export default {
  name: 'CbcPageHeader',
  props: {
    config: {
        type: Object,
        default: () => {}
      },
      content: {
        type: Array,
        default: () => []
      }
  },
  methods: {
    goBack() {
      this.$emit('cbfGoBack')
    }
  }
};
</script>

<style></style>
