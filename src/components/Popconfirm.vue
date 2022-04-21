<template>
  <div>
    <el-popconfirm
      :title="config.title"
      :confirm-button-text="config.confirmButtonText"
      :cancel-button-text="config.cancelButtonText"
      :confirm-button-type="config.confirmButtonType"
      :cancel-button-type="config.cancelButtonType"
      :icon="config.icon"
      :icon-color="config.iconColor"
      :hide-icon="config.hideIcon"
      v-on="$listeners">
      <template slot="reference">
        <slot name="reference"></slot>
      </template>
    </el-popconfirm>
  </div>
</template>

<script>
export default {
  name: 'Popconfirm',
  props: {
    config: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
