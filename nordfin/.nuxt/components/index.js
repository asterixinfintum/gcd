export const Accounts = () => import('../../components/Accounts.vue' /* webpackChunkName: "components/accounts" */).then(c => wrapFunctional(c.default || c))
export const AddAssetToUser = () => import('../../components/AddAssetToUser.vue' /* webpackChunkName: "components/add-asset-to-user" */).then(c => wrapFunctional(c.default || c))
export const Balances = () => import('../../components/Balances.vue' /* webpackChunkName: "components/balances" */).then(c => wrapFunctional(c.default || c))
export const BuySell = () => import('../../components/BuySell.vue' /* webpackChunkName: "components/buy-sell" */).then(c => wrapFunctional(c.default || c))
export const Card = () => import('../../components/Card.vue' /* webpackChunkName: "components/card" */).then(c => wrapFunctional(c.default || c))
export const CoinData = () => import('../../components/CoinData.vue' /* webpackChunkName: "components/coin-data" */).then(c => wrapFunctional(c.default || c))
export const Dashboard = () => import('../../components/Dashboard.vue' /* webpackChunkName: "components/dashboard" */).then(c => wrapFunctional(c.default || c))
export const DashboardSideMenu = () => import('../../components/DashboardSideMenu.vue' /* webpackChunkName: "components/dashboard-side-menu" */).then(c => wrapFunctional(c.default || c))
export const DonutChart = () => import('../../components/DonutChart.vue' /* webpackChunkName: "components/donut-chart" */).then(c => wrapFunctional(c.default || c))
export const DropDown = () => import('../../components/DropDown.vue' /* webpackChunkName: "components/drop-down" */).then(c => wrapFunctional(c.default || c))
export const FlashCard = () => import('../../components/FlashCard.vue' /* webpackChunkName: "components/flash-card" */).then(c => wrapFunctional(c.default || c))
export const Footer = () => import('../../components/Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c))
export const GraphArea = () => import('../../components/GraphArea.vue' /* webpackChunkName: "components/graph-area" */).then(c => wrapFunctional(c.default || c))
export const Header = () => import('../../components/Header.vue' /* webpackChunkName: "components/header" */).then(c => wrapFunctional(c.default || c))
export const HeaderBox = () => import('../../components/HeaderBox.vue' /* webpackChunkName: "components/header-box" */).then(c => wrapFunctional(c.default || c))
export const InputDuplicator = () => import('../../components/InputDuplicator.vue' /* webpackChunkName: "components/input-duplicator" */).then(c => wrapFunctional(c.default || c))
export const Jumbotron = () => import('../../components/Jumbotron.vue' /* webpackChunkName: "components/jumbotron" */).then(c => wrapFunctional(c.default || c))
export const KYC = () => import('../../components/KYC.vue' /* webpackChunkName: "components/k-y-c" */).then(c => wrapFunctional(c.default || c))
export const KycUploader = () => import('../../components/KycUploader.vue' /* webpackChunkName: "components/kyc-uploader" */).then(c => wrapFunctional(c.default || c))
export const Photo = () => import('../../components/Photo.vue' /* webpackChunkName: "components/photo" */).then(c => wrapFunctional(c.default || c))
export const Popup = () => import('../../components/Popup.vue' /* webpackChunkName: "components/popup" */).then(c => wrapFunctional(c.default || c))
export const Profile = () => import('../../components/Profile.vue' /* webpackChunkName: "components/profile" */).then(c => wrapFunctional(c.default || c))
export const Record = () => import('../../components/Record.vue' /* webpackChunkName: "components/record" */).then(c => wrapFunctional(c.default || c))
export const SectionThree = () => import('../../components/SectionThree.vue' /* webpackChunkName: "components/section-three" */).then(c => wrapFunctional(c.default || c))
export const SectionTwo = () => import('../../components/SectionTwo.vue' /* webpackChunkName: "components/section-two" */).then(c => wrapFunctional(c.default || c))
export const Sidenav = () => import('../../components/Sidenav.vue' /* webpackChunkName: "components/sidenav" */).then(c => wrapFunctional(c.default || c))
export const StockBuy = () => import('../../components/StockBuy.vue' /* webpackChunkName: "components/stock-buy" */).then(c => wrapFunctional(c.default || c))
export const Strategy = () => import('../../components/Strategy.vue' /* webpackChunkName: "components/strategy" */).then(c => wrapFunctional(c.default || c))
export const Transactions = () => import('../../components/Transactions.vue' /* webpackChunkName: "components/transactions" */).then(c => wrapFunctional(c.default || c))
export const Tutorial = () => import('../../components/Tutorial.vue' /* webpackChunkName: "components/tutorial" */).then(c => wrapFunctional(c.default || c))
export const UserHeader = () => import('../../components/UserHeader.vue' /* webpackChunkName: "components/user-header" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
