import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _e1e185fa = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _13b7fe1f = () => interopDefault(import('..\\pages\\index\\index.vue' /* webpackChunkName: "pages/index/index" */))
const _310d0612 = () => interopDefault(import('..\\pages\\index\\editor\\index.vue' /* webpackChunkName: "pages/index/editor/index" */))
const _4540bd94 = () => interopDefault(import('..\\pages\\index\\login.vue' /* webpackChunkName: "pages/index/login" */))
const _133a3748 = () => interopDefault(import('..\\pages\\index\\settings\\index.vue' /* webpackChunkName: "pages/index/settings/index" */))
const _a6044e1c = () => interopDefault(import('..\\pages\\index\\article\\widget\\article-comments.vue' /* webpackChunkName: "pages/index/article/widget/article-comments" */))
const _38793483 = () => interopDefault(import('..\\pages\\index\\article\\widget\\article-mate.vue' /* webpackChunkName: "pages/index/article/widget/article-mate" */))
const _ba4efa52 = () => interopDefault(import('..\\pages\\index\\article\\_slug.vue' /* webpackChunkName: "pages/index/article/_slug" */))
const _088c506f = () => interopDefault(import('..\\pages\\index\\profile\\_username.vue' /* webpackChunkName: "pages/index/profile/_username" */))
const _52d4ed9e = () => interopDefault(import('..\\pages\\index\\login' /* webpackChunkName: "" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _e1e185fa,
    children: [{
      path: "",
      component: _13b7fe1f,
      name: "index"
    }, {
      path: "editor",
      component: _310d0612,
      name: "index-editor"
    }, {
      path: "login",
      component: _4540bd94,
      name: "index-login"
    }, {
      path: "settings",
      component: _133a3748,
      name: "index-settings"
    }, {
      path: "article/widget/article-comments",
      component: _a6044e1c,
      name: "index-article-widget-article-comments"
    }, {
      path: "article/widget/article-mate",
      component: _38793483,
      name: "index-article-widget-article-mate"
    }, {
      path: "article/:slug?",
      component: _ba4efa52,
      name: "index-article-slug"
    }, {
      path: "profile/:username?",
      component: _088c506f,
      name: "index-profile-username"
    }, {
      path: "/register",
      component: _52d4ed9e,
      name: "register"
    }]
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
