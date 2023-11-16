<template>
    <div class="addassettouser">
            <div class="addassettouser__body">

                <div class="addassettouser__list">
                    <div class="addassettouser__listitem" v-for="assetBalance in assetBalances">
                        <div class="addassettouser__listitem--area">{{ assetBalance.nameofAsset }}</div>
                        <div class="addassettouser__listitem--area">{{ assetBalance.userbalanceOfAsset }}</div>
                        <div class="addassettouser__listitem--area">{{ assetBalance.userbalanceOfAssetInUSD }}</div>
                        <div class="addassettouser__listitem--area">{{ assetBalance.allocationInUserWallet }}</div>
                        <div class="addassettouser__listitem--area">{{ assetBalance.locked }}</div>
                        <button @click="removeAssetBalance(assetBalance.asset)">Remove</button>
                    </div>
                </div>

                <div class="addassettouser__inputarea">
                    <div class="addassettouser__inputarea--input">
                        <h3 class="assetpriceshow">{{chosenAsset ? chosenAsset.nameOfAsset : 'Asset'}} Price: ${{ chosenAsset ? chosenAsset.priceInUSD : 0 }}</h3>
                        <div class="input">
                            <input v-model="nameOfAsset" placeholder="Choose asset" @click="toggleoptions"/>
                        </div>
                        <span class="label">
                            <p>Asset name</p>
                        </span>
                        <div class="addassettouser__dropdown" :class="{
                            visible: optionsshown
                        }">
                            <span v-for="asset in assets" class="asset" @click="selectAsset(asset)">
                                <span class="assetarea">
                                    <p>asset name:</p>
                                    <p>{{ asset.nameOfAsset }}</p>
                                </span>
                                <span class="assetarea">
                                    <p>asset price:</p>
                                    <p>$ {{ asset.priceInUSD }}</p>
                                </span>
                                <span class="assetarea">
                                    <p>asset trend:</p>
                                    <p class="trend">{{ asset.pricechangeIn24 }}</p>
                                </span>
                            </span>
                        </div>
                    </div>
                </div>

                <div class="addassettouser__inputarea">
                    <div class="input">
                        <input v-model="userbalanceOfAssetInUSD" placeholder="User balance of Asset in USD"/>
                    </div>
                    <p class="warning">{{ userbalanceOfAssetInUSD > client.balance ? "You can not add more than the user balance": "" }}</p>
                    <span class="label">
                        <p>Amount in USD to add to client balance</p>
                    </span>
                </div>

                <div class="addassettouser__inputarea notcolumn">
                    <span class="label">
                        <p>User balance of Asset:</p>
                    </span>
                    <span class="input">
                        {{calcUserBalofAsset}}
                    </span>
                </div>

                <div class="addassettouser__inputarea notcolumn">
                    <span class="label">
                        <p>Allocation in User Wallet:</p>
                    </span>
                    <span class="input">
                        <p>{{calcAllocationInUserWall}}%</p>
                    </span>
                </div>

                <div class="addassettouser__inputarea notcolumn">
                    <span class="label">
                        <p>Untraded Balance left in USD:</p>
                    </span>
                    <span class="input">
                        <p>${{calcUserBalinUSD}}</p>
                    </span>
                </div>

                <div class="addassettouser__inputarea">
                    <div class="input">
                        <input v-model="locked" placeholder="locked?"/>
                    </div>
                    <span class="label">
                        <p>Choose if the user can withdraw, transfer, swap, or not</p>
                    </span>
                </div>

                <p class="warning" v-if="adderror">{{ adderror }}</p>
                <div class="addassettouser__inputarea addassettouser__inputarea--button">
                    <div></div>
                    <button @click="addAssetBalance">Add Asset Details</button>
                </div>
            </div>
    </div>
  </template>
  
  <script>
    import userMixin from '@/mixins/user.js';
    import adminMixin from '@/mixins/admin.js';

  export default {
    mixins: [
      userMixin,
      adminMixin
    ],
    data() {
        return {
            asset: null,
            nameOfAsset: '',
            userbalanceOfAsset: 0,
            userbalanceOfAssetInUSD: 0,
            allocationInUserWallet: 0,
            locked: false,
            assets: [],
            sumofAssetsInUSD: [],
            assetBalances: [],
            optionsshown: false,
            chosenAsset: null,
            adderror: null,
        }
    },
    methods: {
        removeFirst(src, element) {
            const index = src.indexOf(element);
            if (index === -1) return src;
                return [...src.slice(0, index), ...src.slice(index + 1)];
        },
        removeAssetBalance(id) {
            const sumofAssetsInUSD = this.sumofAssetsInUSD;
            const filt = this.assetBalances.filter(assetBalance => assetBalance.asset !== id);
            const filt2 = this.assetBalances.filter(assetBalance => assetBalance.asset === id)[0];
            const idx = sumofAssetsInUSD.findIndex(number => number == Number(filt2.userbalanceOfAssetInUSD));

            const sumOfAssetsFilt = this.removeFirst(sumofAssetsInUSD, sumofAssetsInUSD[idx]);

            this.sumofAssetsInUSD = sumOfAssetsFilt;
            this.assetBalances = filt;

            this.$store.dispatch('storeAssetBalances', this.assetBalances);
        },
        addAssetBalance() {
            const assetValue = {
                nameofAsset: this.nameOfAsset,
                asset: this.asset,
                userbalanceOfAsset: this.calcUserBalofAsset,
                userbalanceOfAssetInUSD: this.userbalanceOfAssetInUSD,
                allocationInUserWallet: `${this.calcAllocationInUserWall}`,
                locked: this.locked
            }

            const filt = this.assetBalances.filter(asset => asset.asset === assetValue.asset);
            const sumofAssetsInUSD = this.sumofAssetsInUSD;
            const assetBalances = this.assetBalances;

            if (!filt.length) {
                assetBalances.push(assetValue);
                this.assetBalances = assetBalances
                sumofAssetsInUSD.push(Number(assetValue.userbalanceOfAssetInUSD));
                this.sumofAssetsInUSD = sumofAssetsInUSD;

                this.$store.dispatch('storeAssetBalances', this.assetBalances);

                this.asset = null;
                this.userbalanceOfAssetInUSD = 0;
                this.locked = false;
                this.chosenAsset = null;
                this.nameOfAsset = '';

            } else {
                this.adderror = 'An asset of this kind already exists in the wallet'
            }
        },
        toggleoptions() {
            this.optionsshown ? this.optionsshown = false : this.optionsshown = true;
        },
        selectAsset(asset) {
            this.adderror = null
            this.asset = asset._id;
            this.nameOfAsset = asset.nameOfAsset;
            this.chosenAsset = asset;
            this.toggleoptions();
        },
        getAssets() {
            const user_token = localStorage.getItem('nordtokenxtxtxt');

            fetch(`${this.baseUrl}/api/assetsadmin`, {
                method: "GET",
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    "Authorization": user_token
                }
            })
            .then(response => response.json())
            .then(json => {
                this.assets = json.assets;
            })
        }
    },
    mounted() {
        this.getAssets();

        const user_token = localStorage.getItem("nordtokenxtxtxt");
        fetch(`${this.baseUrl}/api/admingetuser?id=${this.$route.query.id}`, {
            method: "GET",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "Authorization": user_token
            }
        })
        .then(response => response.json())
        .then(json => {
            this.assetBalances = json.user.assetsBalances;
            const sumofAssetsInUSD = this.sumofAssetsInUSD;

            const assetBalances = this.assetBalances;

            assetBalances.forEach(item => {
                sumofAssetsInUSD.push(item.userbalanceOfAssetInUSD);
            });

            this.sumofAssetsInUSD = sumofAssetsInUSD;
        })
    },
    computed: {
        client() {
            return this.$store.getters.client;
        },
        calcUserBalinUSD() {
            const sumtotal = this.sumofAssetsInUSD.reduce((a, b) => a + b, 0);

            return this.client ? this.client.balance - sumtotal : 0;
        },
        calcUserBalofAsset() {
            return this.chosenAsset ? this.userbalanceOfAssetInUSD/this.chosenAsset.priceInUSD : 0
        },
        calcAllocationInUserWall() {
            return (100 * this.userbalanceOfAssetInUSD) / this.client.balance;
        }
    }
  }
  </script>
  
