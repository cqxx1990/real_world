exports.ids = [0];
exports.modules = {

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

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/index/login.vue?vue&type=template&id=57293324&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"auth-page"},[_vm._ssrNode("<div class=\"container page\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-md-6 offset-md-3 col-xs-12\">","</div>",[_vm._ssrNode("<h1 class=\"text-xs-center\">"+_vm._ssrEscape(_vm._s(_vm.isLogin ? "Sign in" : "Sign up"))+"</h1> "),_vm._ssrNode("<p class=\"text-xs-center\">","</p>",[(_vm.isLogin)?_c('nuxt-link',{attrs:{"to":"/register"}},[_vm._v("Need an account?")]):_c('nuxt-link',{attrs:{"to":"/login"}},[_vm._v("Have an account?")])],1),_vm._ssrNode(" <ul class=\"error-messages\">"+(_vm._ssrList((_vm.err),function(msgs,field){return (((Array.isArray(msgs))?((_vm._ssrList((msgs),function(msg){return ("<li>"+_vm._ssrEscape("\n              "+_vm._s(field)+" "+_vm._s(msg)+"\n            ")+"</li>")}))):(_vm._ssrEscape("\n              "+_vm._s(field)+" "+_vm._s(msgs)+"\n            "))))}))+"</ul> <form>"+((!_vm.isLogin)?("<fieldset class=\"form-group\"><input type=\"text\" placeholder=\"Your Name\""+(_vm._ssrAttr("value",(_vm.user.username)))+" class=\"form-control form-control-lg\"></fieldset>"):"<!---->")+" <fieldset class=\"form-group\"><input required=\"required\" type=\"text\" placeholder=\"Email\""+(_vm._ssrAttr("value",(_vm.user.email)))+" class=\"form-control form-control-lg\"></fieldset> <fieldset class=\"form-group\"><input required=\"required\" type=\"password\" placeholder=\"Password\""+(_vm._ssrAttr("value",(_vm.user.password)))+" class=\"form-control form-control-lg\"></fieldset> <button class=\"btn btn-lg btn-primary pull-xs-right\">"+_vm._ssrEscape("\n            "+_vm._s(_vm.isLogin ? "Sign in" : "Sign up")+"\n          ")+"</button></form>")],2)])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index/login.vue?vue&type=template&id=57293324&

// EXTERNAL MODULE: ./api/user.js
var user = __webpack_require__(29);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index/login.vue?vue&type=script&lang=js&
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

const Cookie =  false ? undefined : undefined;
/* harmony default export */ var loginvue_type_script_lang_js_ = ({
  middleware: 'logined',

  data() {
    return {
      user: {
        username: "",
        email: "",
        password: ""
      },
      err: {}
    };
  },

  computed: {
    isLogin() {
      return this.$route.path === "/login";
    }

  },
  methods: {
    async onSubmit() {
      try {
        let fun = this.isLogin ? user["c" /* login */] : user["d" /* register */];
        const {
          data
        } = await fun({
          user: this.user
        });
        this.$store.commit('setUser', data.user);
        Cookie.set('user', JSON.stringify(data.user));
        console.log(data);
        this.$router.push("/");
      } catch (error) {
        this.err = error.response.data.errors;
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/index/login.vue?vue&type=script&lang=js&
 /* harmony default export */ var index_loginvue_type_script_lang_js_ = (loginvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/index/login.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  index_loginvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "379d27a1"
  
)

/* harmony default export */ var login = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=login.js.map