<template>
    <div>
        <div class="dsm" :class="{
            sidenav
        }">


            <div class="dsm__mobile">
                <div class="dsm__mobile--top">
                    <span></span>
                    <span class="dsm__mobile--close" @click="toggleSideNav">
                        <svg viewBox="0 0 24 24" focusable="false" class="chakra-icon css-1vwvp6d" aria-hidden="true"><path fill="currentColor" d="M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"></path></svg>
                    </span>
                </div>

                <div class="dsm__mobile--bottom">
                    <figure class="dsm__mobile--logo">
                        <img src="@/assets/images/pink-circle.png" />
                    </figure>

                    <div class="dsm__mobile--name" v-if="user">
                        <span>
                            {{ user.firstname }}
                        </span>
                        <span>
                            {{ user.lastname }}
                        </span>
                    </div>
                </div>
            </div>


            <div class="dsm__link" :class="{
                current: $route.name === 'userdashboard'
            }" @click="toggleSideNav">
                <NuxtLink to="/userdashboard" class="dsm__link--a">
                    <span>
                        <span class="chakra-button__icon css-1j0khbq"><svg viewBox="0 0 24 24" focusable="false" class="chakra-icon css-onkibi" aria-hidden="true"><g fill="currentColor" fill-rule="nonzero"><g id="circular-graph"><path d="M20.23,0H3.77C1.69,0,0,1.69,0,3.77V20.23c0,2.08,1.69,3.77,3.77,3.77H20.23c2.08,0,3.77-1.69,3.77-3.77V3.77c0-2.08-1.69-3.77-3.77-3.77ZM3.77,2.06H20.23c.95,0,1.71,.77,1.71,1.71v.76L13.45,13.23l-3.23-4.53c-.19-.26-.48-.44-.8-.47s-.65,.07-.88,.29L2.06,14.46V3.77c0-.95,.77-1.71,1.71-1.71ZM20.23,21.94H3.77c-.95,0-1.71-.77-1.71-1.71v-2.71s.04-.02,.05-.03l7.01-6.43,3.27,4.59c.19,.27,.5,.45,.84,.47,.33,.03,.66-.1,.9-.34l7.82-8.01v12.45c0,.95-.77,1.71-1.71,1.71Z" id="Shape"></path></g></g></svg></span>
                    </span>
                    <span>Dashboard</span>
                </NuxtLink>
            </div>
            <div class="dsm__link" :class="{
                current: $route.name === 'defi'
            }" @click="toggleSideNav">
                <NuxtLink to="/defi">
                    <span>
                        <svg viewBox="0 0 24 24" focusable="false" class="chakra-icon css-onkibi" aria-hidden="true"><g clip-path="url(#clip0_25_654)"><path fill-rule="evenodd" clip-rule="evenodd" d="M16.3467 13.8434C16.8135 13.6394 17.3574 13.8525 17.5614 14.3193C18.2584 15.9145 18.4299 17.69 18.0513 19.389C17.6726 21.0881 16.7633 22.6227 15.4549 23.7709C15.0894 24.0915 14.5379 24.0736 14.1941 23.7298L10.7254 20.2611C10.3651 19.9009 10.3651 19.3168 10.7254 18.9565C11.0857 18.5962 11.6698 18.5962 12.0301 18.9565L14.8461 21.7726C15.5352 20.9786 16.0198 20.0225 16.2504 18.9877C16.5439 17.6707 16.4109 16.2945 15.8707 15.0581C15.6667 14.5912 15.8798 14.0474 16.3467 13.8434Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M4.61097 5.94874C6.31005 5.57006 8.08553 5.74162 9.68066 6.43862C10.1475 6.64262 10.3606 7.18647 10.1566 7.65334C9.95263 8.1202 9.40878 8.3333 8.94192 8.1293C7.70551 7.58905 6.32931 7.45607 5.01234 7.74959C3.9775 7.98023 3.02138 8.46481 2.22744 9.15388L5.04351 11.9699C5.40378 12.3302 5.40378 12.9143 5.04351 13.2746C4.68324 13.6349 4.09914 13.6349 3.73887 13.2746L0.270202 9.80592C-0.0735815 9.46214 -0.0915507 8.91055 0.229129 8.54512C1.37731 7.23671 2.9119 6.32742 4.61097 5.94874Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M21.5071 0.0254028C21.8432 -0.0266898 22.1868 0.00158717 22.5099 0.107917C22.8329 0.214248 23.1261 0.395606 23.3656 0.637127C23.605 0.878648 23.7838 1.17346 23.8873 1.49741C23.9906 1.82071 24.016 2.16385 23.9614 2.49881C23.4101 5.96028 20.9815 13.801 10.9235 21.1056C10.5564 21.3722 10.0499 21.3323 9.72909 21.0114L9.64339 20.9257L8.57368 21.9955C8.50842 22.0607 8.43438 22.1152 8.35435 22.1577C7.97578 22.4578 7.50504 22.6233 7.01729 22.6233C6.44862 22.6233 5.90306 22.3983 5.49975 21.9974L5.49781 21.9955L2.00454 18.5022L2.0026 18.5003C1.60169 18.0969 1.37666 17.5514 1.37666 16.9827C1.37666 16.414 1.60169 15.8685 2.0026 15.4652L2.00454 15.4632L3.0927 14.3751L2.98856 14.2709C2.66872 13.9511 2.62795 13.4465 2.89227 13.0795C10.1777 2.96288 18.0853 0.589109 21.4985 0.0267867L21.5071 0.0254028ZM10.4722 19.1445C10.4308 19.0708 10.3791 19.0025 10.318 18.9419L5.05351 13.7143C5.02369 13.6847 4.99235 13.6575 4.95974 13.6328L4.85296 13.526C11.6712 4.40676 18.8482 2.33447 21.7927 1.84822C21.8398 1.84139 21.8878 1.84557 21.933 1.86045C21.9791 1.87564 22.021 1.90155 22.0552 1.93606C22.0894 1.97056 22.115 2.01268 22.1298 2.05895C22.1446 2.10523 22.1482 2.15436 22.1403 2.2023L22.1396 2.20662C21.6677 5.17316 19.5567 12.2986 10.4722 19.1445ZM4.39734 15.6797L3.31111 16.7659C3.31093 16.7661 3.3113 16.7657 3.31111 16.7659C3.25419 16.8235 3.22169 16.9017 3.22169 16.9827C3.22169 17.0637 3.25363 17.1414 3.31056 17.1989C3.31074 17.1991 3.31038 17.1988 3.31056 17.1989L6.8005 20.6889C6.80071 20.6891 6.80029 20.6887 6.8005 20.6889C6.85805 20.7458 6.93635 20.7783 7.01729 20.7783C7.09853 20.7783 7.17647 20.7462 7.23408 20.6889C7.28592 20.6374 7.34323 20.5926 7.40465 20.5552L8.33876 19.6211L4.39734 15.6797Z" fill="currentColor"></path></g></svg>
                    </span>
                    <span>Defi</span>
                </NuxtLink>
            </div>
            <div class="dsm__link" :class="{
                current: $route.name === 'transactionhistory'
            }" @click="toggleSideNav">
                <NuxtLink to="/transactionhistory">
                    <span>
                        <svg viewBox="0 0 24 24" focusable="false" class="chakra-icon css-onkibi" aria-hidden="true"><g><path fill-rule="evenodd" clip-rule="evenodd" d="M3.77143 2.05714C2.82465 2.05714 2.05714 2.82465 2.05714 3.77143V20.2286C2.05714 21.1753 2.82465 21.9429 3.77143 21.9429H20.2286C21.1753 21.9429 21.9429 21.1753 21.9429 20.2286V3.77143C21.9429 2.82465 21.1753 2.05714 20.2286 2.05714H3.77143ZM0 3.77143C0 1.68853 1.68853 0 3.77143 0H20.2286C22.3115 0 24 1.68853 24 3.77143V20.2286C24 22.3115 22.3115 24 20.2286 24H3.77143C1.68853 24 0 22.3115 0 20.2286V3.77143Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M5.48571 6.51429C5.48571 5.94622 5.94622 5.48571 6.51429 5.48571H6.528C7.09606 5.48571 7.55657 5.94622 7.55657 6.51429C7.55657 7.08235 7.09606 7.54286 6.528 7.54286H6.51429C5.94622 7.54286 5.48571 7.08235 5.48571 6.51429ZM10.9714 6.51429C10.9714 5.94622 11.4319 5.48571 12 5.48571H17.4857C18.0538 5.48571 18.5143 5.94622 18.5143 6.51429C18.5143 7.08235 18.0538 7.54286 17.4857 7.54286H12C11.4319 7.54286 10.9714 7.08235 10.9714 6.51429ZM5.48571 12C5.48571 11.4319 5.94622 10.9714 6.51429 10.9714H6.528C7.09606 10.9714 7.55657 11.4319 7.55657 12C7.55657 12.5681 7.09606 13.0286 6.528 13.0286H6.51429C5.94622 13.0286 5.48571 12.5681 5.48571 12ZM10.9714 12C10.9714 11.4319 11.4319 10.9714 12 10.9714H17.4857C18.0538 10.9714 18.5143 11.4319 18.5143 12C18.5143 12.5681 18.0538 13.0286 17.4857 13.0286H12C11.4319 13.0286 10.9714 12.5681 10.9714 12ZM5.48571 17.4857C5.48571 16.9177 5.94622 16.4571 6.51429 16.4571H6.528C7.09606 16.4571 7.55657 16.9177 7.55657 17.4857C7.55657 18.0538 7.09606 18.5143 6.528 18.5143H6.51429C5.94622 18.5143 5.48571 18.0538 5.48571 17.4857ZM10.9714 17.4857C10.9714 16.9177 11.4319 16.4571 12 16.4571H17.4857C18.0538 16.4571 18.5143 16.9177 18.5143 17.4857C18.5143 18.0538 18.0538 18.5143 17.4857 18.5143H12C11.4319 18.5143 10.9714 18.0538 10.9714 17.4857Z" fill="currentColor"></path></g></svg>
                    </span>
                    <span>Transaction History</span>
                </NuxtLink>
            </div>
            <!--<div class="dsm__link" :class="{
                current: $route.name === 'settings'
            }">
                <NuxtLink to="/settings">
                    <span>
                        <svg viewBox="0 0 14 14" focusable="false" class="chakra-icon css-onkibi" aria-hidden="true"><path fill="currentColor" d="M14,7.77 L14,6.17 L12.06,5.53 L11.61,4.44 L12.49,2.6 L11.36,1.47 L9.55,2.38 L8.46,1.93 L7.77,0.01 L6.17,0.01 L5.54,1.95 L4.43,2.4 L2.59,1.52 L1.46,2.65 L2.37,4.46 L1.92,5.55 L0,6.23 L0,7.82 L1.94,8.46 L2.39,9.55 L1.51,11.39 L2.64,12.52 L4.45,11.61 L5.54,12.06 L6.23,13.98 L7.82,13.98 L8.45,12.04 L9.56,11.59 L11.4,12.47 L12.53,11.34 L11.61,9.53 L12.08,8.44 L14,7.75 L14,7.77 Z M7,10 C5.34,10 4,8.66 4,7 C4,5.34 5.34,4 7,4 C8.66,4 10,5.34 10,7 C10,8.66 8.66,10 7,10 Z"></path></svg>
                    </span>
                    <span>Settings</span>
                </NuxtLink>
            </div>-->
        </div>
    </div>
