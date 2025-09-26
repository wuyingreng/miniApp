// index.js

Page({

  /**
   * 页面的初始数据
   */
  // data是一个对象
  data: {
    id: 1,
    isChecked: false,
    school: '尚硅谷',
    obj: {
      name: 'tom'
    },
    list: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('页面加载完毕')

  },
  /**
  * 生命周期函数--监听页面显示
  */
  onShow: function () {
    console.log('监听页面显示，此时页面处于显示状态')

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('页面初次渲染已经完成')
  },



  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('当前页面处于隐藏状态')
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('页面卸载时触发')

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  fetchBanner() {
    wx.showLoading({
      title: '加载中加载中加载中加载中加载中加载中加载中加载中',
      mask: true
    })
    // 如果需要发起网络请求，需要使用 wx.request API
    wx.request({
      // 接口地址
      url: 'https://gmall-prod.atguigu.cn/mall-api/index/findBanner',
      // 请求方式
      method: 'GET',
      // 请求参数
      data: {},
      // 请求头
      header: {},
      // API 调用成功以后，执行的回调
      success: (res) => {
        // console.log(res)
        if (res.data.code === 200) {
          this.setData({
            list: res.data.data
          })
        }
      },
      // API 调用失败以后，执行的回调
      fail: (err) => {
        console.log(err)
      },
      // API 不管调用成功还是失败以后，执行的回调
      complete: (res) => {
        // console.log(res)

        // 关掉 loading 提示框
        // hideLoading 和 showLoading 必须结合、配对使用才可以
        wx.hideLoading()
      }
    })

  }
})