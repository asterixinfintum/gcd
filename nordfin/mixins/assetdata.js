import coindata from '~/static/coins.json'
import stockdata from '~/static/stock.json';
import ipodata from '~/static/ipos.json';
import etfdata from '~/static/etfs.json';

export default {
    data() {
        return {
            asset: '',
            coindata: coindata.data,
            stocks: stockdata,
            ipos: ipodata,
            etfs: etfdata,
            assetcategory: '',
            currentview: 'spot',
        }
    },
    mounted() {
        const asset = this.$route.query.asset;
        this.asset = asset;

        if (this.$route.query.assetcategory) {
            const assetcategory = this.$route.query.assetcategory
            this.assetcategory = assetcategory;
        }
        //this.forex();
        this.test();
    },
    methods: {
        toggleview(value) {
            this.currentview = value;
        },
        forex() {
            const url = 'https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=USD&to_currency=JPY&apikey=TIY0G6MULXYO0YO4';


            fetch(url, {
                method: "GET"
            })
            .then(response => response.json())
            .then(json => {
                console.log(json)
            })
            .catch(err => console.log(err))

            /*request.get({
                url: url,
                json: true,
                headers: {'User-Agent': 'request'}
            }, (err, res, data) => {
                if (err) {
                    console.log('Error:', err);
                } else if (res.statusCode !== 200) {
                    console.log('Status:', res.statusCode);
                } else {
                    // data is successfully parsed as a JSON object:
                    console.log(data);
                }
            });*/
        },
        coinlist() {
            // cryptocurrencies  const url = 'https://api.cryptorank.io/v1/currencies?api_key=966c20e05699f31e2c24074d839b5fee1ba9a2049dc6ab7211230ea95f38';

            // derivatives const url = 'https://api.coingecko.com/api/v3/derivatives'

            //indexes const url = 'https://api.coingecko.com/api/v3/indexes';

            //exchangerate/currency conversion const url = 'https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=BTC&to_currency=ADA&apikey=TIY0G6MULXYO0YO4';



            const url = 'https://api.cryptorank.io/v1/currencies?api_key=966c20e05699f31e2c24074d839b5fee1ba9a2049dc6ab7211230ea95f38';

            fetch(url, {
                method: "GET",
            })
            .then(response => response.json())
            .then(json => {
                console.log(json);
            })
            .catch(err => console.log(err))
        },
        test() {
            //const url = 'https://api.coingecko.com/api/v3/coins/list'; //list of cryptocurrencies

            const url = 'https://api.coingecko.com/api/v3/coins/ronin'; //get one coin by id

            fetch(url, {
                method: "GET",
            })
            .then(response => response.json())
            .then(json => {
                console.log(json)
            })
            .catch(err => console.log(err))
        }
    }
}