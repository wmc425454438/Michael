var myTime=null;//定时器保存
var timeFlag=false;


Page({
  /**
   * 页面的初始数据
   */
  data: {
    entryText:'获取动态码',
    entryTpl:'',//获取电话号码
    entryNumber: '',//获取短信验证码
    tplType:true,//用来验证手机号码正确
    tplType1:true//用来验证手机号码正确
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  //获取手机号码
  getTpl:function(e){
    this.setData({
      tplType1: true
    })
    //正则表达式验证手机号码
    var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
    if (!myreg.test(e.detail.value)) {
      this.setData({
        tplType: false
      });
    } else {
      this.setData({
        entryTpl: e.detail.value,
        tplType: true
      });
    }     
  },
  //获取短信验证码
  getPasswardInput: function (e) {
    this.setData({
      entryNumber: e.detail.value
    });
  },
  //点击获取验证码
  getPassward:function(){
      var num=60;
      var that=this;
      if (!that.data.tplType){
        that.setData({
          tplType1:false
        });
        return false;
      }else{
        that.setData({
          tplType1: true
        })
      }
      if (timeFlag) {
        return false;
      }
      myTime=setInterval(function(){
        num--;
        that.setData({
          entryText:num+'S'
        });
        if(num == 0){
          clearInterval(myTime);
          that.setData({
            entryText: '获取动态码'
          });
          timeFlag = false;
        }else{
          timeFlag = true;
        }
      }, 1000);
      wx.showToast({
        title: '验证信息已发送',
        icon: 'success',
        duration: 2000
      })   
  },
  submitBtn:function(){
    // 登陆验证
    // 切换页面
    wx.switchTab({
      url: '../index/index',
      success: function (res) {

      },
      fail: function (res) {
        console.log(res)
      }
    })
  }
});

//