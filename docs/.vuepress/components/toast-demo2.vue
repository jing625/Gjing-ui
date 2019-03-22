<template>
    <div>
        <div class="demo">
            <g-button @click="showToast">上方弹出</g-button>
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
<g-button @click="showToast">Toast-top</g-button>

showToast() {
    this.$toast('你知道4396是什么吗', {
        closeButton:{
            text: '知道',
            callback:()=>{
                console.log('点击了知道')
            }
        }
    })
}
`.trim()

            }
        },
        methods: {
            showToast() {
                this.$toast('你知道4396是什么吗', {
                    closeButton:{
                        text: '知道',
                        callback:()=>{
                            console.log('点击了知道')
                        }
                    }
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
