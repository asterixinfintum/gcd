<template>
    <div>
        <div class="stockbuy">

            <div class="stockbuy__assetspopup" @click.stop="selectOrClose" v-if="assetPop">
                <div class="stockbuy__assetspopup--body">
                    <div class="stockbuy__assetspopup--search">
                        <span class="stockbuy__assetspopup--searchicon">
                            <svg viewBox="0 0 24 24" focusable="false" class="chakra-icon css-zgjiqu"><path fill="currentColor" d="M23.384,21.619,16.855,15.09a9.284,9.284,0,1,0-1.768,1.768l6.529,6.529a1.266,1.266,0,0,0,1.768,0A1.251,1.251,0,0,0,23.384,21.619ZM2.75,9.5a6.75,6.75,0,1,1,6.75,6.75A6.758,6.758,0,0,1,2.75,9.5Z"></path></svg>
                        </span>
                        <input v-model="assetSearch" placeholder="Search for an Asset" @click.stop="searchAsset"/>
                    </div>

                    <div class="stockbuy__assetspopup--item" v-for="item in assetList" @click.stop="selectOrClose(item, '')">
                        <div class="stockbuy__assetspopup--area">
                            <!--<figure>
                        
                            </figure>--->

                            <div class="stockbuy__assetspopup--name">
                                <p>{{item.nameOfAsset }}</p>
                                <p></p>
                            </div>
                        </div>

                        <div class="stockbuy__assetspopup--area balance">
                            <p>{{ getAssetBalanceInUSD(item._id) === 0 ? '' : `$${getAssetBalanceInUSD(item._id)}`}}</p>
                            <p>
                                <span>{{ `${getAssetBalance(item._id)}` === '0' ? '' : truncateTokenBalance(`${getAssetBalance(item._id)}`.toLocaleString('en-US')) }}</span>
                                <span>{{ `${getAssetBalance(item._id)}` === '0' ? '' : item.nameOfAsset }}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="stockbuy__announcements"></div>
            <div class="stockbuy__trade">
                <div></div>

                <div class="stockbuy__assetcard from">
                    <div class="stockbuy__assetcard--firstsection stockbuy__assetcard--area">
                        <div class="stockbuy__assetcard--assetchoice" @click="selectOrClose({}, 'fromAsset')">
                            <span>
                                <img src='@/design-assets/eth.png'/>
                            </span>
                            <span>{{ truncateSwapNames(fromAsset.nameOfAsset) }}</span>
                            <span>
                                <svg viewBox="0 0 24 24" focusable="false" class="chakra-icon css-onkibi" aria-hidden="true"><path fill="currentColor" d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path></svg>
                            </span>
                        </div>
                        <span class="stockbuy__assetcard--figinput">
                            <input type="text" placeholder="0" v-model="fromValue" v-if="currentInput === 'fromValueInput'"/>
                            <input type="text" placeholder="0" :value="fromAssetMix" @click="switchInput('fromValueInput')" v-if="currentInput !== 'fromValueInput'"/>
                        </span>
                    </div>
                    <div class="stockbuy__assetcard--firstsectionsub stockbuy__assetcard--area">
                        <span></span>
                        <span class="amountindollars">≈ ${{ fromAssetCalc }}</span>
                    </div>
                    <div class="stockbuy__assetcard--secondsection stockbuy__assetcard--area">
                        <span class="assetbalance">Balance 0.063745 ETH</span>
                        <span class="max">Max</span>
                    </div>
                </div>
                <div class="stockbuy__assetcard--translate">
                        <span>
                            <svg viewBox="0 0 24 24" focusable="false" class="chakra-icon css-onkibi" aria-hidden="true"><path fill="currentColor" d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"></path></svg>
                        </span>
                </div>

                <div class="stockbuy__assetcard to">
                    <div class="stockbuy__assetcard--firstsection stockbuy__assetcard--area">
                        <div class="stockbuy__assetcard--assetchoice" @click="selectOrClose({}, 'toAsset')">
                            <span>
                                <img src='@/design-assets/fox.png'/>
                            </span>
                            <span>{{ truncateSwapNames(toAsset.nameOfAsset) }}</span>
                            <span>
                                <svg viewBox="0 0 24 24" focusable="false" class="chakra-icon css-onkibi" aria-hidden="true"><path fill="currentColor" d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path></svg>
                            </span>
                        </div>
                        <span class="stockbuy__assetcard--figinput">
                            <input type="text" placeholder="0" v-model="toValue" v-if="currentInput === 'toValueInput'"/>
                            <input type="text" placeholder="0" :value="toAssetMix" @click="switchInput('toValueInput')" v-if="currentInput !== 'toValueInput'"/>
                        </span>
                    </div>
                    <div class="stockbuy__assetcard--firstsectionsub stockbuy__assetcard--area">
                        <span></span>
                        <span class="amountindollars">≈ ${{ toAssetCalc }}</span>
                    </div>
                    <div class="stockbuy__assetcard--secondsection stockbuy__assetcard--area">
                        <span class="assetbalance">Balance 0.063745 ETH</span>
                        <span class="max">Max</span>
                    </div>
                    <div></div>
                </div>

                <div class="stockbuy__trade--preview">
                    <div class="stockbuy__trade--feearea">
                        <div class="stockbuy__trade--feearealeft">
                            <span>
                                <svg viewBox="0 0 24 24" focusable="false" class="chakra-icon css-13izzit"><path fill="currentColor" d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm0,19a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,12,19Zm1.6-6.08a1,1,0,0,0-.6.917,1,1,0,1,1-2,0,3,3,0,0,1,1.8-2.75A2,2,0,1,0,10,9.255a1,1,0,1,1-2,0,4,4,0,1,1,5.6,3.666Z"></path></svg>
                            </span>
                            <p class="calcleft">1 ETH = 38,635.026 FOX</p>
                        </div>
                        <div class="stockbuy__trade--feearearight">
                            <p>Fee:</p>
                            <p class="noopacity calcleft">$3.40</p>
                        </div>
                    </div>
                    <div class="stockbuy__trade--expectedamount">
                        <div>Expected Amount</div>
                        <div class="noopacity">0 FOX</div>
                    </div>
                </div>
                <button class="stockbuy__button">Preview Trade</button>
            </div>

            <div class="stockbuy__recenttransactions"></div>
        </div>
    </div>
