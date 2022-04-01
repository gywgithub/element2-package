<template>
  <div>
    <el-radio-group
      v-model="config.value"
      :text-color="config.textColor"
      :fill="config.fill"
      :size="config.size"
      :disabled="config.disabled"
      v-on="$listeners"
    >
      <template v-if="!config.isButton">
        <el-radio
          v-for="(item, index) in content"
          :key="index"
          :value="item.value"
          :label="item.label"
          :disabled="item.disabled"
          :border="item.border"
          :size="item.size"
          :name="item.name"
        >
          {{ item.content }}
        </el-radio>
      </template>
      <template v-else>
        <el-radio-button
          v-for="(item, index) in content"
          :key="index"
          :value="item.value"
          :label="item.label"
          :disabled="item.disabled"
          :border="item.border"
          :size="item.size"
          :name="item.name"
          :text-color="item.textColor"
          :fill="item.fill"
        >
          {{ item.content }}
        </el-radio-button>
      </template>
    </el-radio-group>
  </div>
</template>

<script>
export default {
  name: "RadioGroup",
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
