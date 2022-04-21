<template>
  <div>
    <el-popover
      :trigger="config.trigger"
      :title="config.title"
      :content="config.content"
      :width="config.width"
      :placement="config.placement"
      :disabled="config.disabled"
      v-model="config.value"
      :offset="config.offset"
      :transition="config.transition"
      :visible-arrow="config.visibleArrow"
      :popper-options="config.popperOptions"
      :popper-class="config.popperClass"
      :open-delay="config.openDelay"
      :close-delay="config.closeDelay"
      :tabindex="config.tabindex"
      v-on="$listeners">
      <slot></slot>
      <template slot="reference">
        <slot name="reference"></slot>
      </template>
    </el-popover>
  </div>
</template>

<script>
export default {
  name: 'Popover',
  props: {
    config: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
