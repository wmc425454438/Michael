const utils = require('../../utils/util.js')
Page({
  /**
   * 页面的初始数据
   */
  data: {
    addressInfo: {},
    addressHidden: false,
    orderNumber: 1,
    integral: 1000,
    getDate: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let _self = this;
    let totalInteg = _self.data.orderNumber * _self.data.integral;
    let formatTime = utils.formatTime(new Date)
    _self.setData({
      getDate: formatTime,
      totalInteg: totalInteg
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {},

  /**
   * 用户点击右上角分享
   */
  // onShareAppMessage: function(options) {
  //   // console.log(options);
  //   let _self = this;
  //   let shareObj = {
  //     title: '转发标题',
  //     path: '/pages/order/order',
  //     imgUrl: '',
  //     success: function(res) {
  //       console.log(res);
  //     },
  //     fail: function(res) {
  //       console.log(res);
  //     }
  //   };
  //   // 来自页面内的按钮的转发
  //   if (options.from == 'button') {
  //     var eData = options.target.dataset;
  //     console.log(eData.name); // shareBtn // 此处可以修改 shareObj 中的内容
  //     shareObj.path = '/pages/btnname/btnname?btn_name=' + eData.name;
  //   }
  //   return shareObj;
  // },

  orderOk: function() {
    wx.showModal({
      title: '',
      content: '请确认订单信息',
      success: function(res) {
        if (res.confirm) {
          console.log('用户点击确定');
        } else {
          console.log('用户点击取消');
        }
      }
    });
  },

  //选择收货地址
  chooseAddress: function() {
    const _self = this;
    wx.chooseAddress({
      success: function(res) {
        // 地址信息
        // console.log(res.userName)      用户名
        // console.log(res.postalCode)    邮编
        // console.log(res.provinceName)  省
        // console.log(res.cityName)      市
        // console.log(res.countyName)    区
        // console.log(res.detailInfo)    详细地址
        // console.log(res.nationalCode)  国家码
        // console.log(res.telNumber)     手机号码
        _self.setData({
          addressInfo: res,
          addressHidden: true
        });
      },
      fail: res => {
        wx.onNetworkStatusChange(function(res) {
          if (res.isConnected) {
            wx.showToast({
              title: '当前网络不可用，请检查网络设置'
            });
          }
        });
      }
    });
  },

  //商品数量增加
  delectOrderBtn: function() {
    var that = this;
    that.setData({
      orderNumber: that.data.orderNumber + 1,
      totalInteg: (that.data.orderNumber + 1) * 1000
    });
  },

  //商品数量减少
  updataOrderBtn: function() {
    var that = this;
    if (that.data.orderNumber === 1) {
      that.setData({
        orderNumber: 1,
        totalInteg: 1000
      });
    } else {
      that.setData({
        orderNumber: that.data.orderNumber - 1,
        totalInteg: (that.data.orderNumber - 1) * 1000
      });
    }
  }
});
