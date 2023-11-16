<template>
  <div class="marginborrows">
    <HeaderBox />
    <div class="marginborrows__body">
        <div class="marginborrows__toparea">
            <section class="marginborrows__toparea--heading">
                <div class="marginborrows__nav">
                    <span>Wallet</span>
                    <span class="">
                        <svg>
                            <use xlink:href="@/assets/imgs/sprite.svg#icon-keyboard_arrow_right" />
                        </svg>
                    </span>
                    <span>Margin Lending</span>
                    <span class="colored" @click="$router.push('/marginborrows')">(Margin Borrows)</span>
                </div>
                <h2>Margin Lending</h2>
            </section>
        </div>

        <section class="marginborrows__content marginborrows__notenabled">
            <h3>Margin Lending not enabled</h3>
            <h4>Margin Lending is not enabled for your account</h4>

            <button>settings</button>
        </section>

        <section class="marginborrows__content">
            <Record 
                :labels="['currency', 
                    '24h Average Borrowed', 
                    '24h Average Borrowed(USD)', 
                    'previous rate', 
                    'next estimated next rate',
                    'offered size', 'locked size',
                    'min funding size',
                    'lend'
                    ]" 
                :records="[
                    [
                        'USD', 
                        '82,880,333.6517 USD',
                        'US$82,880,333.65',
                        '3.50% / year',
                        '79.99% / year',
                        '',
                        '',
                        '0.00% / year',
                        'LEND'
                    ],
                    [
                        'USD', 
                        '82,880,333.6517 USD',
                        'US$82,880,333.65',
                        '3.50% / year',
                        '79.99% / year',
                        '',
                        '',
                        '0.00% / year',
                        'LEND'
                    ]
                ]"
                :header="'Lending'"/>
        </section>

        <section class="marginborrows__content">
            <Record 
                :labels="['time', 
                    'currency', 
                    'size', 
                    'hourly funding rate', 
                    'proceeds',
                    'proceeds in USD'
                    ]" 
                :records="[]"
                :header="'My Lending History'"/>
        </section>

        <section class="marginborrows__content">
            <Record 
                :labels="[
                    'time', 
                    'currency', 
                    'size', 
                    'funding rate'
                    ]" 
                :records="[
                    [
                        '10/08/2022, 00:00:00', 
                        'ACB',
                        '2.03468032',
                        '0.88% / year'
                    ]
                ]"
                :header="'Global Lending History'"/>
        </section>
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

.marginborrows {
    min-height: #{scaleValue(1000)};
    padding: #{scaleValue(20)} #{scaleValue(30)};

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
        }
    }

    &__nav {
        font-size: #{scaleValue(14)};
        display: flex;
        align-items: center;
        margin-bottom: #{scaleValue(15)};

        & span {
            font-size: #{scaleValue(14)};
            display: flex;
            align-items: center;
            margin-right: #{scaleValue(6)};

            @media only screen and (max-width: 414px) {
                font-size: #{scaleValue(50)};
                margin-bottom: #{scaleValue(100)};
            }

            &.colored {
                color: #00B4C9;
                cursor: pointer;
            }
        }

        & svg {
            fill: #fff;
            height: #{scaleValue(14)};
            width: #{scaleValue(14)};

            @media only screen and (max-width: 414px) {
                height: #{scaleValue(60)};
                width: #{scaleValue(60)};
            }
        }
    }

    &__content {
        background: #111722;
        padding: #{scaleValue(14)} #{scaleValue(20)};
        border-radius: .3rem;

        margin-bottom: #{scaleValue(20)};
    }

    &__notenabled {
        margin-bottom: #{scaleValue(40)};

        & h3 {
            font-size: #{scaleValue(18)};
            margin-bottom: #{scaleValue(7)};
            font-weight: 400;

            @media only screen and (max-width: 414px) { 
                font-size: #{scaleValue(70)};
                margin-bottom: #{scaleValue(20)};
            }
        }

        & h4 {
            font-size: #{scaleValue(13)};
            margin-bottom: #{scaleValue(35)};
            font-weight: 400;

            opacity: .7;

            @media only screen and (max-width: 414px) { 
                font-size: #{scaleValue(60)};
                margin-bottom: #{scaleValue(70)};
            }
        }

        & button {
            color: #00B4C9;
            border: none;
            outline: none;
            text-transform: uppercase;
            font-size: #{scaleValue(12)};

            &:hover {
                color: rgba(#00B4C9, .8);
            }

            @media only screen and (max-width: 414px) { 
                font-size: #{scaleValue(60)};
            }
        }
    }
}
</style>
