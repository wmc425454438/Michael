Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /**
   * 组件的属性列表
   * 用于组件自定义设置
   */
  properties: {
    // 标题
    dialoagTitle: { 
      type: String,
      value: '这是一个标题' 
    },
    // 弹窗内容
    dialoagPath: {
      type: String,
      value: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1521543425550&di=aff4d0ff22e4a600b2c61a9862b465b4&imgtype=0&src=http%3A%2F%2Fs3.sinaimg.cn%2Fmw690%2F5d9a6a9dg7c9ef0891882%26690'
    },
    // 消息状态
    dialoagType: {
      type: String,
      value: '进行中'
    },
    // 报名人数
    dialoagName: {
      type: String,
      value: '1/12'
    },
    //开始日期
    dialoagNumber:{
      type: String,
      value: '2018-3-20'
    },
    //判断状态
    conductFlag:{
      type:String,
      vaule:'1'
    },
    endFlag:{
      type: String,
      vaule: '1'
    },
    activityId:{
      type: String,
      vaule: '1'
    }
  },

  /**
   * 私有数据,组件的初始数据
   * 可用于模版渲染
   */
  data: {
    // 弹窗显示控制
    
  },

  /**
   * 组件的方法列表
   * 更新属性和数据的方法与更新页面数据的方法类似
   */
  methods: {
    /*
     * 公有方法
     */
    //活动展示
    showActivity: function (event) {
      console.log(event.currentTarget.dataset.id);
        wx.navigateTo({
          url: '../activity/activity',
        })
    }
    
  }
})