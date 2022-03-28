<template>
    <div>
        <el-radio-group
         v-model="radioConfig.value"
         :text-color="radioConfig.textColor"
         :fill="radioConfig.fill"
         :size="radioConfig.size"
         :disabled="radioConfig.disabled"
         v-on="$listeners">
            <template v-if="!radioConfig.isButton">
                <el-radio
                 v-for="(item, index) in radioMemberConfig"
                 :key="index"
                 :value="item.value"
                 :label="item.label"
                 :disabled="item.disabled"
                 :border="item.border"
                 :size="item.size"
                 :name="item.name">
                    {{ item.radioContent }}
                </el-radio>
            </template>
            <template v-else>
                <el-radio-button
                v-for="(item, index) in radioMemberConfig"
                 :key="index"
                 :value="item.value"
                 :label="item.label"
                 :disabled="item.disabled"
                 :border="item.border"
                 :size="item.size"
                 :name="item.name"
                 :text-color="item.textColor"
                 :fill="item.fill">
                    {{ item.radioContent }}{{item.fill}}
                </el-radio-button>
            </template>
        </el-radio-group>
    </div>
</template>

<script>
export default {
    name: 'Radio',
    props: {
        radioConfig: {
            type: Object,
            default: () => {}
        },
        radioMemberConfig: {
            type: Array,
            default: () => []
        },
    }
}
</script>
