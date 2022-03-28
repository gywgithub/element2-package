<template>
    <div>
        <el-checkbox
         v-model="checkboxConfig.value"
         :true-label="checkboxConfig.trueLabel"
         :false-label="checkboxConfig.falseLabel"
         :disabled="checkboxConfig.disabled"
         :border="checkboxConfig.border"
         :size="checkboxConfig.size"
         :name="checkboxConfig.name"
         :checked="checkboxConfig.checked"
         :indeterminate="checkboxConfig.indeterminate"
         v-on="$listeners">
            {{ checkboxContent }}
        </el-checkbox>
    </div>
</template>

<script>
export default {
    name: 'Checkbox',
    props: {
        checkboxContent: {
            type: String,
            default: ''
        },
        checkboxConfig: {
            type: Object,
            default: () => {}
        }
    }
}
</script>
