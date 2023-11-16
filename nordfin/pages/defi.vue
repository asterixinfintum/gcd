<template>
    <div>
        <div class="defi">
            <div class="defi__container">
                <Strategy v-if="strategyopen" :close="toggleStrategyView"/>
                <div class="defi__header"></div>
                <div class="defi__body">
                    <div class="defi__left">
                        <DashboardSideMenu />
                    </div>
                    <div class="defi__main">

                        <UserHeader />
                        
                        <h1 class="defi__h1">DeFi</h1>
                        <div class="defi__mainbody">
                            <div class="defi__mainbody--header">
                                <div class="defi__mainbody--headerlab" :class="{ current: current === 'overview' }" @click="togglecurrent('overview')">
                                    <span>
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" aria-hidden="true" focusable="false" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M464 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM224 416H64v-96h160v96zm0-160H64v-96h160v96zm224 160H288v-96h160v96zm0-160H288v-96h160v96z"></path></svg>
                                    </span>
                                    <span>Overview</span>
                                </div>
                                <div class="defi__mainbody--headerlab" :class="{ current: current === 'earn' }" @click="togglecurrent('earn')">
                                    <span>
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" aria-hidden="true" focusable="false" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"></path></svg>
                                    </span>
                                    <span>Earn</span>
                                </div>
                            </div>

                            <div class="defi__content" v-if="current === 'overview'">
                                <div class="defi__balance">
                                    <span>Net Worth</span>
                                    <span>$0.14</span>
                                </div>
                                <div class="defi__middle">
                                    <div class="defi__middle--area">
                                        <span>Wallet Balance</span>
                                        <span>$0.14</span>
                                    </div>
                                    <div class="defi__middle--area">
                                        <span>Earn Balance</span>
                                        <span>$0.00</span>
                                    </div>
                                </div>
                                <div class="defi__seeall">
                                    <div class="defi__seeall--earnings">
                                        <span>
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M560 224h-29.5c-8.8-20-21.6-37.7-37.4-52.5L512 96h-32c-29.4 0-55.4 13.5-73 34.3-7.6-1.1-15.1-2.3-23-2.3H256c-77.4 0-141.9 55-156.8 128H56c-14.8 0-26.5-13.5-23.5-28.8C34.7 215.8 45.4 208 57 208h1c3.3 0 6-2.7 6-6v-20c0-3.3-2.7-6-6-6-28.5 0-53.9 20.4-57.5 48.6C-3.9 258.8 22.7 288 56 288h40c0 52.2 25.4 98.1 64 127.3V496c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16v-48h128v48c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16v-80.7c11.8-8.9 22.3-19.4 31.3-31.3H560c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16zm-128 64c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zM256 96h128c5.4 0 10.7.4 15.9.8 0-.3.1-.5.1-.8 0-53-43-96-96-96s-96 43-96 96c0 2.1.5 4.1.6 6.2 15.2-3.9 31-6.2 47.4-6.2z"></path></svg>
                                        </span>
                                        <span>Earn</span>
                                    </div>
                                    <div class="defi__seeall--btn">
                                        <span>See all</span>
                                        <span>
                                            <svg viewBox="0 0 24 24" focusable="false" class="chakra-icon css-onkibi" aria-hidden="true"><path fill="currentColor" d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path></svg>
                                        </span>
                                    </div>
                                </div>
                                <div class="defi__phrase">
                                    <span>
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M560 224h-29.5c-8.8-20-21.6-37.7-37.4-52.5L512 96h-32c-29.4 0-55.4 13.5-73 34.3-7.6-1.1-15.1-2.3-23-2.3H256c-77.4 0-141.9 55-156.8 128H56c-14.8 0-26.5-13.5-23.5-28.8C34.7 215.8 45.4 208 57 208h1c3.3 0 6-2.7 6-6v-20c0-3.3-2.7-6-6-6-28.5 0-53.9 20.4-57.5 48.6C-3.9 258.8 22.7 288 56 288h40c0 52.2 25.4 98.1 64 127.3V496c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16v-48h128v48c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16v-80.7c11.8-8.9 22.3-19.4 31.3-31.3H560c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16zm-128 64c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zM256 96h128c5.4 0 10.7.4 15.9.8 0-.3.1-.5.1-.8 0-53-43-96-96-96s-96 43-96 96c0 2.1.5 4.1.6 6.2 15.2-3.9 31-6.2 47.4-6.2z"></path></svg>
                                    </span>
                                    <span>
                                        <p>Earn passive income by staking your assets or depositing them into a DeFi strategy.</p>
                                    </span>
                                    <span>View Opportunities</span>
                                </div>
                            </div>

                            <div class="defi__content" v-if="current === 'earn'">
                                <div class="defi__content--earnheader">
                                    <h2>Eligible Opportunities</h2>

                                    <div class="defi__content--bar">
                                        <figure>
                                            <img src="@/design-assets/atom.png"/>
                                        </figure>
                                        <figure>
                                            <img src="@/design-assets/eth.png"/>
                                        </figure>
                                        <p>Click here to Earn 44.70% APR* by farming your assets</p>
                                    </div>
                                </div>

                                <div class="defi__content--earnlist">
                                    <div class="defi__content--earnheader">
                                        <h3 class="defi__content--h3">Earn</h3>
                                        <p class="defi__content--earnlistcopy">Earn passive income by staking your assets or depositing them into a DeFi strategy.</p>
                                    </div>
                                    <div class="defi__strategy defi__strategy--header">
                                        <div class="defi__strategy--number"></div>
                                        <div class="defi__strategy--asset">
                                            <p>Asset</p>
                                        </div>
                                        <div class="defi__strategy--provider">
                                            <p>Provider</p>
                                        </div>
                                        <div class="defi__strategy--type">
                                            <p>Type</p>
                                        </div>
                                        <div class="defi__strategy--apy">
                                            <p class="positive">Apy</p>
                                        </div>
                                        <div class="defi__strategy--tvl">
                                            <p>Tvl</p>
                                        </div>
                                        <div class="defi__strategy--userbalance">
                                            <p>Balance</p>
                                        </div>
                                    </div>
                                    <div class="defi__strategies">
                                        <div class="defi__strategy defi__strategy--item" v-for="item in strategies" @click="toggleStrategyView">
                                            <div class="defi__strategy--number"></div>
                                            <div class="defi__strategy--asset">
                                                <span :style="{
                                                    background: createRGBA()
                                                }"></span> 
                                                <span>UniswapX</span>
                                            </div>
                                            <div class="defi__strategy--provider">
                                                <span>Cosmos</span>
                                            </div>
                                            <div class="defi__strategy--type">
                                                <span>Token Staking</span>
                                            </div>
                                            <div class="defi__strategy--apy">
                                                <span class="positive">19.39%</span>
                                            </div>
                                            <div class="defi__strategy--tvl">
                                                <span>$9.89m</span>
                                            </div>
                                            <div class="defi__strategy--userbalance">
                                                <span>-</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Strategy from '../components/Strategy.vue';
