var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置
Page({
  /**
   * 页面的初始数据
   */
  data: {
    state: {
      'ok': '交易完成',
      'deliver': '等待收货'
    },
    navigator: {
      'ok': '交易完成',
      'deliver': '查看详情',
    },
    orders: [
      {
        id: 1,
        state: 'ok',
        date: '2016-12-12',
        userid: 123456,
        integral: 200,
        number: 2,
        describe: '威猛剃须刀，性价比之王，这是一个你从没用过的全新版本，只需三分钟，你会爱上这款剃须刀'
      },
      {
        id: 2,
        state: 'deliver',
        date: '2016-12-13',
        userid: 22222,
        integral: 200,
        number: 2,
        describe: '威猛剃须刀，性价比之王，这是一个你从没用过的全新版本，只需三分钟，你会爱上这款剃须刀'
      },
      {
        id: 3,
        state: 'deliver',
        date: '2016-12-14',
        userid: 333333,
        integral: 200,
        number: 2,
        describe: '威猛剃须刀，性价比之王，这是一个你从没用过的全新版本，只需三分钟，你会爱上这款剃须刀'
      },
      {
        id: 4,
        state: 'ok',
        date: '2016-12-15',
        userid: 444444,
        integral: 200,
        number: 2,
        describe: '威猛剃须刀，性价比之王，这是一个你从没用过的全新版本，只需三分钟，你会爱上这款剃须刀'
      }
    ],
    tabs: [ '等待收货', '交易完成'],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0,
    goodsUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1522148738365&di=79503ff6a25529830db81d552406fe5b&imgtype=0&src=http%3A%2F%2Fs1.sinaimg.cn%2Fmw690%2F006gT0H1zy72SxLFgTLc9',
    showIcon: true,
    cancelUrl: '../../images/cancel.png',
    okUrl: '../../images/ok.png',
    receiptUrl: '../../images/receipt.png',
    transportUrl: '../../images/transport.png',
    pressedUrl: '../../images/pressed.png',
    closeUrl: '../../images/close.png'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          sliderLeft:
            (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset:
            res.windowWidth / that.data.tabs.length * that.data.activeIndex
        });
      }
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
   * 显示物流信息
   */
  showLogistics: function (e) {
    var _slef = this;
    _slef.setData({
      showIcon: true,
    });
  },

  /**
   * 关闭物流信息
   */
  hideLogistics: function (e) {
    var _slef = this;
    _slef.setData({
      showIcon: false,
    });
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function(options) {
    console.log(options);
    let _self = this;
    let shareObj = {
      title: '转发标题',
      path: '/pages/myorder/myorder',
      imgUrl: '',
      success: function(res) {
        console.log(res);
      },
      fail: function(res) {
        console.log(res);
      }
    };
    // 来自页面内的按钮的转发
    if (options.from == 'button') {
      var eData = options.target.dataset;
      console.log(eData.name); // shareBtn // 此处可以修改 shareObj 中的内容
      shareObj.path = '/pages/btnname/btnname?btn_name=' + eData.name;
    }
    return shareObj;
  },

  // 切换选项卡
  tabClick: function(e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  }
});
