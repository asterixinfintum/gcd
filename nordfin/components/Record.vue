<template>
  <div class="record">
    <header class="record__header">
        <div class="record__left">
            <p>{{ header }}</p>
        </div>
        <div class="record__right">
            <button v-if="btnlabel">{{ btnlabel }}</button>
        </div>
    </header>

    <section class="record__labels">
        <div v-for="label in labels" class="record__labels--label">{{ label }}</div>
    </section>

    <section class="record__labels mobile">
        <div v-for="label in labels" class="record__labels--label mobile">
            <span class="topic">{{ label }}:</span>
            <span v-for="record in records" class="record__labels--label mobile">
                <span>{{ record[labels.indexOf(label)] }}</span>
            </span>
        </div>
    </section>

    <section class="record__empty" v-if="!records.length && !headerType || !records && !headerType">
        <p>No matching records found</p>
    </section>

    <section class="record__populated" v-for="record in records">
        <div class="record__populated--label" v-for="item in record">{{ item }}</div>
    </section>

    <section class="record__rowtog" v-if="!headerType">
        <div></div>
        <div class="record__rowtog--right">
            <span class="perpage">Rows per page:</span>
            <span class="figure" @click="showdropdown = true">{{ itemsperpage }}</span>
            <span class="svg drop" @click="showdropdown = true">
                <svg>
                    <use xlink:href="@/assets/imgs/sprite.svg#icon-arrow_drop_down" />
                </svg>
            </span>
            <span class="svg">
                <svg>
                    <use xlink:href="@/assets/imgs/sprite.svg#icon-chevron-left" />
                </svg>
            </span>
            <span class="svg">
                <svg>
                    <use xlink:href="@/assets/imgs/sprite.svg#icon-chevron-right" />
                </svg>
            </span>

            <div class="record__rowtog--dropmenu" v-if="showdropdown">
                <span @click="toggleitemsperpage(10)">10</span>
                <span @click="toggleitemsperpage(15)">15</span>
                <span @click="toggleitemsperpage(100)">100</span>
            </div>
        </div>
    </section>
  </div>
</template>

<script>
export default {
    props: ['labels', 'records', 'header', 'btnlabel', 'headerType'],
    data() {
        return {
            itemsperpage: 10,
            showdropdown: false
        }
    },
    methods: {
        toggleitemsperpage(val) {
            this.itemsperpage = val
            this.showdropdown = false
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

.record {

    &__header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: #{scaleValue(35)};
        margin-bottom: #{scaleValue(20)};
    }

    &__left {
        font-size: #{scaleValue(18)};
        text-transform: capitalize;

        @media only screen and (max-width: 414px) {
           font-size: #{scaleValue(70)};
        }
    }

    &__right {
        
        & button {
            padding: #{scaleValue(10)} #{scaleValue(15)};
            border-radius: .6rem;
            font-size: #{scaleValue(12)};
            background: rgba(#00B4C9, .6);
            border: .5px solid rgba(#00B4C9, .6);
        }
    }

    &__labels {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(#{scaleValue(70)}, 1fr));
        grid-gap: #{scaleValue(3)};
        align-items: flex-start;
        text-transform: capitalize;
        padding: #{scaleValue(10)} 0;

        &.mobile {
            display: none;
        }

        @media only screen and (max-width: 414px) {
            display: none;

            &.mobile {
                display: flex;
                flex-direction: column;
            }
        }

        &--label {
            font-size: #{scaleValue(12)};
            opacity: .5;

            @media only screen and (max-width: 414px) { 
                font-size: #{scaleValue(60)};

                &.mobile {
                    opacity: 1;
                    display: flex;
                    flex-direction: column;

                    & span {

                        &.topic {
                            opacity: .5;
                            margin-top: #{scaleValue(80)};
                            margin-bottom: #{scaleValue(30)};
                        }
                    }
                }
            }
        }
    }

    &__populated {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(#{scaleValue(70)}, 1fr));
        grid-gap: #{scaleValue(3)};
        align-items: flex-start;
        text-transform: capitalize;
        padding: #{scaleValue(15)} 0;
        border-bottom: 1px solid rgba(#fff, .2);

        &--label {
            font-size: #{scaleValue(13)};
            opacity: 1;
        }

        @media only screen and (max-width: 414px) {
            display: none;
        }
    }

    &__empty {
        text-align: center;
        padding: #{scaleValue(10)};
        border-top: 1px solid rgba(#fff, .2);
        border-bottom: 1px solid rgba(#fff, .2);
        margin-top: #{scaleValue(20)};

        font-size: #{scaleValue(14)};

        @media only screen and (max-width: 414px) {
            display: none;
        }
    }

    &__rowtog {
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
        font-size: #{scaleValue(13)};

        @media only screen and (max-width: 414px) {
           font-size: #{scaleValue(50)};
        }

        &--right {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        & span {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-left: #{scaleValue(10)};

            @media only screen and (max-width: 414px) {
                margin-left: #{scaleValue(50)};
            }

            &.figure {
                cursor: pointer;
            }

            &.svg {
                cursor: pointer;

                & svg {
                    fill: #fff;
                    height: #{scaleValue(15)};
                    width: #{scaleValue(15)};
                    opacity: .5;

                    @media only screen and (max-width: 414px) {
                        height: #{scaleValue(80)};
                        width: #{scaleValue(80)};
                    }
                }
            }

            &.drop {
                margin-left: 0;

                & svg {
                    height: #{scaleValue(20)};
                    width: #{scaleValue(20)};
                    opacity: .9;

                    @media only screen and (max-width: 414px) {
                        height: #{scaleValue(80)};
                        width: #{scaleValue(80)};
                    }
                }
            }
        }

        &--dropmenu {
            position: absolute;
            bottom: 0;
            right: #{scaleValue(70)};
            background: #111722;
            text-align: left;
            width:  #{scaleValue(40)};

            & span {
                text-align: left;
                display: inline-block;
                width: 100%;
                padding: #{scaleValue(10)} 0;
                cursor: pointer;
            }
        }
    }
}
</style>
