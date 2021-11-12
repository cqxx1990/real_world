exports.ids = [5];
exports.modules = {

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActionLocker; });
class ActionLocker {
  constructor(element) {
    this.element = element;
    this.lock();
  }

  lock() {
    this.element.disabled = true;
  }

  unlock() {
    this.element.disabled = false;
  }

}

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return getFeedArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return getTags; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return addFav; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return delFav; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return articleDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return getComments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return addComments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return delComments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addArticle; });
/* harmony import */ var _plugins_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);

/**
 * 
 * @param {tag?,auther?,favorited?,limit?,offset?} params 
 * @returns 
 */

const getArticle = params => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: '/api/articles',
    params
  });
};
const getFeedArticle = params => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: '/api/articles/feed',
    params
  }).catch(e => console.dir(e));
};
const getTags = () => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: '/api/tags'
  });
};
const addFav = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'POST',
    url: `/api/articles/${slug}/favorite`
  });
};
const delFav = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'DELETE',
    url: `/api/articles/${slug}/favorite`
  });
};
const articleDetail = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: `/api/articles/${slug}`
  });
};
const getComments = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: `/api/articles/${slug}/comments`
  });
};
const addComments = (slug, body) => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'POST',
    url: `/api/articles/${slug}/comments`,
    data: {
      comment: {
        body
      }
    }
  });
};
const delComments = (slug, commentid) => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'DELETE',
    url: `/api/articles/${slug}/comments/${commentid}`
  });
};
const addArticle = article => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'POST',
    url: `/api/articles`,
    data: {
      article
    }
  });
};

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return followUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return updateUser; });
/* harmony import */ var _plugins_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);

async function login(data) {
  return await Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: "POST",
    url: '/api/users/login',
    data
  });
}
async function register(data) {
  return await Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: "POST",
    url: '/api/users',
    data
  });
}
async function followUser(username, isFollowed) {
  return await Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: isFollowed ? "POST" : "DELETE",
    url: `/api/profiles/${username}/follow`
  });
}
async function getProfile() {
  return await Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: "GET",
    url: '/api/user'
  });
}
async function updateUser(user) {
  return await Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: "PUT",
    url: '/api/user',
    data: {
      user
    }
  });
}

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/index/article/widget/article-mate.vue?vue&type=template&id=6fe708ca&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"article-meta"},[_c('nuxt-link',{attrs:{"to":'/profile/' + _vm.article.author.username}},[_c('img',{attrs:{"src":_vm.article.author.image}})]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"info\">","</div>",[_c('nuxt-link',{attrs:{"to":'/profile/' + _vm.article.author.username}},[_vm._v("\n      "+_vm._s(_vm.article.author.username)+"\n    ")]),_vm._ssrNode(" <span class=\"date\">"+_vm._ssrEscape(_vm._s(_vm._f("datetime")(_vm.article.createdAt,"MMM,DD")))+"</span>")],2),_vm._ssrNode(" <button"+(_vm._ssrClass("btn btn-sm",_vm.article.author.following?'btn-outline-primary':'btn-outline-secondary'))+"><i class=\"ion-plus-round\"></i>"+_vm._ssrEscape("\n      "+_vm._s(_vm.article.author.following?'Unfollow':'Follow')+" Eric Simons\n  ")+"</button>\n   \n  <button"+(_vm._ssrClass("btn btn-sm",_vm.article.favorited?'btn-outline-primary':'btn-outline-secondary'))+"><i class=\"ion-heart\"></i>"+_vm._ssrEscape("\n      "+_vm._s(_vm.article.favorited?'Unfavorite':'Favorite')+" Post\n    ")+"<span class=\"counter\">"+_vm._ssrEscape("("+_vm._s(_vm.article.favoritesCount)+")")+"</span></button>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index/article/widget/article-mate.vue?vue&type=template&id=6fe708ca&

// EXTERNAL MODULE: ./api/user.js
var user = __webpack_require__(29);

// EXTERNAL MODULE: ./api/article.js
var api_article = __webpack_require__(28);

// EXTERNAL MODULE: ./component/ActionLocker.js
var ActionLocker = __webpack_require__(27);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index/article/widget/article-mate.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var article_matevue_type_script_lang_js_ = ({
  props: ["article"],
  methods: {
    async onFollowUser(e, author) {
      let lock = new ActionLocker["a" /* default */](e.currentTarget);

      try {
        const {
          data
        } = await Object(user["a" /* followUser */])(author.username, author.following);
        author.following = !author.following;
      } finally {
        lock.unlock();
      }
    },

    async onFav(e, article) {
      let lock = new ActionLocker["a" /* default */](e.currentTarget);

      try {
        if (!article.favorited) {
          await Object(api_article["c" /* addFav */])(article.slug);
          ++article.favoritesCount;
        } else {
          await Object(api_article["f" /* delFav */])(article.slug);
          --article.favoritesCount;
        }

        article.favorited = !article.favorited;
      } finally {
        lock.unlock();
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/index/article/widget/article-mate.vue?vue&type=script&lang=js&
 /* harmony default export */ var widget_article_matevue_type_script_lang_js_ = (article_matevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/index/article/widget/article-mate.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  widget_article_matevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "b818f434"
  
)

/* harmony default export */ var article_mate = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=article-mate.js.map