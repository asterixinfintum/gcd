<template>
    <div>
        <div class="userdashboard">
            <div class="userdashboard__container">
                <div class="userdashboard__header"></div>
                <div class="userdashboard__body">
                    <div class="userdashboard__left">
                        <DashboardSideMenu />
                    </div>
                    <div class="userdashboard__main">

                        <UserHeader />
                        
                        <div class="userdashboard__middle">
                        <div class="userdashboard__middle--top">
                            <div class="userdashboard__middle--topcard">
                                <div class="userdashboard__middle--topcardleft">
                                    <div class="userdashboard__middle--topcardcircle">
                                        <svg viewBox="0 0 100 100" class="css-kn46u7"><circle cx="50" cy="50" r="42" stroke-width="10px" class="chakra-progress__track css-7gn891"></circle><circle cx="50" cy="50" r="42" stroke-width="10px" class="chakra-progress__indicator css-bxaxvy" stroke-dashoffset="66" stroke-dasharray="258.8007884629262 5.199211537073779"></circle></svg>
                                    </div>
                                </div>
                                <div class="userdashboard__middle--topcardright">
                                    <p class="userdashboard__middle--label transparent">Total Balance</p>
                                    <p class="userdashboard__middle--label bold">${{user ? truncate(`${user.balance ? user.balance.toLocaleString('en-US') : 0}`) : ''}}</p>
                                </div>
                            </div>
                            <div class="userdashboard__middle--topcard">
                                <div class="userdashboard__middle--topcardleft">
                                    <figure class="userdashboard__middle--topcardcircle">
                                       <img src="@/design-assets/tether-usdt-logo.png"/>
                                    </figure>
                                </div>
                                <div class="userdashboard__middle--topcardright">
                                    <p class="userdashboard__middle--label transparent">USD Balance</p>
                                    <p class="userdashboard__middle--label bold">${{user ? truncate(`${user.balance ? assetBalanceInUSDTotal : 0}`) : ''}}</p>
                                </div>
                            </div>
                        </div>
                        <div class="userdashboard__middle--list">
                            <h2 class="userdashboard__middle--h2">Assets</h2>
                            <table class="userdashboard__middle--table">
                                <thead class="userdashboard__middle--tablehead">
                                    <tr class="userdashboard__middle--tr" role="row">
                                        <th colspan="1" role="columnheader" class="css-19g7il9">
                                            <div class="css-k008qs">
                                                <p class="chakra-text css-0" translation="dashboard.portfolio.asset">
                                                    asset
                                                </p>
                                            <div class="css-k008qs"></div></div>
                                        </th>
                                        <th colspan="1" role="columnheader" title="Toggle SortBy" class="css-4hn1ez" style="cursor: pointer;">
                                            <div class="css-1l72yko"><p class="chakra-text css-0 balance" translation="dashboard.portfolio.balance">balance</p><div class="css-k008qs"></div></div>
                                        </th>
                                        <th colspan="1" role="columnheader" title="Toggle SortBy" class="css-1504ji8 price" style="cursor: pointer;">
                                            <div class="css-k008qs"><p class="chakra-text css-0" translation="dashboard.portfolio.price">Price</p><div class="css-k008qs"></div></div>
                                        </th>
                                        <th colspan="1" role="columnheader" title="Toggle SortBy" class="css-1504ji8 changeposi" style="cursor: pointer;">
                                            <div class="css-k008qs"><p class="chakra-text css-0" translation="dashboard.portfolio.priceChange">Price (24hrs)</p><div class="css-k008qs"></div></div>
                                        </th>
                                        <th colspan="1" role="columnheader" title="Toggle SortBy" class="css-1504ji8 allocation" style="cursor: pointer;"><div class="css-k008qs"><p class="chakra-text css-s2uf1z" translation="dashboard.portfolio.allocation">Allocation</p>
                                            <div class="css-k008qs"></div></div>
                                        </th>
                                    </tr>
                                </thead>

                                <tbody class="userdashboard__middle--tablebody">
                                    <tr class="userdashboard__middle--tr userdashboard__tablecard" role="row" v-for="(item, index) in walletassets">
                                        <td roll="cell" class="userdashboard__tablecard--td">
                                            <div class="userdashboard__tablecard--logoarea">
                                                <figure :class="`userdashboard__tablecard--logo ${item}`">
                                                    
                                                </figure>
                                            </div>
                                            <div class="userdashboard__tablecard--name">
                                                <p>{{ item.nameOfAsset }}</p>
                                                <p>Doge</p>
                                            </div>
                                        </td>
                                        <td role="cell" class="userdashboard__tablecard--td balance">
                                            <div class="userdashboard__tablecard--name">
                                                <p>${{getAssetBalanceInUSD(item._id)}}</p>
                                                <p>{{truncateTokenBalance(`${getAssetBalance(item._id)}`.toLocaleString('en-US'))}} {{ item.nameOfAsset }}</p>
                                            </div>
                                        </td>
                                        <td role="cell" class="userdashboard__tablecard--td price">
                                            <p>${{ item.priceInUSD }}</p>
                                        </td>
                                        <td role="cell" class="userdashboard__tablecard--td changeposi" v-if="item.pricechangeIn24.includes('upward')">
                                            <svg viewBox="0 0 24 24" focusable="false" class="chakra-icon css-cua009" aria-hidden="true"><path fill="currentColor" d="M12.8,5.4c-0.377-0.504-1.223-0.504-1.6,0l-9,12c-0.228,0.303-0.264,0.708-0.095,1.047 C2.275,18.786,2.621,19,3,19h18c0.379,0,0.725-0.214,0.895-0.553c0.169-0.339,0.133-0.744-0.095-1.047L12.8,5.4z"></path></svg>
                                            <p>{{ priceChangeStir(item.pricechangeIn24) }}</p>
                                        </td>
                                        <td role="cell" class="userdashboard__tablecard--td changeposi changenega" v-if="item.pricechangeIn24.includes('downward')">
                                            <svg viewBox="0 0 24 24" focusable="false" class="chakra-icon css-cua009" aria-hidden="true"><path fill="currentColor" d="M12.8,5.4c-0.377-0.504-1.223-0.504-1.6,0l-9,12c-0.228,0.303-0.264,0.708-0.095,1.047 C2.275,18.786,2.621,19,3,19h18c0.379,0,0.725-0.214,0.895-0.553c0.169-0.339,0.133-0.744-0.095-1.047L12.8,5.4z"></path></svg>
                                            <p>{{ priceChangeStir(item.pricechangeIn24) }}</p>
                                        </td>
                                        <td role="cell" class="userdashboard__tablecard--td allocation">
                                            <p>{{truncateTokenAllocation(`${getAssetAllocation(item._id)}`.toLocaleString('en-US'))}}%</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="userdashboard__right">
                        <StockBuy />
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import StockBuy from '../components/StockBuy.vue';
import userMixin from '@/mixins/user.js';
import UserHeader from '../components/UserHeader.vue';

