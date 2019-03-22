<template>
    <div class="content">
        <slot></slot>
    </div>
</template>

<style lang="scss" scoped>
    $background-color: #017353;
    .content {
        flex-grow: 1;
        background: $background-color;
    }
</style>
