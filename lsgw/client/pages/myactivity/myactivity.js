
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabActive:"0",//tab切换参数
    conductFlag:'1',
    endFlag:'1'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.dialog = this.selectComponent("#dialog");
    // wx.navigateTo({
    //   url: '../location/location',
    // })
  },
  
  //tab切换
  tabSwitch:function(event){
      var _self=this;
      _self.setData({
        tabActive: event.currentTarget.dataset.flag
      });
  },
  
  //活动展示
  showActivity: function (event) {
    console.log(event.currentTarget.dataset.id);
    wx.navigateTo({
      url: '../activity/activity',
    })
  }
})