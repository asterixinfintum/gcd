<template>
  <div class="buysell">

  <div class="buysell__top" v-if="!buysellSettings">

    <div class="buysell__topbtns">
        <span class="buysell__topbtns--btn" @click="toggleAction('buy')" :class="{ green: action === 'buy' }">
            <button>Buy {{asset}}</button>
        </span>
        <span class="buysell__topbtns--btn" @click="toggleAction('sell')" :class="{ red: action === 'sell' }">
            <button>Sell {{asset}}</button>
        </span>
        <span class="buysell__topbtns--svg">
            <svg>
                <use xlink:href="@/assets/imgs/sprite.svg#icon-calculator" />
            </svg>
        </span>
    </div>

    <div class="buysell__top--body">
        <div class="buysell__inputarea margin-bottom">

            <div class="buysell__inputbody">
                <section class="buysell__input">
                    <input placeholder="u" v-model="assetprice"/>
                    <span class="amount">Price</span>
                    <span class="currency">usd</span>
                </section>
            </div>

            <div class="buysell__inputbody">  
                <section class="buysell__input">
                    <input placeholder="u" v-model="ordertype"/>
                    <span class="amount">Order type</span>
                    <span class="currency svg">
                        <svg>
                            <use xlink:href="@/assets/imgs/sprite.svg#icon-arrow_drop_down" />
                        </svg>
                    </span>
                </section>
            </div>

        </div>

        <div class="buysell__inputarea">

            <div class="buysell__inputbody">
                <section class="buysell__input">
                    <input placeholder="u"/>
                    <span class="amount">Amount</span>
                    <span class="currency">{{asset}}</span>
                </section>
            </div>

            <div class="buysell__inputbody">
                <section class="buysell__input">
                    <input placeholder="u"/>
                    <span class="amount">Amount</span>
                    <span class="currency">usd</span>
                </section>
            </div>
        </div>

        <div class="buysell__switches">
            <section class="buysell__switcharea">
                <div class="buysell__switch" :class="{ on: switcher === 'post' }" @click="toggleSwitcher('post')"></div>
                <p>POST</p>
            </section>
            <section class="buysell__switcharea">
                <div class="buysell__switch" :class="{ on: switcher === 'ioc' }" @click="toggleSwitcher('ioc')"></div>
                <p>IOC</p>
            </section>
        </div>

        <button class="buysell__top--btn">Log in to trade</button>
    </div>

  </div>

  <div class="buysell__transactionsetting" v-if="buysellSettings">
    
  </div>

    <div class="buysell__bottom">
        <section class="buysell__bottomarea">
            <div class="buysell__bottomarea--item">
                <p class="buysell__bottomarea--p">Base currency</p>
                <p class="buysell__bottomarea--p">{{asset}}</p>
            </div>

            <div class="buysell__bottomarea--item">
                <p class="buysell__bottomarea--p">Quote currency</p>
                <p class="buysell__bottomarea--p">USD (USD)</p>
            </div>

            <div class="buysell__bottomarea--item">
                <p class="buysell__bottomarea--p">Change today</p>
                <p class="buysell__bottomarea--p">-0.46%</p>
            </div>

            <div class="buysell__bottomarea--item">
                <p class="buysell__bottomarea--p">24h High:</p>
                <p class="buysell__bottomarea--p">23,515</p>
            </div>

            <div class="buysell__bottomarea--item">
                <p class="buysell__bottomarea--p">24h Low:</p>
                <p class="buysell__bottomarea--p">22,862</p>
            </div>

            <div class="buysell__bottomarea--item">
                <p class="buysell__bottomarea--p">24h Volume:</p>
                <p class="buysell__bottomarea--p">US$44,426,020.92</p>
            </div>
        </section>

        <section class="buysell__bottomarea">
            <div class="buysell__bottomarea--item">
                <p class="buysell__bottomarea--p">Minimum order size:</p>
                <p class="buysell__bottomarea--p">0.0001 {{asset}}</p>
            </div>

            <div class="buysell__bottomarea--item">
                <p class="buysell__bottomarea--p">Minimum size increment:</p>
                <p class="buysell__bottomarea--p">0.0001 {{asset}}</p>
            </div>

            <div class="buysell__bottomarea--item">
                <p class="buysell__bottomarea--p">Minimum price increment:</p>
                <p class="buysell__bottomarea--p">1 USD</p>
            </div>
        </section>
    </div>
  </div>
