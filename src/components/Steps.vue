<template>
  <div>
    <div>
      <el-steps
        :space="config.space"
        :direction="config.direction"
        :active="config.active"
        :process-status="config.processStatus"
        :finish-status="config.finishStatus"
        :align-center="config.alignCenter"
        :simple="config.simple"
      >
        <el-step
          v-for="(item, index) in content"
          :key="index"
          :title="item.title"
          :description="item.description"
          :icon="item.icon"
          :status="item.status"
        ></el-step>
      </el-steps>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CbfSteps',
  props: {
    config: {
      type: Object,
      default: () => {}
    },
    content: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style></style>
