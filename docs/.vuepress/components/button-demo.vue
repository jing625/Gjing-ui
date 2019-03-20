<template>
    <div class="box">
        <g-button>按钮</g-button>
        <g-button icon="settings" icon-position="right" class="button">按钮</g-button>
        <g-button :loading="isLoading" @click="isLoading=!isLoading" class="button">按钮</g-button>
        <g-button disabled class="disabled button" >按钮</g-button>
        <br>
        <g-button-group>
            <y-button icon="left" class="button">上一页</y-button>
            <y-button icon="right" icon-position="right" class="button">下一页</y-button>
        </g-button-group>
        <pre><code>{{content}}</code></pre>
    </div>
</template>

<script>
    import Button from '../../../src/button'
    import buttonGroup from '../../../src/button-group'

    export default {
        components: {
            'g-button': Button,
            'g-button-group': buttonGroup
        },
        data () {
            return {
                isLoading:true,
                content: `
<g-button>按钮</g-button>
<g-button icon="shezhi1" icon-position="right">按钮</g-button>
<g-button :loading="isLoading" @click="isLoading=!isLoading">按钮</g-button>
<g-button disabled class="disabled">按钮</g-button>
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
    *{box-sizing:border-box;}
    .button{
        margin:5px 3px;
    }
</style>
