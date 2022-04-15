<template>
  <div>
    <div style="margin: 20px 0">--- Vue1 ---</div>
    <h2 class="mt10">InputNumber计数器</h2>
    <InputNumber
      :config="inputNumber.config">
    </InputNumber>
    <h2 class="mt10">Select选择器</h2>
    <Select
      :config="select.config"
      :content="select.content"
    >
      <template #prefix>
        <span>12333</span>
      </template>
      <template #empty>
        <span>empty</span>
      </template>
      <template>
        <Option v-for="(item, index) in select.content" :content="item" :key="index">
          <template>
            <span>123</span>
            <span>-</span>
            <span>{{ item.label }}</span>
          </template>
        </Option>
      </template>
    </Select>
    <h2 class="mt10">Switch开关</h2>
    <SwitchUI
      :config="switchObj.config">
    </SwitchUI>
    <h2 class="mt10">Slider滑块</h2>
    <Slider
      :config="slider.config">
    </Slider>
    <h2 class="mt10">Cascader级联选择器</h2>
    <Cascader
      :config="cascader.config">
      <template slot-scope="scope">
        <span>{{ scope.data.label }}</span>
        <span v-if="!scope.node.isLeaf"> ({{ scope.data.children.length }}) </span>
      </template>
    </Cascader>
    <h2 class="mt10">CascaderPanel级联面板</h2>
    <Cascader-panel
      :config="cascader.config"
      v-model="cascader.config.value">
    </Cascader-panel>
    <h2 class="mt10">Tag标签</h2>
    <Tag
      :config="tag.config"
      :content="tag.content">
    </Tag>
    <h2 class="mt10">Progress进度条</h2>
    <Progress
      :config="progress.config">
    </Progress>
    <h2 class="mt10">Pagination分页</h2>
    <Pagination
      :config="pagination.config">
    </Pagination>
    <h2 class="mt10">Badge标记</h2>
    <Badge
      :config="badge.config">
      <div>测试</div>
    </Badge>
    <h2 class="mt10">Tree树形控件</h2>
    <Tree
      :config="tree.config">
      <!-- <span slot-scope="scope">
        <span>{{ scope.node.label }}</span>
        <span>
          <el-button
            type="text"
            size="mini"
            @click="() => append(scope.data)">
            Append
          </el-button>
          <el-button
            type="text"
            size="mini"
            @click="() => remove(scope.node, scope.data)">
            Delete
          </el-button>
        </span>
      </span> -->
    </Tree>
    <div style="margin: 20px 0">--- Vue1 End ---</div>
  </div>
</template>

<script>
import InputNumber from "./components/InputNumber.vue";
import Select from "./components/select/Select.vue";
import Option from "./components/select/Option.vue";
import SwitchUI from "./components/Switch.vue";
import Slider from "./components/Slider.vue";
import Cascader from "./components/Cascader.vue";
import CascaderPanel from "./components/CascaderPanel.vue";
import Tag from "./components/Tag.vue";
import Progress from "./components/Progress.vue";
import Pagination from "./components/Pagination.vue";
import Badge from "./components/Badge.vue";
import Tree from "./components/Tree.vue";


