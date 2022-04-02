<template>
  <div>
    <el-select
      v-model="config.value"
      :multiple="config.multiple"
      :disabled="config.disabled"
      :value-key="config.valueKey"
      :size="config.size"
      :clearable="config.clearable"
      :collapse-tags="config.collapseTags"
      :multiple-limit="config.multipleLimit"
      :name="config.name"
      :autocomplete="config.autocomplete"
      :auto-complete="config.autoComplete"
      :placeholder="config.placeholder"
      :filterable="config.filterable"
      :allow-create="config.allowCreate"
      :filter-method="config.filterMethod"
      :remote="config.remote"
      :remote-method="config.remoteMethod"
      :loading="config.loading"
      :loading-text="config.loadingText"
      :no-match-text="config.noMatchText"
      :no-data-text="config.noDataText"
      :popper-class="config.popperClass"
      :reserve-keyword="config.reserveKeyword"
      :default-first-option="config.defaultFirstOption"
      :popper-append-to-body="config.popperAppendToBody"
      :automatic-dropdown="config.automaticDropdown"
      v-on="$listeners"
    >
      <template slot="prefix">
        <slot name="prefix"></slot>
      </template>
      <template slot="empty">
        <slot name="empty"></slot>
      </template>
      <slot></slot>

      <!-- <el-option
        v-for="(item, index) in content"
        :value="item.value"
        :label="item.label"
        :disabled="item.disabled"
        :key="index"
      >
      </el-option> -->
    </el-select>
  </div>
</template>

<script>
export default {
  name: "Select",
  props: {
    config: {
      type: Object,
      default: () => {},
    },
    content: {
      type: Array,
      default: () => [],
    },
  }
};
</script>
