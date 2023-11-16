<template>
  <div class="markets">
    <HeaderBox />
    <h2>Markets</h2>
    <div class="markets__body">

      <section class="markets__headers">
        <div class="markets__header" @click="toggleview('spot')" :class="{ current: currentview ===  'spot'}">SPOT</div>
        <div class="markets__header" @click="toggleview('stocks')" :class="{ current: currentview ===  'stocks'}">STOCKS</div>
        <div class="markets__header" @click="toggleview('etfs')" :class="{ current: currentview ===  'etfs'}">etfs</div>
        <div class="markets__header" @click="toggleview('ipos')" :class="{ current: currentview ===  'ipos'}">ipos</div>
        <div class="markets__header" @click="toggleview('derivatives')" :class="{ current: currentview ===  'derivatives'}">derivatives</div>
        <div class="markets__header" @click="toggleview('indexes')" :class="{ current: currentview ===  'indexes'}">indexes</div>
      </section>

      <section class="markets__content" v-if="currentview ===  'spot'">
        <Record 
          :labels="[
            'ticker', 
            'name',
            '24hr Volume', 
            'price', 
            'daily change']" 
            :records="[]"
            :headerType="true"
            :header="''"/>
      </section>

      <section class="markets__list" v-if="currentview ===  'spot'">
        <div v-for="item in coindata" class="markets__item">
          <div class="markets__item--symbol" @click="$router.push(`/trade?asset=${item.symbol}`)">
            <span class="colored" :style="{
              background: createRGBA()
            }"></span>
            <span class="symbol">{{ item.symbol }}/USD</span>
          </div>
          <span class="markets__item--name">{{ item.name }}</span>
          <span class="markets__item--price">{{ item.quote.USD.volume_24h }}</span>
          <span class="markets__item--price">{{ item.quote.USD.price }}</span>
          <span class="markets__item--percentchange">{{ item.quote.USD.percent_change_24h }}</span>
        </div>
      </section>

      <section class="markets__content" v-if="currentview === 'stocks'">
        <Record 
          :labels="[
            'symbol', 
            'company name',
            'price',
            'daily change', 
            'revenue']" 
            :records="[]"
            :headerType="true"
            :header="''"/>
      </section>

      <section class="markets__list" v-if="currentview ===  'stocks'">
        <div v-for="item in stocks" class="markets__item">
          <div class="markets__item--symbol" @click="$router.push(`/trade?asset=${item.Symbol}&assetcategory=stocks`)">
            <span class="colored" :style="{
              background: createRGBA()
            }"></span>
            <span class="symbol">{{ item["Symbol"] }}</span>
          </div>
          <span class="markets__item--name">{{  item["Company Name"] }}</span>
          <span class="markets__item--price">{{ item["Stock Price"] }}</span>
          <span class="markets__item--price">{{ item["% Change"]  }}</span>
          <span class="markets__item--percentchange">{{ item["Revenue"] }}</span>
        </div>
      </section>

      <section class="markets__content" v-if="currentview === 'ipos'">
        <Record 
          :labels="[
            'symbol', 
            'company/asset name',
            'price',
            'daily change', 
            'revenue']" 
            :records="[]"
            :headerType="true"
            :header="''"/>
      </section>

      <section class="markets__list" v-if="currentview ===  'ipos'">
        <div v-for="item in ipos" class="markets__item">
          <div class="markets__item--symbol" @click="$router.push(`/trade?asset=${item.Symbol}&assetcategory=ipos`)">
            <span class="colored" :style="{
              background: createRGBA()
            }"></span>
            <span class="symbol">{{ item["Symbol"] }}</span>
          </div>
          <span class="markets__item--name">{{  item["Company Name"] }}</span>
          <span class="markets__item--price">${{ `${item["IPO Price"]}00` }}</span>
          <span class="markets__item--price">{{ item["Return"]  }}%</span>
          <span class="markets__item--percentchange">${{ '1000,000' }}</span>
        </div>
      </section>

      <section class="markets__content" v-if="currentview === 'etfs'">
        <Record 
          :labels="[
            'symbol', 
            'fund name/asset name',
            'asset class',
            'assets']" 
            :records="[]"
            :headerType="true"
            :header="''"/>
      </section>

      <section class="markets__list" v-if="currentview ===  'etfs'">
        <div v-for="item in etfs" class="markets__item">
          <div class="markets__item--symbol" @click="$router.push(`/trade?asset=${item.Symbol}&assetcategory=ipos`)">
            <span class="colored" :style="{
              background: createRGBA()
            }"></span>
            <span class="symbol">{{ item.Symbol }}</span>
          </div>
          <span class="markets__item--name">{{  item["Fund Name"] }}</span>
          <span class="markets__item--price">{{ `${item["Asset Class"]}` }}</span>
          <span class="markets__item--percentchange">{{ item["Assets"] }}</span>
        </div>
      </section>

    </div>
  </div>
