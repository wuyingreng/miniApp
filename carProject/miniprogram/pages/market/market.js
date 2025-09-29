// pages/market/market.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num: 1,
    numList: [1, 2, 3]
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
  updateNum() {
    this.data.num += 1
    this.setData({
      num: this.data.num
    })
  },
  // 监听用户上拉加载
  onReachBottom() {
    // console.log('监听用户上拉加载')
    // 产品需求：
    // 当用户上拉，需要数字进行累加

    // 当用户上拉加载时，需要对数字进行累加，每次累加 3 个数字
    // 目前是 [1, 2, 3]，[1, 2, 3, 4, 5, 6]
    // 怎么进行追加 ？
    // 获取目前数组中最后一项 n，n + 1, n + 2, n + 3

    wx.showLoading({
      title: '数据加载中...'
    })

    setTimeout(() => {
      // 获取数组的最后一项
      const lastNum = this.data.numList[this.data.numList.length - 1]
      // 定义需要追加的元素
      const newArr = [lastNum + 1, lastNum + 2, lastNum + 3]

      this.setData({
        numList: [...this.data.numList, ...newArr]
      })

      wx.hideLoading()
    }, 1500)

  },
  onPullDownRefresh() {
    this.setData({
      numList: [1, 2, 3]
    });
    // 有时候它不会回弹回去
    if (this.data.numList.length === 3) {
      wx.stopPullDownRefresh()
    }

  }
})