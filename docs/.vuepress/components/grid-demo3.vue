<template>
    <div>
        <div class="demo">
            <g-row class="row">
                <g-col class="col" span="10">10</g-col>
                <g-col class="col" span="10" offset="4">10</g-col>
            </g-row>

            <g-row class="row">
                <g-col class="col" span="2">7</g-col>
                <g-col class="col" span="7" offset="2">7</g-col>
                <g-col class="col" span="11" offset="2">11</g-col>
            </g-row>

            <g-row class="row">
                <g-col class="col" span="4">4</g-col>
                <g-col class="col" span="3" offset="2">3</g-col>
                <g-col class="col" span="9" offset="2">9</g-col>
                <g-col class="col" span="6" offset="2">6</g-col>
            </g-row>
        </div>
        <pre><code>{{content}}</code></pre>
    </div>
</template>

<script>
    import Row from '../../../src/grid/row'
    import Col from '../../../src/grid/col'

    export default {
        name: "grid-demo3",
        data() {
            return {
                content: `
<g-row>
    <g-col span="10">10</g-col>
    <g-col span="10" offset="4">10</g-col>
</g-row>

<g-row>
    <g-col span="2">7</g-col>
    <g-col span="7" offset="2">7</g-col>
    <g-col span="11" offset="2">11</g-col>
</g-row>

<g-row>
    <g-col span="4">4</g-col>
    <g-col span="3" offset="2">3</g-col>
    <g-col span="9" offset="2">9</g-col>
    <g-col span="6" offset="2">6</g-col>
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

    .demo {
        margin-top: 10px;
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 4px;
        .row {
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
