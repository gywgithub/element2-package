<template>
  <div>
    <el-tree
      :data="config.data"
      :empty-text="config.emptyText"
      :node-key="config.nodeKey"
      :props="config.props"
      :render-after-expand="config.renderAfterExpand"
      :load="config.load"
      :render-content="config.renderContent"
      :highlight-current="config.highlightCurrent"
      :default-expand-all="config.defaultExpandAll"
      :expand-on-click-node="config.expandOnClickNode"
      :check-on-click-node="config.checkOnClickNode"
      :auto-expand-parent="config.autoExpandParent"
      :default-checked-keys="config.defaultCheckedKeys"
      :current-node-key="config.currentNodeKey"
      :filter-node-method="config.filterNodeMethod"
      :accordion="config.accordion"
      :indent="config.indent"
      :icon-class="config.iconClass"
      :lazy="config.lazy"
      :draggable="config.draggable"
      :allow-drag="config.allowDrag"
      :allow-drop="config.allowDrop"
      v-on="$listeners">
        <template slot-scope="{ node, data }">
          <slot :node="node" :data="data" v-if="$scopedSlots.default != undefined"></slot>
          <span v-else>
            {{ node.label }}
          </span>
        </template>
    </el-tree>
  </div>
</template>

<script>
export default {
  name: 'Tree',
  props: {
    config: {
      type: Object,
      default: () => {}
    }
  },
  mounted() {
    console.log(this.$scopedSlots)
    console.log(this.$scopedSlots.default !== undefined);
  }
}
</script>
