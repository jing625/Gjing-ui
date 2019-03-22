<template>
    <svg class="g-icon">
        <use :xlink:href="`#i-${name}`"></use>
    </svg>
</template>
<script>
    import './svg'
    export default {
    props:['name']
}
</script>
<style lang="scss" scoped>
    .g-icon {
        width: 1.3em;
        height: 1.3em;
        vertical-align: -0.15em;
    }
</style>
