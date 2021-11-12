exports.ids = [9];
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

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/index/settings/index.vue?vue&type=template&id=6a50350d&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"settings-page"},[_vm._ssrNode("<div class=\"container page\"><div class=\"row\"><div class=\"col-md-6 offset-md-3 col-xs-12\"><h1 class=\"text-xs-center\">Your Settings</h1> <form><fieldset><fieldset class=\"form-group\"><input required=\"required\" type=\"text\" placeholder=\"URL of profile picture\""+(_vm._ssrAttr("value",(_vm.form.image)))+" class=\"form-control\"></fieldset> <fieldset class=\"form-group\"><input type=\"text\" placeholder=\"Your Name\""+(_vm._ssrAttr("value",(_vm.form.username)))+" class=\"form-control form-control-lg\"></fieldset> <fieldset class=\"form-group\"><textarea rows=\"8\" placeholder=\"Short bio about you\" class=\"form-control form-control-lg\">"+_vm._ssrEscape(_vm._s(_vm.form.bio))+"</textarea></fieldset> <fieldset class=\"form-group\"><input required=\"required\" type=\"text\" placeholder=\"Email\""+(_vm._ssrAttr("value",(_vm.form.email)))+" class=\"form-control form-control-lg\"></fieldset> <fieldset class=\"form-group\"><input required=\"required\" type=\"password\" placeholder=\"Password\""+(_vm._ssrAttr("value",(_vm.form.password)))+" class=\"form-control form-control-lg\"></fieldset> <button class=\"btn btn-lg btn-primary pull-xs-right\">\n                Update Settings\n              </button></fieldset></form></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index/settings/index.vue?vue&type=template&id=6a50350d&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// EXTERNAL MODULE: ./api/user.js
var user = __webpack_require__(29);

// EXTERNAL MODULE: ./component/ActionLocker.js
var ActionLocker = __webpack_require__(27);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index/settings/index.vue?vue&type=script&lang=js&
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



/* harmony default export */ var settingsvue_type_script_lang_js_ = ({
  middleware: "auth",

  data() {
    return {
      form: {
        email: "",
        bio: "",
        image: "",
        username: "",
        password: ""
      }
    };
  },

  computed: { ...Object(external_vuex_["mapState"])(['user'])
  },

  async mounted() {
    const {
      data
    } = await Object(user["b" /* getProfile */])();
    this.form = data.user;
  },

  methods: {
    async onSaveProfile() {
      let lock = new ActionLocker["a" /* default */](this.$refs.submitBtn);

      try {
        const {
          data
        } = await Object(user["e" /* updateUser */])(this.form);
        console.log(data);
        this.$message("更新成功");
      } finally {
        lock.unlock();
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/index/settings/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var index_settingsvue_type_script_lang_js_ = (settingsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/index/settings/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  index_settingsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "3911f7d1"
  
)

/* harmony default export */ var settings = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map