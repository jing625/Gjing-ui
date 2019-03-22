<template>
    <div>
        <div class="demo">
            <g-tabs :selected.sync="tabs">
                <g-tabs-head>
                    <g-tabs-item name="social">社会</g-tabs-item>
                    <g-tabs-item name="finance">财经</g-tabs-item>
                    <g-tabs-item name="sports">体育</g-tabs-item>
                    <g-tabs-item name="disabled" disabled="">禁用</g-tabs-item>
                </g-tabs-head>
                <g-tabs-body>
                    <g-tabs-pane name="social">这是社会相关内容</g-tabs-pane>
                    <g-tabs-pane name="finance">这是财经相关内容</g-tabs-pane>
                    <g-tabs-pane name="sports">这是体育相关内容</g-tabs-pane>
                    <g-tabs-pane name="disabled">这是。。。内容</g-tabs-pane>
                </g-tabs-body>
            </g-tabs>
        </div>
        <pre><code>{{content}}</code></pre>
    </div>
</template>

<script>
    import Tabs from '../../../src/tabs/tabs'
    import tabsHead from '../../../src/tabs/tabs-head'
    import tabsBody from '../../../src/tabs/tabs-body'
    import tabsItem from '../../../src/tabs/tabs-item'
    import tabsPane from '../../../src/tabs/tabs-pane'

    export default {
        name: "tabs-demo",
        data() {
            return {
                tabs: 'social',
                content: `
 <g-tabs :selected.sync="tabs">
    <g-tabs-head>
        <g-tabs-item name="social">社会</g-tabs-item>
        <g-tabs-item name="finance">财经</g-tabs-item>
        <g-tabs-item name="sports">体育</g-tabs-item>
        <g-tabs-item name="disabled" disabled="">禁用</g-tabs-item>
    </g-tabs-head>
    <g-tabs-body>
        <g-tabs-pane name="social">这是社会相关内容</g-tabs-pane>
        <g-tabs-pane name="finance">这是财经相关内容</g-tabs-pane>
        <g-tabs-pane name="sports">这是体育相关内容</g-tabs-pane>
        <g-tabs-pane name="disabled">这是。。。内容</g-tabs-pane>
    </g-tabs-body>
</g-tabs>
`.trim()
            }
        },
        components: {
            'g-tabs': Tabs,
            'g-tabs-head': tabsHead,
            'g-tabs-body': tabsBody,
            'g-tabs-item': tabsItem,
            'g-tabs-pane': tabsPane

        }
    }
</script>

<style scoped lang="scss">
    * {box-sizing: border-box;}
    .demo{
        margin-top: 10px;
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 4px;
    }
</style>
