global.webpackJsonp([2],{

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_7407b9be_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(53);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(43)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7407b9be"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_7407b9be_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\integral\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7407b9be", Component.options)
  } else {
    hotAPI.reload("data-v-7407b9be", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 2:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  props: ['text']
});

/***/ }),

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(12);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/* harmony default export */ __webpack_exports__["default"] = ({
  config: {
    navigationBarTitleText: '个人中心'
  }
});

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_card__ = __webpack_require__(4);
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



/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      userInfo: {},
      isselected: 0,
      showIcon: false,
      title: '如何赚取积分',
      content: '获得积分的方式：1.参加线上活动，活动结束后。由管理员审核，会发放相应的积分。2.参加线下活动，活动结束后。提交相关的参与信息，由管理员审核，审核通过后，会发放相应的积分。3.注册内部会员，会赠送相应的积分。 4.推荐其他会员加入，会赠送相应的积分。 5.推荐其他会员参加活动，所赚取的积分，达到一定数值后，会有相应的积分奖励。 积分的用法： 1.积分可以用来兑换积分商城内的奖品，支持线下领取或者邮寄。',
      integUrl: '../../images/integral.png',
      cancelUrl: '../../images/cancel.png',
      income: [{
        'source': '每日签到',
        'way': '移动端签到',
        'val': 3,
        'date': '2018-03-22'
      }, {
        'source': '每日签到',
        'way': '移动端签到',
        'val': 3,
        'date': '2018-03-22'
      }, {
        'source': '每日签到',
        'way': '移动端签到',
        'val': 3,
        'date': '2018-03-22'
      }],
      expend: [{
        'source': '购买商品',
        'way': '电动剃须刀',
        'val': 100,
        'date': '2018-03-22'
      }, {
        'source': '购买商品',
        'way': '电动剃须刀',
        'val': 100,
        'date': '2018-03-22'
      }, {
        'source': '购买商品',
        'way': '电动剃须刀',
        'val': 100,
        'date': '2018-03-22'
      }]
    };
  },


  components: {
    card: __WEBPACK_IMPORTED_MODULE_0__components_card__["a" /* default */]
  },

  methods: {
    tabSelected: function tabSelected(e) {
      this.isselected = e;
    },
    shownews: function shownews(e) {
      this.showIcon = true;
      this.title = '如何赚取积分';
      this.content = '获得积分的方式：\n\n1. 参加线上活动，活动结束后。由管理员审核，会发放相应的积分。\n\n2. 参加线下活动，活动结束后。提交相关的参与信息，由管理员审核，审核通过后，会发放相应的积分。\n\n\n\n\n积分的用法：\n\n1. 积分可以用来兑换积分商城内的奖品，支持线下领取或者邮寄。\n';
    },
    showmyModal: function showmyModal(e) {
      this.showIcon = false;
    },
    bindviewTap: function bindviewTap(e) {
      // wx.request({
      //   url: 'test.php', // 仅为示例，并非真实的接口地址
      //   data: {
      //     x: '',
      //     y: ''
      //   },
      //   header: {
      //     'content-type': 'application/json' // 默认值
      //   },
      //   success (res) {
      //     console.log(res.data)
      //   }
      // })
    },

    // getUserInfo () {
    //   // 调用登录接口
    //   wx.login({
    //     success: () => {
    //       wx.getUserInfo({
    //         success: (res) => {
    //           this.userInfo = res.userInfo
    //         }
    //       })
    //     }
    //   })
    // },
    clickHandle: function clickHandle(msg, ev) {
      console.log('clickHandle:', msg, ev);
    }
  },

  created: function created() {
    // 调用应用实例的方法获取全局数据
    // this.getUserInfo()
  }
});

/***/ }),

/***/ 4:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_card_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_1fb80d35_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_card_vue__ = __webpack_require__(5);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(3)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_card_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_1fb80d35_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_card_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\card.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] card.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1fb80d35", Component.options)
  } else {
    hotAPI.reload("data-v-1fb80d35", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 43:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 5:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('p', {
    staticClass: "card"
  }, [_vm._v("\n    " + _vm._s(_vm.text) + "\n  ")])], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-1fb80d35", esExports)
  }
}

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "integral-container"
  }, [_c('div', {
    staticClass: "top-div-container"
  }, [_c('img', {
    staticClass: "icon",
    attrs: {
      "src": _vm.integUrl,
      "alt": "integ-icon"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "top-div-text"
  }, [_vm._v("我的积分: ")]), _vm._v(" "), _c('span', {
    staticClass: "top-div-text score"
  }, [_vm._v("1687")]), _vm._v(" "), _c('span', {
    staticClass: "top-div-text news",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.shownews
    }
  }, [_vm._v("如何赚取积分？")])]), _vm._v(" "), _c('div', {
    staticStyle: {
      "background": "#efefef",
      "height": "15rpx",
      "width": "100%"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "tab-bar"
  }, [_c('div', {
    staticClass: "tab-item",
    class: {
      'selected': _vm.isselected == 0
    },
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": function($event) {
        _vm.tabSelected(0)
      }
    }
  }, [_vm._v("收入")]), _vm._v(" "), _c('div', {
    staticClass: "tab-item",
    class: {
      'selected': _vm.isselected == 1
    },
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": function($event) {
        _vm.tabSelected(1)
      }
    }
  }, [_vm._v("支出")])]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isselected == 0),
      expression: "isselected == 0"
    }],
    staticClass: "list-container"
  }, _vm._l((_vm.income), function(item, index) {
    return _c('div', {
      key: item.index,
      staticClass: "list-item"
    }, [_c('div', {
      staticClass: "list-left"
    }, [_c('div', {
      staticClass: "list-text"
    }, [_vm._v(_vm._s(item.source) + "：" + _vm._s(item.way))]), _vm._v(" "), _c('div', {
      staticClass: "list-date"
    }, [_vm._v(_vm._s(item.date))])]), _vm._v(" "), _c('div', {
      staticClass: "list-right",
      staticStyle: {
        "color": "red"
      }
    }, [_vm._v("+" + _vm._s(item.val))])])
  })), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isselected == 1),
      expression: "isselected == 1"
    }],
    staticClass: "list-container"
  }, _vm._l((_vm.expend), function(item, index) {
    return _c('div', {
      key: item.index,
      staticClass: "list-item"
    }, [_c('div', {
      staticClass: "list-left"
    }, [_c('div', {
      staticClass: "list-text"
    }, [_vm._v(_vm._s(item.source) + "：" + _vm._s(item.way))]), _vm._v(" "), _c('div', {
      staticClass: "list-date"
    }, [_vm._v(_vm._s(item.date))])]), _vm._v(" "), _c('div', {
      staticClass: "list-right",
      staticStyle: {
        "color": "green"
      }
    }, [_vm._v("-" + _vm._s(item.val))])])
  })), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showIcon),
      expression: "showIcon"
    }],
    staticClass: "modal-container"
  }, [_c('div', {
    staticClass: "my-modal"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v(_vm._s(_vm.title))]), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [_vm._v(_vm._s(_vm.content))])]), _vm._v(" "), _c('img', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showIcon),
      expression: "showIcon"
    }],
    staticClass: "cancel-icon",
    attrs: {
      "src": _vm.cancelUrl,
      "alt": "cancle-icon",
      "eventid": '3'
    },
    on: {
      "click": _vm.showmyModal
    }
  })])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7407b9be", esExports)
  }
}

/***/ })

},[22]);
//# sourceMappingURL=integral.js.map