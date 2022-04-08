<template>
  <div>
    <el-tag
      :type="config.type"
      :closable="config.closable"
      :disable-transitions="config.disableTransitions"
      :hit="config.hit"
      :colot="config.color"
      :size="config.size"
      :effect="config.effect"
      v-on="$listeners">
      {{ content }}
    </el-tag>
  </div>
</template>

<script>
export default {
  name: 'Tag',
  props: {
    content: {
      type: String,
      default: ''
    },
    config: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
