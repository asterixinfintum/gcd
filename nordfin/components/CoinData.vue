<template>
  <div class="coindata">
    <span class="coindata__favorite">
        <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="StarBorderIcon"><path d="m22 9.24-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"></path></svg>
    </span>
    
    <div class="coindata__dropdown">
        <div class="coindata__btn">
            <!--<figure>
                <img src="@/assets/imgs/bitcoinlogo.png"/>
            </figure>-->
            <div class="coindata__btn--label">
                <p>{{asset}}/usd</p>
            </div>
            <span class="coindata__btn--svg">
                <svg>
                    <use xlink:href="@/assets/imgs/sprite.svg#icon-arrow_drop_down" />
                </svg>
            </span>
        </div>

        <div class="coindata__menu">
            <span class="header">Spot</span>
            <span class="item">{{asset}}/aud</span>
            <span class="item">{{asset}}/brz</span>
            <span class="item">{{asset}}/eur</span>
            <span class="item">{{asset}}/usd</span>
            <span class="item">{{asset}}/usdt</span>
        </div>
    </div>

    <div class="coindata__price coindata__margin">
        <span class="coindata__price--figure">22,999</span>
        <span class="coindata__price--percent positive">+1.34%</span>
    </div>

    <div class="coindata__numbers coindata__margin">
        <span class="coindata__numbers--grey">24h High</span>
        <span class="coindata__numbers--white">23,515</span>
    </div>

    <div class="coindata__numbers coindata__margin">
        <span class="coindata__numbers--grey">24h Low</span>
        <span class="coindata__numbers--white">22,862</span>
    </div>

    <div class="coindata__numbers coindata__margin">
        <span class="coindata__numbers--grey">24h Volume</span>
        <span class="coindata__numbers--white">US$46,032,808</span>
    </div>
  </div>
</template>

<script>
import assetdata from '@/mixins/assetdata.js';

export default {
    data() {
        return {
            asset: ''
        }
    },
    mixins: [assetdata]
}
</script>

<style lang="scss" scoped>
@function scaleValue($value) {
    @return calc(
      #{$value} * (clamp(350px, 100vw, 3840px) / var(--ideal-viewport-width))
    );
}

.coindata {
    display: flex;
    align-items: center;

    position: relative;
    z-index: 4;

    @media only screen and (max-width: 414px) {
        flex-direction: column;
        align-items: flex-start;
        line-height: #{scaleValue(150)};
    }

    &__favorite {
        display: inline-block;
        margin-right: #{scaleValue(5)};
        cursor: pointer;

        & svg {
            fill: rgba(255,255,255,.5) !important;
            height: #{scaleValue(24)};
            width: #{scaleValue(24)};

            @media only screen and (max-width: 414px) {
                height: #{scaleValue(70)};
                width: #{scaleValue(70)};
            }
        }
    }

    &__dropdown {
        text-transform: uppercase;
        position: relative;
        cursor:  pointer;
        margin-right: #{scaleValue(40)};

        &:hover > .coindata__menu {
            display: flex;
        }
    }

    &__btn {
        display: flex;
        align-items: center;

        & figure {
            display: flex;
            align-items: center;
            justify-content: center;
            height: #{scaleValue(25)};
            width: #{scaleValue(25)};
            margin-right: #{scaleValue(10)};
            overflow: hidden;

            @media only screen and (max-width: 414px) {
                height: #{scaleValue(60)};
                width: #{scaleValue(60)};
            }

            & img {
                object-fit: cover;
                height: 100%;
                width: 100%;
            }
        }

        &--label {
            display: flex;
            align-items: center;
            font-weight: 600;
            cursor: pointer;

            font-size: #{scaleValue(18)};

            @media only screen and (max-width: 414px) {
                font-size: #{scaleValue(70)};
            }
        }

        &--svg {
            display: flex;
            align-items: center;
            margin-left: #{scaleValue(15)};
            cursor: pointer;

            & svg {
                fill: #fff;
                height: #{scaleValue(20)};
                width: #{scaleValue(20)};

                @media only screen and (max-width: 414px) {
                    height: #{scaleValue(70)};
                    width: #{scaleValue(70)};
                }
            }
        }
    }

    &__menu {
        position: absolute;
        display: none;
        flex-direction: column;

        top: #{scaleValue(24)};

        background: #263238;
        border-radius: .5rem;
        padding: #{scaleValue(10)} #{scaleValue(8)};

        & span {
            display: inline-block;

            &.header {
                text-align: center;
                text-transform: capitalize;
                margin-bottom: #{scaleValue(15)};
            }
            
            &.item {
                padding: #{scaleValue(4)} 0;
                border-bottom: .5px solid rgba(255,255,255,0);
                cursor: pointer;
                color: #5C6BC0;

                &:hover {
                    border-bottom: .5px solid rgba(255,255,255,.5);
                }
            }
        }

        &:hover {
            display: flex;
        }
    }

    &__margin {
        margin-right: #{scaleValue(30)};

        & span {
            display: inline-block;
        }
    }

    &__price {
        display: flex;
        align-items: center;

        &--figure {
            font-size: #{scaleValue(18)};
            font-weight: 600;
            margin-right: #{scaleValue(6)};

            @media only screen and (max-width: 414px) {
                font-size: #{scaleValue(55)};
            }
        }

        &--percent {
            font-size: #{scaleValue(13)};

            @media only screen and (max-width: 414px) {
                font-size: #{scaleValue(50)};
            }

            &.positive {
                color: green;
            }

            &.negative {
                color: red;
            }
        }
    }

    &__numbers {
        display: flex;
        flex-direction: column;
        font-size: #{scaleValue(12)};
        line-height: #{scaleValue(18)};

        @media only screen and (max-width: 414px) {
            font-size: #{scaleValue(50)};
            line-height: #{scaleValue(70)};
        }

        &--grey {
            opacity: .5
        }

        &--white {

        }
    }
}
</style>
