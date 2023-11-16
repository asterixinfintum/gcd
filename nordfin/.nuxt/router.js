import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3767327e = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _2046107a = () => interopDefault(import('../pages/admin/index.vue' /* webpackChunkName: "pages/admin/index" */))
const _3a51c63c = () => interopDefault(import('../pages/assets.vue' /* webpackChunkName: "pages/assets" */))
const _063d415e = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _4eff38ba = () => interopDefault(import('../pages/defi.vue' /* webpackChunkName: "pages/defi" */))
const _3ddcb0e7 = () => interopDefault(import('../pages/kycupload.vue' /* webpackChunkName: "pages/kycupload" */))
const _7cba42e6 = () => interopDefault(import('../pages/managedaccount.vue' /* webpackChunkName: "pages/managedaccount" */))
const _a44b67be = () => interopDefault(import('../pages/marginborrows.vue' /* webpackChunkName: "pages/marginborrows" */))
const _b1c2ddd4 = () => interopDefault(import('../pages/marginlending.vue' /* webpackChunkName: "pages/marginlending" */))
const _0c808b68 = () => interopDefault(import('../pages/markets.vue' /* webpackChunkName: "pages/markets" */))
const _082a93d0 = () => interopDefault(import('../pages/overview.vue' /* webpackChunkName: "pages/overview" */))
const _778c223a = () => interopDefault(import('../pages/password.vue' /* webpackChunkName: "pages/password" */))
const _0508d85a = () => interopDefault(import('../pages/profile.vue' /* webpackChunkName: "pages/profile" */))
const _75991fc2 = () => interopDefault(import('../pages/settings.vue' /* webpackChunkName: "pages/settings" */))
const _2fd2f181 = () => interopDefault(import('../pages/signin.vue' /* webpackChunkName: "pages/signin" */))
const _446947f7 = () => interopDefault(import('../pages/signup.vue' /* webpackChunkName: "pages/signup" */))
const _e7cd6900 = () => interopDefault(import('../pages/support.vue' /* webpackChunkName: "pages/support" */))
const _1478d509 = () => interopDefault(import('../pages/tos.vue' /* webpackChunkName: "pages/tos" */))
const _97bd8656 = () => interopDefault(import('../pages/trade.vue' /* webpackChunkName: "pages/trade" */))
const _6acc7d56 = () => interopDefault(import('../pages/transactionhistory.vue' /* webpackChunkName: "pages/transactionhistory" */))
const _540810ec = () => interopDefault(import('../pages/transfer.vue' /* webpackChunkName: "pages/transfer" */))
const _1aebe9cc = () => interopDefault(import('../pages/userdashboard.vue' /* webpackChunkName: "pages/userdashboard" */))
const _14205b50 = () => interopDefault(import('../pages/wallet.vue' /* webpackChunkName: "pages/wallet" */))
const _5b09dbc0 = () => interopDefault(import('../pages/wallet_old.vue' /* webpackChunkName: "pages/wallet_old" */))
const _0bb50ea5 = () => interopDefault(import('../pages/admin/createasset.vue' /* webpackChunkName: "pages/admin/createasset" */))
const _1545b405 = () => interopDefault(import('../pages/admin/dashboard.vue' /* webpackChunkName: "pages/admin/dashboard" */))
const _6b82e397 = () => interopDefault(import('../pages/admin/editasset.vue' /* webpackChunkName: "pages/admin/editasset" */))
const _5c705c6a = () => interopDefault(import('../pages/admin/user.vue' /* webpackChunkName: "pages/admin/user" */))
const _50b63747 = () => interopDefault(import('../pages/admin/viewassets.vue' /* webpackChunkName: "pages/admin/viewassets" */))
const _eea0b982 = () => interopDefault(import('../pages/zone/jkhgfhjkjhgvhdjgvfvh.vue' /* webpackChunkName: "pages/zone/jkhgfhjkjhgvhdjgvfvh" */))
const _571f0d43 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _3767327e,
    name: "about"
  }, {
    path: "/admin",
    component: _2046107a,
    name: "admin"
  }, {
    path: "/assets",
    component: _3a51c63c,
    name: "assets"
  }, {
    path: "/contact",
    component: _063d415e,
    name: "contact"
  }, {
    path: "/defi",
    component: _4eff38ba,
    name: "defi"
  }, {
    path: "/kycupload",
    component: _3ddcb0e7,
    name: "kycupload"
  }, {
    path: "/managedaccount",
    component: _7cba42e6,
    name: "managedaccount"
  }, {
    path: "/marginborrows",
    component: _a44b67be,
    name: "marginborrows"
  }, {
    path: "/marginlending",
    component: _b1c2ddd4,
    name: "marginlending"
  }, {
    path: "/markets",
    component: _0c808b68,
    name: "markets"
  }, {
    path: "/overview",
    component: _082a93d0,
    name: "overview"
  }, {
    path: "/password",
    component: _778c223a,
    name: "password"
  }, {
    path: "/profile",
    component: _0508d85a,
    name: "profile"
  }, {
    path: "/settings",
    component: _75991fc2,
    name: "settings"
  }, {
    path: "/signin",
    component: _2fd2f181,
    name: "signin"
  }, {
    path: "/signup",
    component: _446947f7,
    name: "signup"
  }, {
    path: "/support",
    component: _e7cd6900,
    name: "support"
  }, {
    path: "/tos",
    component: _1478d509,
    name: "tos"
  }, {
    path: "/trade",
    component: _97bd8656,
    name: "trade"
  }, {
    path: "/transactionhistory",
    component: _6acc7d56,
    name: "transactionhistory"
  }, {
    path: "/transfer",
    component: _540810ec,
    name: "transfer"
  }, {
    path: "/userdashboard",
    component: _1aebe9cc,
    name: "userdashboard"
  }, {
    path: "/wallet",
    component: _14205b50,
    name: "wallet"
  }, {
    path: "/wallet_old",
    component: _5b09dbc0,
    name: "wallet_old"
  }, {
    path: "/admin/createasset",
    component: _0bb50ea5,
    name: "admin-createasset"
  }, {
    path: "/admin/dashboard",
    component: _1545b405,
    name: "admin-dashboard"
  }, {
    path: "/admin/editasset",
    component: _6b82e397,
    name: "admin-editasset"
  }, {
    path: "/admin/user",
    component: _5c705c6a,
    name: "admin-user"
  }, {
    path: "/admin/viewassets",
    component: _50b63747,
    name: "admin-viewassets"
  }, {
    path: "/zone/jkhgfhjkjhgvhdjgvfvh",
    component: _eea0b982,
    name: "zone-jkhgfhjkjhgvhdjgvfvh"
  }, {
    path: "/",
    component: _571f0d43,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
