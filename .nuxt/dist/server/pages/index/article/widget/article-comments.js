exports.ids = [4];
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

/***/ })

};;
//# sourceMappingURL=article-comments.js.map