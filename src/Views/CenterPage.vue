<template>
  <div>
    <h2>Upload 上传</h2>
    <upload :config="upload.config" :content="upload.content"> </upload>
  </div>
</template>

<script>
import Upload from '../components/Upload.vue'
export default {
  name: '',
  components: {
    Upload
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
    }
  }
}
</script>
