<template>
  <!-- v-model="config.value" -->
  <el-table-column
    v-bind="$attrs"
    :type="config.type"
    :index="config.index"
    :column-key="config.columnKey"
    :label="config.label"
    :prop="config.prop"
    :width="config.width"
    :min-width="config.minWidth"
    :fixed="config.fixed"
    :render-header="config.renderHeader"
    :sortable="config.sortable"
    :sort-method="config.sortMethod"
    :sort-by="config.sortBy"
    :sort-orders="config.sortOrders"
    :resizable="config.resizeable"
    :formatter="config.formatter"
    :show-overflow-tooltip="config.showOverflowTooltip"
    :align="config.align"
    :header-align="config.headerAlign"
    :class-name="config.className"
    :label-class-name="config.labelClassName"
    :selectable="config.selectable"
    :reserve-selection="config.reserveSelection"
    :filters="config.filters"
    :filter-placement="config.filterPlacement"
    :filter-multiple="config.filterMultiple"
    :filter-method="config.filterMethod"
    :filtered-value="config.filteredValue"
    v-on="$listeners"
  >
    <template slot-scope="{ row, column, $index }">
      <slot :nativeData="[row, column, $index]" name="custom"></slot>
      <span v-if="!config.isNativeRenter">{{ row[column.property] }}</span>
    </template>
    <!-- <template slot-scope="scope" >
      <slot :nativeData="scope" name="custom"></slot>
      {{scope.row[scope.column.property]}}
    </template> -->
    <template slot="header">
      <slot name="header"></slot>
    </template>
  </el-table-column>
</template>

<script>
export default {
  name: 'TableColumn',
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
