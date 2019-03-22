<template>
    <div>
        <div class="demo">
            <g-input value="默认状态" class="input"></g-input>
            <g-input value="禁用状态" disabled class="input"></g-input>
            <g-input value="只读状态" readonly class="input"></g-input>
            <g-input value="错误状态" error="请重新输入用户名" class="input"></g-input>
        </div>
        <pre><code>{{content}}</code></pre>
    </div>
</template>

<script>
    import Input from '../../../src/input'

    export default {
        name: "input-demo",
        data() {
            return {
                content: `
<g-input value="默认状态"></g-input>
<g-input value="禁用状态" disabled></g-input>
<g-input value="只读状态" readonly></g-input>
<g-input value="错误状态" error="请重新输入用户名"></g-input>
                `.trim()
            }
        },
        components: {
            'g-input': Input,
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
        .input {
            margin: 5px 3px;
        }
    }

</style>