</template>

<script>
import assetdata from '@/mixins/assetdata.js';

export default {
  mixins: [assetdata],
  methods: {
    rainbow(numOfSteps, step) {
      var r, g, b;
      var h = step / numOfSteps;
      var i = ~~(h * 6);
      var f = h * 6 - i;
      var q = 1 - f;
      switch(i % 6){
        case 0: r = 1; g = f; b = 0; break;
        case 1: r = q; g = 1; b = 0; break;
        case 2: r = 0; g = 1; b = f; break;
        case 3: r = 0; g = q; b = 1; break;
        case 4: r = f; g = 0; b = 1; break;
        case 5: r = 1; g = 0; b = q; break;
      }
      var c = "#" + ("00" + (~ ~(r * 255)).toString(16)).slice(-2) + ("00" + (~ ~(g * 255)).toString(16)).slice(-2) + ("00" + (~ ~(b * 255)).toString(16)).slice(-2);
      return (c);
    },
    hexToRgb (hex) {
      var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16)
        } : null;
    },
    createRGBA() {
      const rgb = (this.hexToRgb(this.rainbow(Math.round(Math.random() * 100), Math.round(Math.random() * 80))));
      const rgbone = (this.hexToRgb(this.rainbow(Math.round(Math.random() * 100), Math.round(Math.random() * 80))));
      const result = `linear-gradient(to right bottom,rgba(${rgbone.r}, ${rgbone.g}, ${rgbone.b},1),rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, .5))`;
      return result;
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

.markets {


  &__area {
    background: #111722;
    padding: #{scaleValue(14)} #{scaleValue(20)};
    border-radius: .3rem;
  }

  &__alignitems {
    display: flex;
    align-items: center;
  }

  & h2 {
    font-size: #{scaleValue(22)};
    font-weight: 400;
    margin-bottom: #{scaleValue(10)};

    @media only screen and (max-width: 414px) { 
      font-size: #{scaleValue(90)};
      margin-bottom: #{scaleValue(30)};
    }
  }

  min-height: #{scaleValue(1000)};
  padding: #{scaleValue(20)} #{scaleValue(30)};

  @media only screen and (max-width: 414px) {
    padding: #{scaleValue(100)} #{scaleValue(60)};
  }

  &__body {
    padding: #{scaleValue(30)} #{scaleValue(60)};
    margin-top: #{scaleValue(30)};
    background: #111722;
  }

  &__headers {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(#{scaleValue(70)}, 1fr));
    grid-gap: #{scaleValue(3)};
    align-items: flex-start;
    text-transform: uppercase;
    padding: #{scaleValue(10)} 0;
    padding: 0 #{scaleValue(30)};
  }

  &__header {
    text-align: center;
    position: relative;
    padding: #{scaleValue(16)} 0;
    font-size: #{scaleValue(13)};
    cursor: pointer;
    transition: all .3s ease;

    &.current {
      color: #00B4C9;

      &::before {
        background: #00B4C9;
      }
    }

    &::before {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      background: transparent;
      height: #{scaleValue(5)};
      width: 100%;
      border-radius: 3rem;
      transition: all .3s ease;
    }
  }

  &__item {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(#{scaleValue(70)}, 1fr));
    grid-gap: #{scaleValue(3)};
    align-items: center;
    text-transform: capitalize;
    padding: #{scaleValue(10)} 0;//linear-gradient(to right bottom,rgba(0,76,255,1),rgba(187,0,255, 1));
    margin-bottom: #{scaleValue(15)};
    font-size: #{scaleValue(14)};

    &--symbol {
      display: flex;
      align-items: center;
      cursor: pointer;

      text-transform: uppercase;

      & span {
        display: inline-block;

        &.symbol {
          color: #00B4C9;
        }

        &.colored {
          height: #{scaleValue(20)};
          width: #{scaleValue(20)};
          border-radius: 100%;
          margin-right: #{scaleValue(8)}
        }
      }
    }
  }
}
</style>
