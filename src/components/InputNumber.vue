<template>
  <div>
    <el-input-number
      v-model="config.value"
      :max="config.max"
      :min="config.min"
      :step="config.step"
      :step-strictly="config.stepStrictly"
      :precision="config.precision"
      :size="config.size"
      :disabled="config.disabled"
      :controls="config.controls"
      :controls-position="config.controlsPosition"
      :name="config.name"
      :label="config.label"
      :placeholder="config.placeholder"
      v-on="$listeners"
    >
    </el-input-number>
  </div>
</template>

<script>
export default {
  name: "InputNumber",
  props: {
    config: {
      type: Object,
      default: () => {},
    },
  },
};
</script>
