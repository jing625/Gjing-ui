<template>
    <button class="g-button">按钮</button>
</template>
<script>
    export default {}

</script>
<style lang="scss">
    .g-button {
        height: var(--button-height);
        font-size: var(--font-size);
        padding: 0 1rem;
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color);
        background: var(--button-bg);
        &:hover {
            border-color: var(--border-color-hover);
        }
        &:active {
            background-color: var(--button-active-bg)
        }
        &:focus {
            outline: none;
        }
    }

</style>
