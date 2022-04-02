<template>
  <div id="app">
    <el-row :gutter="20">
      <el-col :span="8">
        <letf-page></letf-page>
      </el-col>
      <el-col :span="8"> <center-page></center-page> </el-col>
      <el-col :span="8"> <right-page></right-page></el-col>
    </el-row>
  </div>
</template>

<script>
import LetfPage from './Views/LeftPage.vue';
import CenterPage from './Views/CenterPage.vue';
import RightPage from './Views/RightPage.vue';


export default {
  name: 'App',
  components: {
    LetfPage,
    CenterPage,
    RightPage
  },
  data () {
    return {
     
    }
  }
}
</script>

<style>
#app {
  padding: 20px;
  margin: 0;
  overflow-x: hidden;
}
.mt10 {
  margin-top: 10px;
}
</style>