import UserHeader from '../components/UserHeader.vue';

export default {
    data() {
        return {
            current: "overview",
            strategyopen: false
        };
    },
    methods: {
        toggleStrategyView() {
            this.strategyopen ? this.strategyopen = false : this.strategyopen = true;
        },
        togglecurrent(val) {
            this.current = val;
        },
        rainbow(numOfSteps, step) {
            var r, g, b;
            var h = step / numOfSteps;
            var i = ~~(h * 6);
            var f = h * 6 - i;
            var q = 1 - f;
            switch (i % 6) {
                case 0:
                    r = 1;
                    g = f;
                    b = 0;
                    break;
                case 1:
                    r = q;
                    g = 1;
                    b = 0;
                    break;
                case 2:
                    r = 0;
                    g = 1;
                    b = f;
                    break;
                case 3:
                    r = 0;
                    g = q;
                    b = 1;
                    break;
                case 4:
                    r = f;
                    g = 0;
                    b = 1;
                    break;
                case 5:
                    r = 1;
                    g = 0;
                    b = q;
                    break;
            }
            var c = "#" + ("00" + (~~(r * 255)).toString(16)).slice(-2) + ("00" + (~~(g * 255)).toString(16)).slice(-2) + ("00" + (~~(b * 255)).toString(16)).slice(-2);
            return (c);
        },
        hexToRgb(hex) {
            var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
            return result ? {
                r: parseInt(result[1], 16),
                g: parseInt(result[2], 16),
                b: parseInt(result[3], 16)
            } : null;
        },
        createRGBA() {
            const rgb = (this.hexToRgb(this.rainbow(Math.round(Math.random() * 100), Math.round(Math.random() * 80))));
            const rgbone = (this.hexToRgb(this.rainbow(Math.round(Math.random() * 100), Math.round(Math.random() * 80))));
            const result = `linear-gradient(to right bottom,rgba(${rgbone.r}, ${rgbone.g}, ${rgbone.b},1),rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, .5))`;
            return result;
        }
    },
    computed: {
        strategies() {
            return [1, 2];
        }
    },
    components: { Strategy, UserHeader }
}
</script>

