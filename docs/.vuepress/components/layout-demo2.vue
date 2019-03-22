<template>
    <div>
        <div class="demo">
            <g-layout class="layout1">
                <g-sider close-button class="sider">sider</g-sider>
                <g-layout class="layout2">
                    <g-header class="header">header</g-header>
                    <g-content class="content">content</g-content>
                    <g-footer class="footer">footer</g-footer>
                </g-layout>
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
    import Sider from '../../../src/layout/sider'

    export default {

        data() {
            return {
                content: `
<g-layout>
    <g-sider close-button>sider</g-sider>
    <g-layout>
        <g-header>header</g-header>
        <g-content>content</g-content>
        <g-footer>footer</g-footer>
    </g-layout>
</g-layout>
        `.trim()
            }
        },
        components: {
            'g-layout': Layout,
            'g-header': Header,
            'g-content': Content,
            'g-footer': Footer,
            'g-sider': Sider,
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
        .layout1 {
            color: #ffffff;
            overflow: hidden;
            height: 300px;
            .sider {
                width: 200px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .layout2 {
                .header {
                    height: 40px;
                    line-height: 40px;
                    text-align: center;
                }
                .content {
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .footer {
                    height: 40px;
                    line-height: 40px;
                    text-align: center;
                }
            }

        }

    }
</style>
