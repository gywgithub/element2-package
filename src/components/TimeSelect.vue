<template>
  <div>
    <el-time-select
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
      v-on="$listeners"
    >
      {{ timeSelectContent }}
    </el-time-select>
  </div>
</template>

<script>
export default {
  name: 'TimeSelect',
  props: {
    timeSelectContent: {
      type: String,
      default: ''
    },
    config: {
      type: Object,
      default: () => { }
    }
  }
}
</script>
