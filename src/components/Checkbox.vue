<template>
  <div>
    <template v-if="!config.isButton">
      <el-checkbox
        v-model="config.value"
        :true-label="config.trueLabel"
        :false-label="config.falseLabel"
        :disabled="config.disabled"
        :border="config.border"
        :size="config.size"
        :name="config.name"
        :checked="config.checked"
        :indeterminate="config.indeterminate"
        v-on="$listeners"
      >
        {{ content }}
      </el-checkbox>
    </template>
    <template v-else>
      <el-checkbox-button
        v-model="config.value"
        :true-label="config.trueLabel"
        :false-label="config.falseLabel"
        :disabled="config.disabled"
        :border="config.border"
        :size="config.size"
        :name="config.name"
        :checked="config.checked"
        :indeterminate="config.indeterminate"
        v-on="$listeners"
      >
        {{ content }}
      </el-checkbox-button>
    </template>
  </div>
</template>

<script>
export default {
  name: "Checkbox",
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