export default {
  name: "Vue1",
  components: {
    InputNumber,
    Select,
    Option,
    SwitchUI,
    Slider,
    Cascader,
    CascaderPanel,
    Tag,
    Progress,
    Pagination,
    Badge,
    Tree,
  },
  data() {
    return {
      // InputNumber计数器
      inputNumber: {
        config: {
          value: 4,
          min: 3,
        },
      },
      // Select选择器
      select: {
        config: {
          value: null,
          multiple: true,
        },
        content: [
          { label: "测试1", value: 1 },
          { label: "测试2", value: 2 },
          { label: "测试3", value: 3, disabled: true },
          { label: "测试4", value: 4 },
        ],
      },
      // Switch开关
      switchObj: {
        config: {
          value: true,
          activeText: "打开",
          inactiveText: "关闭",
          activeColor: "#13ce66",
          inactiveColor: "#ff4949",
        },
      },
      // Slider滑块
      slider: {
        config: {
          value: 30,
        },
      },
      // Cascader级联选择器
      cascader: {
        config: {
          value: '',
          options: [{
            value: 'zhinan',
            label: '指南',
            children: [{
              value: 'shejiyuanze',
              label: '设计原则',
              children: [{
                value: 'yizhi',
                label: '一致'
              }, {
                value: 'fankui',
                label: '反馈'
              }, {
                value: 'xiaolv',
                label: '效率'
              }, {
                value: 'kekong',
                label: '可控'
              }]
            }, {
              value: 'daohang',
              label: '导航',
              children: [{
                value: 'cexiangdaohang',
                label: '侧向导航'
              }, {
                value: 'dingbudaohang',
                label: '顶部导航'
              }]
            }]
          }, {
            value: 'zujian',
            label: '组件',
            children: [{
              value: 'basic',
              label: 'Basic',
              children: [{
                value: 'layout',
                label: 'Layout 布局'
              }, {
                value: 'color',
                label: 'Color 色彩'
              }, {
                value: 'typography',
                label: 'Typography 字体'
              }, {
                value: 'icon',
                label: 'Icon 图标'
              }, {
                value: 'button',
                label: 'Button 按钮'
              }]
            }, {
              value: 'form',
              label: 'Form',
              children: [{
                value: 'radio',
                label: 'Radio 单选框'
              }, {
                value: 'checkbox',
                label: 'Checkbox 多选框'
              }, {
                value: 'input',
                label: 'Input 输入框'
              }, {
                value: 'input-number',
                label: 'InputNumber 计数器'
              }, {
                value: 'select',
                label: 'Select 选择器'
              }, {
                value: 'cascader',
                label: 'Cascader 级联选择器'
              }, {
                value: 'switch',
                label: 'Switch 开关'
              }, {
                value: 'slider',
                label: 'Slider 滑块'
              }, {
                value: 'time-picker',
                label: 'TimePicker 时间选择器'
              }, {
                value: 'date-picker',
                label: 'DatePicker 日期选择器'
              }, {
                value: 'datetime-picker',
                label: 'DateTimePicker 日期时间选择器'
              }, {
                value: 'upload',
                label: 'Upload 上传'
              }, {
                value: 'rate',
                label: 'Rate 评分'
              }, {
                value: 'form',
                label: 'Form 表单'
              }]
            }, {
              value: 'data',
              label: 'Data',
              children: [{
                value: 'table',
                label: 'Table 表格'
              }, {
                value: 'tag',
                label: 'Tag 标签'
              }, {
                value: 'progress',
                label: 'Progress 进度条'
              }, {
                value: 'tree',
                label: 'Tree 树形控件'
              }, {
                value: 'pagination',
                label: 'Pagination 分页'
              }, {
                value: 'badge',
                label: 'Badge 标记'
              }]
            }, {
              value: 'notice',
              label: 'Notice',
              children: [{
                value: 'alert',
                label: 'Alert 警告'
              }, {
                value: 'loading',
                label: 'Loading 加载'
              }, {
                value: 'message',
                label: 'Message 消息提示'
              }, {
                value: 'message-box',
                label: 'MessageBox 弹框'
              }, {
                value: 'notification',
                label: 'Notification 通知'
              }]
            }, {
              value: 'navigation',
              label: 'Navigation',
              children: [{
                value: 'menu',
                label: 'NavMenu 导航菜单'
              }, {
                value: 'tabs',
                label: 'Tabs 标签页'
              }, {
                value: 'breadcrumb',
                label: 'Breadcrumb 面包屑'
              }, {
                value: 'dropdown',
                label: 'Dropdown 下拉菜单'
              }, {
                value: 'steps',
                label: 'Steps 步骤条'
              }]
            }, {
              value: 'others',
              label: 'Others',
              children: [{
                value: 'dialog',
                label: 'Dialog 对话框'
              }, {
                value: 'tooltip',
                label: 'Tooltip 文字提示'
              }, {
                value: 'popover',
                label: 'Popover 弹出框'
              }, {
                value: 'card',
                label: 'Card 卡片'
              }, {
                value: 'carousel',
                label: 'Carousel 走马灯'
              }, {
                value: 'collapse',
                label: 'Collapse 折叠面板'
              }]
            }]
          }, {
            value: 'ziyuan',
            label: '资源',
            children: [{
              value: 'axure',
              label: 'Axure Components'
            }, {
              value: 'sketch',
              label: 'Sketch Templates'
            }, {
              value: 'jiaohu',
              label: '组件交互文档'
            }]
          }],
          props: {
            expandTrigger: 'hover',
          }
        }
      },
      // Tag标签
      tag: {
        content: '测试1',
        config: {
          type: 'warning',
          size: 'small'
        }
      },
      // Progress进度条
      progress: {
        config: {
          percentage: 80,
          type: 'circle'
        }
      },
      // Pagination分页
      pagination: {
        config: {
          background: true,
          total: 1000,
          layout: 'prev, pager, next, jumper, ->, total, slot'
          
        }
      },
      // Badge标记
      badge: {
        config: {
          value: 'mark'
        }
      },
      // Tree树形控件
      tree: {
        config: {
          nodeKey: 'id',
          data: [{
            id: 100,
            label: '一级 1',
            children: [{
              id: 4,
              label: '二级 1-1',
              children: [{
                id: 9,
                label: '三级 1-1-1'
              }, {
                id: 10,
                label: '三级 1-1-2'
              }]
            }]
          }, {
            id: 2,
            label: '一级 2',
            children: [{
              id: 5,
              label: '二级 2-1'
            }, {
              id: 6,
              label: '二级 2-2'
            }]
          }, {
            id: 3,
            label: '一级 3',
            children: [{
              id: 7,
              label: '二级 3-1'
            }, {
              id: 8,
              label: '二级 3-2',
              children: [{
              id: 11,
                label: '三级 3-2-1'
              }, {
                id: 12,
                label: '三级 3-2-2'
              }, {
                id: 13,
                label: '三级 3-2-3'
              }]
            }]
          }],
        }
      },
    };
  },
};
</script>
