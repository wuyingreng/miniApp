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

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

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

  }
})

