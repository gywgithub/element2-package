<template>
  <div>
    <el-tooltip
      :effect="config.effect"
      :content="config.content"
      :placement="config.placement"
      :v-model="config.value"
      :disabled="config.disabled"
      :offset="config.offset"
      :transition="config.transition"
      :visible-arrow="config.visibleArrow"
      :popper-options="config.popperOptions"
      :open-delay="config.openDelay"
      :manual="config.manual"
      :popper-class="config.popperClass"
      :enterable="config.enterable"
      :hide-after="config.hideAfter"
      :tabindex="config.tabindex"
      v-on="$listeners">
      <template slot="content">
        <slot name="content"></slot>
      </template>
      <slot></slot>
    </el-tooltip>
  </div>
</template>

<script>
export default {
  name: 'Tooltip',
  props: {
    config: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
