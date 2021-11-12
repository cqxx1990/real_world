exports.ids = [3,4,5];
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

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/index/article/widget/article-comments.vue?vue&type=template&id=eb47e5a4&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-xs-12 col-md-8 offset-md-2"},[_vm._ssrNode("<form class=\"card comment-form\"><div class=\"card-block\"><textarea placeholder=\"Write a comment...\" rows=\"3\" class=\"form-control\">"+_vm._ssrEscape(_vm._s(_vm.myComment))+"</textarea></div> <div class=\"card-footer\"><img"+(_vm._ssrAttr("src",_vm.user.image))+" class=\"comment-author-img\"> <button class=\"btn btn-sm btn-primary\">Post Comment</button></div></form> "),_vm._l((_vm.list),function(item){return _vm._ssrNode("<div class=\"card\">","</div>",[_vm._ssrNode("<div class=\"card-block\"><p class=\"card-text\">"+_vm._ssrEscape("\n       "+_vm._s(item.body)+"\n      ")+"</p></div> "),_vm._ssrNode("<div class=\"card-footer\">","</div>",[_c('nuxt-link',{attrs:{"to":'/profile/'+item.author.username}},[_c('img',{staticClass:"comment-author-img",attrs:{"src":item.author.image}})]),_vm._ssrNode("\n       \n      "),_c('nuxt-link',{attrs:{"to":'/profile/'+item.author.username}},[_vm._v("\n        "+_vm._s(item.author.username)+"\n      ")]),_vm._ssrNode(" <span class=\"date-posted\">"+_vm._ssrEscape(_vm._s(_vm._f("datetime")(item.createAt,'MMM DD, YYYY')))+"</span> "+((item.author.username === _vm.user.username)?("<span class=\"mod-options\"><i class=\"ion-edit\"></i> <i class=\"ion-trash-a\"></i></span>"):"<!---->"))],2)],2)})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index/article/widget/article-comments.vue?vue&type=template&id=eb47e5a4&

// EXTERNAL MODULE: ./api/article.js
var article = __webpack_require__(28);

// EXTERNAL MODULE: ./component/ActionLocker.js
var ActionLocker = __webpack_require__(27);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index/article/widget/article-comments.vue?vue&type=script&lang=js&
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



/* harmony default export */ var article_commentsvue_type_script_lang_js_ = ({
  props: ['slug'],

  data() {
    return {
      list: [],
      myComment: ""
    };
  },

  computed: { ...Object(external_vuex_["mapState"])(['user'])
  },

  async mounted() {
    const {
      data
    } = await Object(article["h" /* getComments */])(this.slug);
    this.list = data.comments;
  },

  methods: {
    async onPostComment(e) {
      let lock = new ActionLocker["a" /* default */](e.currentTarget);

      try {
        if (!this.myComment) {
          console.log(this);
          return this.$message('请输入评论内容');
        }

        const {
          data
        } = await Object(article["b" /* addComments */])(this.slug, this.myComment);
        this.list.unshift(data.comment);
        this.myComment = "";
      } finally {
        lock.unlock();
      }
    },

    async delComment(e, item) {
      let lock = new ActionLocker["a" /* default */](e.currentTarget);

      try {
        const {
          data
        } = await Object(article["e" /* delComments */])(this.slug, item.id);
        let index = this.list.indexOf(item);
        this.list.splice(index, 1);
      } finally {
        lock.unlock();
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/index/article/widget/article-comments.vue?vue&type=script&lang=js&
 /* harmony default export */ var widget_article_commentsvue_type_script_lang_js_ = (article_commentsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/index/article/widget/article-comments.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  widget_article_commentsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "465ac0d5"
  
)

/* harmony default export */ var article_comments = __webpack_exports__["default"] = (component.exports);

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

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/index/article/_slug.vue?vue&type=template&id=7f689dd1&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"article-page"},[_vm._ssrNode("<div class=\"banner\">","</div>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<h1>"+_vm._ssrEscape(_vm._s(_vm.article.title))+"</h1> "),_c('ArticleMeta',{attrs:{"article":_vm.article}})],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container page\">","</div>",[_vm._ssrNode("<div class=\"row article-content\"><div class=\"col-md-12\">"+(_vm._s(_vm.article.body))+"</div></div> <hr> "),_vm._ssrNode("<div class=\"article-actions\">","</div>",[_c('ArticleMeta',{attrs:{"article":_vm.article}})],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"row\">","</div>",[_c('ArticleComments',{attrs:{"slug":_vm.article.slug}})],1)],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index/article/_slug.vue?vue&type=template&id=7f689dd1&

// EXTERNAL MODULE: ./api/article.js
var article = __webpack_require__(28);

// EXTERNAL MODULE: external "markdown-it"
var external_markdown_it_ = __webpack_require__(26);
var external_markdown_it_default = /*#__PURE__*/__webpack_require__.n(external_markdown_it_);

// EXTERNAL MODULE: ./pages/index/article/widget/article-mate.vue + 4 modules
var article_mate = __webpack_require__(31);

// EXTERNAL MODULE: ./pages/index/article/widget/article-comments.vue + 4 modules
var article_comments = __webpack_require__(30);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index/article/_slug.vue?vue&type=script&lang=js&
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
//
//




/* harmony default export */ var _slugvue_type_script_lang_js_ = ({
  components: {
    ArticleMeta: article_mate["default"],
    ArticleComments: article_comments["default"]
  },

  async asyncData(ctx) {
    const {
      data
    } = await Object(article["d" /* articleDetail */])(ctx.params.slug);
    data.article.body = new external_markdown_it_default.a().render(data.article.body);
    return data;
  },

  head() {
    return {
      title: `${this.article.title} - REAL-WORLD`,
      meta: [{
        hid: 'description',
        //指定meta标签的id，可以在子组件中覆盖父组件的meta
        name: 'description',
        content: `${this.article.description}`
      }]
    };
  }

});
// CONCATENATED MODULE: ./pages/index/article/_slug.vue?vue&type=script&lang=js&
 /* harmony default export */ var article_slugvue_type_script_lang_js_ = (_slugvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/index/article/_slug.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  article_slugvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "3b860848"
  
)

/* harmony default export */ var _slug = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_slug.js.map