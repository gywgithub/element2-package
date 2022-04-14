<template>
  <div>
    <el-slider
      v-model="config.value"
      :min="config.min"
      :max="config.max"
      :disabled="config.disabled"
      :step="config.step"
      :show-input="config.showInput"
      :show-input-controls="config.showInputControls"
      :input-size="config.inputSize"
      :show-stops="config.showStops"
      :show-tooltip="config.showTooltip"
      :range="config.range"
      :vertical="config.vertical"
      :height="config.height"
      :label="config.label"
      :debounce="config.debounce"
      :toolitp-class="config.toolitpClass"
      :marks="config.marks"
      v-on="$listeners"
    >
    </el-slider>
  </div>
</template>

<script>
export default {
  name: "Slider",
  props: {
    config: {
      type: Object,
      default: () => {},
    },
  },
};
</script>
