<template>
  <div>
    <el-card
      :header="config.header"
      :body-style="config.bodyStyle"
      :shadow="config.shadow"
      v-on="$listeners">
      <slot></slot>  
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    config: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
