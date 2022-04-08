<template>
  <div>
    <el-upload
      :action="config.action"
      :multiple="config.multiple"
      :limit="config.limit"
      :file-list="config.fileList"
      :before-remove="config.handleBeforeRemove"
      :on-remove="config.handleRemove"
      :on-preview="config.handlePreview"
      :on-exceed="config.handleExceed"
      :headers="config.headers"
      :data="config.data"
      :name="config.name"
      :with-credentials="config.withCredentials"
      :show-file-list="config.showFileList"
      :drag="config.drag"
      :accept="config.accept"
      :on-success="config.handleSuccess"
      :on-error="config.handleError"
      :on-progress="config.handleProgress"
      :on-change="config.handleChange"
      :list-type="config.listType"
      :auto-upload="config.autoUpload"
      :http-request="config.httpRequest"
      :disabled="config.disabled"
      v-on="$listeners"
    >
      <el-button size="small" type="primary">点击上传</el-button>
      <div slot="tip" class="el-upload__tip">
        {{content}}
      </div>
    </el-upload>
  </div>
</template>

<script>
export default {
  name: 'Upload',
  props: {
    content: {
      type: String,
      default: ''
    },
    config: {
      type: Object,
      default: () => { }
    }
  },
  data () {
    return {
      // fileList: []
    }
  },
  methods: {
    // handleRemove (file, fileList) {
    //   console.log(file, fileList);
    // },
    // handlePreview (file) {
    //   console.log(file);
    // },
    // handleExceed (files, fileList) {
    //   this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
    // },
    // beforeRemove (file, fileList) {
    //   console.log(fileList)
    //   return this.$confirm(`确定移除 ${file.name}？`);
    // }
  }
}
</script>
