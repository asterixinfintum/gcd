<template>
  <div class="flashcard">
    <section class="flashcard__body top">
        <h4 class="flashcard__header">
            Orderbook
        </h4>
        <div class="flashcard__assetprice">
            <span class="svg">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9.414 17" data-v-9fa6df88=""><g id="icon-arrow-up" transform="translate(0.707 0.5)" data-v-9fa6df88=""><path id="Path_104" data-name="Path 104" d="M18,7.5v16" transform="translate(-14 -7.5)" fill="none" stroke="#fa374e" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" data-v-9fa6df88=""></path><path id="Path_105" data-name="Path 105" d="M7.5,7.5l4,4,4-4" transform="translate(-7.5 4.5)" fill="none" stroke="#fa374e" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" data-v-9fa6df88=""></path></g></svg>
            </span>
            <span class="text">22,999</span>
        </div>

        <div class="flashcard__labelsarea">
            <div class="flashcard__labels">
                <div class="flashcard__label">
                    <span>Bid Size</span>
                    <span>({{asset}})</span>
                </div>

                <div class="flashcard__label">
                    <span>Bid Price</span>
                    <span>(USD)</span>
                </div>

                <div class="flashcard__label">
                    <span>Ask Price</span>
                    <span>(USD)</span>
                </div>

                <div class="flashcard__label">
                    <span>Ask Size</span>
                    <span>({{asset}})</span>
                </div>
            </div>
        </div>

        <div class="flashcard__items">
            <div class="flashcard__item" v-for="item in orderbook">
                <div class="colorgrader" :class="{ greenflash: item.colored === 'color' }"></div>
                <div class="flashcard__item--section positive">
                    <span>{{`${item.bidsize}`.substring(0, 6)}}</span>
                </div>
                <div class="flashcard__item--section positive">
                    <span class="green">22,878</span>
                </div>
                <div class="flashcard__item--section negative">
                    <span class="red">22,871</span>
                </div>
                <div class="flashcard__item--section negative">
                    <span>{{`${item.asksize}`.substring(0, 6)}}</span>
                </div>
                 <div class="colorgrader two" :class="{ redflash: item.colored === 'blank' }"></div>
            </div>
        </div>
    </section>

    <section class="flashcard__body">
        <h4 class="flashcard__header">
            Market Trades
        </h4>

        <div class="flashcard__labelsarea">
            <div class="flashcard__labels three">
                <div class="flashcard__label">
                    <span>Price (USD)</span>
                </div>

                <div class="flashcard__label">
                    <span>Size ({{asset}})</span>
                </div>

                <div class="flashcard__label righttext">
                    <span>Time</span>
                </div>
            </div>
        </div>

        <div class="flashcard__items">
            <div class="flashcard__item three" v-for="marketTrade in marketTrades">
                <div class="flashcard__item--section">
                    <span class="green price">22,859</span>
                </div>
                <div class="flashcard__item--section">
                    <span>{{`${marketTrade.size}`.substring(0, 6)}}</span>
                </div>
                <div class="flashcard__item--section righttext">
                    <span>{{`${marketTrade.time}`}}</span>
                </div>
            </div>
        </div>
    </section>

  </div>
</template>

