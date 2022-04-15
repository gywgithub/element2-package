<template>
  <div>
    <el-dialog
      :visible.sync="config.visible"
      :title="config.title"
      :width="config.width"
      :fullscreen="config.fullscreen"
      :top="config.top"
      :modal="config.modal"
      :modal-append-to-body="config.modalAppendToBody"
      :append-to-body="config.appendToAppend"
      :lock-scroll="config.lockScroll"
      :custom-class="config.customClass"
      :close-on-click-modal="config.closeOnClickModal"
      :close-on-press-escape="config.closeOnClickModal"
      :show-close="config.showClose"
      :before-close="config.beforeClose"
      :center="config.center"
      :destroy-on-close="config.destroyOnClose"
      v-on="$listeners">
      <template slot="title">
        <slot name="title"></slot>
      </template>
      <slot></slot>
      <template slot="footer">
        <slot name="footer"></slot>
      </template>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'Dialog',
  props: {
    config: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