export default {
    data() {
        return {
            walletassets: [],
            assetlogos: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
            sumOfBalances: 0
        };
    },
    components: { StockBuy, UserHeader },
    mounted() {
        this.getAssets();
    },
    mixins: [userMixin],
    computed: {
        assetBalanceInUSDTotal() {
            if (this.user) {
                const walletassets = this.user.assetsBalances.map(asset => asset.userbalanceOfAssetInUSD);
                const sumtotal = walletassets.reduce((a, b) => a + b, 0);
                return this.user.balance - sumtotal
            }

            return 0
        }
    },
    methods: {
        truncate(input) {
            if (input.length > 10) {
                return input.substring(0, 10) + '...';
            }
            return input;
        },
        truncateTokenBalance(input) {
            if (input.length > 5) {
                return input.substring(0, 6);
            }
            return input;
        },
        truncateTokenAllocation(input) {
            if (input.length > 3) {
                return input.substring(0, 3);
            }
            return input;
        },
        priceChangeStir(string) {
            if (string === undefined) {
                return '';
            }

            const init = string.replace('upward:','').replace('downward:','');
            const sterilized = init.replace(' ','');
            return sterilized;
        },
        getAssets() {
            const user_token = localStorage.getItem('nordtokenxtxtxt');
            
            if (user_token) {
                fetch(`${this.baseUrl}/api/assetsuser`, {
                    method: "GET",
                    headers: {
                        "Content-type": "application/json; charset=UTF-8",
                        "Authorization": user_token
                     }
                })
                .then(response => response.json())
                .then(json => {
                    this.arrangeAssets(json.assets)
                })
            }
        },
        getAssetBalanceInUSD(assetid) {
            const assetsBalances = this.user.assetsBalances;
            const assetBalanceArr = assetsBalances.filter(assetsBalance => assetsBalance.asset === assetid);

            if (assetBalanceArr.length) {
                return assetBalanceArr[0].userbalanceOfAssetInUSD
            } else {
                return 0;
            }
        },
        getAssetBalance(assetid) {
            const assetsBalances = this.user.assetsBalances;
            const assetBalanceArr = assetsBalances.filter(assetsBalance => assetsBalance.asset === assetid);

            if (assetBalanceArr.length) {
                return assetBalanceArr[0].userbalanceOfAsset
            } else {
                return 0;
            }
        },
        getAssetAllocation(assetid) {
            const assetsBalances = this.user.assetsBalances;
            const assetBalanceArr = assetsBalances.filter(assetsBalance => assetsBalance.asset === assetid);

            if (assetBalanceArr.length) {
                return assetBalanceArr[0].allocationInUserWallet
            } else {
                return 0;
            }
        },
        arrangeAssets (assets) {
            const userAssetsBalances = this.user.assetsBalances;
            const userAssetsIDS = userAssetsBalances.map(item => item.asset);
            const belongsToUser = [];
            const notBelongsToUser = [];

            const handlefilter = async () => {
                await assets.forEach(item => {
                    if (userAssetsIDS.includes(item._id)) {
                        belongsToUser.push(item);
                        console.log(item)
                    } else {
                        notBelongsToUser.push(item)
                    }
                });

                this.walletassets = [...belongsToUser, ...notBelongsToUser];
            }

            handlefilter();
        },
    }
}
</script>

