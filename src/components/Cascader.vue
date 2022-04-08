<template>
  <div>
    <el-cascader
      v-model="config.value"
      :options="config.options"
      :props="config.props"
      :size="config.size"
      :placeholder="config.placeholder"
      :disabled="config.disabled"
      :clearable="config.clearable"
      :show-all-levels="config.showAllLevels"
      :collapse-tags="config.collapseTags"
      :separator="config.separator"
      :filterable="config.filterable"
      :filter-method="config.filterMethod"
      :debounce="config.debounce"
      :before-filter="config.beforeFilter"
      :popper-class="config.popperClass"
      v-on="$listeners">
        <template slot-scope="{ node, data }">
          <slot :data="data" :node="node"></slot>
        </template>
    </el-cascader>
  </div>
</template>

<script>
export default {
  name: "Cascader",
  props: {
    config: {
      type: Object,
      default: () => {},
    }
  }
};
</script>
