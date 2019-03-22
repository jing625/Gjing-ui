<template>
    <div>
        <div class="demo">
            <g-layout class="layout">
                <g-header class="header">header</g-header>
                <g-content class="content">content</g-content>
                <g-footer class="footer">footer</g-footer>
            </g-layout>
        </div>
        <pre><code>{{content}}</code></pre>
    </div>
</template>

<script>
    import Layout from '../../../src/layout/layout'
    import Header from '../../../src/layout/header'
    import Content from '../../../src/layout/content'
    import Footer from '../../../src/layout/footer'

    export default {

        data() {
            return {
                content: `
<g-layout>
    <g-header>header</g-header>
    <g-content>content</g-content>
    <g-footer>footer</g-footer>
</g-layout>
        `.trim()
            }
        },
        components: {
            'g-layout': Layout,
            'g-header': Header,
            'g-content': Content,
            'g-footer': Footer,
        }
    }
</script>

<style scoped lang="scss">
    * {box-sizing: border-box;}

    .demo {
        margin-top: 10px;
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 4px;
        .layout{
            color: #ffffff;
            height: 300px;
            .header {
                height: 40px;
                line-height: 40px;
                text-align: center;
            }
            .content {
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .footer{
                height: 40px;
                line-height: 40px;
                text-align: center;

            }
        }

    }
</style>