</template>

<script>
import assetdata from '@/mixins/assetdata.js';
export default {
    data() {
        return {
            action: 'buy',
            assetprice: '22,999',
            ordertype: 'Limit order',
            switcher: 'post',

            buysellSettings: false,
            asset: ''
        }
    },
    mixins: [assetdata],
    methods: {
        toggleAction(action) {
            this.action = action;
        },
        toggleSwitcher(value) {
            this.switcher = value;
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

.buysell {
    width: #{scaleValue(400)};

    @media only screen and (max-width: 414px) {
        width: #{scaleValue(1500)};
    }

    &__top {
        background: #111722;
        border-radius: .5rem;
        height: #{scaleValue(400)};
        margin-bottom: #{scaleValue(10)};

        @media only screen and (max-width: 414px) {
            height: auto;
        }

        &--body {
            padding: #{scaleValue(20)};
        }

        &--btn {
            font-size: #{scaleValue(16)};
            background: #00B4C9;
            border-radius: .3rem;
            padding: #{scaleValue(10)} #{scaleValue(20)};
            outline: none;
            border: none;

            width: 100%;

            margin-top: #{scaleValue(20)};

            @media only screen and (max-width: 414px) {
                font-size: #{scaleValue(70)};
                padding: #{scaleValue(40)} #{scaleValue(20)};
            }
        }
    }

    &__topbtns {
        display: flex;
        align-items: center;

        margin-bottom: #{scaleValue(20)};

        &--btn {
            position: relative;
            display: flex;
            align-items: center;
            width: #{scaleValue(200)};

            &::after {
                content: '';
                position: absolute;
                bottom: 0;
                left: 0;
                border-radius: 3rem;
                height: #{scaleValue(2)};
                background: transparent;
                width: 100%;

                transition: all .3s ease;
            }

            &.green {

                &::after {
                    background: green;
                }

                & button {
                    color: green;
                }
            }

            &.red {

                &::after {
                    background: red;
                }

                & button {
                    color: red;
                }
            }
            
            & button {
                font-size: #{scaleValue(14)};
                text-transform: capitalize;
                width: 100%;
                color: rgba(255,255,255,.5);

                padding: #{scaleValue(17)} 0;

                &.current {
                    color: #fff;
                }
            }
        }

        &--svg {
            display: flex;
            align-items: center;
            cursor: pointer;

            padding-right: #{scaleValue(20)};
            
            & svg {
                fill: #fff;
                height: #{scaleValue(20)};
                width: #{scaleValue(20)};
            }
        }
    }

    &__bottom {
      border-radius: .5rem;
      background: #111722;
      padding: #{scaleValue(20)};
      padding-bottom: #{scaleValue(70)};

      height: #{scaleValue(400)};

      @media only screen and (max-width: 414px) {
         height: auto;
      }
    }

    &__bottomarea {

      &:nth-child(1) {
          border-bottom: .5px solid rgba(255,255,255,.5);
          padding-bottom: #{scaleValue(20)};
      }

      &:nth-child(2) {
          padding-top: #{scaleValue(20)};
      }

      &--item {
          display: flex;
          justify-content: space-between;
          align-items: center;

          line-height: #{scaleValue(27)};

          @media only screen and (max-width: 414px) {
            line-height: #{scaleValue(100)};
          }
      }

      &--p {
          font-size: #{scaleValue(13)};

          @media only screen and (max-width: 414px) {
            font-size: #{scaleValue(60)};
          }

          &:nth-child(1) {
              opacity: .5
          }

          &:nth-child(2) {
              
          }
      }
    }

    &__inputarea {
        display: flex;
        justify-content: space-between;

        @media only screen and (max-width: 414px) {
         flex-direction: column;
        }

        &.margin-bottom {
            margin-bottom: #{scaleValue(30)}
        }
    }

    &__inputbody {
        position: relative;
        
        & span {
            position: relative;
            display: inline-block;
            color: #fff;
            opacity: .5;
            transition: all .3s ease;
            z-index: 1;
            font-size: #{scaleValue(14)};

            @media only screen and (max-width: 414px) {
                font-size: #{scaleValue(60)};
            }

            &.amount {
                text-transform: capitalize;
                position: absolute;
                left: 0;
                bottom: #{scaleValue(5)};

                @media only screen and (max-width: 414px) {
                    bottom: #{scaleValue(120)};
                }
            }

            &.currency {
                text-transform: uppercase;

                &.svg {
                    opacity: 1;
                }

                & svg {
                    fill: #fff;
                    height: #{scaleValue(20)};
                    width: #{scaleValue(20)};
                    opacity: 1;
                }
            }
        }
    }

    &__input {
        display: flex;
        align-items: center;
        justify-content: space-between;

        border-bottom: .5px solid rgba(255,255,255,.5);
        width: #{scaleValue(170)};

        @media only screen and (max-width: 414px) {
          width: 100%;
          margin-bottom: #{scaleValue(100)};
        }

        & input {
            border: none;
            outline: none;
            background: transparent;
            color: #fff;
            padding: #{scaleValue(5)} 0;
            position: relative;
            z-index: 2;
            font-size: #{scaleValue(13)};

            width: 100%;

            @media only screen and (max-width: 414px) {
                font-size: #{scaleValue(60)};
                padding-top: #{scaleValue(50)};
                padding-bottom: #{scaleValue(20)};
            }

            &::placeholder {
                opacity: 0;
            }

            &:not(:placeholder-shown) ~ .amount {
                transform: translateY(#{scaleValue(-29)});
                font-size: #{scaleValue(10)};

                @media only screen and (max-width: 414px) {
                    transform: translateY(#{scaleValue(-90)});
                    font-size: #{scaleValue(40)};
                }
            }

            &:focus ~ .amount {
                transform: translateY(#{scaleValue(-29)});
                font-size: #{scaleValue(10)};

                @media only screen and (max-width: 414px) {
                    transform: translateY(#{scaleValue(-90)});
                    font-size: #{scaleValue(40)};
                }
            }
        }
    }

    &__switches {
        display: flex;
        position: relative;

        margin-top: #{scaleValue(30)};
    }

    &__switcharea {
        display: flex;
        align-items: center;

        margin-right: #{scaleValue(30)};

        & p {
            font-size: #{scaleValue(14)};

            @media only screen and (max-width: 414px) {
                font-size: #{scaleValue(60)};
                padding-top: #{scaleValue(20)};
            }
        }
    }

    &__switch {
        position: relative;
        width: #{scaleValue(40)};
        border-radius: 3rem;
        height: #{scaleValue(16)};
        background: rgba(255,255,255,.5);
        cursor: pointer;
        margin-right: #{scaleValue(10)};

        @media only screen and (max-width: 414px) {
             height: #{scaleValue(50)};
             width: #{scaleValue(170)};
        }

        &:before {
            content: '';
            position: absolute;
            height: #{scaleValue(20)};
            width: #{scaleValue(20)};
            background: rgba(255,255,255,.8);
            right: 0;
            top: #{scaleValue(-2)};
            border-radius: 100%;

            transition: all .3s ease;

            @media only screen and (max-width: 414px) {
                height: #{scaleValue(60)};
                width: #{scaleValue(60)};
            }
        }

        &.on {
           background: rgba(#00B4C9, .7);

           &:before {
               background: #00B4C9;
               transform: translateX(#{scaleValue(-20)});

               @media only screen and (max-width: 414px) {
                    transform: translateX(#{scaleValue(-110)});
               }
           }
        }
    }

    &__transactionsetting {
        background: #111722;
        border-radius: .5rem;
        height: #{scaleValue(600)};
        margin-bottom: #{scaleValue(10)};
    }
}
</style>
