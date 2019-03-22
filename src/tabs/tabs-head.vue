<template>
    <div class="tabs-head" ref="head">
        <slot></slot>
        <div class="line" ref="line"></div>
        <div class="actions-wrapper">
            <slot name="actions"></slot>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'GjingTabsHead',
        inject: ['eventBus'],
        mounted(){
            this.eventBus.$on('update:selected', (item, vm) => {
                this.updateLinePosition(vm)
            })
        },
        methods:{
            updateLinePosition (selectedVm) {
                let {width, left} = selectedVm.$el.getBoundingClientRect()
                let {left: left2} = this.$refs.head.getBoundingClientRect()
                this.$refs.line.style.width = `${width}px`
                this.$refs.line.style.left = `${left - left2}px`
            }
        }
    }

</script>
<style lang="scss" scoped>
    $tab-height: 40px;
    $underLine: #44ae7d;
    $border-color: #ddd;
    .tabs-head {
        display: flex;
        height: $tab-height;
        justify-content: flex-start;
        position: relative;
        border-bottom: 1px solid $border-color;
        > .actions-wrapper {
            margin-left: auto;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0 1em;
        }
        > .line{
            position: absolute;
            bottom: 0px;
            border-bottom: 2px solid $underLine;
            transition: all 350ms;
        }
    }
</style>
