<template>
  <div>
    <h2 class="mt10">Upload 上传</h2>
    <upload :config="upload.config" :content="upload.content"> </upload>
    <h2 class="mt10">Rate 评分</h2>
    <rate
      :config="rate.config"
      :content="rate.content"
      v-model="rate.config.value"
      @change="rateHandleChange"
    ></rate>
    <h2 class="mt10">ColorPicker 颜色选择器</h2>
    <color-picker
      :config="colorPicker.config"
      @change="colorPickerHandleChange"
      v-model="colorPicker.config.value"
    ></color-picker>
    <h2>Table 表格01</h2>
    <c-table :config="table.config" :data="table.data">
      <table-column :config="table.config.columns[0]"></table-column>
      <table-column :config="table.config.columns[1]"></table-column>
      <table-column :config="table.config.columns[2]"></table-column>
    </c-table>
    <h2>Table 表格02</h2>
    <c-table :config="table2.config" :data="table2.data">
      <table-column :config="table2.config.columns[0]"></table-column>
      <table-column :config="table2.config.columns[1]"></table-column>
      <table-column :config="table2.config.columns[2]"> </table-column>
      <table-column :config="table2.config.columns[3]">
        <template slot="custom" slot-scope="nativeData">
          <el-button
            @click="handleSelectClick(nativeData)"
            type="text"
            size="small"
            >查看</el-button
          >
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </table-column>
    </c-table>

    <h2>Table 表格03 - 自定义列模板</h2>
    <c-table :config="table3.config" :data="table2.data">
      <table-column :config="table3.config.columns[0]">
        <template slot="custom" slot-scope="{ nativeData }">
          <span style="margin-left: 10px">{{ nativeData[2] }}</span>
        </template>
      </table-column>

      <table-column :config="table3.config.columns[1]">
        <template slot="custom" slot-scope="{ nativeData }">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ nativeData[0].date }}</span>
        </template>
      </table-column>
      <table-column :config="table3.config.columns[2]"></table-column>
      <table-column :config="table3.config.columns[3]"> </table-column>
      <table-column :config="table3.config.columns[4]">
        <template slot="custom" slot-scope="{ nativeData }">
          <el-button
            @click="handleSelectClick(nativeData)"
            type="primary"
            size="small"
            >查看</el-button
          >
          <el-button type="danger" size="small">删除</el-button>
        </template>
      </table-column>
    </c-table>

    <h2>Layout布局 el-row el-col</h2>
    <c-row :config="row.config">
      <c-col :config="col.config">
        <div style="border: 2px solid red; height: 50px"></div>
      </c-col>
      <c-col :config="col.config">
        <div style="border: 2px solid green; height: 50px"></div>
      </c-col>
    </c-row>
    <h2>Container布局容器 el-container el-header el-footer el-main el-aside</h2>
    <c-container :config="container.config" style="border: 2px solid red">
      <c-header :config="header.config" style="border: 2px solid green"
        >Header</c-header
      >
      <c-container :config="container2.config" style="border: 2px solid orange">
        <c-aside :config="aside.config" style="border: 2px solid black"
          >Aside</c-aside
        >
        <c-main style="border: 2px solid pink">Main</c-main>
      </c-container>
      <c-footer :config="footer.config" style="border: 2px solid blue"
        >Footer</c-footer
      >
    </c-container>
    <h2>Drawer 抽屉</h2>
    <button
      :content="drawerButton.content"
      :config="drawerButton.config"
      @click="drawerHandle"
    ></button>
    <drawer :config="drawer.config">
      <span>我来啦!</span>
    </drawer>
    <h2>scrollbar 内置滚动条组件</h2>
    <scrollbar style="border: 2px solid red; height: 100px">
      <div style="border: 2px solid green; height: 200px">
        div height: 200px
      </div>
    </scrollbar>
  </div>
</template>

<script>
import Upload from "../components/Upload.vue";
import Rate from "../components/Rate.vue";
import ColorPicker from "../components/ColorPicker.vue";
// Table
import CTable from "../components/table/Index.vue";
import TableColumn from "../components/table/TableColumn.vue";
// 布局
import CRow from '../components/Row.vue'
import CCol from '../components/Col.vue'
import CContainer from '../components/container/Container.vue'
import CAside from '../components/container/Aside.vue'
import CFooter from '../components/container/Footer.vue'
import CHeader from '../components/container/Header.vue'
import CMain from '../components/container/Main.vue'
import Drawer from '../components/Drawer.vue'
import Scrollbar from '../components/Scrollbar.vue'


