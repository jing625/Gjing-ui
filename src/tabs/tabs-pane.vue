<template>
    <div class="tabs-pane" :class="classes" v-if="active">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'GjingTabsPane',
        inject: ['eventBus'],
        data() {
            return {
                active: false
            }
        },
        props: {
            name: {
                type: String | Number,
                required: true
            }
        },
        created() {
            this.eventBus.$on('update:selected', (name) => {
                this.active = this.name === name;
            })
        },
        computed: {
            classes() {
                return {
                    active: this.active
                }
            }
        },
    }
</script>
<style lang="scss" scoped>
    .tabs-pane {
        padding: 1em;
        &.active{

        }
    }
</style>
