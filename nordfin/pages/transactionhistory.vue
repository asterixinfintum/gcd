<template>
    <div>
        <div class="transactionhistory">
            <div class="transactionhistory__left">
                <DashboardSideMenu />
            </div>
            <div class="transactionhistory__right">
                <h1>Transaction History</h1>

                <div class="transactionhistory__list">

                    <UserHeader />

                    <div class="transactionhistory__listitem">
                        <div class="transactionhistory__listitem--type transactionhistory__listitem--label">
                            <span>Transaction Type</span>
                        </div>
                        <div class="transactionhistory__listitem--amount transactionhistory__listitem--label">
                            <span>Transaction Amount</span>
                        </div>
                        <div class="transactionhistory__listitem--transactioncost transactionhistory__listitem--label">
                            <span>Transaction Cost</span>
                        </div>
                        <div class="transactionhistory__listitem--destinationaddress transactionhistory__listitem--label">
                             <span>Transaction Destination</span>
                        </div>
                    </div>

                    <div class="transactionhistory__listitem" v-for="item in transactions">
                        <div class="transactionhistory__listitem--type">
                            <div class="transactionhistory__listitem--typeicon">
                                <span v-if="item.type === 'Withdrawal'">
                                    <svg viewBox="0 0 24 24" focusable="false" class="chakra-icon css-onkibi"><path fill="currentColor" d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"></path></svg>
                                </span>
                                <span v-if="item.type === 'Deposit'" class="deposit">
                                    <svg viewBox="0 0 24 24" focusable="false" class="chakra-icon css-y3r3qv"><path fill="currentColor" d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"></path></svg>
                                </span>
                                <span v-if="item.type === 'Transfer'" class="transfer">
                                    <svg viewBox="0 0 24 24" focusable="false" class="chakra-icon css-y3r3qv"><path fill="currentColor" d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"></path></svg>
                                </span>
                            </div>
                            <div class="transactionhistory__listitem--typelabel">
                                <span>{{item.type}}</span>
                                <span>{{item.time}}</span>
                            </div>
                        </div>
                        <div class="transactionhistory__listitem--amount">
                            <figure>
                                <img src="@/design-assets/tether-usdt-logo.png"/>
                            </figure>
                            <span>${{item.amount}}</span>
                        </div>
                        <div class="transactionhistory__listitem--transactioncost">
                            <span>${{item.cost}}</span>
                        </div>
                        <div class="transactionhistory__listitem--destinationaddress">
                            <span>{{item.destination}}</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import UserHeader from '../components/UserHeader.vue';

export default {
    computed: {
        transactions() {
            return [
                {
                    type: "Withdrawal",
                    amount: "30,000",
                    cost: "100",
                    destination: "09873eiuyhiroj3pe2876545678",
                    time: "06:04"
                },
                {
                    type: "Deposit",
                    amount: "2000",
                    cost: "30",
                    destination: "09873eiuyhiroj3pe2876545678",
                    time: "16:04"
                },
                {
                    type: "Transfer",
                    amount: "5000",
                    cost: "20",
                    destination: "09873eiuyhiroj3pe2876545678",
                    time: "09:04"
                }
            ];
        }
    },
    components: { UserHeader }
}
</script>

<style lang="scss" scoped>
@function scaleValue($value) {
    @return calc(
      #{$value} * (clamp(350px, 100vw, 3840px) / var(--ideal-viewport-width))
    );
}

.transactionhistory {
    background: #181c27;
    min-height: 100vh; 
    padding: #{scaleValue(70)} 0;

    display: flex;

    &__right {
        padding-top: #{scaleValue(30)};
        margin-left: #{scaleValue(300)};
        padding: #{scaleValue(15)};

        & h1 {
            font-size: #{scaleValue(30)};
            font-weight: 500;
        }
    }

    &__list {
        background: #1A202C;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),0 4px 6px -2px rgba(0, 0, 0, 0.05);
        border-radius: 0.75rem;
        margin-top: #{scaleValue(30)};
        border: 0.5px solid rgba(255, 255, 255, 0.16);
        width: #{scaleValue(1200)};
    }

    &__listitem {
        display: flex;
        align-items: center;
        padding: #{scaleValue(20)};

        &--type {
            display: flex;
            align-items: center;
            width: #{scaleValue(250)};
        }

        &--typelabel {
            display: flex;
            flex-direction: column;

            font-size: #{scaleValue(15)};
            font-weight: 700;

            margin-left: #{scaleValue(10)};
            line-height: #{scaleValue(22)};

            & span {
                display: inline-block;

                &:nth-child(2) {
                    font-weight: 300;
                    opacity: .6;
                }
            }
        }

        &--typeicon {

            & span {
                display: inline-block;
                border-radius: 100%;
                background: rgba(#718096, .2);
                height: #{scaleValue(35)};
                width: #{scaleValue(35)};
                display: flex;
                justify-content: center;
                align-items: center;

                & svg {
                    height: #{scaleValue(17)};
                    width: #{scaleValue(17)};
                }

                &.deposit {
                    color: #00CD98;
                }

                &.transfer {
                    transform: rotate(-90deg);
                    color: #3761F9;
                }
            }
        }

        &--amount {
            display: flex;
            align-items: center;
            font-size: #{scaleValue(17)};
            width: #{scaleValue(400)};

            & figure {
                height: #{scaleValue(40)};
                width: #{scaleValue(40)};
                overflow: hidden;
                margin-right: #{scaleValue(10)};

                & img {
                    object-fit: cover;
                    height: 100%;
                    width: 100%
                }
            }

            & span {
                opacity: .8;
            }
        }

        &--transactioncost {
            font-size: #{scaleValue(17)};
            opacity: .5;
            width: #{scaleValue(200)};
        }

        &--destinationaddress {
            color: #7F99FB;
            font-size: #{scaleValue(15)};
            opacity: .7;
        }

        &--label {
            opacity: .6;
            color: #fff;
            font-size: #{scaleValue(15)};
        }
    }
}
</style>