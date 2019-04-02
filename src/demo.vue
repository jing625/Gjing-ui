<template>
    <div>
        hi
        <g-button>1121</g-button>
    </div>
</template>

<script>
    import Button from './button/button'

    export default {
        name: "demo",
        components: {
            'g-button': Button
        },
        mounted(){
            console.log(this)
        },
        methods:{

        }
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
