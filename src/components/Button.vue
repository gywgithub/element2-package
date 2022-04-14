<template>
  <div>
    <!-- elementui -->
    <!-- 方案1 -->
    <!-- <el-button
         v-bind="$attrs"
         v-on="$listeners">
            {{ content }}
        </el-button> -->
    <!-- 方案二 -->
    <el-button
      :size="config.size"
      :type="config.type"
      :plain="config.plain"
      :round="config.round"
      :circle="config.circle"
      :loading="config.loading"
      :disabled="config.disabled"
      :icon="config.icon"
      :autofocus="config.autofocus"
      :native-type="config.nativeType"
    >
      {{ content }}
      <!-- <slot></slot> -->
    </el-button>
  </div>
</template>

<script>
export default {
  name: "Button",
  props: {
    content: {
      type: String,
      default: "按钮",
    },
    config: {
      type: Object,
      default: () => {},
    },
  },
};
</script>
