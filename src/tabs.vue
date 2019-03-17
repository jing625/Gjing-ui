<template>
    <div class="tabs">
        <slot></slot>
    </div>
</template>
<script>
    import Vue from 'vue'

    export default {
        name: 'GuluTabs',
        props: {
            selected: {
                type: String,
                required: true
            },
            direction: {
                type: String,
                default: 'horizontal',
                validator(value) {
                    return ['horizontal', 'vertical'].indexOf(value) >= 0
                }
            }
        },
        data() {
            return {
                eventBus: new Vue
            }
        },
        provide() {
            return {
                eventBus: this.eventBus
            }
        },
        mounted() {
            if (this.$children.length === 0) {
                console && console.warn &&
                console.warn('tabs的子组件应该是tabs-head和tabs-nav，但你没有写子组件')
            }
            this.$children.forEach((vm) => {
                if (vm.$options.name === 'GuluTabsHead') {  //第一次遍历找到tabsHead
                    vm.$children.forEach((childVm) => {
                        if (childVm.$options.name === 'GuluTabsItem' && childVm.name === this.selected) { //第二次遍历找到tabsItem 且找到被选中的item
                            this.eventBus.$emit('update:selected', this.selected,childVm)
                        }
                    })
                }
            })
        }
    }
</script>
<style>
    .tabs {
    }
</style>