<style lang="scss" scoped>
@function scaleValue($value) {
    @return calc(
      #{$value} * (clamp(350px, 100vw, 3840px) / var(--ideal-viewport-width))
    );
}

.defi {
    background: #181c27;
    min-height: 100vh;
    padding: #{scaleValue(70)} 0;

    &__body {
        display: flex;
    }

    &__main {
        padding-top: #{scaleValue(30)};
        margin-left: #{scaleValue(300)};
        padding: #{scaleValue(15)};
    }

    &__h1 {
        font-size: #{scaleValue(30)};
        font-weight: 500;
    }

    &__mainbody {
        min-height: 100vh;
        width: #{scaleValue(1250)};
       
        &--header {
            display: flex;
            margin-top: #{scaleValue(30)};
            padding-bottom: #{scaleValue(15)};
            border-bottom: .5px solid rgba(255, 255, 255, 0.16);
        }

        &--headerlab {
            position: relative;
            display: flex;
            align-items: center;
            cursor: pointer;
            color: #718096;
            font-size: #{scaleValue(16)};

            &::before {
                content: '';
                
                border-radius: 3rem;
                height: #{scaleValue(2)};
                position: absolute;
                
                left: 0;
                width: 100%;

                transition: all .2s ease;
                bottom: #{scaleValue(16)};
                background: transparent;
            }

            &.current {
                color: #7F99FB;

                &:before {
                    background: #7F99FB;
                    bottom: #{scaleValue(-16)};
                }
            }

            & span {
                display: inline-block;
                margin-right: #{scaleValue(10)}; 
            }

            &:nth-child(1) {
                margin-right: #{scaleValue(20)};
            } 
        }
    }

    &__content {
        padding: #{scaleValue(40)} 0;

        

        &--earnheader {
            padding: #{scaleValue(14)} #{scaleValue(10)};
            
            & h2 {
                font-size: #{scaleValue(17)};
                font-weight: 500;
            }
        }

        &--bar {
            display: flex;
            align-items: center;

            background: #1A202C;
            border: 0.5px solid rgba(255, 255, 255, 0.16);
            border-radius: 0.75rem;
            padding:  #{scaleValue(20)};
            margin: #{scaleValue(30)} 0;

            & figure {
                height: #{scaleValue(30)};
                width: #{scaleValue(30)};

                &:nth-child(2) {
                    transform: translateX(#{scaleValue(-13)});
                }

                & img {
                    object-fit: cover;
                    height: 100%;
                    width: 100%;
                }
            }

            & p {
                font-size: #{scaleValue(15)};
            }
        }

        &--h3 {
            font-size: #{scaleValue(15)};
            margin-bottom: #{scaleValue(8)};
        }

        &--earnlistcopy {
            opacity: .6;
            font-size: #{scaleValue(15)};
        }
    }

    &__balance {
        display: flex;
        flex-direction: column;

        & span {
            display: inline-block;

            &:nth-child(1) {
                opacity: .5;
                font-size:  #{scaleValue(14.5)};
                margin-bottom: #{scaleValue(13)};
            }

            &:nth-child(2) {
                font-size: #{scaleValue(40)};
                font-weight: 500;
            }
        }
    }

    &__middle {
        display: flex;
        justify-content: space-between;
        margin-top: #{scaleValue(40)};
        margin-bottom: #{scaleValue(40)};

        &--area {
            display: flex;
            flex-direction: column;
            text-align: center;
            background: #1A202C;
            border: 0.5px solid rgba(255, 255, 255, 0.16);
            border-radius: 0.75rem;
            width: #{scaleValue(600)};
            padding: #{scaleValue(22)} 0;

            & span {
                &:nth-child(1) {
                    opacity: .5;
                    font-size:  #{scaleValue(13)};
                    letter-spacing: #{scaleValue(.5)};
                    margin-bottom: #{scaleValue(10)};
                }

                &:nth-child(2) {
                    font-size: #{scaleValue(24)};
                    font-weight: 500;
                }
            }
        }
    }

    &__seeall {
        display: flex;
        justify-content: space-between;
        align-items: center;

        &--earnings {
            opacity: .6;
            display: flex;
            align-items: center;
            justify-content: center;

            & span {
                display: flex;
                align-items: center;
                justify-content: center;

                &:nth-child(1) {
                    border-radius: 100%;
                    height: #{scaleValue(40)};
                    width: #{scaleValue(40)};
                    background: #718096;
                    margin-right: #{scaleValue(10)};
                }

                &:nth-child(2) {
                    font-size: #{scaleValue(15)};
                }
            }
        }

        &--btn {
            display: flex;
            align-items: center;
            cursor: pointer;
            transition: all .3s ease;

            padding: #{scaleValue(13)};
            border-radius: #{scaleValue(15)};

            &:hover {
                background: rgba(1, 1, 1, .2);
            }

            & span {
                font-size: #{scaleValue(15)};
                color: #7F99FB;
                display: flex;
                align-items: center;
                margin-left: #{scaleValue(13)};

                & svg {
                    height: #{scaleValue(15)};
                    width: #{scaleValue(15)};
                    fill: #7F99FB;
                }
            }
        }
    }

    &__phrase {
        background: #1A202C;
        border: 0.5px solid rgba(255, 255, 255, 0.16);
        cursor: pointer;
        border-radius: 0.75rem;
        margin-top: #{scaleValue(40)};
        padding: #{scaleValue(40)};
        text-align: center;

        & span {
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: .6;

            &:nth-child(1) {
                border-radius: 100%;
                height: #{scaleValue(50)};
                width: #{scaleValue(50)};
                background: #718096;
                margin: 0 auto;

                & svg {
                    height: #{scaleValue(25)};
                    width: #{scaleValue(25)};
                }
            }

            &:nth-child(2) {
                margin-top: #{scaleValue(30)};
                margin-bottom: #{scaleValue(20)};
            }

            &:nth-child(3) {
                opacity: 1;
                cursor: pointer;
                color: #7F99FB;
                transition: all .3s ease;
                width: #{scaleValue(200)};
                padding: #{scaleValue(13)};
                border-radius: #{scaleValue(15)};
                margin: 0 auto;

                &:hover {
                    background: rgba(1, 1, 1, .2);
                }
            }
        }
    }

    &__strategy {
        display: flex;
        align-items: center;

        padding: #{scaleValue(14)} #{scaleValue(10)};

        &--asset {
            display: flex;
            align-items: center;
            font-size: #{scaleValue(16)};
            width: #{scaleValue(500)};

            & span {
                display: flex;
                align-items: center;
                
                border-radius: 50%;

                &:nth-child(1) {
                    height: #{scaleValue(28)};
                    width: #{scaleValue(28)};
                    margin-right: #{scaleValue(13)};
                }
            }
        }

        &--provider {
            width: #{scaleValue(150)};
            font-size: #{scaleValue(14)};
            width: #{scaleValue(200)};

            & span {
                background: rgba(#718096, .3);
                padding: #{scaleValue(5)} #{scaleValue(10)};
                border-radius: #{scaleValue(9)};
            }
        }

        &--type {
            width: #{scaleValue(150)};
            font-size: #{scaleValue(14)};
            width: #{scaleValue(200)};

            & span {
                background: rgba(#718096, .3);
                padding: #{scaleValue(5)} #{scaleValue(10)};
                border-radius: #{scaleValue(9)};
            }
        }

        &--apy {
            width: #{scaleValue(150)};
            font-size: #{scaleValue(14)};
            width: #{scaleValue(100)};

            & span {
                padding: #{scaleValue(5)} #{scaleValue(10)};
                border-radius: #{scaleValue(9)};

                &.positive {
                    color: #5CDFBD;
                    background: rgba(#5CDFBD, .3)
                }
            }
        }

        &--tvl {
            font-size: #{scaleValue(14)};
            width: #{scaleValue(100)};

            & span {
                color: #718096;
            }
        }

        &--userbalance {
            font-size: #{scaleValue(14)};
            width: #{scaleValue(140)};

            & span {
                opacity: .6;
            }
        }

        &--header {
            text-transform: uppercase;
            opacity: .5;
            margin: #{scaleValue(10)} 0;
            
            & p {
                font-size: #{scaleValue(13)};
                font-weight: 700;
            }
        }

        &--item {
            margin-bottom:  #{scaleValue(15)};
            border-radius: .3rem;
            cursor: pointer;

            &:hover {
                background: rgba(1, 1, 1, .2);
            }
        }
    }
}
</style>