<template>
  <div id="navbar">
    <el-menu
      :mode="config.mode"
      :collapse="config.collapse"
      :background-color="config.backgroundColor"
      :text-color="config.textColor"
      :active-text-color="config.activeTextColor"
      :default-active="config.defaultActive"
      :default-openeds="config.opens"
      :unique-opened="config.uniqueOpened"
      :menu-trigger="config.menuTrigger"
      :router="config.router"
      :collapse-transition="config.collapseTransition"
      class="el-menu-vertical-demo" 
      @open="handleOpen"
      @close="handleClose"
      @select="menuSelect"
    >
    
      <template v-for="(first, f_index) in content">
       
        <el-submenu
          :index="first.index"
          :key="`menu0_${f_index}`"
          v-if="first.second.length"
        >
          <template slot="title" v-if="first.title">
            <i :class="first.icon"></i>
            <span slot="title">{{ first.title }}</span>
          </template>
          <div v-for="(second, s_index) in first.second" :key="s_index">
            
            <el-menu-item v-if="second.third.length == 0" :index="second.index">
              {{ second.content }}
            </el-menu-item>
           
            <el-submenu v-if="second.third.length > 0" :index="second.index">
              <template slot="title">{{second.content}}</template>
              <el-menu-item
                v-for="(third, t_index) in second.third"
                :key="t_index"
                :index="third.index"
              >
                {{ third.content }}
              </el-menu-item>
            </el-submenu>
          </div>
        </el-submenu>
       
        <el-menu-item
          :index="first.index"
          :key="`menu0_${f_index}`"
          v-else
        >
          <i class="el-icon-menu"></i>
          <span slot="title">{{ first.title }}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'CbfNavMenu',
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
      opens: [],
      currentRoute: ''
    };
  },

  created() {
    // this.currentRoute = this.$route.path;
    this.currentRoute = 'www.baidu.com';
    this.opens = [];
    // this.opens[0] = this.currentRoute.substring(
    //   this.currentRoute.indexOf('/'),
    //   this.currentRoute.lastIndexOf('/')
    // );
    console.log(this.opens);
  },
  mounted() {},
  methods: {
    handleOpen(key, keyPath) {
      let obj = {
        key,
        keyPath
      };
      this.$emit('CbfHandleOpen', obj);
    },
    handleClose(key, keyPath) {
      let obj = {
        key,
        keyPath
      };
      this.$emit('CbfHandleClose', obj);
    },
    menuSelect(){
      
    }
  }
};
</script>

<style scoped>
#navbar {
  width: 200px;
}
/* .el-menu-vertical-demo:not(.el-menu--collapse) {
  min-height: 100vh;
  overflow-y: scroll;
} */
</style>
