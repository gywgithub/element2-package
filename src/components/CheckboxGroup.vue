<template>
  <div>
    <el-checkbox-group
      v-model="config.value"
      :min="config.min"
      :max="config.max"
      :size="config.size"
      :text-color="config.textColor"
      :fill="config.fill"
      v-on="$listeners"
    >
      <template v-if="!config.isButton">
        <el-checkbox
          v-for="(item, index) in content"
          :key="index"
          :label="item.label"
          :disabled="item.disabled"
          :border="item.border"
          :name="item.name"
          :checked="item.checked"
          :indeterminate="item.indeterminate"
        >
          {{ item.label }}
        </el-checkbox>
      </template>
      <template v-else>
        <el-checkbox-button
          v-for="(item, index) in content"
          :key="index"
          :label="item.label"
          :disabled="item.disabled"
          :border="item.border"
          :name="item.name"
          :checked="item.checked"
          :indeterminate="item.indeterminate"
        >
          {{ item.label }}
        </el-checkbox-button>
      </template>
    </el-checkbox-group>
  </div>
</template>

<script>
export default {
  name: "CheckboxGroup",
  props: {
    config: {
      type: Object,
      default: () => {},
    },
    content: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
