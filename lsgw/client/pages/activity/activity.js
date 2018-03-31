
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgPath:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=98796952,405228929&fm=27&gp=0.jpg'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  //进入我要报名页面
  showSignup:function(){
    wx.navigateTo({
      url: '../signup/signup',
    })
  },
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '自定义转发标题',
      path: '/page/user?id=123',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  },
  //联系客服
  contactPeople:function(){
    wx.makePhoneCall({
      phoneNumber: '18093566952' //仅为示例，并非真实的电话号码
    })
  },

  //分享
  share:function(){
    // wx.showActionSheet({
    //   itemList: ['分享给微信好友','分享到朋友圈','分享到qq'],
    //   itemColor:'#405f80',
    //   success:function(res){
        
    //   }
    // });
    this.onShareAppMessage();
  }
  
})