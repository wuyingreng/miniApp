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
    // 页面加载时获取轮播图数据
    this.fetchBanner()
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
      title: '加载中...',
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
        console.log('请求成功:', res)
        // 确保 res.data 和 res.data.data 存在
        if (res && res.data && res.data.code === 200 && res.data.data) {
          // 确保 data 是数组
          const data = Array.isArray(res.data.data) ? res.data.data : []
          this.setData({
            list: data
          })
        } else {
          console.error('数据格式错误:', res)
          // 设置默认值
          this.setData({
            list: []
          })
        }
      },
      // API 调用失败以后，执行的回调
      fail: (err) => {
        console.error('请求失败:', err)
        // 设置默认值
        this.setData({
          list: []
        })
      },
      // API 不管调用成功还是失败以后，执行的回调
      complete: (res) => {
        console.log('请求完成:', res)
        // 关掉 loading 提示框
        wx.hideLoading()
      }
    })
  },
  setStorage() {
    wx.setStorage({
      key: 'num',
      data: 1
    });

    console.log('data==>', wx.getStorage('num'))
  },

  // 数据验证方法
  validateData(data) {
    if (!data) return []
    if (Array.isArray(data)) return data
    if (typeof data === 'object' && data !== null) return [data]
    return []
  },

  // 安全设置数据方法
  safeSetData(key, value) {
    const safeValue = this.validateData(value)
    this.setData({
      [key]: safeValue
    })
  }
})