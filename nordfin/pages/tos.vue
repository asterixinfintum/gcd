<template>
    <div>
        <div class="tos">
            <header class="tos__header">
                <p @click="moveToRoute('/')">Grant Cred Financials</p>
                <div class="tos__headerright">
                    <router-link to="/signin"><button class="tos__headerright--firstbtn">login</button></router-link>
                    <router-link to="/signup"><button class="tos__headerright--secondbtn">register</button></router-link>
                </div>
            </header>
            <div class="tos__content">
                <h1>Grant Cred Terms of Use</h1>
                <p class="tos__content--revised">Last revised: 4 May 2022</p>
                <div class="tos__body">
                    <p class="tos__body--text">These Grant Cred Terms of Use is entered into between you (hereinafter referred to as “you” or “your”) and Grant Cred operators (as defined below). By accessing, downloading, using or clicking on “I agree” to accept any Grant Cred Services (as defined below) provided by Grant Cred (as defined below), you agree that you have read, understood and accepted all of the terms and conditions stipulated in these Terms of Use (hereinafter referred to as “these Terms”). In addition, when using some features of the Services, you may be subject to specific additional terms and conditions applicable to those features.
                            Please read the terms carefully as they govern your use of Grant Cred Services.THESE TERMS CONTAIN IMPORTANT PROVISIONS INCLUDING AN ARBITRATION PROVISION THAT REQUIRES ALL CLAIMS TO BE RESOLVED BY WAY OF LEGALLY BINDING ARBITRATION.The terms of the arbitration provision are set forth in Article 10, “Resolving Disputes: Forum, Arbitration, Class Action Waiver”, hereunder. As with any asset, the values of Digital Currencies (as defined below) may fluctuate significantly and there is a substantial risk of economic losses when purchasing, selling, holding or investing in Digital Currencies and their derivatives.BY MAKING USE OF BINANCE SERVICES, YOU ACKNOWLEDGE AND AGREE THAT: (1) YOU ARE AWARE OF THE RISKS ASSOCIATED WITH TRANSACTIONS OF DIGITAL CURRENCIES AND THEIR DERIVATIVES; (2) YOU SHALL ASSUME ALL RISKS RELATED TO THE USE OF BINANCE SERVICES AND TRANSACTIONS OF DIGITAL CURRENCIES AND THEIR DERIVATIVES; AND (3) BINANCE SHALL NOT BE LIABLE FOR ANY SUCH RISKS OR ADVERSE OUTCOMES.
                            By accessing, using or attempting to use Grant Cred Services in any capacity, you acknowledge that you accept and agree to be bound by these Terms. If you do not agree, do not access Grant Cred or utilize Grant Cred services.</p>
                </div>

                <div class="tos__body">
                    <h2>I. Definition</h2>
                    <p class="tos__body--text">1. Grant Cred refers to an ecosystem comprising Grant Cred websites (whose domain names include but are not limited to https://www.cxefinanc.com), mobile applications, clients, applets and other applications that are developed to offer Grant Cred Services, and includes independently-operated platforms, websites and clients within the ecosystem (e.g. Grant Cred’s Open Platform, Grant Cred Launchpad, Grant Cred Labs, Grant Cred Charity, Grant Cred DEX, Grant Cred X, JEX, Trust Wallet, and fiat gateways). In case of any inconsistency between relevant terms of use of the above platforms and the contents of these Terms, the respective applicable terms of such platforms shall prevail.</p>
                    <p class="tos__body--text">2. Grant Cred Operators refer to all parties that run Grant Cred, including but not limited to legal persons (including Grant Cred UAB), unincorporated organizations and teams that provide Grant Cred Services and are responsible for such services. For convenience, unless otherwise stated, references to “Grant Cred” and “we” in these Terms specifically mean Grant Cred Operators. UNDER THESE TERMS, BINANCE OPERATORS MAY CHANGE AS BINANCE’S BUSINESS ADJUSTS, IN WHICH CASE, THE CHANGED OPERATORS SHALL PERFORM THEIR OBLIGATIONS UNDER THESE TERMS WITH YOU AND PROVIDE SERVICES TO YOU, AND SUCH CHANGE DOES NOT AFFECT YOUR RIGHTS AND INTERESTS UNDER THESE TERMS. ADDITIONALLY, THE SCOPE OF BINANCE OPERATORS MAY BE EXPANDED DUE TO THE PROVISION OF NEW BINANCE SERVICES, IN WHICH CASE, IF YOU CONTINUE TO USE BINANCE SERVICES, IT IS DEEMED THAT YOU HAVE AGREED TO JOINTLY EXECUTE THESE TERMS WITH THE NEWLY ADDED BINANCE OPERATORS. IN CASE OF A DISPUTE, YOU SHALL DETERMINE THE ENTITIES BY WHICH THESE TERMS ARE PERFORMED WITH YOU AND THE COUNTERPARTIES OF THE DISPUTE, DEPENDING ON THE SPECIFIC SERVICES YOU USE AND THE PARTICULAR ACTIONS THAT AFFECT YOUR RIGHTS OR INTERESTS.</p>
                    <p class="tos__body--text">3. Grant Cred Services refer to various services provided to you by Grant Cred that are based on Internet and/or blockchain technologies and offered via Grant Cred websites, mobile applications, clients and other forms (including new ones enabled by future technological development). Grant Cred Services include but are not limited to such Grant Cred ecosystem components as Digital Asset Trading Platforms, the financing sector, Grant Cred Labs, Grant Cred Academy, Grant Cred Charity, Grant Cred Info, Grant Cred Launchpad, Grant Cred Research, Grant Cred Chain, Grant Cred X, Grant Cred Fiat Gateway, existing services offered by Trust Wallet and novel services to be provided by Grant Cred.</p>
                    <p class="tos__body--text">4. Grant Cred Platform Rules refer to all rules, interpretations, announcements, statements, letters of consent and other contents that have been and will be subsequently released by Grant Cred, as well as all regulations, implementation rules, product process descriptions, and announcements published in the Help Center or within products or service processes.</p>
                    <p class="tos__body--text">5. Users refer to all individuals, institutions or organizations that access, download or use Grant Cred or Grant Cred Services and who meet the criteria and conditions stipulated by Grant Cred. If there exist other agreements for such entities as developers, distributors, market makers, and Digital Currencies exchanges, such agreements shall be followed.</p>
                    <p class="tos__body--text">6. Digital Currencies refer to encrypted or digital tokens or cryptocurrencies with a certain value that are based on blockchain and cryptography technologies and are issued and managed in a decentralized form.</p>
                    <p class="tos__body--text">7. By using Grant Cred you agree that you use its services at your own risk</p>
                    <p class="tos__body--text">8. Digital Assets refer to Digital Currencies, their derivatives or other types of digitalized assets with a certain value.</p>
                    <p class="tos__body--text">9. Grant Cred Accounts refer to the foundational virtual accounts, including main accounts and subaccounts, which are opened by Grant Cred for Users to record on Grant Cred their usage of Grant Cred Services, transactions, asset changes and basic information. Grant Cred Accounts serve as the basis for Users to enjoy and exercise their rights on Grant Cred.</p>
                    <p class="tos__body--text">10. Crypto-to-crypto Trading refers to spot transactions in which one digital currency is exchanged for another digital currency.</p>
                    <p class="tos__body--text">11. Fiat Trading refers to spot transactions in which Digital Currencies are exchanged for fiat currencies or vice versa.</p>
                    <p class="tos__body--text">12. Collateral Accounts refer to special accounts opened by Users on Grant Cred to deposit and withdraw collateral (such as margins) in accordance with these Terms (including the Grant Cred Contract Services Agreement and Grant Cred Platform Rules), as required for contract transactions, leveraged trading and/or currency borrowing services.</p>
                    <p class="tos__body--text">13. Loan/Lending refers to Grant Cred lending of Digital Currencies to Users at an interest collected in certain ways (in the form of Digital Currencies), including but not limited to the leveraged trading and currency lending services currently offered, and other forms of loan/lending services to be launched by Grant Cred.</p>
                    <p class="tos__body--text">14. KYC refers to the “know-your-customer” process that Grant Cred has put in place before entering into a business relationship or conducting transactions with its Users. As part of this process, Grant Cred may do anything that it deems necessary in order to identify Users, verify their identity, scrutinize and investigate User transactions, or comply with any applicable law or regulation.</p>
                </div>
                <div class="tos__body">
                    <h2>II. General Provisions</h2>
                    <p class="tos__body--text">These Terms constitute a legal agreement and create a binding contract between you and Grant Cred Operators.</p>
                    <p class="tos__body--text">Due to the rapid development of Digital Currencies and Grant Cred, these Terms between you and Grant Cred Operators do not enumerate or cover all rights and obligations of each party, and do not guarantee full alignment with needs arising from future development. Therefore,THE PRIVACY POLICY (（）), BINANCE PLATFORM RULES, AND ALL OTHER AGREEMENTS ENTERED INTO SEPARATELY BETWEEN YOU AND BINANCE ARE DEEMED SUPPLEMENTARY TERMS THAT ARE AN INTEGRAL PART OF THESE TERMS AND SHALL HAVE THE SAME LEGAL EFFECT. YOUR USE OF BINANCE SERVICES IS DEEMED YOUR ACCEPTANCE OF THE ABOVE SUPPLEMENTARY TERMS.</p>
                    <p class="tos__body--text">Grant Cred reserves the right to change or modify these Terms in its discretion at any time. Grant Cred will notify such changes by updating the terms on its website () and modifying the [Last revised] date displayed on this page.。ANY AND ALL MODIFICATIONS OR CHANGES TO THESE TERMS WILL BECOME EFFECTIVE UPON PUBLICATION ON THE WEBSITE OR RELEASE TO USERS. THEREFORE, YOUR CONTINUED USE OF BINANCE SERVICES IS DEEMED YOUR ACCEPTANCE OF THE MODIFIED AGREEMENT AND RULES. IF YOU DO NOT AGREE TO ANY CHANGES TO THESE TERMS, YOU MUST STOP USING BINANCE SERVICES IMMEDIATELY. YOU ARE RECOMMENDED TO FREQUENTLY REVIEW THESE TERMS TO ENSURE YOUR UNDERSTANDING OF THE TERMS AND CONDITIONS THAT APPLY TO YOUR ACCESS TO AND USE OF BINANCE SERVICES.</p>
                    <p class="tos__body--text">BY ACCESSING AND USING BINANCE SERVICES, YOU REPRESENT AND WARRANT THAT YOU HAVE NOT BEEN INCLUDED IN ANY TRADE EMBARGOES OR ECONOMIC SANCTIONS LIST (SUCH AS THE UNITED NATIONS SECURITY COUNCIL SANCTIONS LIST), THE LIST OF SPECIALLY DESIGNATED NATIONALS MAINTAINED BY OFAC (THE OFFICE OF FOREIGN ASSETS CONTROL OF THE U.S. DEPARTMENT OF THE TREASURY), OR THE DENIED PERSONS OR ENTITY LIST OF THE U.S. DEPARTMENT OF COMMERCE. BINANCE RESERVES THE RIGHT TO CHOOSE MARKETS AND JURISDICTIONS TO CONDUCT BUSINESS, AND MAY RESTRICT OR REFUSE, IN ITS DISCRETION, THE PROVISION OF BINANCE SERVICES IN CERTAIN COUNTRIES OR REGIONS.</p>
                    <p class="tos__body--text">As an important part of the Grant Cred Ecosystem, Grant Cred mainly serves as a global online platform for Digital Assets trading, and provides Users with a trading platform, financing services, technical services and other Digital Assets-related services. As further detailed in Article 3 below, Users must register and open an account with Grant Cred, and deposit Digital Assets into their account prior to trading. Users may, subject to the restrictions set forth in these Terms, apply for the withdrawal of Digital Assets.
                    Although Grant Cred has been committed to maintaining the accuracy of the information provided through Grant Cred Services, Grant Cred cannot and does not guarantee its accuracy, applicability, reliability, integrity, performance or appropriateness, nor shall Grant Cred be liable for any loss or damage that may be caused directly or indirectly by your use of these contents. The information about Grant Cred Services may change without notice, and the main purpose of providing such information is to help Users make independent decisions. Grant Cred does not provide investment or consulting advice of any kind, and is not responsible for the use or interpretation of information on Grant Cred or any other communication medium. All Users of Grant Cred Services must understand the risks involved in Digital Assets trading, and are recommended to exercise prudence and trade responsibly within their own capabilities.</p>
                    <p class="tos__body--text">All Users must apply for a Grant Cred Account at (https://accounts.cxefinanc.com) before using Grant Cred Services. When you register a Grant Cred Account, you must provide the information identified in this paragraph 3 or otherwise as requested by Grant Cred, and accept these Terms, the Privacy Policy, and other Grant Cred Platform Rules. Grant Cred may refuse, in its discretion, to open a Grant Cred Account for you. You agree to provide complete and accurate information when opening a Grant Cred Account, and agree to timely update any information you provide to Grant Cred to maintain the integrity and accuracy of the information. Each User (including natural person, business or legal entity) may maintain only one main account at any given time. However, Users can open one or more subaccounts under the main account with the consent of Grant Cred. For certain Grant Cred Services, you may be required to set up a specific account independent from your Grant Cred Account, based on the provisions of these Terms or the Supplementary Terms. The registration, use, protection and management of such trading accounts are equally governed by the provisions of this Section and Section VI, unless otherwise stated in these Terms or the Supplementary Terms.</p>
                    <p class="tos__body--text">By registering to use a Grant Cred Account, you represent and warrant that (i) as an individual, you are at least 18 or are of legal age to form a binding contract under applicable laws; (ii) as an individual, legal person, or other organization, you have full legal capacity and sufficient authorizations to enter into these Terms; (iii) you have not been previously suspended or removed from using Grant Cred Services; (iv) you do not currently have a Grant Cred Account; (v) you are neither a United States user, a Malaysia user, a Singapore-based user, or an Ontario (Canada)-based user; nor are you acting on behalf of a United States user, a Malaysia user, a Singapore-based user, or an Ontario (Canada)-based user. If you act as an employee or agent of a legal entity, and enter into these Terms on their behalf, you represent and warrant that you have all the necessary rights and authorizations to bind such legal entity; (vi) your use of Grant Cred Services will not violate any and all laws and regulations applicable to you, including but not limited to regulations on anti-money laundering, anti-corruption, and counter-terrorist financing.
                        Please note that some products and services may not be available in certain jurisdictions or regions or to certain users. Grant Cred reserves the right to change, modify or impose additional restrictions at its discretion at any time.</p>
                    <p class="tos__body--text">Your registration of an account with Grant Cred will be deemed your agreement to provide required personal information for identity verification. Such information will be used to verify Users’ identity, identify traces of money laundering, terrorist financing, fraud and other financial crimes through Grant Cred, or for other lawful purposes stated by Grant Cred. We will collect, use and share such information in accordance with our Privacy Policy. In addition to providing such information, you agree to allow us to keep a record of that information during the period for which your account is active and within five (5) years after your account is closed, in compliance with global industry standards on data storage. You also authorize us to conduct necessary investigations directly or through a third party to verify your identity or protect you and/or us from financial crimes, such as fraud. The information we require to verify your identity may include, but is not limited to, your name, email address, contact information, phone number, username, government-issued ID, date of birth, and other information collected during account registration. When providing the required information, you confirm it is true and accurate.AFTER REGISTRATION, YOU MUST ENSURE THAT THE INFORMATION IS TRUE, COMPLETE, AND TIMELY UPDATED WHEN CHANGED. IF THERE ARE ANY GROUNDS FOR BELIEVING THAT ANY OF THE INFORMATION YOU PROVIDED IS INCORRECT, FALSE, OUTDATED OR INCOMPLETE, BINANCE RESERVES THE RIGHT TO SEND YOU A NOTICE TO DEMAND CORRECTION, DIRECTLY DELETE THE RELEVANT INFORMATION, AND, AS THE CASE MAY BE, TERMINATE ALL OR PART OF BINANCE SERVICES WE PROVIDE FOR YOU. IF WE ARE UNABLE TO REACH YOU WITH THE CONTACT INFORMATION YOU PROVIDED, YOU SHALL BE FULLY LIABLE FOR ANY LOSS OR EXPENSE CAUSED TO BINANCE DURING YOUR USE OF BINANCE SERVICES. YOU HEREBY ACKNOWLEDGE AND AGREE THAT YOU HAVE THE OBLIGATION TO UPDATE ALL THE INFORMATION IF THERE IS ANY CHANGE.BY REGISTERING AN ACCOUNT, YOU HEREBY AUTHORIZE BINANCE TO CONDUCT INVESTIGATIONS THAT BINANCE CONSIDERS NECESSARY, EITHER DIRECTLY OR THROUGH A THIRD PARTY, TO VERIFY YOUR IDENTITY OR PROTECT YOU, OTHER USERS AND/OR BINANCE FROM FRAUD OR OTHER FINANCIAL CRIMES, AND TO TAKE NECESSARY ACTIONS BASED ON THE RESULTS OF SUCH INVESTIGATIONS. YOU ALSO ACKNOWLEDGE AND AGREE THAT YOUR PERSONAL INFORMATION MAY BE DISCLOSED TO CREDIT BUREAUS AND AGENCIES FOR FRAUD PREVENTION OR FINANCIAL CRIME PREVENTION, WHICH MAY RESPOND TO OUR INVESTIGATIONS IN FULL.</p>
                    <p class="tos__body--text">The Grant Cred Account can only be used by the account registrant. Grant Cred reserves the right to suspend, freeze or cancel the use of Grant Cred Accounts by persons other than account registrant. If you suspect or become aware of any unauthorized use of your username and password, you should notify Grant Cred immediately. Grant Cred assumes no liability for any loss or damage arising from the use of Grant Cred Account by you or any third party with or without your authorization.</p>
                    <p class="tos__body--text">Provided that you constantly comply with the express terms and conditions stated in these Terms, Grant Cred grants you a revocable, limited, royalty-free, non-exclusive, non-transferable, and non-sublicensable license to access and use Grant Cred Services through your computer or Internet compatible devices for your personal/internal purposes. You are prohibited to use Grant Cred Services for resale or commercial purposes, including transactions on behalf of other persons or entities. All the above actions are expressly prohibited and constitute a material violation of these Terms. The content layout, format, function and access rights regarding Grant Cred Services should be stipulated in the discretion of Grant Cred. Grant Cred reserves all rights not expressly granted in these Terms. Therefore, you are hereby prohibited from using Grant Cred Services in any way not expressly authorized by these Terms.</p>
                    <p class="tos__body--text">These Terms only grant a limited license to access and use Grant Cred Services. Therefore, you hereby agree that when you use Grant Cred Services, Grant Cred does not transfer Grant Cred Services or the ownership or intellectual property rights of any Grant Cred intellectual property to you or anyone else. All the text, graphics, user interfaces, visual interface, photos, sounds, process flow diagrams, computer code (including html code), programs, software, products, information and documents, as well as the design, structure, selection, coordination, expression, look and feel, and layout of any content included in the services or provided through Grant Cred Services, are exclusively owned, controlled and/or licensed by Grant Cred Operators or its members, parent companies, licensors or affiliates.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            moveToRoute(route) {
                this.$router.push(route)
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

    .tos {
        color: #fff;

        &__header {
            padding: #{scaleValue(20)} #{scaleValue(90)};
            border-bottom: 1px solid rgba(255, 255, 255, .2);
            color: #fff;
            font-size: #{scaleValue(20)};
            display: flex;
            align-items: center;
            cursor: pointer;

            display: flex;
            justify-content: space-between;

            @media only screen and (max-width: 414px) { 
                font-size: #{scaleValue(90)};
                padding: #{scaleValue(70)} #{scaleValue(90)};
            }
        }

        &__headerright {

            & button {
                border: none;
                padding: #{scaleValue(17)} #{scaleValue(20)};
                font-size: #{scaleValue(15)};
                border-radius: 3px;
                text-transform: uppercase;
                cursor: pointer;

                @media only screen and (max-width: 414px) { 
                    padding: #{scaleValue(50)} #{scaleValue(100)};
                    font-size: #{scaleValue(48)};
                }
            }

            &--firstbtn { 
                color: #fff;
                background: transparent;
            }

            &--secondbtn {
                background: #474DFF;
                color: #fff;
                font-weight: 700;
            }
        }

        &__content {
            padding: #{scaleValue(50)} #{scaleValue(200)};

            @media only screen and (max-width: 414px) { 
               padding: #{scaleValue(50)} #{scaleValue(100)};
               margin-top: #{scaleValue(100)};
            }

            & h1 {
                position: relative;
                color: rgb(255, 255, 255);
                font-weight: 500;
                font-size: #{scaleValue(26)};
                letter-spacing: #{scaleValue(1)};
                width: fit-content;
                text-align: center;
                margin-bottom: #{scaleValue(16)};

                @media only screen and (max-width: 414px) { 
                    font-size: #{scaleValue(80)};
                    font-weight: 500;
                    margin-bottom: #{scaleValue(80)}; 
                } 
            }

            &--revised {
                opacity: .6;
            }
        }

        &__body {
            margin-top: #{scaleValue(26)};

            & h2 {
                position: relative;
                color: rgb(255, 255, 255);
                font-weight: 500;
                font-size: #{scaleValue(18)};
                letter-spacing: #{scaleValue(1)};
                width: fit-content;
                text-align: center;
                margin-bottom: #{scaleValue(16)};

                @media only screen and (max-width: 414px) { 
                    font-size: #{scaleValue(80)};
                    font-weight: 500;
                    margin-bottom: #{scaleValue(80)}; 
                } 
            }

            &--text {
                font-size: #{scaleValue(14)};
                line-height: #{scaleValue(20)};
                margin-bottom: #{scaleValue(20)}; 

                @media only screen and (max-width: 414px) { 
                    font-size: #{scaleValue(60)};
                    line-height: #{scaleValue(100)};
                }
            }
        }
    }
</style>