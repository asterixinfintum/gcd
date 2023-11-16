<template>
  <div class="settings">
    <HeaderBox />
    <div class="settings__body">
        <section class="settings__top settings__area">
            <h2 class="">Profile</h2>
            <div class="settings__toprow">
                <div class="settings__toprow--sect">
                    <span>Name</span>
                    <span>mark anderson</span>
                </div>
                 <div class="settings__toprow--sect">
                    <span>Email</span>
                    <span>markanderson@gmail.com</span>
                </div>
                 <div class="settings__toprow--sect">
                    <span>Account Plan</span>
                    <span>Gold</span>
                </div>
                 <div class="settings__toprow--sect">
                    <span>Affilliate Link</span>
                    <span>https://grantcred.com/=48783773</span>
                </div>
            </div>
        </section>

        <section class="settings__base">
            <div class="settings__baseleft">
                <span @click="toggleview('Account Security')" :class="{ current: currentview === 'Account Security' }">Security</span>
                <!--<span @click="toggleview('Identity Verification')" :class="{ current: currentview === 'Identity Verification' }">Identity Verification</span>
                <span @click="toggleview('Subaccounts')" :class="{ current: currentview === 'Subaccounts' }">Subaccounts</span>
                <span @click="toggleview('Fees')" :class="{ current: currentview === 'Fees' }">Fees</span>
                <span @click="toggleview('Referrals')" :class="{ current: currentview === 'Referrals' }">Referrals</span>
                <span @click="toggleview('Margin')" :class="{ current: currentview === 'Margin' }">Margin</span>
                <span @click="toggleview('Leaderboard')" :class="{ current: currentview === 'Leaderboard' }">Leaderboard</span>
                <span @click="toggleview('Display')" :class="{ current: currentview === 'Display' }">Display</span>-->
            </div>

            <div class="settings__baseright">
                <section class="settings__content header-area">
                    <h2 class="currentview">{{ currentview }}</h2>
                </section>

                <section class="settings__content" v-if="currentview === 'Account Security'">
                    <DropDown :label="'Change password'" :status="'Not enabled'">
                        <template v-slot:content>
                            <p>Request an email with instructions for changing your password. This will prevent you from withdrawing for 24 hours.</p>
                            <div class="dropdown__btnarea">
                                <div></div>
                                <button>reset password</button>
                            </div>
                        </template>
                    </DropDown>

                    <DropDown :label="'Withdrawal password'" :status="'Not enabled'">
                        <template v-slot:content>
                            <p>Set a separate password for withdrawals</p>
                            <div class="dropdown__inputarea">
                                <input placeholder="New withdrawal password"/>
                            </div>
                            <div class="dropdown__btnarea">
                                <div></div>
                                <button>set password</button>
                            </div>
                        </template>
                    </Dropdown>

                    <DropDown :label="'Withdrawal Destination Whitelisting'" :status="'Not enabled'">
                        <template v-slot:content>
                            <p>Require that all withdrawals go to predesignated whitelisted addresses.</p>
                            <p>You can whitelist addresses saved to your main account from the Saved Addresses page. Doing so requires 2FA and withdrawal passwords, if enabled. After submitting an address for whitelisting, you will be notified via email, and the address will be usable after a configurable delay. You can also elect to only allow Grant Cred admins to whitelist addresses for your account. <br/>Disabling this setting or reducing the whitelisting delay requires contacting a Grant Cred admin.</p>
                            <div class="dropdown__btnarea">
                                <div></div>
                                <button>Restrict withdrawals to whitelist</button>
                            </div>
                        </template>
                    </Dropdown>

                    <DropDown :label="'Require email approval on new device'" :status="''">
                        <template v-slot:content>
                            <p>Enabled. We will require you to click an email link when you log in from a new device and country...</p>
                            <div class="dropdown__btnarea">
                                <div></div>
                                <button>disable</button>
                            </div>
                        </template>
                    </DropDown>

                    <DropDown :label="'Log Out of All Sessions'" :status="''">
                        <template v-slot:content>
                            <p>Press this button to log out of all active sessions for your account (including the one you are using right now).</p>
                            <div class="dropdown__btnarea">
                                <div></div>
                                <button>log out of all sessions</button>
                            </div>
                        </template>
                    </DropDown>
                </section>
            </div>
        </section>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            currentview: 'Account Security'
        }
    },
    methods: {
        toggleview(value) {
            this.currentview = value;
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

.settings {
    min-height: #{scaleValue(1000)};
    padding: #{scaleValue(20)} #{scaleValue(30)};

    & h2 {
        font-size: #{scaleValue(22)};
        font-weight: 400;
        margin-bottom: #{scaleValue(10)};
    }

    &__area {
        background: #111722;
        padding: #{scaleValue(14)} #{scaleValue(20)};
        border-radius: .3rem;
    }

    &__alignitems {
        display: flex;
        align-items: center;
    }

    &__body {
        padding: #{scaleValue(30)} #{scaleValue(200)};
    }

    &__toprow {
        display: flex;
        align-items: center;

        &--sect {
            display: flex;
            flex-direction: column;
            margin-right: #{scaleValue(22)};
            line-height: #{scaleValue(20)};

            font-size: #{scaleValue(12)};

            & span {

                &:nth-child(2) {
                    font-size: #{scaleValue(15)};
                }
            }
        }
    }

    &__base {
        display: flex;
        justify-content: space-between;
        margin-top: #{scaleValue(22)};
    }

    &__baseleft {
        text-align: right;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        border-radius: .3rem;
        background: #111722;
        width: #{scaleValue(200)};
        height: #{scaleValue(350)};

        & span {
            display: inline-block;
            font-size: #{scaleValue(14)};
            border-bottom: .5px solid rgba(#fff, .5);
            padding: #{scaleValue(13)} #{scaleValue(20)};
            cursor: pointer;

            &:last-child {
                border-bottom: none;
            }

            &.current {
                color: #00B4C9;
            }
        }
    }

    &__baseright {
        width: #{scaleValue(920)};
        min-height: #{scaleValue(500)};
        overflow: hidden;
        padding-bottom: #{scaleValue(40)};
    }

    &__content {
        background: #111722;
        border-radius: 0 0 .3rem .3rem;

        &.header-area {
            padding: #{scaleValue(14)} #{scaleValue(20)};
            border-radius: .3rem .3rem 0 0;
        }
    }
}
</style>
