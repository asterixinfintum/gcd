<template>
  <div class="dexheader" :class="{ sidenav }">

    <div class="dexheader__burger" @click="opensidenav">
        <span></span>
        <span></span>
        <span></span>
    </div>

    <div class="dexheader__overlay" @click="opensidenav" :class="{ sidenav }"></div>

    <section class="dexheader__left">
        <div class="dexheader__menu">
            <div class="dexheader__menu--item dexheader__dropdown">
                <div class="dexheader__dropdown--btn">
                    <span>Cryptocurrencies</span>
                    <span class="dexheader__dropdown--svg">
                        <svg>
                            <use xlink:href="@/assets/imgs/sprite.svg#icon-keyboard_arrow_down" />
                        </svg>
                    </span>
                </div>
                <div class="dexheader__dropdown--body">
                    <span @click="$router.push('/markets')">All Markets</span>
                    <span>Bitcoin(BTC/USD)</span>
                    <span>Ethereum(ETH/USD)</span>
                    <span>Solana(SOL/USD)</span>
                </div>
            </div>

            <div class="dexheader__menu--item dexheader__dropdown">
                <div class="dexheader__dropdown--btn">
                    <span>Forex</span>
                    <span class="dexheader__dropdown--svg">
                        <svg>
                            <use xlink:href="@/assets/imgs/sprite.svg#icon-keyboard_arrow_down" />
                        </svg>
                    </span>
                </div>
                <div class="dexheader__dropdown--body">
                    <span>All Markets</span>
                    <span>Bitcoin(BTC/USD)</span>
                    <span>Ethereum(ETH/USD)</span>
                    <span>Solana(SOL/USD</span>
                </div>
            </div>

            <div class="dexheader__menu--item dexheader__dropdown">
                <div class="dexheader__dropdown--btn">
                    <span>Stocks</span>
                    <span class="dexheader__dropdown--svg">
                        <svg>
                            <use xlink:href="@/assets/imgs/sprite.svg#icon-keyboard_arrow_down" />
                        </svg>
                    </span>
                </div>
                <div class="dexheader__dropdown--body">
                    <span>All Markets</span>
                    <span>Bitcoin(BTC/USD)</span>
                    <span>Ethereum(ETH/USD)</span>
                    <span>Solana(SOL/USD</span>
                </div>
            </div>

            <div class="dexheader__menu--item dexheader__dropdown">
                <div class="dexheader__dropdown--btn">
                    <span>ETFs</span>
                    <span class="dexheader__dropdown--svg">
                        <svg>
                            <use xlink:href="@/assets/imgs/sprite.svg#icon-keyboard_arrow_down" />
                        </svg>
                    </span>
                </div>
                <div class="dexheader__dropdown--body">
                    <span>All Markets</span>
                    <span>Bitcoin(BTC/USD)</span>
                    <span>Ethereum(ETH/USD)</span>
                    <span>Solana(SOL/USD</span>
                </div>
            </div>

            <div class="dexheader__menu--item dexheader__dropdown">
                <div class="dexheader__dropdown--btn">
                    <span>IPOs</span>
                    <span class="dexheader__dropdown--svg">
                        <svg>
                            <use xlink:href="@/assets/imgs/sprite.svg#icon-keyboard_arrow_down" />
                        </svg>
                    </span>
                </div>
                <div class="dexheader__dropdown--body">
                    <span>All Markets</span>
                    <span>Bitcoin(BTC/USD)</span>
                    <span>Ethereum(ETH/USD)</span>
                    <span>Solana(SOL/USD</span>
                </div>
            </div>

            <div class="dexheader__menu--item dexheader__dropdown">
                <div class="dexheader__dropdown--btn">
                    <span>Grant Cred Card</span>
                </div>
            </div>
        </div>
    </section>

    <section class="dexheader__right" v-if="!user">
        <button class="dexheader__btn dex__btn transparent">Login</button>
        <button class="dexheader__btn dex__btn colored">Create an account</button>
    </section>

    <section class="dexheader__right" v-if="user">
        <div class="dexheader__menu">
            <button class="dexheader__btn dex__btn transparent bordered">Deposit</button>
            <div class="dexheader__menu--item dexheader__dropdown right">
                <div class="dexheader__dropdown--btn">
                    <span>Wallet</span>
                    <span class="dexheader__dropdown--svg">
                        <svg>
                            <use xlink:href="@/assets/imgs/sprite.svg#icon-keyboard_arrow_down" />
                        </svg>
                    </span>
                </div>
                <div class="dexheader__dropdown--body">
                    <span @click="$router.push('wallet')">Portfolio</span>
                    <span>Grant Cred Card</span>
                    <span>Borrowing/Lending</span>
                </div>
            </div>

            <div class="dexheader__menu--item dexheader__dropdown right">
                <div class="dexheader__dropdown--btn">
                    <span>Orders</span>
                    <span class="dexheader__dropdown--svg">
                        <svg>
                            <use xlink:href="@/assets/imgs/sprite.svg#icon-keyboard_arrow_down" />
                        </svg>
                    </span>
                </div>
                <div class="dexheader__dropdown--body">
                    <span>Orders</span>
                    <span>Order History</span>
                    <span>Trade Hitsory</span>
                </div>
            </div>

            <div class="dexheader__menu--item dexheader__dropdown right">
                <div class="dexheader__dropdown--btn">
                    <span class="dexheader__dropdown--svg">
                        <svg>
                            <use xlink:href="@/assets/imgs/sprite.svg#icon-bell" />
                        </svg>
                    </span>
                </div>
            </div>

            <div class="dexheader__menu--item dexheader__dropdown right">
                <div class="dexheader__dropdown--btn">
                    <span class="dexheader__dropdown--svg">
                        <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="PersonOutlineIcon"><path d="M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"></path></svg>
                    </span>
                    <span>markanderson@gmail.com</span>
                    <span class="dexheader__dropdown--svg">
                        <svg>
                            <use xlink:href="@/assets/imgs/sprite.svg#icon-keyboard_arrow_down" />
                        </svg>
                    </span>
                </div>
                <div class="dexheader__dropdown--body">
                    <span>Historical Balances</span>
                    <span>Documents</span>
                    <span>Redeem Promo</span>
                    <span>Referrals</span>

                    <span>Settings</span>
                    <span>Grant Cred Card</span>
                    <span>Logout</span>
                </div>
            </div>
        </div>
    </section>
  </div>
</template>

<script>
import symbolMixin from '@/mixins/symbols.js';

export default {
    data() {
        return {
            user: true,
            sidenav: false,
        }
    },
    mixins: [symbolMixin],
    methods: {
        opensidenav() {
            this.sidenav ? this.sidenav = false : this.sidenav = true;
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

    .dexheader {
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: #{scaleValue(20)} 0;
        z-index: 5;
        font-size: #{scaleValue(14)};

        &__burger { 
            display: none;

            @media only screen and (max-width: 414px) {
                display: flex;
                flex-direction: column;
                position: absolute;
                left: #{scaleValue(-210)};
                top: #{scaleValue(130)};

                & span {
                    display: inline-block;
                    background: #fff;
                    border-radius: 3rem;
                    height: #{scaleValue(10)};
                    width: #{scaleValue(120)};
                    margin-bottom: #{scaleValue(20)};
                }
            }
        }

        &__overlay {
            display: none;

            @media only screen and (max-width: 414px) {
                display: block;
                position: absolute;
                top: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, .7);

                transition: all .3s ease;
                transform: translateX(0);

                &.sidenav {
                    transform: translateX(#{scaleValue(-1300)});
                    z-index: 20;
                }
            }
        }

        @media only screen and (max-width: 414px) {
            flex-direction: column;
            background: #1D1F2B;
            align-items: flex-start;
            position: fixed;
            top: 0;
            right: 0;

            font-size: #{scaleValue(70)};
            height: 100vh;
            width: #{scaleValue(1200)};
            justify-content: flex-start;
            font-weight: 300;
            padding: #{scaleValue(178)} #{scaleValue(100)};


            transition: all .3s ease;
            transform: translateX(#{scaleValue(1200)});

            &.sidenav {
                transform: translateX(0);
                z-index: 20;
            }
        }

        &__menu {
            display: flex;
            align-items: center;

            @media only screen and (max-width: 414px) {
                flex-direction: column;
                align-items: flex-start;
            }

            &--item {
                display: flex;
                align-items: center;

                margin-right: #{scaleValue(30)};
                cursor: pointer;

                @media only screen and (max-width: 414px) {
                    margin-right: 0;
                    margin-bottom: #{scaleValue(90)};
                }

                &.right {
                    margin-right: 0;
                    margin-left: #{scaleValue(30)};

                    @media only screen and (max-width: 414px) {
                        margin-bottom: #{scaleValue(90)};
                    }
                }
            }
        }

        &__dropdown {
            position: relative;
            flex-direction: column;
            align-items: flex-start;

            &--btn {
                display: flex;
                align-items: center;

                & span {
                    display: flex;
                    align-items: center;

                    & svg {
                        fill: #fff;
                        height: #{scaleValue(20)};
                        width: #{scaleValue(20)};

                        @media only screen and (max-width: 414px) {
                            height: #{scaleValue(60)};
                            width: #{scaleValue(60)};
                        }
                    }
                }

                &:hover {

                    & ~ .dexheader__dropdown--body {
                        display: flex;
                    }
                }
            }

            &--body {
                position: absolute;
                display: none;
                flex-direction: column;

                top: #{scaleValue(20)};

                background: #263238;
                border-radius: 1rem;
                padding: #{scaleValue(10)} #{scaleValue(8)};
                min-width: #{scaleValue(180)};

                @media only screen and (max-width: 414px) {
                    z-index: 10;
                    min-width: #{scaleValue(900)};
                }

                & span {
                    display: inline-block;
                    border-radius: 1rem;
                    padding: #{scaleValue(13)} #{scaleValue(10)};
                    border: .5px solid rgba(255,255,255,0);
                    cursor: pointer;

                    @media only screen and (max-width: 414px) {
                        padding: #{scaleValue(30)} #{scaleValue(60)};
                    }

                    &:hover {
                        border: .5px solid rgba(255,255,255,.5);
                    }
                }

                &:hover {
                    display: flex;
                }
            }
        }

        &__right {
            
            & button {
                font-size: #{scaleValue(16)};
                background: #007994;
                border-radius: .3rem;
                padding: #{scaleValue(10)} #{scaleValue(20)};
                margin-left: #{scaleValue(30)};
                outline: none;
                border: none;

                @media only screen and (max-width: 414px) {
                    margin-left: 0;
                    font-size: #{scaleValue(70)};
                    padding: #{scaleValue(40)} #{scaleValue(80)};
                    border-radius: 3rem;
                    margin-bottom: #{scaleValue(90)};
                }

                &.transparent {
                    color: #007994;
                    border: none;
                    background: transparent;
                }

                &.bordered {
                    border: 1px solid #007994;
                    border-radius: .9rem;
                }
            }
        }
    }
</style>