</template>

<script>
import userMixin from '@/mixins/user.js';
import tradeMixin from '@/mixins/trade.js';

export default {
    data() {
        return {
            assetList: [],
            assetSearch: '',
            arrangeByUserOwned: [],
            arrangeByNotUserOwned: [],
            assetPop: false,
            fromAsset: 'ETH',
            toAsset: 'FOX',
            fromValue: 0,
            toValue: 0,
            swapContext: '',
            currentInput: 'fromValueInput'
        }
    },
    mixins: [userMixin, tradeMixin],
    methods: {
        switchInput(value) {
            this.currentInput = value;
        },
        searchAsset() {
            
        }
    },
    computed: {
        fromAssetCalc() {
            if (this.fromValue) {
                return Number(this.fromValue) * this.fromAsset.priceInUSD
            }

            return 0
        },
        toAssetCalc() {
            if (this.fromValue) {
                return Math.round(this.toAssetMix * this.toAsset.priceInUSD);
            }

            return 0
        },
        fromAssetMix() {
            return (this.toValue*this.toAsset.priceInUSD) / this.fromAsset.priceInUSD
        },
        toAssetMix() {
            return (this.fromValue*this.fromAsset.priceInUSD) / this.toAsset.priceInUSD   
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
.stockbuy {
    background: #1A202C;
    padding: 1rem 1.5rem;
    border: .5px solid rgba(255, 255, 255, 0.16);
    border-radius: 0.75rem;

    position: relative;

    @media only screen and (max-width: 414px) {
        padding: 0;
        border: none;
    }

    &__assetspopup {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: rgba(1,1,1,.4);

        display: flex;
        justify-content: center;
        padding: #{scaleValue(100)} 0;
        z-index: 10;

        &--body {
            background: #1A202C;
            padding: #{scaleValue(40)};
            border-radius: .8rem;
            width: #{scaleValue(500)};
            color: #fff;
            padding: #{scaleValue(40)};

            @media only screen and (max-width: 414px) {
                width: #{scaleValue(1500)};
            }
        }

        &--search {
            margin-bottom:  #{scaleValue(20)};
            position: relative;

            & input {
                background: rgba(255, 255, 255, 0.16);
                outline: none;
                width: 100%;
                padding: #{scaleValue(14)};
                color: #fff;
                font-size: #{scaleValue(16)};
                border-radius: .3rem;
                padding-left: #{scaleValue(35)};

                border: 1px solid transparent;

                @media only screen and (max-width: 414px) {
                    padding: #{scaleValue(50)};
                    font-size: #{scaleValue(65)};
                    padding-left: #{scaleValue(105)};
                    border-radius: 3rem;
                }

                &:focus {
                    border: 1px solid #3761F9;
                }
            }
        }

        &--searchicon {
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: #{scaleValue(35)};
            display: flex;
            justify-content: center;
            align-items: center;

            @media only screen and (max-width: 414px) {
                width: #{scaleValue(105)};
            }

            & svg {
                width: #{scaleValue(17)};
                height: #{scaleValue(17)};

                @media only screen and (max-width: 414px) {
                    width: #{scaleValue(65)};
                    height: #{scaleValue(65)};
                }
            }
        }

        &--area {
            font-size: #{scaleValue(15)};
            display: flex;

            @media only screen and (max-width: 414px) {
                font-size: #{scaleValue(60)};
            }
            
            &.balance {
                text-align: right;
                flex-direction: column;

                & p {

                    &:nth-child(1) {
                        @media only screen and (max-width: 414px) {
                            margin-bottom: #{scaleValue(60)};
                        }
                    }

                    &:nth-child(2) {
                        opacity: .6;
                        text-transform: uppercase;
                        font-size: #{scaleValue(13)};
                        line-height: #{scaleValue(20)};

                        @media only screen and (max-width: 414px) {
                            font-size: #{scaleValue(50)};
                        }
                    }
                }
            }
        }

        &--item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            cursor: pointer;
            padding: #{scaleValue(16)} #{scaleValue(16)};
            border-radius: .8rem;
            border: 1px solid transparent;
            height: #{scaleValue(70)};

            &:hover, &:focus {
                border: 1px solid #3761F9;
                background: rgba(1,1,1,.1);
            }

            @media only screen and (max-width: 414px) {
                padding: #{scaleValue(70)} #{scaleValue(16)};
                height: #{scaleValue(300)};
                border: none;
                border-radius: 0;
                align-items: flex-start;
            }
        }

        &--name {

            & p {

                &:nth-child(1) {
                    color: #718096;
                    text-transform: capitalize;
                }

                &:nth-child(2) {}
            }
        }
    }

    &__assetcard {
        border: .5px solid rgba(255, 255, 255, 0.16);
        border-radius: 0.75rem;

        @media only screen and (max-width: 414px) {
            height: #{scaleValue(600)};
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }

        &.from {
            margin-bottom: #{scaleValue(10)};

            @media only screen and (max-width: 414px) {
                margin-padding: #{scaleValue(50)};
            }
        }
        
        width: #{scaleValue(320)};
        padding:  #{scaleValue(16)};
        background: #191d28;
        font-size: #{scaleValue(12)};
        overflow: hidden;
        
        position: relative;
        padding-bottom: #{scaleValue(35)};

        @media only screen and (max-width: 414px) {
            width: 100vw;
            border-radius: 0;
            border: none;
            font-size: #{scaleValue(80)};
        }

        &::before {
            content: '';
            background: #191d28;
            height: 100%;
            width: #{scaleValue(16)};
            position: absolute;
            top: 0;
            right: 0;
            z-index: 2;
            border-radius: 0.75rem;
        }

        &--assetchoice {
            display: flex;
            align-items: center;
            background: #2D3748;
            border-radius: 3rem;
            padding: #{scaleValue(5)};
            padding-left: 0;
            cursor: pointer;

            text-transform: uppercase;

            @media only screen and (max-width: 414px) {
                padding: #{scaleValue(30)} #{scaleValue(30)};
            }

            & span {
                display: inline-block;
                margin-right: #{scaleValue(5)};

                &:nth-child(1) {
                    height: #{scaleValue(25)};
                    width: #{scaleValue(25)};

                    @media only screen and (max-width: 414px) {
                        height: #{scaleValue(80)};
                        width: #{scaleValue(80)};
                    }

                    & img {
                        height: 100%;
                        width: 100%;
                        object-fit: cover;
                    }
                }

                &:nth-child(2) {
                    font-size: #{scaleValue(15)};

                    @media only screen and (max-width: 414px) {
                        font-size: #{scaleValue(70)};
                    }
                }

                &:nth-child(3) {
                    display: flex;
                    align-items: center;

                    & svg {
                        height: #{scaleValue(15)};
                        width: #{scaleValue(15)};

                        @media only screen and (max-width: 414px) {
                            height: #{scaleValue(80)};
                            width: #{scaleValue(80)};
                        }
                    }
                }
            }
        }

        &--area {
            display: flex;
            justify-content: space-between;
            align-items: center;

            

            & span {
                &.max {
                    border-radius: 3rem;
                    background: #2D3748;
                    cursor: pointer;
                    display: inline-block;
                    padding: #{scaleValue(6)} #{scaleValue(12)};

                    @media only screen and (max-width: 414px) {
                        padding: #{scaleValue(30)} #{scaleValue(100)};
                     }
                }
            }
        }

        &--figinput {
            position: relative;
            display: flex;
            align-items: center;

            & input {
                background: transparent;
                border: none;
                color: #fff;
                outline: none;
                right: #{scaleValue(-16)};
                position: absolute; 
                text-align: right;
                padding: #{scaleValue(1)};
                font-size: #{scaleValue(18)};
                padding-right: #{scaleValue(20)};

                &::placeholder {
                    color: #fff;
                }

                @media only screen and (max-width: 414px) {
                    font-size: #{scaleValue(70)};
                }
            }
        }

        &--firstsectionsub {
            opacity: .5;
        }

        &--secondsection {
            margin-top: #{scaleValue(15)};
            font-size: #{scaleValue(13)};
            opacity: .6;

            @media only screen and (max-width: 414px) {
                font-size: #{scaleValue(50)};
            }
        }

        &--translate {
            display: flex;
            justify-content: center;
            position: absolute;
            width: 100%;

            top: #{scaleValue(132)};
            z-index: 3;

            @media only screen and (max-width: 414px) {
                top: #{scaleValue(510)};
            }

            & span {
                border-radius: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                background: #191d28;
                border: .5px solid rgba(255, 255, 255, 0.16);
                box-shadow: 0 0 0 3px #1A202C;
                padding: #{scaleValue(8)};

                @media only screen and (max-width: 414px) {
                    padding: #{scaleValue(40)};
                }
            }

            & svg {
                height: #{scaleValue(15)};
                width: #{scaleValue(15)};

                @media only screen and (max-width: 414px) {
                    height: #{scaleValue(110)};
                    width: #{scaleValue(110)};
                }
            }
        }
    }

    &__trade {
        position: relative;

        &--preview {
            border: .5px solid rgba(255, 255, 255, 0.16);
            border-radius: 0.75rem;
            margin-bottom: #{scaleValue(25)};
            width: #{scaleValue(320)};
            padding:  #{scaleValue(20)} #{scaleValue(16)};

            margin-top: #{scaleValue(25)};

            @media only screen and (max-width: 414px) {
                width: 100vw;
                border: none;
            }
        }

        &--feearea {
            color: rgba(255, 255, 255, 0.72);
            display: flex;
            font-size: #{scaleValue(14)};
            justify-content: space-between;
            margin-bottom: #{scaleValue(20)};

            @media only screen and (max-width: 414px) {
                font-size: #{scaleValue(50)};
                height: #{scaleValue(100)};
            }
        }

        &--feearealeft {
            display: flex;

            & span svg {
                color: rgba(255, 255, 255, 0.22);
                height: #{scaleValue(15)};
                width: #{scaleValue(15)};

                @media only screen and (max-width: 414px) {
                    height: #{scaleValue(50)};
                    width: #{scaleValue(50)};
                }
            }
        }

        &--feearearight {
            display: flex;
        }

        &--expectedamount {
            color: rgba(255, 255, 255, 0.32);
            font-size: #{scaleValue(13.5)};
            display: flex;
            justify-content: space-between;

            @media only screen and (max-width: 414px) {
                font-size: #{scaleValue(50)};
            }
        }
    }

    &__button {
        background: #3761F9;
        color: #ffffff;
        border-radius: 0.75rem;
        border: none;
        font-size: #{scaleValue(17)};
        width: 100%;
        padding: #{scaleValue(17)};

        @media only screen and (max-width: 414px) {
            padding: #{scaleValue(70)};
            font-size: #{scaleValue(65)};
            border-radius: 0;
        }
    }
}

.noopacity {
    color: rgba(255, 255, 255, 1);
}

.calcleft {
    margin-left: #{scaleValue(6)};
}

.visible {
    opacity: 1;
    z-index: 10
}

.invisible {
    opacity: 0;
    z-index: -1
}
</style>