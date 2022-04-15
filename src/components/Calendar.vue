<template>
  <div>
    <el-calendar 
    v-model="config.value"
    :range="config.range"
    :first-day-of-week="config.firstDayOfWeek"
    >
       <slot></slot>
    </el-calendar>
  </div>
</template>

<script>
export default {
    name: "Calendar",
    props: {
        config: {
            type: Object,
            default: () => {}
        }
    }
};
</script>

<style></style>
