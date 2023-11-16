<template>
    <div>
        <div class="assets">
            <header>
                <h1>Assets in the database</h1>
            </header>

            <div class="assets__list">

              <div class="assets__assetlabels">
                <div class="assets__assetlabels--label logo">Logo</div>
                <div class="assets__assetlabels--label">Chosen name</div>
                <div class="assets__assetlabels--label">Chosen price</div>
                <div class="assets__assetlabels--label">Chosen price change</div>
              </div>

              <div class="assets__assetitem" v-for="asset in assets">
                <div class="assets__assetitem--area logo">
                  <figure class="assets__assetitem--logo"></figure>
                </div>
                <div class="assets__assetitem--name assets__assetitem--area">
                  <span>{{ asset.nameOfAsset }}</span>
                </div>
                <div class="assets__assetitem--price assets__assetitem--area">
                  <span>${{ asset.priceInUSD }}</span>
                </div>
                <div class="assets__assetitem--name assets__assetitem--area">
                  <span>{{ asset.pricechangeIn24 || asset.pricechange }}</span>
                </div>

                <div class="assets__assetitem--name assets__assetitem--area">
                  <span class="a" @click="editAsset(asset._id)">Edit</span>
                </div>
              </div>
            </div>
        </div>
    </div>
  </template>
  
  <script>
  import userMixin from '@/mixins/user.js';
  import adminMixin from '@/mixins/admin.js';

  export default {
    data() {
      return {
        assets: []
      }
    },
    mixins: [
      userMixin,
      adminMixin
    ],
    methods: {
      editAsset(id) {
        this.$router.push(`/admin/editasset?asset=${id}`)
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
    }
  }
  </script> 
  
  <style lang="scss" scoped>
  @function scaleValue($value) {
    @return calc(
      #{$value} * (clamp(350px, 100vw, 3840px) / var(--ideal-viewport-width))
    );
}

  .assets {
    min-height: 100vh;
    background: #000000;

    padding: #{scaleValue(100)};

    & h1 {
        font-size: #{scaleValue(20)};
        font-weight: 300;
        margin-bottom: #{scaleValue(50)};
    }

    &__list {
      border: .5px solid rgba(255, 255, 255, 0.16);
      border-radius: 0.75rem;
      padding: #{scaleValue(17)} 0;
      background: #1A202C;
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),0 4px 6px -2px rgba(0, 0, 0, 0.05);
      margin-top: #{scaleValue(25)};
    }

    &__assetitem {
      display: flex;
      align-items: center;
      padding: #{scaleValue(20)};

      &--area {
        width: #{scaleValue(300)};

        &.logo {
          width: #{scaleValue(100)};
        }

        & span {

          &.a {
            outline: none;
            font-size: #{scaleValue(12)};
            cursor: pointer;
            border: none;
            outline: none;

            background: #3761F9;
            padding: #{scaleValue(5)} #{scaleValue(20)};
            border-radius: .5rem;
            text-decoration: none;
            color: #fff;
            margin-right: #{scaleValue(15)};
          }
        }
      }
    }

    &__assetlabels {
      display: flex;
      align-items: center;
      padding: #{scaleValue(20)};

      opacity: .6;

      &--label {
        width: #{scaleValue(300)};

        &.logo {
          width: #{scaleValue(100)};
        }
      }
    }
  }
  </style>
  