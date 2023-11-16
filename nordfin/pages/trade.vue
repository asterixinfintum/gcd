<template>
  <div class="dex">
    <section class="dex__top">
        <HeaderBox />
        <CoinData />
    </section>

    <section class="dex__body">
        <section class="dex__left dex__area">
            <GraphArea />
        </section>

        <section class="dex__center dex__area">
            <FlashCard />
        </section>

        <section class="dex__right dex__area">
            <BuySell />
        </section>
    </section>
  </div>
</template>

<script>
export default {
    data() {
        return {
            symbols: [
    "BTC",
"ETH",
"USDT",
"USDC",
"BNB",
"XRP",
"ADA",
"BUSD",
"SOL",
"DOT",
"DOGE",
"AVAX",
"DAI",
"MATIC",
"UNI",
"SHIB",
"TRX",
"WBTC",
"ETC",
"LEO",
"NEAR",
"LTC",
"LINK",
"FTT",
"CRO",
"ATOM",
"XLM",
"FLOW",
"XMR",
"BCH",
"ALGO",
"VET",
"APE",
"FIL",
"ICP",
"MANA",
"SAND",
"XTZ",
"HBAR",
"THETA",
"AAVE",
"AXS",
"QNT",
"EGLD",
"EOS",
"TUSD",
"BSV",
"ZEC",
"OKB",
"MKR",
"HNT",
"KCS",
"FTM",
"GRT",
"RUNE",
"MIOTA",
"BTT",
"USDP",
"CHZ",
"XEC",
"LDO",
"KLAY",
"NEO",
"USDD",
"CRV",
"USDN",
"BAT",
"HT",
"WAVES",
"STX",
"CAKE",
"ENJ",
"LRC",
"MINA",
"PAXG",
"ZIL",
"DASH",
"GMT",
"KAVA",
"CEL",
"KSM",
"ROSE",
"CELO",
"BTG",
"AR",
"DCR",
"CVX",
"1INCH",
"NEXO",
"TWT",
"SNX",
"COMP",
"XEM",
"GNO",
"HOT",
"GALA",
"QTUM",
"KDA",
"FEI",
"YFI"
  ]
        }
    },
    computed: {

    }
}
</script>

<style lang="scss" scoped>
@function scaleValue($value) {
    @return calc(
      #{$value} * (clamp(350px, 100vw, 3840px) / var(--ideal-viewport-width))
    );
}

    .dex {
        background: #0A0E17;
        min-height: 100vh;
        padding: 0 #{scaleValue(20)};
        padding-bottom: #{scaleValue(20)};

        &__body {
            display: flex;
            justify-content: space-between;
            margin-top: #{scaleValue(20)};

            @media only screen and (max-width: 414px) {
                flex-direction: column;
                align-items: center;
            }
        }

        &__area {
            @media only screen and (max-width: 414px) {
                margin-bottom: #{scaleValue(100)};
            }
        }
    }
</style>