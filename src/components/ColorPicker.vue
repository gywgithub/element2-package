<template>
  <div>
    <!-- v-model="config.value" -->
    <el-color-picker
      v-bind="$attrs"
      :disabled="config.disabled"
      :size="config.size"
      :show-alpha="config.showAlpha"
      :color-format="config.colorFormat"
      :popper-class="config.popperClass"
      :predefine="config.predefine"
      v-on="$listeners"
    >
    </el-color-picker>
  </div>
</template>

<script>
export default {
  name: 'ColorPicker',
  props: {
    config: {
      type: Object,
      default: () => { }
    }
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>
