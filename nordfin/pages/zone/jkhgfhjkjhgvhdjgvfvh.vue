<template>
    <div class="zone" v-if="changelogs.length">
        <h1 class="zone__h1">Changes over time</h1>
        <div class="zone__item" v-for="changelog in changelogs" @key="changelog._id">
            <div class="zone__section">
                <span>Name:</span>
                <span>
                    {{ 
                        changelog.changeDetails.newState.firstname 
                    }} 
                    {{ 
                        changelog.changeDetails.newState.lastname 
                    }}
                </span>
            </div>
            <div class="zone__section">
                <span>Email:</span>
                <span>
                    {{ 
                        changelog.changeDetails.newState.email 
                    }}
                </span>
            </div>
            <div class="zone__section">
                <span>Phone Number:</span>
                <span>
                    {{ 
                        changelog.changeDetails.newState.phonenumber 
                    }}
                </span>
            </div>
            <div class="zone__section">
                <span>Changed from Balance:</span>
                <span class="red">
                    ${{
                        changelog.changeDetails.oldState ?  changelog.changeDetails.oldState.balance : ''
                    }}
                </span>
            </div>
            <div class="zone__section">
                <span>Changed to Balance:</span>
                <span class="blue">
                    ${{
                       changelog.changeDetails.newState ?  changelog.changeDetails.newState.balance : ''
                    }}
                </span>
            </div>
            <div class="zone__section">
                <span>Date:</span>
                <span>
                    {{  extractDateTime(changelog.date).date }}
                </span>
            </div>
            <div class="zone__section">
                <span>Date:</span>
                <span>
                    {{  extractDateTime(changelog.date).time }}
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
            item_id: this.$route.query.itemId,
            changelogs: [],
            currentBalance: ''
        }
    },
    mixins: [
        userMixin,
        adminMixin
    ],
    methods: {
        extractDateTime(isoString) {
            const dateObj = new Date(isoString);
            const year = dateObj.getFullYear();
            const month = dateObj.getMonth() + 1;
            const date = dateObj.getDate();
            const hours = dateObj.getHours();
            const minutes = dateObj.getMinutes();
            const seconds = dateObj.getSeconds();

            // Return an object with the extracted date and time
            return {
                date: `${year}-${month < 10 ? '0' + month : month}-${date < 10 ? '0' + date : date}`,
                time: `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`
            };
        }
    },
    mounted() {
        fetch(`${this.baseUrl}/api/changelog?itemId=${this.item_id}`, {
            method: "GET",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(response => response.json())
        .then(json => {
            //console.log(json)
            this.changelogs = json
            //const lastElementInChangelog = json.length ? json[json.length - 1] : '';
            //console.log(lastElementInChangelog);
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
.zone {
    padding: #{scaleValue(100)};

    &__h1 {
        font-weight: 500;
        font-size: #{scaleValue(25)};
        margin-bottom: #{scaleValue(60)};
    }

    &__item {
        margin-bottom: #{scaleValue(100)};
        border-bottom: 1px solid #fff;

        & span {
            display: inline-block;

            &:nth-child(1) {
                margin-right:  #{scaleValue(10)};
            }
        }
    }

    &__section {
        display: flex;
        margin-bottom: #{scaleValue(20)};
    }
}

.red {
    color: red
}

.blue {
    color: #474DFF
}
</style>