<template>
    <div>
        <div class="demo">
            <g-button @click="showToast1">上方弹出</g-button>
            <g-button @click="showToast2">中间弹出</g-button>
            <g-button @click="showToast3">下方弹出</g-button>
        </div>
        <pre><code>{{content}}</code></pre>
    </div>
</template>

<script>
    import plugin from '../../../src/plugin'
    import Button from '../../../src/button/button'
    import Vue from 'vue'

    Vue.use(plugin);

    export default {
        components: {
            'g-button': Button
        },
        data() {
            return {
                content: `
<g-button @click="showToast1">Toast-top</g-button>
<g-button @click="showToast2">Toast-middle</g-button>
<g-button @click="showToast3">Toast-bottom</g-button>

showToast1(){ this.$toast('这是一条消息提示',{ position:'top' })},
showToast2(){ this.$toast('这是一条消息提示',{ position:'middle' })},
showToast3(){this.$toast('这是一条消息提示',{ position:'bottom' })}
`.trim()

            }
        },
        methods: {
            showToast1() {
                this.$toast('这是一条消息提示', {
                    position: 'top',
                })
            },
            showToast2() {
                this.$toast('这是一条消息提示', {
                    position: 'middle'
                })
            },
            showToast3() {
                this.$toast('这是一条消息提示', {
                    position: 'bottom',
                })
            },
        }
    }
</script>

<style scoped lang="scss">
    * {
        box-sizing: border-box;
    }
    .demo{
        margin-top: 10px;
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 4px;
    }
</style>
