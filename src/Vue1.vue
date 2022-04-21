<template>
  <div>
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
    <h2 class="mt10">Dialog对话框</h2>
    <Dialog
      :config="dialog.config"
      @close="closeDialog">
      <template #title>
        <p>标题123</p>
      </template>
      <!-- <p slot="title">标题1234</p> -->
      <span>需要注意的是内容是默认不居中的</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialog.config.visible = false">取 消</el-button>
        <el-button type="primary" @click="dialog.config.visible = false">确 定</el-button>
      </span>
    </Dialog>
    <h2 class="mt10">Tooltip文字提示</h2>
    <Tooltip
      :config="tooltip.config">
      <span>按钮</span>
      <span slot="content">slot方式 {{ tooltip.config.content }}</span>
    </Tooltip>
    <h2 class="mt10">Popover弹出框</h2>
    <Popover
      :config="popover.config">
      <p>12333333</p>
      <button slot="reference">hover 激活</button>
    </Popover>
    <h2 class="mt10">Popconfirm气泡确认框</h2>
    <Popconfirm
      :config="popconfirm.config"
      @cancel="cancelPopconfirm"
      @confirm="confirmPopconfirm">
      <template #reference>
        <button>删除</button>
      </template>
    </Popconfirm>
    <h2 class="mt10">Card卡片</h2>
    <Card
      :config="card.config">
      <div>Card卡片</div>
    </Card><h2 class="mt10">Collapse折叠面板</h2>
    <Collapse
      :config="collapse.config">
      <Collapse-item :content="collapse.content[0]">
        <template #title>
          一致性 Consistency<i class="header-icon el-icon-info"></i>
        </template>
        <template>
          <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
          <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
        </template>
      </Collapse-item>
      <Collapse-item :content="collapse.content[1]">
        <template>
          <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
          <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
        </template>
      </Collapse-item>  
      <Collapse-item :content="collapse.content[2]">
        <template>
          <div>简化流程：设计简洁直观的操作流程；</div>
          <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
          <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
        </template>
      </Collapse-item>  
      <Collapse-item :content="collapse.content[3]">
        <template>
          <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
          <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
        </template>
      </Collapse-item>  
    </Collapse>
    <h2 class="mt10">Carousel走马灯</h2>
    <Carousel
      :config="carousel.config"
      :content="carousel.content">
      <template slot-scope="scope">
        <p>{{scope.item.label}}</p>
      </template>
    </Carousel>
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
import Dialog from "./components/Dialog.vue";
import Tooltip from "./components/Tooltip.vue";
import Popover from "./components/Popover.vue";
import Popconfirm from "./components/Popconfirm.vue";
import Card from "./components/Card.vue";
import Collapse from "./components/Collapse/Collapse.vue";
import CollapseItem from "./components/Collapse/CollapseItem.vue";
import Carousel from "./components/Carousel.vue";


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
    Dialog,
    Tooltip,
    Popover,
    Popconfirm,
    Card,
    Collapse,
    CollapseItem,
    Carousel
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
      // Dialog对话框
      dialog: {
        config: {
          visible: false,
          title: '标题1'
        }
      },
      // Tooltip文字提示
      tooltip: {
        config: {
          effect: 'dark',
          content: '打开'
        }
      },
      // Popover弹出框
      popover: {
        config: {
          trigger: 'hover',
          title: '标题',
          content: '内容'
        }
      },
      // Popconfirm气泡确认框
      popconfirm: {
        config: {
          title: '?',
          confirmButtonText: 'ok',
          cancelButtonText: 'no'
        }
      },
      // Card卡片
      card: {
        config: {
          shadow: 'hover'
        }
      },
      // Collapse折叠面板
      collapse: {
        config: {
          accordion: true,
        },
        content: [
          { title: '测试1', name: '测试1', disabled: true },
          { title: '测试2', name: '测试2' },
          { title: '测试3', name: '测试3' },
          { title: '测试4', name: '测试4' },
        ]
      },
      // Carousel走马灯
      carousel: {
        config: {
          height: '100px',
          autoplay: false
        },
        content: [
          { name: '测试1', label: '测试1label' },
          { name: '测试2', label: '测试2label' },
          { name: '测试3', label: '测试3label' },
          { name: '测试4', label: '测试4label' },
        ]
      }
    };
  },
  methods: {
    // Dialog 关闭对话框回调
    closeDialog() {
      console.log('关闭Dialog');
    },
    // Popconfirm 取消气泡确认框回调
    cancelPopconfirm() {
      console.log('popconfirm 取消');
    },
    // Popconfirm 确认气泡确认框回调
    confirmPopconfirm() {
      console.log('popconfirm 确认');
    },
  }
};
</script>
