<template>
  <div>
    <el-input
      v-model="config.value"
      :type="config.type"
      :minlength="config.minlength"
      :maxlength="config.maxlength"
      :show-word-limit="config.showWordLimit"
      :placeholder="config.placeholder"
      :clearable="config.clearable"
      :show-password="config.showPassword"
      :disabled="config.disabled"
      :size="config.size"
      :prefix-icon="config.prefixIcon"
      :suffix-icon="config.suffixIcon"
      :rows="config.rows"
      :autosize="config.autosize"
      :autocomplete="config.autocomplete"
      :auto-complete="config.autoComplete"
      :name="config.name"
      :readonly="config.readonly"
      :max="config.max"
      :min="config.min"
      :step="config.step"
      :resize="config.resize"
      :autofocus="config.autofocus"
      :form="config.form"
      :label="config.label"
      :tabindex="config.tabindex"
      :validate-event="config.validateEvent"
      v-on="$listeners"
    >
      <template slot="prepend">
        <slot name="prepend"></slot>
      </template>
      <template slot="append">
        <slot name="append"></slot>
      </template>
      <template slot="prefix">
        <slot name="prefix"></slot>
      </template>
      <template slot="suffix">
        <slot name="suffix"></slot>
      </template>
    </el-input>
  </div>
</template>

<script>
export default {
  name: "Input",
  props: {
    config: {
      type: Object,
      default: () => {},
    },
  },
};
</script>
