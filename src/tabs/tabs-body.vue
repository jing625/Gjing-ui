<template>
    <div class="tabs-body">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'GjingTabsBody',
        inject: ['eventBus'],
        created(){
            console.log(this.eventBus)
        }
    }
</script>
<style>
    .tabs-body{

    }
</style>