<style lang="scss" scoped>
@function scaleValue($value) {
    @return calc(
      #{$value} * (clamp(350px, 100vw, 3840px) / var(--ideal-viewport-width));
    );
}

  .addassettouser {

    &__inputarea {

        margin-bottom: #{scaleValue(40)};
        &.notcolumn {
            display: flex;
            align-items: center;

            & span {

                &.label {
                    display: inline-block;
                    margin-right:  #{scaleValue(15)};
                    margin-top: 0;
                    text-decoration: underline;
                }

                &.input {
                    color: #474DFF
                }
            }
        }

        &--input {
            position: relative;
        }

        &--button {
            display: flex;
            justify-content: space-between;
        }

        & button {
            background: #474DFF;
            padding: #{scaleValue(15)};
            cursor: pointer;
            font-size: #{scaleValue(15)};
            border-radius: 0.2rem;
        }
    }

    &__dropdown {
        display: flex;
        flex-direction: column;

        position: fixed;
        padding-top: #{scaleValue(60)};
        align-items: center;
        height: 100vh;
        z-index: -1;
        width: 100vw;
        top: 0;
        left: 0;
        background: rgba(1, 1,1,.9);
        opacity: 0;

        &.visible {
            opacity: 1;
            z-index: 10;
            width: 100vw;
            top: 0;
            left: 0;
            background: rgba(1, 1,1,.9);
        }

        &.invisible {

        }

        & span {
            
            &.asset {
                display: flex;
                align-items: center;

                padding: #{scaleValue(10)} #{scaleValue(10)};
                cursor: pointer;
                background: rgba(113, 128, 150, .4);
                margin: #{scaleValue(10)} 0;
            }

            &.assetarea {
                display: flex;
                flex-direction: column;
                width: #{scaleValue(200)};

                & p {
                    &:nth-child(1) {
                        text-transform: uppercase;
                        opacity: .5;
                        font-size: #{scaleValue(10)};
                        margin-bottom: #{scaleValue(5)}
                    }
                    
                    &.trend {
                        color: #474DFF;
                    }
                }
            }
        }
    }

    &__listitem {
        display: flex;
        align-items: center;
        background: rgba(113, 128, 150, .8);
        padding: #{scaleValue(15)};
        margin: #{scaleValue(15)} 0;

        &--area {
            width: #{scaleValue(260)};
            font-size: #{scaleValue(15)};
        }

        & button {
            outline: none;
            font-size: #{scaleValue(15)};
            padding: #{scaleValue(15)} #{scaleValue(15)};
            background: #474DFF;
            border: none;
            cursor: pointer;
        }
    }
  }

  div.input {
    display: flex;
    border: solid 1px transparent;
    border-radius: .3rem;

    &:focus-within {
        border: solid 1px #474DFF;
    }

    & input {
        border: none;
        background: transparent;
        outline: none;
        background: rgba(255, 255, 255, 0.09);
        color: #fff;
        width: 100%;
        height: #{scaleValue(45)};
        padding: #{scaleValue(10)};
        letter-spacing: #{scaleValue(2)};
        border-radius: .3rem;
    }
  }

  span.label {
    display: inline-block;
    margin-top: #{scaleValue(6)};
  }

  h3.assetpriceshow {
    font-size: #{scaleValue(15)};
    font-weight: 300;
    margin: #{scaleValue(20)} 0;
    color: #474DFF;
  }

  p.warning {
    color: red;
    font-size: #{scaleValue(13)};
    margin: #{scaleValue(6)} 0;
  }
  </style>
  