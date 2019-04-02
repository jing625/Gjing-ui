<template>
    <div class="cascaderItem">
            {{sourceItem.name}}
            <gjing-cascader-item
                    v-if="sourceItem.children"
                    v-for="item in sourceItem.children"
                    :sourceItem="item"
            ></gjing-cascader-item>
    </div>
</template>

<script>
    export default {
        name: "GjingCascaderItem",
        props:{
            sourceItem:{
                type:Object
            }
        }

    }
</script>

<style lang="scss" scoped>

</style>
