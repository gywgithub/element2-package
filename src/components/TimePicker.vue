<template>
  <div>
    <el-time-select
      v-model="timePickerConfig.value"
      :picker-options="timePickerConfig.pickerOptions"
      :placeholder="timePickerConfig.placeholder"
      v-on="$listeners"
    >
      {{ timePickerContent }}
      >
    </el-time-select>
  </div>
</template>

<script>
export default {
  name: 'TimePicker',
  props: {
    timePickerContent: {
      type: String,
      default: ''
    },
    timePickerConfig: {
      type: Object,
      default: () => { }
    }
  }
}
</script>
