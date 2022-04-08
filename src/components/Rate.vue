<template>
  <div>
    <!-- v-model="config.value" -->
    <el-rate
      v-bind="$attrs"
      :max="config.max"
      :disabled="config.disabled"
      :allow-half="config.allowHalf"
      :low-threshold="config.lowThreshold"
      :colors="config.colors"
      :void-color="config.voidColor"
      :disabled-void-color="config.disabledVoidColor"
      :icon-classes="config.iconClasses"
      :void-icon-class="config.voidIconClass"
      :disabled-void-icon-class="config.disabledVoidIconClass"
      :show-text="config.showText"
      :show-score="config.showScore"
      :text-color="config.textColor"
      :texts="config.texts"
      :score-template="config.scoreTemplate"
      v-on="$listeners"
    >
      {{ content }}
    </el-rate>
  </div>
</template>

<script>
export default {
  name: 'Rate',
  props: {
    content: {
      type: String,
      default: ''
    },
    config: {
      type: Object,
      default: () => { }
    }
  }
}
</script>