export default {
  name: "",
  components: {
    Upload,
    Rate,
    ColorPicker,
    CTable,
    TableColumn,
    CRow,
    CCol,
    CContainer,
    CHeader,
    CFooter,
    CAside,
    CMain,
    Drawer,
    Scrollbar
  },
  props: {},
  data () {
    return {
      // upload 上传
      upload: {
        content: "只能上传jpg/png文件，且不超过600kb",
        config: {
          limit: 3,
          action: "https://jsonplaceholder.typicode.com/posts/",
          multiple: true,
          fileList: [],
          handleRemove: (file, fileList) => {
            console.log("uploadHandleRemove");
            console.log(file, fileList);
          },
          handlePreview: (file) => {
            console.log("handlePreview: ", file);
          },
          handleBeforeRemove: (file, fileList) => {
            console.log("handleBeforeRemove");
            console.log(fileList);
          },
          handleExceed: (files, fileList) => {
            console.log(
              `当前限制选择 3 个文件，本次选择了 ${files.length
              } 个文件，共选择了 ${files.length + fileList.length} 个文件`
            );
          },
        },
      },
      rate: {
        content: "",
        config: {
          value: null,
        },
      },
      colorPicker: {
        config: {
          value: "#409EFF",
        },
      },

      table: {
        config: {
          columns: [
            {
              prop: "date",
              label: "日期",
              order: 2,
            },
            {
              prop: "name",
              label: "姓名",
              order: 1,
            },
            {
              prop: "address",
              label: "地址",
              order: 3,
              width: 300,
            },
          ],
        },
        data: [
          {
            date: "2016-05-02",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1518 弄",
          },
          {
            date: "2016-05-04",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1517 弄",
          },
          {
            date: "2016-05-01",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1519 弄",
          },
          {
            date: "2016-05-03",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1516 弄",
          },
        ],
      },
      table2: {
        config: {
          columns: [
            {
              prop: "date",
              label: "日期",
              width: "200",
              key: "date",
            },
            {
              prop: "name",
              label: "姓名",
              key: "name",
            },
            {
              prop: "address",
              label: "地址",
              width: "400",
              key: "address",
            },
            {
              label: "操作",
              width: "100",
              fixed: "right",
            },
          ],
          border: true,
          stripe: true,
          size: "mini",
        },
        data: [
          {
            date: "2016-05-02",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1518 弄",
          },
          {
            date: "2016-05-04",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1517 弄",
          },
          {
            date: "2016-05-01",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1519 弄",
          },
          {
            date: "2016-05-03",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1516 弄",
          },
        ],
      },
      table3: {
        config: {
          columns: [
            {
              width: "50",
              type: "index",
            },
            {
              prop: "date",
              label: "日期",
              width: "200",
              key: "date",
              sortable: true,
              isNativeRenter: true,
            },
            {
              prop: "name",
              label: "姓名",
              key: "name",
              sortable: true,
            },
            {
              prop: "address",
              label: "地址",
              width: "400",
              key: "address",
            },
            {
              label: "操作",
              width: "200",
              fixed: "right",
            },
          ],
          border: true,
          stripe: true,
          size: "mini",
        },
        data: [
          {
            date: "2016-05-02",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1518 弄",
          },
          {
            date: "2016-05-04",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1517 弄",
          },
          {
            date: "2016-05-01",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1519 弄",
          },
          {
            date: "2016-05-03",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1516 弄",
          },
        ],
      },
      row: {
        config: {
          gutter: 20
        }
      },
      col: {
        config: {
          span: 12
        }
      },
      container: {
        config: {
          direction: 'vertical'
        }
      },
      container2: {
        config: {
          direction: 'horizontal '
        }
      },
      header: {
        config: {
          height: '80px'
        }
      },
      aside: {
        config: {
          width: '200px'
        }
      },
      footer: {
        config: {
          height: '70px'
        }
      },
      drawerButton: {
        content: "点我打开",
        config: {}
      },
      drawer: {
        config: {
          title: '标题001',
          visible: false,
          beforeClose: (done) => {
            console.log('before-close')
            done()
          }
        }
      }
    };
  },
  methods: {
    // Rate change
    rateHandleChange (score) {
      console.log("score: ", score);
    },
    // Color Picker change
    colorPickerHandleChange (value) {
      console.log("color picker chagne ", value);
    },
    handleSelectClick (data) {
      console.log(data);
    },
    drawerHandle () {
      this.drawer.config.visible = true
    }
  },
};
</script>
<style scoped>
.mt10 {
  margin-bottom: 10px;
}
</style>
