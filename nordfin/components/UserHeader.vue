<template>
    <div>
        <div class="userheader">
            <div class="userheader__mobile">
                <span @click="toggleSideNav">
                    <svg viewBox="0 0 24 24" focusable="false" class="chakra-icon css-onkibi" aria-hidden="true"><path fill="currentColor" d="M 3 5 A 1.0001 1.0001 0 1 0 3 7 L 21 7 A 1.0001 1.0001 0 1 0 21 5 L 3 5 z M 3 11 A 1.0001 1.0001 0 1 0 3 13 L 21 13 A 1.0001 1.0001 0 1 0 21 11 L 3 11 z M 3 17 A 1.0001 1.0001 0 1 0 3 19 L 21 19 A 1.0001 1.0001 0 1 0 21 17 L 3 17 z"></path></svg>
                </span>
            </div>

            <div class="userheader__left">
                <figure class="userheader__left--logo">
                    <img src="@/assets/images/pink-circle.png" />
                </figure>
            </div>

            <div class="userheader__right">
                <div class="userheader__right--name" v-if="user">
                    <span>
                        {{ user.firstname }}
                    </span>
                    <span>
                        {{ user.lastname }}
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import userMixin from '@/mixins/user.js';

export default {
    mixins: [userMixin],
    methods: {
        toggleSideNav() {
            this.$bus.$emit('sidenav');
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
.userheader {
    position: absolute;
    right: 0;
    top: 0;
    height: #{scaleValue(70)};
    background: transparent;
    width: #{scaleValue(1300)};
    border-bottom: .5px solid rgba(255, 255, 255, 0.16);
    padding: 0 #{scaleValue(15)};
    padding-right: #{scaleValue(37)};

    display: flex;
    align-items: center;
    justify-content: space-between;

    @media only screen and (max-width: 414px) {
        width: 100vw;
        background: #181c27;
        z-index: 9;
        height: #{scaleValue(279)};
        padding: 0 #{scaleValue(55)};
    }

    &__mobile {
        display: none;

        @media only screen and (max-width: 414px) {
            display: flex;
            justify-content: center;
            align-items: center;
            
            & span {
                display: flex;
                justify-content: center;
                align-items: center;
                background: #212631;
                
                padding: #{scaleValue(40)} #{scaleValue(60)};
                border-radius: .4rem;

                & svg {
                    height: #{scaleValue(70)};
                    width: #{scaleValue(70)};
                    color: #fff;
                }
            }
        }
    }

    &__left {

        &--logo {
            height: #{scaleValue(40)};
            width: #{scaleValue(40)};

            @media only screen and (max-width: 414px) {
                height: #{scaleValue(150)};
                width: #{scaleValue(150)};
            }


            & img {
                height: 100%;
                width: 100%;
                object-fit: contain;
            }
        }
    }

    &__right {

        &--name {
            text-transform: capitalize;
            font-size: #{scaleValue(15)};
            background: rgba(1, 1, 1, .2);
            padding: #{scaleValue(10)};
            border-radius: .5rem;

            @media only screen and (max-width: 414px) {
                font-size: #{scaleValue(50)};
            }
        }
    }
}
</style>