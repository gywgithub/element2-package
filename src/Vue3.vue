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
      <!-- Cbf-nav-menu  -->
      <Cbf-nav-menu
        ref="cbfNavMenu"
        :config="navMenu.config"
        :content="navMenu.content"
        @CbfHandleOpen="navMenuOpen"
        @CbfHandleClose="navMenuClose"
      >
      </Cbf-nav-menu>
    </div>
    <div class="div">
      <h2>TABS</h2>
      <Cbf-tabs :config="tabs.config" :content="tabs.content">
        <slot>我是123</slot>
      </Cbf-tabs>
    </div>
    <div class="div">
      <h2>面包屑</h2>
      <Cbf-breadcrumb
        :config="breadcrumb.config"
        :content="breadcrumb.content"
      ></Cbf-breadcrumb>
    </div>
    <div class="div">
      <h2>页头</h2>
      <Cbf-page-header
        :config="pageHeader.config"
        :content="pageHeader.content"
      ></Cbf-page-header>
    </div>
    <div class="div">
      <h2>Message</h2>
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
      <Cbf-dropdown :config="dropDown.config" :content="dropDown.content">
      </Cbf-dropdown>
    </div>
    <div class="div">
      <el-button @click="openMessageBox()">MessageBox</el-button>
    </div>
    <div class="div">
      <h2>Steps</h2>
      <Cbf-steps :config="steps.config" :content="steps.content"></Cbf-steps>
    </div>
    <h1>--------------------vue3 end-----------------</h1>
    <div class="div"></div>
  </div>
</template>

<script>
import {
  CbfMessage,
  CbfConfirm,
  CbfOpenLoading,
  CbfCloseLoading
} from './components/js/Notice';
import CbfNavMenu from './components/NavMenu';
import CbfTabs from './components/Tabs';
import CbfBreadcrumb from './components/Breadcrumb';
import CbfPageHeader from './components/PageHeader';
import CbfDropdown from './components/Dropdown';
import { CbcNavMenuLists } from './components/js/CbcNavMenu';
import CbfSteps from './components/Steps';

export default {
  name: 'vue3',
  components: {
    CbfNavMenu,
    CbfTabs,
    CbfBreadcrumb,
    CbfPageHeader,
    CbfDropdown,
    CbfSteps
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
      // CbfNavMenu
      navMenu: {
        config: {
          mode: 'vertical',
          collapse: false
        },
        content: CbcNavMenuLists
      },
      // CbfTabs
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
      // CbfBreadcrumb
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
    openCbfNavMenu() {
      // this.$refs.cbfNavMenu.handleOpen();
    },
    openInfo() {
      CbfMessage({
        type: 'info',
        message: '这是一条消息提示',
        showClose: true
      });
    },
    openSuccess() {
      CbfMessage({ type: 'success', message: '这是一条消息提示' });
    },
    openWarning() {
      CbfMessage({ type: 'warning', message: '这是一条消息提示' });
    },
    openError() {
      CbfMessage({ type: 'error', message: '这是一条消息提示' });
    },
    openHtml() {
      CbfMessage({
        message: `<h1>这是 <i>HTML</i> 片段</h1>
      <h1>这是 <i>HTML</i> 片段</h1>`,
        dangerouslyUseHTMLString: true
      });
    },
    openMessageBox() {
      let err = '你确定要打开这个吗？';
      CbfConfirm(err, '提示', {
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
      CbfOpenLoading();
      setTimeout(() => {
        CbfCloseLoading();
      }, 3000);
    },
    CbfPageHeader() {
      this.$refs.child.CbfPageHeaderGoBack();
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
