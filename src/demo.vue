<template>
    <div>
        hi
        <g-cascader :source="source"></g-cascader>
    </div>
</template>

<script>
    import Button from './button/button'
    import Cascader from './cascader'

    export default {
        name: "demo",
        components: {
            'g-button': Button,
            'g-cascader': Cascader
        },
        data() {
            return {
                source: [{
                    name: '浙江',
                    children: [
                        {
                            name: '杭州',
                            children: [
                                {name: '上城'},
                                {name: '下城'},
                                {name: '江干'},
                            ]
                        },
                        {
                            name: '嘉兴',
                            children: [
                                {name: '南湖'},
                                {name: '秀洲'},
                                {name: '嘉善'},
                            ]
                        },
                    ]
                }, {
                    name: '福建',
                    children: [
                        {
                            name: '福州',
                            children: [
                                {name: '鼓楼'},
                                {name: '台江'},
                                {name: '仓山'},
                            ]
                        },
                    ]
                }]
            }
        },
        mounted() {
            console.log(this)
        },
        methods: {}
    }
</script>

<style lang="scss" scoped>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        --font-size: 14px;
    }

    body {
        font-size: var(--font-size)
    }

    #app {
        /*padding: 100px;*/
    }
</style>
