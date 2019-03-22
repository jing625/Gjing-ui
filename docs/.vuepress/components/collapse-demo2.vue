<template>
    <div>
        <div class="demo">
            <g-collapse :selected.sync="tabs" single>
                <g-collapse-item title="社会" name="social">这是社会相关的内容</g-collapse-item>
                <g-collapse-item title="财经" name="finance">这是财经相关的内容</g-collapse-item>
                <g-collapse-item title="体育" name="sports">这是体育相关的内容</g-collapse-item>
                <g-collapse-item title="游戏" name="game">这是游戏相关的内容</g-collapse-item>
            </g-collapse>
        </div>
        <pre><code>{{content}}</code></pre>
    </div>
</template>

<script>
    import Collapse from '../../../src/collapse/collapse'
    import collapseItem from '../../../src/collapse/collapse-item'

    export default {
        name: "collapse-demo1",
        data() {
            return {
                tabs: ['game'],
                content: `
<g-collapse :selected.sync="tabs" single>
    <g-collapse-item title="社会" name="social">这是社会相关的内容</g-collapse-item>
    <g-collapse-item title="财经" name="finance">这是财经相关的内容</g-collapse-item>
    <g-collapse-item title="体育" name="sports">这是体育相关的内容</g-collapse-item>
    <g-collapse-item title="游戏" name="game">这是游戏相关的内容</g-collapse-item>
</g-collapse>

tabs:['game'],

                `.trim()
            }
        },
        components: {
            'g-collapse': Collapse,
            'g-collapse-item': collapseItem
        }
    }
</script>

<style scoped lang="scss">
    .demo{
        margin-top: 10px;
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 4px;
    }
</style>
