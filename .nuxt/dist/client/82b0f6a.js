(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{200:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(89),c=n(90),o=function(){function t(element){Object(r.a)(this,t),this.element=element,this.lock()}return Object(c.a)(t,[{key:"lock",value:function(){this.element.disabled=!0}},{key:"unlock",value:function(){this.element.disabled=!1}}]),t}()},201:function(t,e,n){"use strict";n.d(e,"g",(function(){return c})),n.d(e,"i",(function(){return o})),n.d(e,"j",(function(){return l})),n.d(e,"c",(function(){return f})),n.d(e,"f",(function(){return d})),n.d(e,"d",(function(){return m})),n.d(e,"h",(function(){return h})),n.d(e,"b",(function(){return v})),n.d(e,"e",(function(){return O})),n.d(e,"a",(function(){return w}));var r=n(37),c=function(t){return Object(r.b)({method:"GET",url:"/api/articles",params:t})},o=function(t){return Object(r.b)({method:"GET",url:"/api/articles/feed",params:t}).catch((function(t){return console.dir(t)}))},l=function(){return Object(r.b)({method:"GET",url:"/api/tags"})},f=function(t){return Object(r.b)({method:"POST",url:"/api/articles/".concat(t,"/favorite")})},d=function(t){return Object(r.b)({method:"DELETE",url:"/api/articles/".concat(t,"/favorite")})},m=function(t){return Object(r.b)({method:"GET",url:"/api/articles/".concat(t)})},h=function(t){return Object(r.b)({method:"GET",url:"/api/articles/".concat(t,"/comments")})},v=function(t,body){return Object(r.b)({method:"POST",url:"/api/articles/".concat(t,"/comments"),data:{comment:{body:body}}})},O=function(t,e){return Object(r.b)({method:"DELETE",url:"/api/articles/".concat(t,"/comments/").concat(e)})},w=function(article){return Object(r.b)({method:"POST",url:"/api/articles",data:{article:article}})}},202:function(t,e,n){"use strict";n.d(e,"c",(function(){return o})),n.d(e,"d",(function(){return f})),n.d(e,"a",(function(){return m})),n.d(e,"b",(function(){return v})),n.d(e,"e",(function(){return w}));var r=n(4),c=(n(36),n(37));function o(t){return l.apply(this,arguments)}function l(){return(l=Object(r.a)(regeneratorRuntime.mark((function t(data){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(c.b)({method:"POST",url:"/api/users/login",data:data});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(t){return d.apply(this,arguments)}function d(){return(d=Object(r.a)(regeneratorRuntime.mark((function t(data){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(c.b)({method:"POST",url:"/api/users",data:data});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(t,e){return h.apply(this,arguments)}function h(){return(h=Object(r.a)(regeneratorRuntime.mark((function t(e,n){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(c.b)({method:n?"POST":"DELETE",url:"/api/profiles/".concat(e,"/follow")});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(){return O.apply(this,arguments)}function O(){return(O=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(c.b)({method:"GET",url:"/api/user"});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function w(t){return j.apply(this,arguments)}function j(){return(j=Object(r.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(c.b)({method:"PUT",url:"/api/user",data:{user:e}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},215:function(t,e,n){"use strict";n.r(e);var r=n(4),c=(n(36),n(202)),o=n(201),l=n(200),f={props:["article"],methods:{onFollowUser:function(t,e){return Object(r.a)(regeneratorRuntime.mark((function n(){var r,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=new l.a(t.currentTarget),n.prev=1,n.next=4,Object(c.a)(e.username,e.following);case 4:o=n.sent,o.data,e.following=!e.following;case 7:return n.prev=7,r.unlock(),n.finish(7);case 10:case"end":return n.stop()}}),n,null,[[1,,7,10]])})))()},onFav:function(t,article){return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=new l.a(t.currentTarget),e.prev=1,article.favorited){e.next=8;break}return e.next=5,Object(o.c)(article.slug);case 5:++article.favoritesCount,e.next=11;break;case 8:return e.next=10,Object(o.f)(article.slug);case 10:--article.favoritesCount;case 11:article.favorited=!article.favorited;case 12:return e.prev=12,n.unlock(),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,,12,15]])})))()}}},d=n(30),component=Object(d.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"article-meta"},[n("nuxt-link",{attrs:{to:"/profile/"+t.article.author.username}},[n("img",{attrs:{src:t.article.author.image}})]),t._v(" "),n("div",{staticClass:"info"},[n("nuxt-link",{attrs:{to:"/profile/"+t.article.author.username}},[t._v("\n      "+t._s(t.article.author.username)+"\n    ")]),t._v(" "),n("span",{staticClass:"date"},[t._v(t._s(t._f("datetime")(t.article.createdAt,"MMM,DD")))])],1),t._v(" "),n("button",{staticClass:"btn btn-sm",class:t.article.author.following?"btn-outline-primary":"btn-outline-secondary",on:{click:function(e){return t.onFollowUser(e,t.article.author)}}},[n("i",{staticClass:"ion-plus-round"}),t._v("\n      "+t._s(t.article.author.following?"Unfollow":"Follow")+" Eric Simons\n  ")]),t._v("\n   \n  "),n("button",{staticClass:"btn btn-sm",class:t.article.favorited?"btn-outline-primary":"btn-outline-secondary",on:{click:function(e){return t.onFav(e,t.article)}}},[n("i",{staticClass:"ion-heart"}),t._v("\n      "+t._s(t.article.favorited?"Unfavorite":"Favorite")+" Post\n    "),n("span",{staticClass:"counter"},[t._v("("+t._s(t.article.favoritesCount)+")")])])],1)}),[],!1,null,null,null);e.default=component.exports}}]);