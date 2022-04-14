<template>
  <div>
    <el-dropdown 
      :type="config.type"
      :size="config.size"
      :split-button="config.splitButton"
      :placement="config.placement"
      :tigger="config.tigger"
      :hide-on-click="config.hideOnClick"
      :show-timeout="config.showTimeout"
      :hide-timeout="config.hideTimout"
      :tabindex="config.tabindex"
    >
      <span class="el-dropdown-link">
        下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item
          :command="config.subConfig.command"
          :disabled="config.subConfig.disabled"
          :divided="config.subConfig.divided"
          :icon="config.subConfig.icon" 
          v-for="item in content" 
          :key="item.name"
        >
         {{ item.name }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  name: 'Dropdown',
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
