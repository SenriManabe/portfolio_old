import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4cccf45b = () => interopDefault(import('../pages/about/index.vue' /* webpackChunkName: "pages/about/index" */))
const _69483f49 = () => interopDefault(import('../pages/timeline/index.vue' /* webpackChunkName: "pages/timeline/index" */))
const _679f3e10 = () => interopDefault(import('../pages/works/index.vue' /* webpackChunkName: "pages/works/index" */))
const _0edac867 = () => interopDefault(import('../pages/works/car-share/index.vue' /* webpackChunkName: "pages/works/car-share/index" */))
const _7e0fc236 = () => interopDefault(import('../pages/works/darkforce/index.vue' /* webpackChunkName: "pages/works/darkforce/index" */))
const _3377e33e = () => interopDefault(import('../pages/works/hakobiya/index.vue' /* webpackChunkName: "pages/works/hakobiya/index" */))
const _7d36f4ed = () => interopDefault(import('../pages/works/hakobiya-logo/index.vue' /* webpackChunkName: "pages/works/hakobiya-logo/index" */))
const _6b72b8b7 = () => interopDefault(import('../pages/works/lunchiru/index.vue' /* webpackChunkName: "pages/works/lunchiru/index" */))
const _f494eac6 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _4cccf45b,
    name: "about"
  }, {
    path: "/timeline",
    component: _69483f49,
    name: "timeline"
  }, {
    path: "/works",
    component: _679f3e10,
    name: "works"
  }, {
    path: "/works/car-share",
    component: _0edac867,
    name: "works-car-share"
  }, {
    path: "/works/darkforce",
    component: _7e0fc236,
    name: "works-darkforce"
  }, {
    path: "/works/hakobiya",
    component: _3377e33e,
    name: "works-hakobiya"
  }, {
    path: "/works/hakobiya-logo",
    component: _7d36f4ed,
    name: "works-hakobiya-logo"
  }, {
    path: "/works/lunchiru",
    component: _6b72b8b7,
    name: "works-lunchiru"
  }, {
    path: "/",
    component: _f494eac6,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
