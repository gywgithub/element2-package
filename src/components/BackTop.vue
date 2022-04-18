<template>
  <div>
      <el-backtop
      :target="config.target"
      :visibility-height="config.visibilityHeight"
      :right="config.right"
      :bottom="config.bottom"
      @click='btnClick'
      >
        <slot></slot>
      </el-backtop>
  </div>
</template>

<script>
export default {
    name: "BackTop",
    props: {
        config: {
            type: Object,
            default: () => {}
        }
    },
    methods: {
        btnClick(){
            this.$emit('CbfBackTopGo')
        }
    }
}
</script>

<style>

</style>