</template>

<script>
import userMixin from '@/mixins/user.js';

export default {
    data() {
        return {
            sidenav: false
        }
    },
    mixins: [userMixin],
    methods: {
        toggleSideNav() {
            this.sidenav ? this.sidenav = false : this.sidenav = true;
        }
    },
    mounted() {
        this.$bus.$on('sidenav', () => {
            this.sidenav = true;
        })
    }     
}
</script>

<style lang="scss" scoped>
@function scaleValue($value) {
    @return calc(
      #{$value} * (clamp(350px, 100vw, 3840px) / var(--ideal-viewport-width))
    );
}
.dsm {
    width: #{scaleValue(300)};
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    border-right: .5px solid rgba(255, 255, 255, 0.16);

    padding-top: #{scaleValue(90)};
    padding-left: #{scaleValue(50)};

    @media only screen and (max-width: 414px) {
        width: #{scaleValue(1200)};
        z-index: 10;
        background: #181c27;

        padding-top: #{scaleValue(150)};
        transition: all .4s ease;
        transform: translateX(-100%);
    }

    &__link {
        margin-bottom: #{scaleValue(10)};
        overflow: hidden;
        border-radius: 0.75rem;
        width: #{scaleValue(230)};
        cursor: pointer;

        @media only screen and (max-width: 414px) {
            width: #{scaleValue(1000)};
            margin-bottom: #{scaleValue(90)};
        }

        &:hover {
            background: #212631;
        }

        & span {
            display: flex;
            align-items: center;
            margin-right: #{scaleValue(6)};

            @media only screen and (max-width: 414px) {
                margin-right: #{scaleValue(30)};
            }

            & svg {
                height: #{scaleValue(20)};
                width: #{scaleValue(20)};

                @media only screen and (max-width: 414px) {
                    height: #{scaleValue(80)};
                    width: #{scaleValue(80)};
                }
            }
        }

        & a {
            text-decoration: none;
            color: #718096;
            display: flex;
            align-items: center;
            font-size:  #{scaleValue(15)};

            width: 100%;
            height: 100%;
            padding: #{scaleValue(17)} #{scaleValue(10)};

            @media only screen and (max-width: 414px) {
                font-size:  #{scaleValue(60)};
                padding: #{scaleValue(60)} #{scaleValue(50)};
            }
        }

        &.current {
            background: #2D3748;
            

            & a {
                color: #fff;
            }
        }
    }

    &__mobile {
        width: #{scaleValue(1000)};
        margin-bottom: #{scaleValue(100)};
        display: none;

        @media only screen and (max-width: 414px) {
            display: block;
        }

        &--top {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: #{scaleValue(70)};
        }

        &--close {

            & svg {
                height: #{scaleValue(60)};
                width: #{scaleValue(60)};
                color: #718096;
            }
        }

        &--bottom {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        &--logo {
            height: #{scaleValue(200)};
            width: #{scaleValue(200)};

            & img {
                width: 100%;
                height: 100%;
                object-fit: contain;
            }
        }

        &--name {
            display: flex;
            align-items: center;

            text-transform: capitalize;
            font-size: #{scaleValue(60)};
            background: rgba(1, 1, 1, .2);
            padding: #{scaleValue(30)} #{scaleValue(80)};
            border-radius: .5rem;
        }
    }
}

.sidenav {
    transform: translate(0)
}
</style>