<style lang="scss" scoped>
@function scaleValue($value) {
    @return calc(
      #{$value} * (clamp(350px, 100vw, 3840px) / var(--ideal-viewport-width))
    );
}
.userdashboard {
    background: #181c27;
    min-height: 100vh;
    padding: #{scaleValue(70)} 0;

    @media only screen and (max-width: 414px) {
        padding: 0
    }

    &__body {
        display: flex;
    }

    &__main {
        padding-top: #{scaleValue(30)};
        display: flex;
        margin-left: #{scaleValue(300)};

        @media only screen and (max-width: 414px) {
            padding-top: #{scaleValue(300)};
            margin: 0;
            display: flex;
            flex-direction: column-reverse;
            align-items: center;
        }
    }

    &__middle {
        width: #{scaleValue(900)};
        padding: 0 #{scaleValue(15)};

        @media only screen and (max-width: 414px) {
            width: 100vw;
            display: flex;
            align-items: center;
            flex-direction: column;

            padding: 0;
            margin-top: #{scaleValue(30)};
        }

        &--top {
            display: flex;
            justify-content: space-between;

            @media only screen and (max-width: 414px) {
                width: 100%;
                flex-direction: column;
            }
        }

        &--topcardcircle {
            height: #{scaleValue(25)};
            width: #{scaleValue(25)};
            margin-right: #{scaleValue(15)};

            @media only screen and (max-width: 414px) {
                height: #{scaleValue(120)};
                width: #{scaleValue(120)};
                margin-right: #{scaleValue(50)};
            }

            & img {
                height: 100;
                width: 100%;
                object-fit: contain;
            }
        }

        &--topcard {
            display: flex;
            align-items: center;

            background: #1A202C;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),0 4px 6px -2px rgba(0, 0, 0, 0.05);
            border: .5px solid rgba(255, 255, 255, 0.16);
            
            cursor: pointer;
            border-radius: 0.75rem;

            width: #{scaleValue(420)};
            height: #{scaleValue(90)};
            padding-left: #{scaleValue(30)};

            @media only screen and (max-width: 414px) {
                width: 100%;
                height: #{scaleValue(350)};
                border-radius: 0;

                border-left: none;
                border-right: none;
            }
        }

        &--label {

            &.transparent {
                color: #718096;
                margin-bottom: #{scaleValue(5)};
                font-size: #{scaleValue(15)};

                @media only screen and (max-width: 414px) {
                    font-size: #{scaleValue(50)};
                    margin-bottom: #{scaleValue(30)};
                }
            }
            &.bold {
                font-weight: 400;
                font-size: #{scaleValue(19)};

                @media only screen and (max-width: 414px) {
                    font-size: #{scaleValue(75)};
                }
            }
        }

        &--list {
            border: .5px solid rgba(255, 255, 255, 0.16);
            border-radius: 0.75rem;
            padding: #{scaleValue(17)} 0;
            background: #1A202C;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),0 4px 6px -2px rgba(0, 0, 0, 0.05);
            margin-top: #{scaleValue(25)};

            @media only screen and (max-width: 414px) {
                width: 100%;
                border-radius: 0;
                border: none; 
            }
        }

        &--h2 {
            font-size: #{scaleValue(16)};
            font-weight: 500;
            padding: 0 #{scaleValue(30)};

            @media only screen and (max-width: 414px) {
                font-size: #{scaleValue(60)};
            }
        }

        &--table {
            width: 100%;
            font-variant-numeric: lining-nums tabular-nums;
        }

        &--tablehead {
            display: flex;
            justify-content: space-between;
            text-transform: uppercase;
            color: #718096;
            font-size: #{scaleValue(11)};
            font-weight: 700;
            margin-top: #{scaleValue(27)};
            letter-spacing: 0.05em;
            width: 100%;
            padding: 0 #{scaleValue(30)};

            margin-bottom: #{scaleValue(30)};

            @media only screen and (max-width: 414px) {
                margin-bottom: #{scaleValue(100)};
                margin-top: #{scaleValue(100)};
            }
        }

        &--tr {
            width: 100%;
            display: flex;

            & th {
                width:  #{scaleValue(250)};
                text-align: left;
                font-size: #{scaleValue(11)};
                flex-shrink: 0;

                @media only screen and (max-width: 414px) {
                    font-size: #{scaleValue(40)};
                    width: 65%;
                }

                &.price {
                    width: #{scaleValue(150)};

                    @media only screen and (max-width: 414px) {
                        display: none;
                    }
                }
                &.changeposi {
                    width: #{scaleValue(100)};

                    @media only screen and (max-width: 414px) {
                        display: none;
                    }
                }

                &.allocation {

                    @media only screen and (max-width: 414px) {
                        display: none;
                    }
                }
            }
        }
    }

    &__tablecard {
        padding: #{scaleValue(20)} #{scaleValue(30)};
        border-radius: 0.75rem;
        width: 100%;
        display: flex;

        @media only screen and (max-width: 414px) {
            justify-content: space-between;
        }

        &--td {
            display: flex;
            align-items: center;

            width:  #{scaleValue(250)};
            text-align: left;

            &.balance {
                width: #{scaleValue(250)};

                @media only screen and (max-width: 414px) {
                    width: 35%;
                }
            }

            &.price {
                width: #{scaleValue(150)};

                @media only screen and (max-width: 414px) {
                    display: none;
                }
            }
            &.changeposi {
                color: #00CD98;
                width: #{scaleValue(100)};

                & svg {
                    width: #{scaleValue(15)};
                    height: #{scaleValue(15)};
                }

                & p {
                    margin-left: #{scaleValue(6)};
                }

                @media only screen and (max-width: 414px) {
                    display: none;
                }
            }

            &.changenega {
                color: red;
                width: #{scaleValue(100)};

                & svg {
                    transform: rotate(180deg);
                }

                @media only screen and (max-width: 414px) {
                    display: none;
                }
            }

            &.allocation {
                color: #718096;
                width: #{scaleValue(100)};

                @media only screen and (max-width: 414px) {
                    display: none;
                }
            }

            @media only screen and (max-width: 414px) {
                width: 45%;
            }
        }

        &--name {
            line-height: #{scaleValue(20)};
            text-transform: capitalize;

            @media only screen and (max-width: 414px) {
                line-height: #{scaleValue(100)};
            }

            & p {
                font-weight: 500;
                font-size: #{scaleValue(15)};

                @media only screen and (max-width: 414px) {
                    font-size: #{scaleValue(65)};
                }

                &:nth-child(2) {
                    color: #718096;
                    text-transform: uppercase;
                    font-weight: 300;
                    font-size: #{scaleValue(13)};

                    @media only screen and (max-width: 414px) {
                        font-size: #{scaleValue(45)};
                    }
                }
            }
        }

        &--logoarea {
            flex-shrink: 0;
            margin-right: #{scaleValue(15)};

            @media only screen and (max-width: 414px) {
                margin-right: #{scaleValue(30)};
            }
        }

        &--logo {
            background: url('@/design-assets/doge.png');
            background-size: cover;
            height: #{scaleValue(35)};
            width: #{scaleValue(35)};
            border-radius: 100%;
            flex-shrink: 0;

            background: url('@/assets/images/pink-circle.png');
            background-size: cover;

            @media only screen and (max-width: 414px) {
                height: #{scaleValue(80)};
                width: #{scaleValue(80)};
            }
        }
    }
}

.css-7gn891 {
    fill: transparent;
    stroke: #2D3748;
}

.css-bxaxvy {
    fill: transparent;
    stroke: #3761F9;
    transition-property: stroke-dasharray, stroke;
    transition-duration: 0.6s;
    transition-timing-function: ease;
}

.css-12v3dfu {
    fill: transparent;
    stroke: #00CD98;
    transition-property: stroke-dasharray, stroke;
    transition-duration: 0.6s;
    transition-timing-function: ease;
}
</style>