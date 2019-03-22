<template>
    <button class="g-button" :class="classes" @click="$emit('click')">
        <g-icon class="icon" v-if="icon&&!loading" :name="icon"></g-icon>
        <g-icon class="loading icon" v-if="loading" name="loading"></g-icon>
        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>
<script>
    import Icon from '../icon'

    export default {
        // props: ['icon', 'iconPosition']
        components: {
            'g-icon': Icon
        },
        props: {
            icon: {},
            loading: {
                type: Boolean,
                default: false
            },
            iconPosition: {
                type: String,
                default: 'left',
                validator(value) {
                    return value === 'left' || value === 'right';
                }
            },
            disabled: {
                type: Boolean,
                default: false
            },
        },
        computed: {
            classes() {
                return {
                    [`icon-${this.iconPosition}`]: true,
                    disabled: this.disabled,
                }
            }
        },
    }

</script>
<style lang="scss" scoped>
    $button-height: 32px;
    $font-size: 14px;
    $button-bg: white;
    $button-active-bg: #eee;
    $border-radius: 4px;
    $color: #333;
    $border-color: #999;
    $border-color-hover: #666;
    @keyframes spin {
        0% {
            transform: rotate(0deg)
        }
        100% {
            transform: rotate(360deg)
        }
    }

    .g-button {
        height: $button-height;
        font-size: $font-size;
        padding: 0 1rem;
        border-radius: $border-radius;
        border: 1px solid $border-color;
        background: $button-bg;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        cursor: pointer;
        &:hover {
            border-color: $border-color-hover;
        }
        &:active {
            background-color: $button-active-bg;
        }
        &:focus {
            outline: none;
        }

        > .icon {
            order: 1;
            margin-right: .1rem;
        }
        > .content {
            order: 2;
            padding: 0;
        }

        &.icon-right {
            > .icon {
                order: 2;
                margin-right: 0;
                margin-left: .1rem;
            }
            > .content {
                order: 1;
            }
        }
        &.disabled {
            border: 1px solid rgb(153, 153, 153);
            color: rgb(153, 153, 153);
            background: white;
            cursor: not-allowed;
        }
        > .loading {
            animation: spin 2s infinite linear
        }
    }

</style>
