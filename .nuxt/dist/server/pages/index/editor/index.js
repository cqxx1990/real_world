exports.ids = [6];
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

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/index/editor/index.vue?vue&type=template&id=03f3b62c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"editor-page"},[_vm._ssrNode("<div class=\"container page\"><div class=\"row\"><div class=\"col-md-10 offset-md-1 col-xs-12\"><form><fieldset><fieldset class=\"form-group\"><input required=\"required\" type=\"text\" placeholder=\"Article Title\""+(_vm._ssrAttr("value",(_vm.form.title)))+" class=\"form-control form-control-lg\"></fieldset> <fieldset class=\"form-group\"><input required=\"required\" type=\"text\" placeholder=\"What's this article about?\""+(_vm._ssrAttr("value",(_vm.form.description)))+" class=\"form-control\"></fieldset> <fieldset class=\"form-group\"><textarea required=\"required\" rows=\"8\" placeholder=\"Write your article (in markdown)\" class=\"form-control\">"+_vm._ssrEscape(_vm._s(_vm.form.body))+"</textarea></fieldset> <fieldset class=\"form-group\"><input type=\"text\" placeholder=\"Enter tags and split by ,\""+(_vm._ssrAttr("value",(_vm.tagstr)))+" class=\"form-control\"><div class=\"tag-list\"></div></fieldset> <button type=\"submit\" class=\"btn btn-lg pull-xs-right btn-primary\">\n                Publish Article\n            </button></fieldset></form></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index/editor/index.vue?vue&type=template&id=03f3b62c&

// EXTERNAL MODULE: ./api/article.js
var article = __webpack_require__(28);

// EXTERNAL MODULE: ./component/ActionLocker.js
var ActionLocker = __webpack_require__(27);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index/editor/index.vue?vue&type=script&lang=js&
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


/* harmony default export */ var editorvue_type_script_lang_js_ = ({
  middleware: ['auth'],

  data() {
    return {
      form: {
        title: "",
        description: "",
        body: "",
        tagList: []
      },
      tagstr: ""
    };
  },

  methods: {
    async onSubmitArticle() {
      let lock = new ActionLocker["a" /* default */](this.$refs.submitBtn);

      try {
        this.form.tagList = this.tagstr.split(',');
        const {
          data
        } = await Object(article["a" /* addArticle */])(this.form);
        this.$message('发布成功');
        this.$router.push('/');
      } finally {
        lock.unlock();
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/index/editor/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var index_editorvue_type_script_lang_js_ = (editorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/index/editor/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  index_editorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "3c587eca"
  
)

/* harmony default export */ var editor = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map