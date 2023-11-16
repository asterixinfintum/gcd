<template>
  <div class="wallet">
    <HeaderBox />
    <div class="wallet__body">
        <div class="wallet__toparea">
            <section class="wallet__toparea--heading">
                <h2>Wallet</h2>
                <h3>Total Net USD Value ≈ US$0.00</h3>
            </section>
            <section class="wallet__topics">
                <span>Grant Cred card</span>
                <span @click="$router.push('/managedaccount')">manage saved addresses</span>
                <span @click="$router.push('/marginborrows')">margin borrows</span>
                <span @click="$router.push('/support')">help</span>
            </section>
            <section class="wallet__accounts wallet__area wallet__alignitems">
                <span>Subaccount:</span>
                <span>Main Account</span>
                <span class="button">
                    <svg>
                        <use xlink:href="@/assets/imgs/sprite.svg#icon-plus" />
                    </svg>
                </span>
            </section>

            <!--<section class="wallet__kyc wallet__area wallet__alignitems">
                <div class="wallet__kyc--left">
                    <p>Enable Deposits and Trading</p>
                </div>
                <div class="wallet__kyc--right">
                    <span class="wallet__alignitems">
                        <svg>
                            <use xlink:href="@/assets/imgs/sprite.svg#icon-chevron-down" />
                        </svg>
                    </span>
                </div>
            </section>-->

            <section class="wallet__balances wallet__area">
                <Balances />
            </section>
        </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@function scaleValue($value) {
    @return calc(
      #{$value} * (clamp(350px, 100vw, 3840px) / var(--ideal-viewport-width))
    );
}
    .wallet {
        & svg {
            fill: #fff;
            height: #{scaleValue(14)};
            width: #{scaleValue(14)};
        }

        &__area {
            background: #111722;
            padding: #{scaleValue(14)} #{scaleValue(20)};
            border-radius: .3rem;
        }

        &__alignitems {
            display: flex;
            align-items: center;
        }

        min-height: #{scaleValue(1000)};
        padding: #{scaleValue(20)} #{scaleValue(30)};

        @media only screen and (max-width: 414px) {
            padding: #{scaleValue(100)} #{scaleValue(60)};
        }

        &__body {
            padding: #{scaleValue(30)};
        }

        &__toparea {

            &--heading {
                margin-bottom: #{scaleValue(20)};

                & h2 {
                    font-size: #{scaleValue(22)};
                    font-weight: 400;
                    margin-bottom: #{scaleValue(10)};

                    @media only screen and (max-width: 414px) { 
                        font-size: #{scaleValue(90)};
                        margin-bottom: #{scaleValue(30)};
                    }
                }

                & h3 {
                    font-size: #{scaleValue(18)};
                    font-weight: 400;

                    @media only screen and (max-width: 414px) { 
                        font-size: #{scaleValue(70)};
                    }
                }
            }
        }

        &__topics {
            color: #00B4C9;
            text-transform: capitalize;
            font-size: #{scaleValue(14)};
            margin: #{scaleValue(25)} 0;
            font-weight: 500;

            @media only screen and (max-width: 414px) { 
                font-size: #{scaleValue(65)};
                margin-top: #{scaleValue(100)};
            }

            & span {
                display: inline-block;
                margin-right: #{scaleValue(25)};
                cursor: pointer;

                @media only screen and (max-width: 414px) { 
                    display: block;
                    margin-top: #{scaleValue(40)};
                }
            }
        }

        &__accounts {
            margin: #{scaleValue(25)} 0;
            font-size: #{scaleValue(15)};

            @media only screen and (max-width: 414px) {
                font-size: #{scaleValue(60)};
                margin: #{scaleValue(70)} 0;
            }

            & span {
                display: inline-block;

                &:nth-child(1) {
                    margin-right: #{scaleValue(15)};
                }

                &:nth-child(2) {
                    margin-right: #{scaleValue(25)};
                }

                &.button {
                    background: #1C2230;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    cursor: pointer;
                    padding: #{scaleValue(10)} #{scaleValue(15)};
                    border-radius: .3rem;

                    @media only screen and (max-width: 414px) {
                        padding: #{scaleValue(40)} #{scaleValue(30)};
                    }

                    & svg {
                        height: #{scaleValue(10)};
                        width: #{scaleValue(10)};

                        @media only screen and (max-width: 414px) {
                            height: #{scaleValue(40)};
                            width: #{scaleValue(40)};
                        }
                    }
                }
            }
        }

        &__kyc {
            font-size: #{scaleValue(16)};
            justify-content: space-between;
            cursor: pointer;
        }

        &__balances {
            margin-top: #{scaleValue(40)};
        }
    }
</style>
