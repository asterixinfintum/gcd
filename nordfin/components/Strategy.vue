<template>
    <div>
        <div class="strategy">
            <div class="strategy__container" v-if="current_view === 'base'">
                <div class="strategy__container--header">
                    <h1>Overview</h1>
                    <span class="close" @click="close">
                        <svg viewBox="0 0 24 24" focusable="false" class="chakra-icon css-onkibi" aria-hidden="true"><path fill="currentColor" d="M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"></path></svg>
                    </span>
                </div>

                <div class="strategy__container--top strategy__container--padding">

                    <div class="strategy__container--toplabels">
                        <div class="strategy__container--toplableft">
                            <figure>
                                <img src="@/design-assets/atom.png"/>
                            </figure>

                            <p>UniswapX</p>
                        </div>

                        <div class="strategy__container--toplabbalance">
                            <span>$0.00</span>
                        </div>
                    </div>

                    <div class="strategy__container--topbtns">
                        <div class="strategy__container--topbtn" @click="toggleview('deposit')">
                            <span>
                                <svg viewBox="0 0 24 24" focusable="false" class="chakra-icon css-onkibi" aria-hidden="true"><path fill="currentColor" d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"></path></svg>
                            </span>
                            <span>Deposit</span>
                        </div>

                        <div class="strategy__container--topbtn" @click="toggleview('withdraw')">
                            <span>
                                <svg viewBox="0 0 24 24" focusable="false" class="chakra-icon css-onkibi" aria-hidden="true"><path fill="currentColor" d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"></path></svg>
                            </span>
                            <span>Withdraw</span>
                        </div>
                    </div>
                </div>

                <div class="strategy__container--bottom strategy__container--padding">
                    <h2>About</h2>
                    <p class="bio">UNI is the governance token for Uniswap, an Automated Market Marker DEX on the Ethereum blockchain. The UNI token allows token holders to participate in the governance</p>
                    <div class="strategy__container--tvlapy">
                        <div class="strategy__container--tvl strategy__container--tvlapysec">
                            <span>$442,985</span>
                            <span>TVL</span>
                        </div>
                        <div class="strategy__container--apy strategy__container--tvlapysec">
                            <span class="green">0.38%</span>
                            <span>APY</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="strategy__container" v-if="current_view === 'deposit'">
                <div class="strategy__container--header strategy__deposit--header">
                    <span class="goback" @click="toggleview('base')">
                        <svg viewBox="0 0 24 24" focusable="false" class="chakra-icon css-onkibi" aria-hidden="true"><path fill="currentColor" d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path></svg>
                    </span>
                    <h1>Deposit into UniswapX</h1>
                    <span class="close" @click="close">
                        <svg viewBox="0 0 24 24" focusable="false" class="chakra-icon css-onkibi" aria-hidden="true"><path fill="currentColor" d="M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"></path></svg>
                    </span>
                </div>

                <div class="strategy__deposit--depositinfo">
                    <div class="strategy__deposit--label">
                        <h3>Deposit</h3>
                        <p>Enter the amount you want to deposit into this yield strategy.</p>
                    </div>

                    <div class="strategy__deposit--depositamount">
                        <h3>Amount To Deposit</h3>

                        <div class="strategy__deposit--mech">
                           <div class="strategy__deposit--mechamount">
                                <span class="label">
                                    UniswapX
                                </span>
                                <div class="strategy__deposit--mechinput">
                                    <span>$</span>
                                    <input type="number" v-model="amount" placeholder="Enter Amount"/>
                                    <span class="inputdisplay"></span>
                                </div>
                           </div>
                        </div>
                    </div>

                    <div class="strategy__deposit--max">
                        <span></span>
                        <span class="max">Max</span>
                    </div>

                    <div class="strategy__deposit--estimatedreturn">
                        <div class="strategy__deposit--returnlabel">
                            <span>Estimated Yearly Returns*</span>
                            <span>$0.00</span>
                        </div>

                        <div class="strategy__deposit--returnlabel">
                            <span class="green">@ 0.20% APY</span>
                            <span></span>
                        </div>
                    </div>

                    <button class="strategy__deposit--btn" disabled>Deposit</button>

                </div>
            </div>

            <div class="strategy__container" v-if="current_view === 'withdraw'">
                <div class="strategy__container--header strategy__deposit--header">
                    <span class="goback" @click="toggleview('base')">
                        <svg viewBox="0 0 24 24" focusable="false" class="chakra-icon css-onkibi" aria-hidden="true"><path fill="currentColor" d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path></svg>
                    </span>
                    <h1>Withdraw from UniswapX</h1>
                    <span class="close" @click="close">
                        <svg viewBox="0 0 24 24" focusable="false" class="chakra-icon css-onkibi" aria-hidden="true"><path fill="currentColor" d="M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"></path></svg>
                    </span>
                </div>

                <div class="strategy__deposit--depositinfo">
                    <div class="strategy__deposit--label">
                        <h3>Withdraw</h3>
                        <p>Enter the amount you want to withdraw from this yield strategy.</p>
                    </div>

                    <div class="strategy__deposit--depositamount">
                        <h3>Amount To Withdraw</h3>

                        <div class="strategy__deposit--mech">
                           <div class="strategy__deposit--mechamount">
                                <span class="label">
                                    UniswapX
                                </span>
                                <div class="strategy__deposit--mechinput">
                                    <span>$</span>
                                    <input type="number" v-model="amount" placeholder="Enter Amount"/>
                                    <span class="inputdisplay"></span>
                                </div>
                           </div>
                        </div>
                    </div>

                    <div class="strategy__deposit--max">
                        <span></span>
                        <span class="max">Max</span>
                    </div>

                    <div class="strategy__deposit--estimatedreturn">
                        <div class="strategy__deposit--returnlabel">
                            <span>Estimated Yearly Returns*</span>
                            <span>$0.00</span>
                        </div>

                        <div class="strategy__deposit--returnlabel">
                            <span class="green">@ 0.20% APY</span>
                            <span></span>
                        </div>
                    </div>

                    <button class="strategy__deposit--btn" disabled>Withdraw</button>

                </div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        props: ['close'],
        data() {
            return {
                amount: '',
                current_view: 'base'
            }
        },
        methods: {
            toggleview(val) {
                this.current_view = val
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

.strategy {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    padding-top: #{scaleValue(60)};
    background: rgba(1, 1, 1, .4);

    z-index: 3;

    &__container {
        margin: 0 auto;
        background: #1A202C;
        width: #{scaleValue(500)};
        border-radius: .5rem;

        min-height: #{scaleValue(200)};

        &--header {
            border-bottom: 0.5px solid rgba(255, 255, 255, 0.16);
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: #{scaleValue(20)} #{scaleValue(25)};

            & h1 {
                font-size: #{scaleValue(15)};
                font-weight: 400;
            }

            & span {
                display: flex;
                justify-content: center;
                align-items: center;

                &.close {
                    border-radius: 100%;
                    cursor: pointer;
                    background: transparent;
                    transition: all .3s ease;

                    height: #{scaleValue(30)};
                    width: #{scaleValue(30)};

                    &:hover {
                        background:#2D3748;
                    }

                    & svg {
                        height: #{scaleValue(12)};
                        width: #{scaleValue(12)};
                        fill: #fff;
                    }
                }
            }
        }

        &--padding {
            padding: #{scaleValue(20)} #{scaleValue(25)};
        }

        &--top {
            border-bottom: 0.5px solid rgba(255, 255, 255, 0.16);
            padding: #{scaleValue(35)} #{scaleValue(25)};
        }

        &--toplabels {
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: #{scaleValue(17)};
        }

        &--toplableft {
            display: flex;
            align-items: center;

            & figure {
                height: #{scaleValue(40)};
                width: #{scaleValue(40)};
                margin-right: #{scaleValue(10)};

                & img {
                    object-fit: cover;
                    height: 100%;
                    width: 100%
                }
            }
        }

        &--topbtns {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: #{scaleValue(15)};
        }

        &--topbtn {
            background: #2D3748;
            border-radius: .8rem;
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: #{scaleValue(15)};
            padding: #{scaleValue(12)} #{scaleValue(70)};

            & span {
                display: flex;
                justify-content: center;
                align-items: center;
            }

            & svg {
                width: #{scaleValue(15)};
                height: #{scaleValue(15)};
            }
        }

        &--bottom {

            & h2 {
                font-size: #{scaleValue(17)};
                font-weight: 500;
                margin-bottom: #{scaleValue(15)};
            }

            & p {

                &.bio {
                    opacity: .4;
                    font-size: #{scaleValue(15)};
                    line-height: #{scaleValue(30)};
                    font-weight: 300;
                }
            }
        }

        &--tvlapy {
            display: flex;
            align-items: center;
            margin-top: #{scaleValue(30)};
            font-size: #{scaleValue(17)};
        }

        &--tvlapysec {
            display: flex;
            flex-direction: column;
            line-height: #{scaleValue(30)};

            & span {

                &.green {
                    color: #5CDFBD
                }

                &:nth-child(2) {
                   opacity: .7;
                   font-size: #{scaleValue(12)};
                }
            }
            
            &:nth-child(1) {
                margin-right: #{scaleValue(100)};
            }
        }
    }

    &__deposit {
        
        &--depositinfo {
            padding: #{scaleValue(20)} #{scaleValue(25)};
        }
        
        &--header {

            & span {
                cursor: pointer;

                & svg {
                    height: #{scaleValue(14)};
                    width: #{scaleValue(14)};
                }
            }
        }

        &--label {
            margin-bottom: #{scaleValue(20)};

            & h3 {
                font-size: #{scaleValue(17)};
                font-weight: 400;
                margin-bottom: #{scaleValue(15)};
            }

            & p {
                font-size: #{scaleValue(14)};
                opacity: .6;
                font-weight: 400;
            }
        }

        &--depositamount {

            & h3 {
                font-size: #{scaleValue(16)};
                font-weight: 400;
            }
        }

        &--mech {
            height: #{scaleValue(60)};
            border: 0.5px solid rgba(255, 255, 255, 0.16);
            margin: #{scaleValue(25)} 0;
            border-radius: .5rem;
            overflow: hidden;
            padding-left: #{scaleValue(16)};
            display: flex;
            align-items: center;
            background: #191d28;

            flex-direction: column;

            &:focus-within {
                border: 0.5px solid #3761F9;
            }
        }

        &--mechamount {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 100%;
            width: 100%;
        }

        &--mechinput {
            position: relative;
            height: 100%;

            & input {
                height: 100%;
                outline: none;
                background: transparent;
                border: none;
                color: #fff;
                font-size: #{scaleValue(16)};
            }

            & span {

                &.inputdisplay {
                    position: absolute;
                    height: 100%;
                    right: 0;
                    display: flex;
                    align-items: center;
                    padding-right: #{scaleValue(16)};
                    z-index: 2;
                    background: #191d28;
                    top: 0;
                }
            }
        }

        &--max {
            display: flex;
            justify-content: space-between;

            & span {
                font-size: #{scaleValue(11)};
                display: inline-block;
                cursor: pointer;
                border-radius: 3rem;
                background: #2D3748;
                transform: translateY(#{scaleValue(-18)});
                
                &.max {
                    padding: #{scaleValue(7)} #{scaleValue(14)};
                }
            }
        }

        &--returnlabel {
            display: flex;
            justify-content: space-between;
            margin-bottom:  #{scaleValue(10)};

            font-size: #{scaleValue(15)};

            & span {

                &.green {
                    color: #5CDFBD;
                }
            }
        }

        &--btn {
            background: #3761F9;
            width: 100%;
            padding: #{scaleValue(14)};
            outline: none;
            border: none;
            border-radius: .6rem;
            font-size: #{scaleValue(16)};

            margin-top: #{scaleValue(20)};
        }
    }
}

</style>