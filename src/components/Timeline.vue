<template>
  <div>
    <el-timeline
      :reverse="config"
    >
    <template>
        <slot></slot>
    </template>
    </el-timeline>
  </div>
</template>

<script>
export default {
    name: "Timeline",
    props: {
        config: {
            type: Boolean,
            default: false
        }
    }
};
</script>

<style></style>
