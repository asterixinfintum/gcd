<template>
  <div class="support">
    <HeaderBox />
    <div class="support__body">
        <h2>Help </h2>

        <section class="support__content support__form">
            <h3>Submit new ticket</h3>

            <input class="support__form--input" placeholder="Title" type="text"/>
            <textarea class="support__form--input text-area" placeholder="Message"></textarea>

            <div class="support__form--filearea">
                <input class="support__form--fileinput" type="file"/>
                <button>Submit ticket</button>
            </div>
        </section>

        <section class="support__content">
            <Record 
                :labels="['submission time', 
                    'category', 
                    'title', 
                    'status'
                    ]" 
                :records="[]"
                :header="'support tickets'"/>
        </section>

    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@function scaleValue($value) {
    @return calc(
      #{$value} * (clamp(350px, 100vw, 3840px) / var(--ideal-viewport-width))
    );
}

.support {

    min-height: #{scaleValue(1000)};
    padding: #{scaleValue(20)} #{scaleValue(30)};

    &__body {
        padding: #{scaleValue(30)};
        margin: 0 auto;
        width: #{scaleValue(1000)};

        @media only screen and (max-width: 414px) { 
            width: #{scaleValue(1500)};
        }

        & h2 {
            font-size: #{scaleValue(25)};
            font-weight: 400;
            text-align: center;

            margin-bottom: #{scaleValue(17)};

            @media only screen and (max-width: 414px) { 
                    font-size: #{scaleValue(90)};
                    margin-bottom: #{scaleValue(30)};
            }
        }
    }

    &__content {
        background: #111722;
        padding: #{scaleValue(14)} #{scaleValue(20)};
        border-radius: .3rem;

        margin-bottom: #{scaleValue(20)};
    }

    &__form {
        display: flex;
        flex-direction: column;

        & h3 {
            font-size: #{scaleValue(20)};
            font-weight: 400;

            margin-bottom: #{scaleValue(30)};

            @media only screen and (max-width: 414px) { 
                font-size: #{scaleValue(70)};
                margin-bottom: #{scaleValue(20)};
            }
        }

        &--filearea {
            display: flex;
            justify-content: space-between;
            align-items: center;

            @media only screen and (max-width: 414px) { 
                flex-direction: column;
                align-items: flex-start; 
            }
        }

        &--input {
            outline: none;
            background: transparent;
            border: .3px solid rgba(#fff, .6);
            border-radius: .5rem;
            font-size: #{scaleValue(18)};
            margin-bottom: #{scaleValue(20)};
            padding: #{scaleValue(15)} #{scaleValue(10)};

            @media only screen and (max-width: 414px) { 
                font-size: #{scaleValue(60)};
                margin-bottom: #{scaleValue(80)};
                height: #{scaleValue(200)};
                padding: #{scaleValue(30)};   
                
                color: #fff;
            }

            &.text-area {
                min-height: #{scaleValue(200)};

                @media only screen and (max-width: 414px) {
                     min-height: #{scaleValue(600)};
                }
            }
        }

        & button {
            font-size: #{scaleValue(13)};
            background: rgba(0, 180, 201, 0.6);
            padding: #{scaleValue(15)};

            border-radius: .5rem;
            text-transform: uppercase;

            @media only screen and (max-width: 414px) { 
                font-size: #{scaleValue(55)};  
                margin-top: #{scaleValue(70)}; 
                padding: #{scaleValue(40)}; 
            }
        }
    }
}
</style>
