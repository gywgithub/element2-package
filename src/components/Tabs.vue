<template>
  <div>
    <el-tabs
      v-model="config.activeName"
      :type="config.typeCard"
      :closable="config.closeable"
      :addable="config.addable"
      :enitable="config.editable"
      :tab-position="config.tabPosition"
      :stretch="config.stretch"
      :before-leave="config.beforeLeave"
      @tab-click="tabClick"
      @tab-remove="tabRemove"
      @tab-add="tabAdd"
      @edit="tabEdit"
    >
      <el-tab-pane
        editableTabs
        v-for="item in content"
        :key="item.name"
        :label="item.title"
        :name="item.name"
        :closable="config.subConfig.closeable"
        :lazy="config.subConfig.lazy"
        :disabled="config.subConfig.disabled"
      >
        {{ item.content }}
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: 'CbcTabs',
  props: {
    config: {
      type: Object,
      default: () => {}
    },
    content: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      editableTabsValue: '1'
      // tabIndex: '1',
    };
  },
  mounted(){
    console.log('mounted',this.config,this.content)
  },
  methods: {
    tabClick(tab, event) {
      console.log(tab, event);
      this.$emit('tabClick')
    },
    tabRemove(tab, event) {
      console.log(tab, event);
      this.$emit('tabRemove')
    },
    tabAdd(tab, event) {
      console.log(tab, event);
      this.$emit('tabAdd')
    },
    tabEdit(tab, event) {
      console.log(tab, event);
      this.$emit('tabEdit')
    }
    // addTab() {
    //   let newTabName = ++this.tabIndex + '';
    //   this.editableTabs.push({
    //     title: 'New Tab',
    //     name: newTabName,
    //     content: 'New Tab content'
    //   });
    //   this.editableTabsValue = newTabName;
    // },
    // removeTab(targetName) {
    //   let tabs = this.editableTabs;
    //   let activeName = this.editableTabsValue;
    //   if (activeName === targetName) {
    //     tabs.forEach((tab, index) => {
    //       if (tab.name === targetName) {
    //         let nextTab = tabs[index + 1] || tabs[index - 1];
    //         if (nextTab) {
    //           activeName = nextTab.name;
    //         }
    //       }
    //     });
    //   }

    //   this.editableTabsValue = activeName;
    //   this.editableTabs = tabs.filter(tab => tab.name !== targetName);
    // }
  }
};
</script>

<style></style>
