// pages/cate/cate.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {
      name: 'Tom',
      age: 10,
      gender: '男'
    },
    list: [1, 2, 3, 4]
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
    return {
      title: '分享给朋友',
      path: '/pages/cate/cate',
      imageUrl: '/assets/Jerry.png'
    }
  },

  onShareTimeline() {
    return {
      // 自定义标题，即朋友圈列表页上显示的标题
      title: '帮我砍一刀~~~',
      // 自定义页面路径中携带的参数，如 path?a=1&b=2 的 【 "?" 后面部分 】
      query: 'id=1',
      // 自定义图片路径，可以是本地文件或者网络图片
      imageUrl: '/assets/Jerry.png'
    }
  },
  changeObj() {
    // 新增
    // const newObj = { ...this.data.userInfo, school: '贵溪一种' }
    // console.log('changeObj==>', newObj)
    // this.setData({ userInfo: newObj })

    // 删除
    const { name, ...rest } = this.data.userInfo;
    this.setData({ userInfo: rest })

  },
  updateList() {
    // 确保 list 是数组
    const currentList = Array.isArray(this.data.list) ? this.data.list : []
    currentList.push(1)
    this.setData({ list: currentList })
  }
})