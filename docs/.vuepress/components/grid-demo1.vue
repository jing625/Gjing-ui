<template>
    <div>
        <div class="demo">
            <g-row class="row">
                <g-col class="col" span="24">24</g-col>
            </g-row>
            <g-row class="row">
                <g-col class="col" span="12">12</g-col>
                <g-col class="col" span="12">12</g-col>
            </g-row>

            <g-row class="row">
                <g-col class="col" span="8">8</g-col>
                <g-col class="col" span="16">16</g-col>
            </g-row>

            <g-row class="row">
                <g-col class="col" span="6">6</g-col>
                <g-col class="col" span="6">6</g-col>
                <g-col class="col" span="6">6</g-col>
            </g-row>
        </div>
        <pre><code>{{content}}</code></pre>
    </div>
</template>

<script>
    import Row from '../../../src/grid/row'
    import Col from '../../../src/grid/col'

    export default {
        name: "grid-demo",
        data() {
            return {
                content: `
<g-row>
    <g-col span="24">24</g-col>
</g-row>

<g-row>
    <g-col span="12">12</g-col>
    <g-col span="12">12</g-col>
</g-row>

<g-row>
    <g-col span="8">8</g-col>
    <g-col span="16">16</g-col>
</g-row>

<g-row>
    <g-col span="6">6</g-col>
    <g-col span="6">6</g-col>
    <g-col span="6">6</g-col>
</g-row>
                `.trim()
            }
        },
        components: {
            "g-col": Col,
            "g-row": Row
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
        .row{
            margin-top: 10px;
        }
        .col {
            color: white;
            text-align: center;
            height: 50px;
            font-size: 16px;
            line-height: 50px;
            height: 50px;
        }
    }

</style>
