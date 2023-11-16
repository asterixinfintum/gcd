export default {
    data() {
        return {
            
        }
    },
    mounted() {
        this.getAssets();
    },
    methods: {
        selectOrClose(value, swapcontext) {
            if (!this.assetPop) {
                if (swapcontext.length) {
                    this.swapContext = swapcontext;
                    return this.assetPop = true;
                }
            }

            if (!value.nameOfAsset) {
                return this.assetPop = false;
            }

            if (value.nameOfAsset && this.swapContext === 'fromAsset') {
                this.fromAsset = value;
                console.log(this.fromAsset, 'the asset details')

                this.asset

                return this.assetPop = false;
            }

            if (value.nameOfAsset && this.swapContext === 'toAsset') {
                this.toAsset = value;
                return this.assetPop = false;
            }
        },
        truncateTokenBalance(input) {
            if (input) {
                if (input.length > 5) {
                    return input.substring(0, 6);
                }

                return input;
            }
        },
        truncateSwapNames(input) {
            if (input) {
                if (input.length > 3) {
                    return input.substring(0, 3);
                }
    
                return input;
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
                    } else {
                        notBelongsToUser.push(item)
                    }
                });

                this.assetList = [...belongsToUser, ...notBelongsToUser];
                this.fromAsset = this.assetList[0];
                this.toAsset = this.assetList[1];
            }

            handlefilter();
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
                    const assets = json.assets
                    this.arrangeAssets(assets)
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
    }
}