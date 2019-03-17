<template>
    <div class="tabs-item" @click="xxx" :class="classes">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'GuluTabsItem',
        inject: ['eventBus'],
        data() {
            return {
                active: false
            }
        },
        props: {
            disabled: {
                type: Boolean,
                default: false,
            },
            name: {
                type: String | Number,
                required: true
            }
        },
        created() {
            this.eventBus.$on('update:selected', (name) => {
                this.active = this.name === name
            })
        },
        computed: {
            classes() {
                return {
                    active: this.active
                }
            }
        },
        methods: {
            xxx() {
                this.eventBus.$emit('update:selected', this.name,this)
            }
        }
    }
</script>
<style lang="scss" scoped>
    .tabs-item {
        flex-shrink: 0;
        padding: 0 1em;
        cursor: pointer;
        height: 100%;
        display: flex;
        align-items: center;
        &.active{
            background: red;
        }
    }
</style>
