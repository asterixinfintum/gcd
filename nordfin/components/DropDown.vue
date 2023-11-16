<template>
  <div class="dropdown" :class="{ open }">
    <div class="dropdown__controls" @click="open === true ? open = false : open = true">
        <div class="dropdown__controls--left">
            <span>
                {{ label }}
            </span>
            <span>
                {{ status }}
            </span>
        </div>
        <div class="dropdown__controls--right">
            <span v-if="!open">
                <svg>
                    <use xlink:href="@/assets/imgs/sprite.svg#icon-keyboard_arrow_down" />
                </svg>
            </span>
            <span v-if="open">
                <svg>
                    <use xlink:href="@/assets/imgs/sprite.svg#icon-chevron-up" />
                </svg>
            </span>
        </div>
    </div>

    <div class="dropdown__content" v-if="open">
        <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
    props: ['label', 'status'],
    data() {
        return {
            open: false
        }
    }
}
</script>

<style lang="scss" scoped>
@function scaleValue($value) {
    @return calc(
      #{$value} * (clamp(350px, 100vw, 3840px) / var(--ideal-viewport-width))
    );
}

.dropdown {
    padding: #{scaleValue(14)} #{scaleValue(20)};

    &.open {
        background: #262B36
    }

    &__controls {
        display: flex;
        font-size: #{scaleValue(13)};
        justify-content: space-between;
        align-items: center;
        cursor: pointer;

        & span {
            display: inline-block;

            & svg {
                fill: #fff;
                width: #{scaleValue(15)};
                height: #{scaleValue(15)};
            }
        }

        &--left {

            & span {
                &:nth-child(1) {
                    width: #{scaleValue(250)};
                }

                &:nth-child(2) {
                    margin-left: #{scaleValue(60)};
                    opacity: .5;
                }
            }
        }
    }

    &__content {
        margin-top: #{scaleValue(30)};

        & p {
            font-size: #{scaleValue(14)};
            line-height: #{scaleValue(25)};
        }
    }

    &__inputarea {
        margin-top: #{scaleValue(30)};

        & input {
            border: none;
            border-bottom: 1px solid rgba(#fff, .4);
            outline: none;
            width: 100%;
            background: transparent;

            color: #fff;
            font-size: #{scaleValue(14)};
            padding-bottom: #{scaleValue(5)};
            
            &::placeholder {
                color: rgba(#fff, .5);
            }
        }
    }

    &__btnarea {
        display: flex;
        justify-content: space-between;
        margin-top: #{scaleValue(30)};

        & button {
            text-transform: uppercase;
            padding: #{scaleValue(15)};
            border-radius: .5rem;

            &:hover {
                background: #2D2E32;
            }
        }
    }
}
</style>
