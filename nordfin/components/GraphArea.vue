<template>
  <div class="grapharea">
    <div class="grapharea__body">
         <div id="tradingview_114f3" class="grapharea__graph"></div>
         <div class="tradingview-widget-copyright"><a href="https://www.tradingview.com/symbols/BTCUSD/?exchange=BITSTAMP" rel="noopener" target="_blank"><span class="blue-text">BTCUSD Chart</span></a> by TradingView</div>
    </div>
  </div>
</template>

<script>
import assetdata from '@/mixins/assetdata.js';
export default {
    mixins: [assetdata],
    mounted() {
      if (this.assetcategory && this.assetcategory === 'stocks' || this.assetcategory && this.assetcategory === 'ipos') {
        new TradingView.widget(
          {
            "width": document.getElementById('tradingview_114f3').clientWidth,
            "height": document.getElementById('tradingview_114f3').clientHeight,
            "symbol": `NASDAQ:${this.asset}`,
            "interval": "D",
            "timezone": "Etc/UTC",
            "theme": "dark",
            "style": "1",
            "locale": "en",
            "toolbar_bg": "#f1f3f6",
            "enable_publishing": false,
            "allow_symbol_change": true,
            "container_id": "tradingview_114f3"
          }
        );
      } else {
        new TradingView.widget(
          {
            "width": document.getElementById('tradingview_114f3').clientWidth,
            "height": document.getElementById('tradingview_114f3').clientHeight,
            "symbol": `BINANCE:${this.asset}USD`,
            "interval": "D",
            "timezone": "Etc/UTC",
            "theme": "dark",
            "style": "1",
            "locale": "en",
            "toolbar_bg": "#f1f3f6",
            "enable_publishing": false,
            "allow_symbol_change": true,
            "container_id": "tradingview_114f3"
          }
        );
      }
    }
}
</script>

<style lang="scss" scoped>
@function scaleValue($value) {
    @return calc(
      #{$value} * (clamp(350px, 100vw, 3840px) / var(--ideal-viewport-width))
    );
}

    .grapharea {
        background: #111722;
        width: #{scaleValue(740)};
        height: #{scaleValue(810)};
        border-radius: .5rem;
        position: relative;

        @media only screen and (max-width: 414px) {
           width: #{scaleValue(1500)};
           height: #{scaleValue(2040)};
        }

        &:before {
            content: '';
            position: absolute;
            left: 0;
            bottom: 0;
            width: #{scaleValue(740)};
            background: #111722;
            height: #{scaleValue(160)};
        }

        &__graph {
            position: relative;
            width: 100%;
            height: #{scaleValue(770)};
            overflow: hidden;

            @media only screen and (max-width: 414px) {
              height: #{scaleValue(2000)};
            }
        }
    }
</style>
