<template>
    <div>
        <div class="assets">
            <div class="assets__left">
                <DashboardSideMenu />
            </div>

            <div class="assets__right">
                <h1>Assets</h1>
                <h3>Find assets to trade here</h3>

                <div class="assets__body">
                    <div class="assets__header">
                        <div></div>
                        <div class="assets__header--name">
                            <span>Asset</span>
                        </div>

                        <div class="assets__header--amount">
                            <span>Amount</span>
                        </div>

                        <div class="assets__header--value">
                            <span>Value</span>
                        </div>

                        <div class="assets__header--change">
                            <span>Daily change</span>
                        </div>
                    </div>

                    <div class="assets__asset">
                        <figure class="assets__asset--logo">
                            <img src="@/design-assets/bch.png"/>
                        </figure>

                        <div class="assets__asset--name">
                            <span>Tokenized Gold</span>
                            <span>Gold on BSC</span>
                        </div>

                        <div class="assets__asset--amount assets__asset--section">
                            <span>0$</span>
                        </div>

                        <div class="assets__asset--value assets__asset--section">
                            <span>0$</span>
                        </div>

                        <div class="assets__asset--performance assets__asset--section">
                            <span class="downward downsvg">
                                <svg data-v-0cfc1a00="" viewBox="0 0 24 24" focusable="false" aria-hidden="true" class="chakra-icon css-cua009"><path data-v-0cfc1a00="" fill="currentColor" d="M12.8,5.4c-0.377-0.504-1.223-0.504-1.6,0l-9,12c-0.228,0.303-0.264,0.708-0.095,1.047 C2.275,18.786,2.621,19,3,19h18c0.379,0,0.725-0.214,0.895-0.553c0.169-0.339,0.133-0.744-0.095-1.047L12.8,5.4z"></path></svg>
                            </span>
                            <span class="downward">9.6%</span>
                        </div>
                    </div>

                    <div class="assets__asset">
                        <figure class="assets__asset--logo">
                            <img src="@/design-assets/bch.png"/>
                        </figure>

                        <div class="assets__asset--name">
                            <span>Tokenized Gold</span>
                            <span>Gold on BSC</span>
                        </div>

                        <div class="assets__asset--amount assets__asset--section">
                            <span>0$</span>
                        </div>

                        <div class="assets__asset--value assets__asset--section">
                            <span>0$</span>
                        </div>

                        <div class="assets__asset--performance assets__asset--section">
                            <span class="upward">
                                <svg data-v-0cfc1a00="" viewBox="0 0 24 24" focusable="false" aria-hidden="true" class="chakra-icon css-cua009"><path data-v-0cfc1a00="" fill="currentColor" d="M12.8,5.4c-0.377-0.504-1.223-0.504-1.6,0l-9,12c-0.228,0.303-0.264,0.708-0.095,1.047 C2.275,18.786,2.621,19,3,19h18c0.379,0,0.725-0.214,0.895-0.553c0.169-0.339,0.133-0.744-0.095-1.047L12.8,5.4z"></path></svg>
                            </span>
                            <span class="upward">9.6%</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@function scaleValue($value) {
    @return calc(
      #{$value} * (clamp(350px, 100vw, 3840px) / var(--ideal-viewport-width))
    );
}

.assets {
    background: #181c27;
    min-height: 100vh;
    padding: #{scaleValue(30)} 0;

    display: flex;

    &__right {
        padding-top: #{scaleValue(30)};
        margin-left: #{scaleValue(300)};
        padding: #{scaleValue(15)};

        & h1 {
            font-size: #{scaleValue(30)};
            font-weight: 500;
        }

        & h3 {
            opacity: .5;
            font-size: #{scaleValue(15)};
            font-weight: 300;
            margin-top: #{scaleValue(15)};
        }
    }

    &__body {
        background: #1A202C;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),0 4px 6px -2px rgba(0, 0, 0, 0.05);
        border-radius: 0.75rem;
        margin-top: #{scaleValue(30)};
        border: 0.5px solid rgba(255, 255, 255, 0.16);
        width: #{scaleValue(1200)};
    }

    &__header {
        display: flex;
        align-items: center;
        padding: #{scaleValue(20)};
        opacity: .5;
        font-size: #{scaleValue(14)};

        &--name {
            width: #{scaleValue(345)};
        }

        &--amount {
            width: #{scaleValue(235)};
        }

        &--value {
            width: #{scaleValue(245)};
        }
    }

    &__asset {
        display: flex;
        align-items: center;
        font-size: #{scaleValue(20)};
        padding: #{scaleValue(20)};
        cursor: pointer;

        &--logo {
            height: #{scaleValue(35)};
            width: #{scaleValue(35)};
            margin-right: #{scaleValue(13)};

            & img {
                object-fit: contain;
                height: 100%;
                width: 100%;
            }
        }

        &--name {
            display: flex;
            flex-direction: column;
            font-size: #{scaleValue(16)};
            width: #{scaleValue(300)};
            line-height: #{scaleValue(20)};

            & span {

                &:nth-child(1) {
                    opacity: .5;
                    font-size: #{scaleValue(13)};
                    font-weight: 700;
                }
            }
        }

        &--section {
            width: #{scaleValue(240)};
            font-size: #{scaleValue(15)};
            text-align: left;

            //background: red;

            & span {
                display: flex;
                align-items: center;
                margin-right: #{scaleValue(10)};

                &.upward {
                    color: #00CD98
                }

                &.downward {
                    color: red;
                }

                &.downsvg {
                    transform: rotate(180deg)
                }
            }

            & svg {
                width: #{scaleValue(13)};
                height: #{scaleValue(13)};
            }
        }

        &--performance {
            display: flex;
            align-items: center;
        }
    }
}
</style>