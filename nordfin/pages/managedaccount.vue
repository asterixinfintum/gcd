<template>
  <div class="managedaccount">
    <HeaderBox />
    <div class="managedaccount__body">
        <div class="managedaccount__toparea">
            <section class="managedaccount__toparea--heading">
                <div class="managedaccount__nav">
                    <span>Wallet</span>
                    <span class="">
                        <svg>
                            <use xlink:href="@/assets/imgs/sprite.svg#icon-keyboard_arrow_right" />
                        </svg>
                    </span>
                    <span>Saved Addresses</span>
                </div>
                <h2>Manage Saved Addresses</h2>
            </section>
        </div>

        <div class="managedaccount__btns">
            <button>save crypto address</button>
            <button>save fiat address</button>
        </div>

        <div class="managedaccount__content">
            <Record 
            :labels="['coin', 'name', 'address', 'chain', 'tag']" 
            :records="[]"
            :header="'Addresses'"/>
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

.managedaccount {
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
                    font-size: #{scaleValue(50)};
                }
            }
        }
    }

    &__nav {
        font-size: #{scaleValue(14)};
        display: flex;
        align-items: center;
        margin-bottom: #{scaleValue(15)};

        @media only screen and (max-width: 414px) {
            font-size: #{scaleValue(60)};
        }

        & span {
            font-size: #{scaleValue(14)};

            @media only screen and (max-width: 414px) {
                font-size: #{scaleValue(60)};
            }

            display: flex;
            align-items: center;
            margin-right: #{scaleValue(6)};
        }

        & svg {
            fill: #fff;
            height: #{scaleValue(14)};
            width: #{scaleValue(14)};

            @media only screen and (max-width: 414px) {
                height: #{scaleValue(50)};
                width: #{scaleValue(50)};
            }
        }
    }

    &__btns {
        margin-bottom: #{scaleValue(14)};

        & button {
            border: 1px solid rgba(#fff, .2);
            outline: none;
            padding: #{scaleValue(14)};
            border-radius: .6rem;
            text-transform: uppercase;
            font-size: #{scaleValue(12)};
            color: #fff;
            margin-right: #{scaleValue(14)};

            @media only screen and (max-width: 414px) {
                    font-size: #{scaleValue(50)};
                    padding: #{scaleValue(50)};
            }
        }
    }

    &__content {
        background: #111722;
        padding: #{scaleValue(14)} #{scaleValue(20)};
        border-radius: .3rem;
    }
}
</style>
