<template>
    <div class="header">
        <slot></slot>
    </div>
</template>

<style lang="scss" scoped>
    .header {
    }
</style>

36  src/layout.vue
@@ -0,0 +1,36 @@
<template>
    <div class="layout" :class="layoutClass">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'GuluLayout',
        data () {
            return {
                layoutClass: {
                    hasSider: false
                }
            }
        },
        mounted () {
            this.$children.forEach((vm) => {
                if (vm.$options.name === 'GuluSider') {
                    this.layoutClass.hasSider = true
                }
            })
        }
    }
</script>

<style lang="scss" scoped>
    .layout {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        &.hasSider {
            flex-direction: row;
        }
    }
</style>
