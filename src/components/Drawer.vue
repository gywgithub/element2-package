<template>
  <el-drawer
    :title="config.title"
    :visible.sync="config.visible"
    :append-to-body="config.appendToBody"
    :before-close="config.beforeClose"
    :close-on-press-escape="config.closeOnPressEscape"
    :custom-class="config.customClass"
    :destroy-on-close="config.destroyOnClose"
    :modal="config.modal"
    :modal-append-to-body="config.modalAppendToBody"
    :direction="config.direction"
    :show-close="config.showClose"
    :size="config.size"
    :wrapperClosable="config.wrapperClosable"
    :withHeader="config.withHeader"
    v-on="$listeners"
  >
    <slot></slot>
  </el-drawer>
</template>

<script>
export default {
  name: 'CBFDrawer',
  props: {
    config: {
      type: Object,
      default: () => {

      }
    }
  }
}
</script>
