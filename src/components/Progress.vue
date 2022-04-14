<template>
  <div>
    <el-progress
      :percentage="config.percentage"
      :type="config.type"
      :stroke-width="config.strokeWidth"
      :text-inside="config.textInside"
      :status="config.status"
      :color="config.color"
      :width="config.width"
      :show-text="config.showText"
      :stroke-linecap="config.strokeLinecap"
      :format="config.format"
      v-on="$listeners">
    </el-progress>
  </div>
</template>

<script>
export default {
  name: 'Progress',
  props: {
    config: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
