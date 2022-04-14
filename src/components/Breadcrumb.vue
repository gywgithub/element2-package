<template>
  <div>
    <el-breadcrumb 
      :separator="config.separator"
      :separator-class="config.separatorClass"
    >
      <el-breadcrumb-item 
        :to="config.subConfig.to"
        :replace="config.subConfig.replace"
        v-for="item in content"
        :key='item.name'
        >
          {{item.name}}
        </el-breadcrumb-item
      >
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: 'CbcBreadcrumb',
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
};
</script>

<style></style>
