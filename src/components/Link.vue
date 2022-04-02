<template>
  <div>
    <el-link
      :type="config.type"
      :underline="config.underline"
      :disabled="config.disabled"
      :href="config.href"
      :icon="config.icon"
    >
      <!-- <slot></slot> -->
      {{ content }}
    </el-link>
  </div>
</template>

<script>
export default {
  name: "Link",
  props: {
    content: {
      type: String,
      default: "123",
    },
    config: {
      type: Object,
      default: () => { },
    },
  },
};
</script>
