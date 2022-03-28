<template>
    <div>
        <el-link
         :type="linkConfig.type"
         :underline="linkConfig.underline"
         :disabled="linkConfig.disabled"
         :href="linkConfig.href"
         :icon="linkConfig.icon">
            {{ linkContent }}
        </el-link>
    </div>
</template>

<script>
export default {
    name: 'Link',
    props: {
        linkContent: {
            type: String,
            default: '123'
        },
        linkConfig: {
            type: Object,
            default: () => {}
        }
    }
}
</script>
