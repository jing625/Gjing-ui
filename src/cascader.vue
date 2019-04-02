<template>
    <div class="cascader">
        <div class="trigger">
            <slot></slot>
        </div>
        <div class="popover">
            <div v-for="item in source">
                <cascaderItem :source-item="item"></cascaderItem>
            </div>
        </div>
    </div>
</template>

<script>
    import CascaderItem from './cascader-item'

    export default {
        name: "GjingCascader",
        components: {CascaderItem},
        props: {
            source: {
                type: Array
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
