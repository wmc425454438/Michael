Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:null,
    userLogo: '../images/signup-img.png',
    inputType1:true,
    inputType2:true,
    inputType3:true,
    inputType4:true,
    inputText1:false,
    inputText2:false,
    inputText3:false,
    inputText4:false,
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      // userLogo: wx.getStorageSync('blueUserInfo').avatarUrl
    });
  },
  //姓名验证
  inputblur1:function(e){
    if (e.detail.value.length > 6) {
      this.setData({
        inputType1: false
      });
    } else {
      this.setData({
        inputText1: e.detail.value,
        inputType1: true
      });
    }
  },
  //电话验证
  inputblur2: function (e) {
    var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
    if (!myreg.test(e.detail.value)) {
      this.setData({
        inputType2: false
      });
    } else {
      this.setData({
        inputText2: e.detail.value,
        inputType2: true
      });
    }     
  },
  //邮箱验证
  inputblur3: function (e) {
    var myreg = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
    if (!myreg.test(e.detail.value)) {
      this.setData({
        inputType3: false
      });
    } else {
      this.setData({
        inputText3: e.detail.value,
        inputType3: true
      });
    }     
  },
  //留言验证
  inputblur4: function (e) {
    if (e.detail.value>60) {
      this.setData({
        inputType4: false
      });
    } else {
      this.setData({
        inputText4: e.detail.value
      });
    }     
  },
  //提交
  submitBtn:function(){
    console.log(this.data.inputText2);
    if (!this.data.inputText1){
      method('你有信息未填写'); return false;
    } else if (!this.data.inputText2){
      method('你有信息未填写'); return false;
    } else if (!this.data.inputText3){
      method('你有信息未填写'); return false;
    }else{
          if (!this.data.inputType1){
            method('姓名错误'); return false;
          } else if (!this.data.inputType2){
            method('电话错误'); return false;
          } else if (!this.data.inputType3){
            method('邮箱错误'); return false;
          } else if (!this.data.inputType4){
            method('留言不超过60字'); return false;
          }
          wx.showToast({
            title: '提交成功',
            icon: 'succes',
            duration: 1000,
            mask: true
          });
          
    }
  }
});

function method(e){
  wx.showModal({
    title: '提示',
    content: e,
    success: function (res) {
      if (res.confirm) {
        console.log('用户点击确定')
      } else {
        console.log('用户点击取消')
      }

    }
  })
}
