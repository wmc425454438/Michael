//app.js
var qcloud = require('./vendor/wafer2-client-sdk/index')
var config = require('./config')

App({
  globalData: {
    userinfo: null,
    id:1
  },
  onLaunch: function () {
    var that=this;
    qcloud.setLoginUrl(config.service.loginUrl)
    wx.getUserInfo({
      success: res => {
        wx.setStorageSync('blueUserInfo', res.userInfo)
      }
    })
  },
  /**
  * 用户点击右上角分享
  */
  onShareAppMessage: function (options) {
    console.log(options)
    let _self = this
    let shareObj = {
      title: '转发标题',
      path: '/pages/order/order',
      imgUrl: '',
      success: function (res) {
        console.log(res)
      },
      fail: function (res) {
        console.log(res)
      }
    }
    return shareObj
  }
})