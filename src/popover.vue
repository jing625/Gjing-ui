<template>
    <div class="popover" @click="onClick">
        <div ref="contentWrapper" class="content-wrapper" v-if="visible">
            <slot name="content"></slot>
        </div>
        <span ref="triggerWrapper" class="button-wrapper">
            <slot></slot>
        </span>
    </div>
</template>

<script>
    export default {
        name: "GuluPopover",
        data() {
            return {
                visible: false
            }
        },
        mounted() {

        },
        methods: {
            positionContent() {
                document.body.appendChild(this.$refs.contentWrapper)
                let {width, height, top, left} = this.$refs.triggerWrapper.getBoundingClientRect()
                this.$refs.contentWrapper.style.left = left + window.scrollX + 'px'
                this.$refs.contentWrapper.style.top = top + window.scrollY + 'px'
            },
            onClickDocument(e) {
                if (this.$refs.popover &&
                    (this.$refs.popover === e.target || this.$refs.popover.contains(e.target))
                ) { return }
                if (this.$refs.contentWrapper &&
                    (this.$refs.contentWrapper === e.target || this.$refs.contentWrapper.contains(e.target))
                ) { return }
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
        transform: translateY(-100%);
        margin-top: -10px;
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
            left: 10px;
        }
        &::before {
            border-top: 10px solid black;
            top: 100%;
        }
        &::after {
            border-top: 10px solid white;
            top: calc(100% - 1px);
    ;
    }

    }

</style>
