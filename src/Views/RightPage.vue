<template>
  <div>
    <h1>--------------------vue3 start-----------------</h1>
    <div class="div">
      <h2>导航菜单</h2>
      <el-radio-group
        v-model="navMenu.config.collapse"
        style="margin-bottom: 20px;"
      >
        <el-radio-button :label="false">展开</el-radio-button>
        <el-radio-button :label="true">收起</el-radio-button>
      </el-radio-group>
      <!-- nav-menu  -->
      <nav-menu
        ref="NavMenu"
        :config="navMenu.config"
        :content="navMenu.content"
        @HandleOpen="navMenuOpen"
        @HandleClose="navMenuClose"
      >
      </nav-menu>
    </div>
    <div class="div">
      <h2>TABS</h2>
      <tabs :config="tabs.config" :content="tabs.content">
        <slot>我是123</slot>
      </tabs>
    </div>
    <div class="div">
      <h2>面包屑</h2>
      <breadcrumb
        :config="breadcrumb.config"
        :content="breadcrumb.content"
      ></breadcrumb>
    </div>
    <div class="div">
      <h2>页头</h2>
      <page-header
        :config="pageHeader.config"
        :content="pageHeader.content"
      ></page-header>
    </div>
    <div class="div">
      <h2>Messages</h2>
      <el-button @click="openInfo()">info</el-button>
      <el-button @click="openSuccess()">success</el-button>
      <el-button @click="openWarning()">warn</el-button>
      <el-button @click="openError()">error</el-button>
      <el-button @click="openHtml()">html</el-button>
    </div>
    <div class="div">
      <h2>Loading</h2>
      <el-button @click="startLoading()">
        3s结束loading
      </el-button>
    </div>
    <div class="div">
      <h2>下拉菜单dropdown</h2>
      <dropdown :config="dropDown.config" :content="dropDown.content">
      </dropdown>
    </div>
    <div class="div">
      <el-button @click="openMessageBox()">MessageBox</el-button>
    </div>
    <div class="div">
      <h2>Steps</h2>
      <steps :config="steps.config" :content="steps.content"></steps>
    </div>
    <h1>--------------------vue3 end-----------------</h1>
    <div class="div"></div>
  </div>
</template>

<script>
import {
  Messages,
  Confirm,
  OpenLoading,
  CloseLoading
} from '../components/js/Notice';
import NavMenu from '../components/NavMenu';
import Tabs from '../components/Tabs';
import Breadcrumb from '../components/Breadcrumb';
import PageHeader from '../components/PageHeader';
import Dropdown from '../components/Dropdown';
import { NavMenuLists } from '../components/js/NavMenu';
import Steps from '../components/Steps';

export default {
  name: 'vue3',
  components: {
    NavMenu,
    Tabs,
    Breadcrumb,
    PageHeader,
    Dropdown,
    Steps
  },
  data() {
    return {
      popConfirm: {
        content: '删除123',
        config: {
          title: '删除',
          conText: '确认',
          canText: '取消',
          icon: 'el-icon-question',
          iconColor: 'red',
          hideIcon: false
        }
      },
      // NavMenu
      navMenu: {
        config: {
          mode: 'vertical',
          collapse: false
        },
        content: NavMenuLists
      },
      // Tabs
      tabs: {
        config: {
          activeName: '2',
          tabPosition: 'top',
          typeCard: 'border-card',
          subConfig: {}
        },
        content: [
          {
            title: 'Tab 1',
            name: '1',
            content: 'Tab 1 content'
          },
          {
            title: 'Tab 2',
            name: '2',
            content: 'Tab 2 content'
          }
        ]
      },
      // Breadcrumb
      breadcrumb: {
        content: [
          { name: '首页', url: 'www.baidu.com' },
          { name: '一级菜单' },
          { name: '二级菜单' },
          { name: '三级菜单' }
        ],
        config: {
          subConfig: {}
        }
      },
      pageHeader: {
        config: {
          content: '菜单一',
          title: '返回啊'
        },
        content: []
      },
      dropDown: {
        config: {
          subConfig: {}
        },
        content: [
          { name: '火锅', id: '1' },
          { name: '烤肉', id: '2' },
          { name: '炒菜', id: '3' },
          { name: '羊蝎子', id: '4' }
        ]
      },
      steps: {
        config: {
          active: 2,
          direction: "horizontal",
          simple: true
        },
        content: [
          { title: '选菜', icon: 'el-icon-edit' },
          { title: '下单', icon: 'el-icon-upload' },
          { title: '结账', icon: 'el-icon-picture' },
          { title: '送达', icon: 'el-icon-picture' }
        ]
      }
    };
  },
  methods: {
    navMenuOpen() {
      console.log('eee111');
    },
    navMenuClose() {
      console.log('eee22');
    },
    openNavMenu() {
      // this.$refs.NavMenu.handleOpen();
    },
    openInfo() {
      Messages({
        type: 'info',
        message: '这是一条消息提示',
        showClose: true
      });
    },
    openSuccess() {
      Messages({ type: 'success', message: '这是一条消息提示' });
    },
    openWarning() {
      Messages({ type: 'warning', message: '这是一条消息提示' });
    },
    openError() {
      Messages({ type: 'error', message: '这是一条消息提示' });
    },
    openHtml() {
      Messages({
        message: `<h1>这是 <i>HTML</i> 片段</h1>
      <h1>这是 <i>HTML</i> 片段</h1>`,
        dangerouslyUseHTMLString: true
      });
    },
    openMessageBox() {
      let err = '你确定要打开这个吗？';
      Confirm(err, '提示', {
        type: 'warning',
        center: false,
        showCancelButton: true,
        confirmButtonText: '保存'
      })
        .then(() => {
          console.log('点击了确认');
        })
        .catch(() => {
          console.log('点击了取消');
        });
    },
    startLoading() {
      OpenLoading();
      setTimeout(() => {
        CloseLoading();
      }, 3000);
    },
    PageHeader() {
      this.$refs.child.PageHeaderGoBack();
    }
  },
  mounted() {}
};
</script>

<style>
.div {
  margin: 50px 0;
}
</style>
