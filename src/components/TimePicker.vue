<template>
  <div>
    <el-time-picker
      v-model="config.value"
      :picker-options="config.pickerOptions"
      :placeholder="config.placeholder"
      :readonly="config.readonly"
      :disabled="config.disabled"
      :editable="config.editable"
      :clearable="config.clearable"
      :size="config.size"
      :align="config.align"
      :popper-class="config.popperClass"
      :default-value="config.defaultValue"
      :name="config.name"
      :prefix-icon="config.prefixIcon"
      :clear-icon="config.clearIcon"
      :arrow-control="config.arrowControl"
      :start-placeholder="config.startPlaceholder"
      :end-placeholder="config.endPlaceholder"
      :is-range="config.isRange"
      :range-separator="config.rangeSeparator"
      :value-format="config.valueFormat"
      v-on="$listeners"
    >
      {{ content }}
    </el-time-picker>
  </div>
</template>

<script>
export default {
  name: "TimePicker",
  props: {
    content: {
      type: String,
      default: "",
    },
    config: {
      type: Object,
      default: () => {},
    },
  },
  };
</script>