<script>
import assetdata from '@/mixins/assetdata.js';
export default {
    data() {
        return {
            limit: 2,
            least: 0.001,
            items: Array.apply(null, Array(20)),
            orderbook: this.generateBidSize()
        }
    },
    methods: {
        convert_positive(a) {
            if (a < 0) {
            a = a * -1;
        }
        return a;
        },
        generateBidSize() {
            const items = Array.apply(null, Array(100));
            const limit = Math.random() * (2 - 0.0001) + 0.0001;
            const least = Math.random() * (2 - 0.0001) + 0.0001;
            let data = [];

            data = items.map(item => item = {
                bidsize: this.convert_positive(Math.random() * (limit - least) + 0.0001),
                asksize: this.convert_positive(Math.random() * (limit - least) + 0.0001),
                colored: (() => {
                    let number = Math.floor((Math.random() * 100) + 1);

                    if (number % 2 === 0) {
                        return 'color'
                    } else {
                        return 'blank'
                    }
                })()
            });

            return data;
        },
        generateCurrentTime() {
            const current = new Date();

            return current.toLocaleTimeString("en-US", {
                hour12: false
            });
        },
        createMarketTrade() {
            const trade = {};
            const limit = Math.random() * (2 - 0.0001) + 0.0001;
            const least = Math.random() * (2 - 0.0001) + 0.0001;
            trade.size = this.convert_positive(Math.random() * (limit - least) + 0.0001);
            trade.time = this.generateCurrentTime();
            return trade;
        }
    },
    computed: {
        marketTrades () {
            const marketTrades = this.items.map(item => this.createMarketTrade());
            return marketTrades;
        }
    },
    mounted() {
        setInterval(() => {
            this.orderbook = this.generateBidSize()
        }, 300)
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

@keyframes greenflash {
  0% {
    background: transparent;
  }
  
  50% {
    background: rgba(30, 130, 76, .5);
  }
  
  100% {
    background: transparent;
  }
}

@keyframes redflash {
  0% {
    background: transparent;
  }
  
  50% {
    background: rgba(240, 52, 52, .5);
  }
  
  100% {
    background: transparent;
  }
}

.flashcard {
    width: #{scaleValue(400)};

    @media only screen and (max-width: 414px) {
        width: #{scaleValue(1500)};
    }

    &__body {
        background: #111722;
        overflow: scroll;
        border-radius: .5rem;
        height: #{scaleValue(400)};
        padding: #{scaleValue(10)} 0;

        @media only screen and (max-width: 414px) {
           height: #{scaleValue(1000)};
        }

        &.top {
            margin-bottom: #{scaleValue(10)};
        }
    }

    &__header {
        font-weight: 500;
        font-size: #{scaleValue(14)};
        text-align: center;
        margin-bottom: #{scaleValue(20)};

        @media only screen and (max-width: 414px) {
           font-size: #{scaleValue(60)};
        }
    }

    &__assetprice {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: #{scaleValue(12)};
        margin-bottom: #{scaleValue(5)};
        font-size: #{scaleValue(15)};

        @media only screen and (max-width: 414px) {
           font-size: #{scaleValue(50)};
        }

        & span {
            display: flex;
            align-items: center;

            &.svg {
                margin-right: #{scaleValue(5)};

                & svg {
                    height: #{scaleValue(12)};
                    width: #{scaleValue(15)};
                }
            }
        }
    }

    &__labelsarea {
        padding: #{scaleValue(20)};
        padding-bottom: #{scaleValue(10)};
    }

    &__labels {
        display: flex;
        justify-content: space-between;
        opacity: .5;
        font-size: #{scaleValue(11.5)};

        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(#{scaleValue(70)}, 1fr));
        grid-gap: #{scaleValue(10)};
        align-items: flex-start;

        @media only screen and (max-width: 414px) {
           font-size: #{scaleValue(50)};
        }

        &.three {
            grid-template-columns: repeat(auto-fit, minmax(#{scaleValue(100)}, 1fr));
        }
    }

    &__label {
        display: flex;
        flex-direction: column;
        text-align: left;

        &.righttext {
            text-align: right;
        }
    }

    &__item {
        padding: #{scaleValue(5)} #{scaleValue(20)};
        font-size: #{scaleValue(12.5)};
        border-top: .1px solid rgba(255,255,255,.2);
        position: relative;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(#{scaleValue(70)}, 1fr));
        grid-gap: #{scaleValue(10)};
        align-items: flex-start;

        @media only screen and (max-width: 414px) {
           font-size: #{scaleValue(60)};
        }

        &--section {
            transition: all .4s ease;
            position: relative;
            z-index: 2;
            
            &.righttext {
                text-align: right;
            }
        }

        &.three {
            grid-template-columns: repeat(auto-fit, minmax(#{scaleValue(100)}, 1fr));
        }

        & span {
            display: inline-block;

            &.green {
                color: green
            }

            &.red {
                color: red;
            }

            &.price {
                font-weight: 600;
            }
        }
    }
}

.colorgrader {
    position: absolute;
    height: 100%;
    background: transparent;
    top: 0;

    width: #{scaleValue(200)};
    z-index: 1;

    @media only screen and (max-width: 414px) {
        width: #{scaleValue(750)};
    }

    &.two {
        right: 0 !important;
    }

    &.greenflash {
        animation: greenflash .4s ease-in-out;
    }

    &.redflash {
        animation: redflash .4s ease-in-out;
    }
}
</style>
