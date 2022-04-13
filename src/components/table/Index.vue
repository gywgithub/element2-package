<template>
  <div>
      <!-- v-model="config.value" -->
    <el-table
      v-bind="$attrs"
      :height="config.height"
      :max-height="config.maxHeight"
      :stripe="config.stripe"
      :border="config.border"
      :size="config.size"
      :fit="config.fit"
      :show-header="config.showHeader"
      :highlight-current-row="config.highlightCurrentRow"
      :row-class-name="config.rowClassName"
      :row-style="config.rowStyle"
      :cell-class-name="config.cellClassName"
      :cell-style="config.cellStyle"
      :header-row-class-name="config.headerRowClassName"
      :header-row-style="config.headerRowStyle"
      :header-cell-class-name="config.headerCellClassName"
      :header-cell-style="config.headerCellStyle"
      :row-key="config.rowKey"
      :empty-text="config.emptyText"
      :default-expand-all="config.defaultExpandAll"
      :expand-row-keys="config.expandRowKeys"
      :default-sort="config.defaultSort"
      :tooltip-effect="config.tooltipEffect"
      :show-summary="config.showSummary"
      :sum-text="config.sumText"
      :summary-method="config.summaryMethod"
      :span-method="config.spanMethod"
      :select-on-indeterminate="config.selectOnIndeterminate"
      :indent="config.indent"
      :lazy="config.lazy"
      :load="config.load"
      :tree-props="config.treeProps"
      v-on="$listeners"
    >
      <slot></slot>
      <!-- <template v-for="(v, i) in config.columns" >
        <el-table-column v-if="!v.slot" :key="i" :prop="v.prop" :label="v.label" :width="v.width">
        </el-table-column>
        <el-table-column v-else :key="i" :prop="v.prop" :label="v.label" :width="v.width">
          <slot></slot>
        </el-table-column>
      </template> -->
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'CBFTable',
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

