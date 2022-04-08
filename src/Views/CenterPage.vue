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
  </div>
</template>

<script>
import Upload from '../components/Upload.vue'
import Rate from '../components/Rate.vue'
import ColorPicker from '../components/ColorPicker.vue'
export default {
  name: '',
  components: {
    Upload,
    Rate,
    ColorPicker
  },
  props: {
  },
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
    }
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
  }
}
</script>
<style scoped>
.mt10 {
  margin-bottom: 10px;
}
</style>
