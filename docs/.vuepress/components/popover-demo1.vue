<template>
    <div class="wrapper">
        <div class="demo">
            <g-popover trigger="click" position="top" class="popover">
                <g-button>上方弹出</g-button>
                <div slot="content">弹出内容</div>
            </g-popover>
            <g-popover trigger="click" position="right" class="popover">
                <g-button>右方弹出</g-button>
                <div slot="content">弹出内容</div>
            </g-popover>
            <g-popover trigger="click" position="bottom" class="popover">
                <g-button>下方弹出</g-button>
                <div slot="content">弹出内容</div>
            </g-popover>
            <g-popover trigger="click" position="left" class="popover">
                <g-button>左方弹出</g-button>
                <div slot="content">弹出内容</div>
            </g-popover>
        </div>
        <pre><code>{{content}}</code></pre>
    </div>
</template>

<script>
    import Popover from '../../../src/popover'
    import Button from '../../../src/button/button.vue'

    export default {
        components: {
            'g-popover': Popover,
            'g-button': Button
        },
        data() {
            return {
                content: `
<g-popover trigger="click" position="top">
    <g-button>上方弹出</g-button>
    <div slot="content">弹出内容</div>
</g-popover>
<g-popover trigger="click" position="right">
    <g-button>右方弹出</g-button>
    <div slot="content">弹出内容</div>
</g-popover>
<g-popover trigger="click" position="bottom">
    <g-button>下方弹出</g-button>
    <div slot="content">弹出内容</div>
</g-popover>
<g-popover trigger="click" position="left">
    <g-button>左方弹出</g-button>
    <div slot="content">弹出内容</div>
</g-popover>
      `.trim()
            }
        }
    }
</script>

<style scoped lang="scss">
    .demo {
        margin-top: 10px;
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 4px;
        .popover {
            margin-left: 20px;
        }
    }
</style>
