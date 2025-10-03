// pages/profile/profile.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    numList: [1, 2, 3, 4],
    fruitList: [
      { id: 1, name: '🍎', price: 66 },
      { id: 2, name: '🍋', price: 77 },
      { id: 3, name: '🍅', price: 88 }
    ],
    obj: {
      name: 'Emily',
      age: 20
    },
    num: 1,
    avatarUrl: '../../assets/Jerry.png'

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    wx.showShareMenu({
      withShareTicket: true,
      menus: ['shareAppMessage', 'shareTimeline']
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },



  handleCustom6() {
    this.setData({
      num: this.data.num + 1
    })
  },
  // 获取用户头像信息
  chooseavatar(e) {
    // 获取选中的头像
    const { avatarUrl } = e.detail

    // 将获取到的头像赋值给 data 中变量同步给页面结构
    this.setData({
      avatarUrl
    })
  },
  // 获取微信昵称
  onSubmit(event) {
    console.log(event.detail.value)
    const { nickname } = event.detail.value
    console.log(nickname)
  },
  /**
   * 用户点击右上角分享
   */
  // 监听页面按钮的转发 以及 右上角的转发按钮。这个函数的名称是固定的
  onShareAppMessage(obj) {
    console.log(obj)

    // 自定义转发内容
    return {
      // 转发标题
      title: '这是一个非常神奇的页面~~~',
      // 转发路径
      path: '/pages/cate/cate',
      // 自定义图片路径，可以是本地文件路径、代码包文件路径或者网络图片路径
      imageUrl: '../../assets/Jerry.png'
    }

  },
  // 监听右上角 分享到朋友圈 按钮
  onShareTimeline() {
    return {
      // 自定义标题，即朋友圈列表页上显示的标题
      title: '帮我砍一刀~~~',
      // 自定义页面路径中携带的参数，如 path?a=1&b=2 的 【 “?” 后面部分 】
      query: 'id=1',
      // 自定义图片路径，可以是本地文件或者网络图片
      imageUrl: '/assets/Jerry.png'
    }
  },

  // 手机号快速验证
  getphonenumber(event) {
    // 通过事件对象，可以看到，在 event.detail 中可以获取到 code
    // code 动态令牌，可以使用 code 换取用户的手机号
    // 需要将 code 发送给后端，后端在接收到 code 以后
    // 也需要调用 API，换取用户的真正手机号
    // 在换取成功以后 ，会将手机号返回给前端
    console.log(event)
  },

  // 手机号实时验证
  getrealtimephonenumber(event) {
    console.log(event)
  }
})

