<template>
    <transition name="slide">
        <div class="sider" v-show="visible">
            <slot></slot>
            <button v-if="closeButton" @click="visible=false">close</button>
        </div>
    </transition>
</template>
<script>
    export default {
        name: 'GjingSider',
        props:{
            closeButton:{
                type: Boolean,
                default: false
            }
        },
        data () {
            return {
                visible: true
            }
        },
        methods: {}
    }
</script>

<style lang="scss" scoped>
    $background-color:#036348;
    .sider {
        background: $background-color;
        position: relative;
        > button {
            position: absolute;
            top: 0;
            right: 0;
        }
    }
    .slide-enter-active, .slide-leave-active {
        transition: all .5s;
    }
    .slide-enter, .slide-leave-to {
        margin-left: -200px;
    }
</style>
