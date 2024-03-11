import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _084e4776 = () => interopDefault(import('../pages/activities.vue' /* webpackChunkName: "pages/activities" */))
const _2e9be4aa = () => interopDefault(import('../pages/safety.vue' /* webpackChunkName: "pages/safety" */))
const _5d04e0f2 = () => interopDefault(import('../pages/travel.vue' /* webpackChunkName: "pages/travel" */))
const _c01c63ac = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/activities",
    component: _084e4776,
    name: "activities"
  }, {
    path: "/safety",
    component: _2e9be4aa,
    name: "safety"
  }, {
    path: "/travel",
    component: _5d04e0f2,
    name: "travel"
  }, {
    path: "/",
    component: _c01c63ac,
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
