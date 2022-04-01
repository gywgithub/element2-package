<template>
  <div>
    <el-switch
      v-model="config.value"
      :disabled="config.disabled"
      :width="config.width"
      :active-icon-class="config.activeIconClass"
      :inactive-icon-class="config.inactiveIconClass"
      :active-text="config.activeText"
      :inactive-text="config.inactiveText"
      :active-value="config.activeValue"
      :inactive-value="config.inactiveValue"
      :active-color="config.activeColor"
      :inactive-color="config.inactiveColor"
      :name="config.name"
      :validate-event="config.validateEvent"
      v-on="$listeners"
    >
    </el-switch>
  </div>
</template>

<script>
export default {
  name: "SwitchUI",
  props: {
    config: {
      type: Object,
      default: () => {},
    },
  },
};
</script>
