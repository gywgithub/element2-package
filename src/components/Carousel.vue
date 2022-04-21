<template>
  <div>
    <el-carousel
      :height="config.height"
      :initial-index="config.initialIndex"
      :trigger="config.trigger"
      :autoplay="config.autoplay"
      :interval="config.interval"
      :indicator-position="config.indicatorPosition"
      :arrow="config.arrow"
      :type="config.type"
      :loop="config.loop"
      :direction="config.direction"
      v-on="$listeners">
      <el-carousel-item v-for="(item, index) in content" :key="index">
        <template>
          <slot :item="item"></slot>
        </template>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: 'Carousel',
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
}
</script>
