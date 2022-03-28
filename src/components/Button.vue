<template>
    <div>
        <!-- elementui -->
        <!-- 方案1 -->
        <!-- <el-button
         v-bind="$attrs"
         v-on="$listeners">
            {{ btnContent }}
        </el-button> -->
        <!-- 方案二 -->
        <el-button
         :size="btnConfig.size"
         :type="btnConfig.type"
         :plain="btnConfig.plain"
         :round="btnConfig.round"
         :circle="btnConfig.circle"
         :loading="btnConfig.loading"
         :disabled="btnConfig.disabled"
         :icon="btnConfig.icon"
         :autofocus="btnConfig.autofocus"
         :native-type="btnConfig.nativeType">
            {{ btnContent }}
        </el-button>
    </div>
</template>

<script>
export default {
    name: 'Input',
    props: {
        btnContent: {
            type: String,
            default: '按钮'
        },
        btnConfig: {
            type: Object,
            default: () => {}
        }
    }
}
</script>
