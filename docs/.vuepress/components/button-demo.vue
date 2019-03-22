<template>
    <div class="box">
        <div class="demo">
            <g-button class="button">默认按钮</g-button>
            <g-button icon="settings" class="button">icon+按钮</g-button>
            <g-button icon="settings" icon-position="right" class="button">按钮+icon</g-button>
            <g-button :loading="isLoading" @click="isLoading=!isLoading" class="button">加载中</g-button>
            <g-button disabled class="button">禁用按钮</g-button>
            <g-button-group class="button">
                <g-button icon="left">上一页</g-button>
                <g-button icon="right" icon-position="right">下一页</g-button>
            </g-button-group>
        </div>
        <pre><code>{{content}}</code></pre>
    </div>
</template>

<script>
    import Button from '../../../src/button/button'
    import buttonGroup from '../../../src/button/button-group'

    export default {
        components: {
            'g-button': Button,
            'g-button-group': buttonGroup
        },
        data() {
            return {
                isLoading: true,
                content: `
<g-button>默认按钮</g-button>
<g-button icon="settings">icon+按钮</g-button>
<g-button icon="settings" icon-position="right">按钮+icon</g-button>
<g-button :loading="isLoading" @click="isLoading=!isLoading">加载中</g-button>
<g-button disabled>禁用按钮</g-button>

<g-button-group>
    <g-button icon="left">上一页</g-button>
    <g-button icon="right" icon-position="right">下一页</g-button>
</g-button-group>
      `.trim()
            }
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
        .button {
            margin: 5px 3px;
        }
    }

</style>
