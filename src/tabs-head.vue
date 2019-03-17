<template>
    <div class="tabs-head">
        <slot></slot>
        <div class="line" ref="line"></div>
        <div class="actions-wrapper">
            <slot name="actions"></slot>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'GuluTabsHead',
        inject: ['eventBus'],
        mounted(){
            this.eventBus.$on('update:selected', (item, vm) => {
              let {width,height,top,left} = vm.$el.getBoundingClientRect()
                this.$refs.line.style.width = `${width}px`
                this.$refs.line.style.left = `${left}px`
            })
        }
    }

</script>
<style lang="scss" scoped>
    $tab-height: 40px;
    $underLine: blue;
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
            border-bottom: 1px solid $underLine;
            transition: all 350ms;
        }
    }
</style>
