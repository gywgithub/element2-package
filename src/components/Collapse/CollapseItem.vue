<template>
  <div>
    <el-collapse-item
      :name="content.name"
      :title="content.title"
      :disabled="content.disabled"
      v-on="$listeners">
      <template slot="title">
        <slot name="title"></slot>
      </template>
      <slot></slot>
    </el-collapse-item>
  </div>
</template>

<script>
export default {
  name: 'CollapseItem',
  props: {
    content: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
