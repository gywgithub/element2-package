<template>
  <div>
    <el-timeline-item
        v-for="(item,index) in content"
        :key="index" 
        :timestamp="item.timestamp"
        :hide-timestamp="item.hideTimestamp"
        :placement="item.placement"
        :type="item.type"
        :color="item.color"
        :size="item.size"
        :icon="item.icon"
    >
        <slot v-bind:timeLineItem="item">
            {{ item.lastName }}
        </slot>

    </el-timeline-item>
  </div>
</template>

<script>
export default {
    name: "TimelineItem",
    props: {
        content: {
            type: Array,
            default: () => []
        }
    }
}
</script>

<style>

</style>