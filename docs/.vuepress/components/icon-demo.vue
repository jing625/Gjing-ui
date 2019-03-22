<template>
    <div class="box">
        <div class="demo">
            <g-icon name="settings"></g-icon>
            <g-icon name="info"></g-icon>
            <g-icon name="warning"></g-icon>
            <g-icon name="loading"></g-icon>
            <g-icon name="download"></g-icon>
            <g-icon name="upload"></g-icon>
            <g-icon name="user"></g-icon>
            <g-icon name="password"></g-icon>
            <g-icon name="error"></g-icon>
        </div>
        <pre><code>{{content}}</code></pre>
    </div>
</template>

<script>
    import Gicon from '../../../src/icon'

    export default {
        components: {
            'g-icon': Gicon,
        },
        data() {
            return {
                isLoading: true,
                content: `
<div class="demo">
    <g-icon name="settings"></g-icon>
    <g-icon name="info"></g-icon>
    <g-icon name="warning"></g-icon>
    <g-icon name="loading"></g-icon>
    <g-icon name="download"></g-icon>
    <g-icon name="upload"></g-icon>
    <g-icon name="user"></g-icon>
    <g-icon name="password"></g-icon>
    <g-icon name="error"></g-icon>
</div>
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
        .g-icon {
            margin-right: 10px;
            /*background: #44ae7d;*/
        }
    }
</style>
