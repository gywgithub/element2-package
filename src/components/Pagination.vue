<template>
  <div>
    <el-pagination
      :small="config.small"
      :background="config.background"
      :page-size="config.pageSize"
      :total="config.total"
      :page-count="config.pageCount"
      :pager-count="config.pagerCount"
      :layout="config.layout"
      :page-sizes="config.pageSizes"
      :popper-class="config.popperClass"
      :prev-text="config.prevText"
      :next-text="config.nextText"
      :disabled="config.disabled"
      :hide-on-single-page="config.hideOnSinglePage"
      v-on="$listeners">
      <slot></slot>
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    config: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
