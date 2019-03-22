<template>
    <div class="popover" ref="popover">
        <div ref="contentWrapper" class="content-wrapper" :class="{[`position-${position}`]:true}" v-if="visible">
            <slot name="content" :close="close"></slot>
        </div>
        <span ref="triggerWrapper" class="button-wrapper">
            <slot></slot>
        </span>
    </div>
</template>

<script>
    export default {
        name: "GjingPopover",
        props: {
            position: {
                type: String,
                default: 'top',
                validator(value) {
                    return ['top', 'left', 'right', 'bottom'].indexOf(value) >= 0
                }
            },
            trigger: {
                type: String,
                default: 'click',
                validator(value) {
                    return ['click', 'hover'].indexOf(value) >= 0
                }
            }
        },
        data() {
            return {
                visible: false
            }
        },
        mounted() {
            if (this.trigger === 'click') {
                this.$refs.popover.addEventListener('click', this.onClick)
            } else {
                this.$refs.popover.addEventListener('mouseenter', this.open)
                this.$refs.popover.addEventListener('mouseleave', this.close)
            }
        },
        destroyed() {
            if (this.trigger === 'click') {
                this.$refs.popover.removeEventListener('click', this.onClick)
            } else {
                this.$refs.popover.removeEventListener('mouseenter', this.open)
                this.$refs.popover.removeEventListener('mouseleave', this.close)
            }
        },
        computed: {
            openEvent() {
                if (this.trigger === 'click') {
                    return 'click'
                } else {
                    return 'mouseenter'
                }
            },
            closeEvent() {
                if (this.trigger === 'click') {
                    return 'click'
                } else {
                    return 'mouseleave'
                }
            }

        },
        methods: {
            positionContent() {
                const {contentWrapper, triggerWrapper} = this.$refs
                document.body.appendChild(contentWrapper)
                const {width, height, top, left} = triggerWrapper.getBoundingClientRect()
                const {height: height2} = contentWrapper.getBoundingClientRect()
                let positions = {
                    top: {top: top + window.scrollY, left: left + window.scrollX,},
                    bottom: {top: top + height + window.scrollY, left: left + window.scrollX},
                    left: {
                        top: top + window.scrollY + (height - height2) / 2,
                        left: left + window.scrollX
                    },
                    right: {
                        top: top + window.scrollY + (height - height2) / 2,
                        left: left + window.scrollX + width
                    },
                }
                contentWrapper.style.left = positions[this.position].left + 'px'
                contentWrapper.style.top = positions[this.position].top + 'px'
            },
            onClickDocument(e) {
                if (this.$refs.popover &&
                    (this.$refs.popover === e.target || this.$refs.popover.contains(e.target))
                ) {
                    return
                }
                if (this.$refs.contentWrapper &&
                    (this.$refs.contentWrapper === e.target || this.$refs.contentWrapper.contains(e.target))
                ) {
                    return
                }
                this.close()
            },
            open() {
                this.visible = true
                this.$nextTick(() => {
                    this.positionContent()
                    document.addEventListener('click', this.onClickDocument)
                })
            },
            close() {
                this.visible = false
                document.removeEventListener('click', this.onClickDocument)
            },
            onClick(event) {
                if (this.$refs.triggerWrapper.contains(event.target)) {
                    if (this.visible === true) {
                        this.close()
                    } else {
                        this.open()
                    }
                }
            }

            // onClick() {
            //     this.visible = !this.visible
            //     if (this.visible === true) {
            //         this.$nextTick(() => {
            //             document.body.appendChild(this.$refs.contentWrapper)
            //             let {width,height,top,left} = this.$refs.triggerWrapper.getBoundingClientRect()
            //             this.$refs.contentWrapper.style.left = left + window.scrollX + 'px'
            //             this.$refs.contentWrapper.style.top = top + window.scrollY + 'px'
            //             let eventHandler = () => {
            //                 this.visible = false
            //                 document.removeEventListener('click', eventHandler)
            //             }
            //             document.addEventListener('click', eventHandler)
            //         })
            //
            //     }
            // }
        },
    }
</script>

<style lang="scss" scoped>
    $border-color: #333;
    $border-radius: 4px;
    .popover {
        display: inline-block;
        vertical-align: top;
        position: relative;
        > .button-wrapper {
            display: inline-block;
        }
    }

    .content-wrapper {
        position: absolute;
        border: 1px solid $border-color;
        border-radius: $border-radius;
        /*box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);*/
        filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.5));
        background: white;
        padding: .5em 1em;
        max-width: 20em;
        word-break: break-all;
        &::before, &::after {
            display: block;
            content: '';
            border: 10px solid transparent;
            height: 0;
            width: 0;
            position: absolute;
        }
        &.position-top {
            transform: translateY(-100%);
            margin-top: -10px;
            &::before, &::after {
                left: 10px;
                border-bottom: none;
            }
            &::before {
                border-top: 10px solid black;
                top: 100%;
            }
            &::after {
                border-top: 10px solid white;
                top: calc(100% - 1px);;
            }
        }
        &.position-bottom {
            margin-top: 10px;
            &::before, &::after {
                left: 10px;
                border-top: none;
            }
            &::before {
                border-bottom: 10px solid black;
                bottom: 100%;
            }
            &::after {
                border-bottom: 10px solid white;
                bottom: calc(100% - 1px);;
            }
        }
        &.position-left {
            transform: translateX(-100%);
            margin-left: -10px;
            &::before, &::after {
                top: 50%;
                transform: translateY(-50%);
                border-right: none;
            }
            &::before {
                border-left: 10px solid black;
                left: 100%;
            }
            &::after {
                border-left: 10px solid white;
                left: calc(100% - 1px);
            }
        }
        &.position-right {
            margin-left: 10px;
            &::before, &::after {
                top: 50%;
                transform: translateY(-50%);
                border-left: none;
            }
            &::before {
                border-right: 10px solid black;
                right: 100%;
            }
            &::after {
                border-right: 10px solid white;
                right: calc(100% - 1px);
            }
        }

    }

</style>
