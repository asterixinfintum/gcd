<template>
    <div>
        <div class="createasset">
            <header>
                <h1>Edit the {{ asset ? asset.nameOfAsset : '' }} asset</h1>
            </header>
            <div class="createasset__inputarea">
                <span class="input">
                    <input v-model="nameOfAsset" placeholder="name of asset"/>
                </span>
                <span class="description">
                    <p>Choose a name for this asset</p>
                </span>
            </div>
            <div class="createasset__inputarea">
                <span class="input">
                    <input  v-model="priceInUSD" placeholder="Choose a price"/>
                </span>
                <span class="description">
                    Choose a price to display to the client/subject
                </span>
            </div>
            <div class="createasset__inputarea">
                <span class="input">
                    <input  v-model="pricechangeIn24" placeholder="Choose an initial 24hr price change"/>
                </span>
                <span class="description">
                    <p>Decide the percentage in price change in the last 24hrs</p>
                    <p>You can pick an upward or downward trend</p>
                    <p>Example 'upward: 20%' or 'downward: 15%'</p>
                </span>
            </div>

            <div class="createasset__inputarea">
                <span>
                    <button @click="updateAsset" v-if="!creatingToken">Update asset</button>
                    <button v-if="updatingToken" disabled class="creatingtoken">Updating asset...</button>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
import userMixin from '@/mixins/user.js';
import adminMixin from '@/mixins/admin.js'

export default {
data() {
    return {
        nameOfAsset: '',
        priceInUSD: '',
        pricechangeIn24: '',
        updatingToken: false,
        asset: null
    }
},
mixins: [
    userMixin,
    adminMixin
    ],
methods: {
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
          const assets = json.assets;
          console.log(assets);
          console.log(this.$route.query.asset)
          const asset = assets.filter(asset => asset._id === this.$route.query.asset)[0];
          
          this.nameOfAsset = asset.nameOfAsset;
          this.priceInUSD = asset.priceInUSD;
          this.pricechangeIn24 = asset.pricechangeIn24;
          this.asset = asset;
        })
    },
    updateAsset() {
        const user_token = localStorage.getItem('nordtokenxtxtxt');
        const { nameOfAsset, priceInUSD,  pricechangeIn24 } = this;

        const assetid = this.$route.query.asset;

        const asset = {
            nameOfAsset,
            priceInUSD,
            pricechangeIn24
        }

        this.updatingToken = true;

        fetch(`${this.baseUrl}/api/updateasset?assetid=${assetid}`, {
            method: "PATCH",
            body: JSON.stringify(asset),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "Authorization": user_token
            }
        })
        .then(response => response.json())
        .then(json => {
            this.updatingToken = false;
            this.$router.push('/admin/viewassets')
        })
    },
},
mounted() {
    this.getAssets();
}
}
</script>

<style lang="scss" scoped>
@function scaleValue($value) {
    @return calc(
      #{$value} * (clamp(350px, 100vw, 3840px) / var(--ideal-viewport-width))
    );
}

.createasset {
    min-height: 100vh;
    background: #000000;

    padding: #{scaleValue(100)};

    & h1 {
        font-size: #{scaleValue(20)};
        font-weight: 300;
        margin-bottom: #{scaleValue(50)};
    }

    &__inputarea {
        margin-top: #{scaleValue(30)};

        & span {
            font-size: #{scaleValue(14)};
            font-weight: 700;
            line-height: #{scaleValue(25)};
            display: flex;

            margin-bottom: #{scaleValue(14)};
            flex-direction: column;

            &.input {

                & input {
                    display: inline-block;
                    border: none;
                    width: 100%;
                    height: #{scaleValue(45)};
                    padding: #{scaleValue(10)} #{scaleValue(14)};
                    border-radius: .3rem;
                    outline: none;
                    font-size: #{scaleValue(17)};
                    letter-spacing: #{scaleValue(2)};
                    background: rgba(255, 255, 255, 0.09);
                    color: #fff;
                }
            }

            & button {
                outline: none;
                font-size: #{scaleValue(17)};
                cursor: pointer;
                border: none;
                outline: none;

                background: #3761F9;
                padding: #{scaleValue(12)} #{scaleValue(15)};
                border-radius: .5rem;
                text-decoration: none;
                color: #fff;

                &.creatingtoken {
                    opacity: .5;
                    cursor: auto;
                }
            }
        }
    }
}
</style>