// pages/events/events.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

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
  // 事件处理程序
  // handler1(event) {
  //   console.log('我是btn1绑定的事件 ~~~ 会冒泡到父', 'event==>', event)
  // },
  handler2(event) {
    console.log('我是btn2绑定的事件 ~~~ 不冒泡到父')
  },

  parentHandler(event) {
    console.log('我是父绑定的事件 ~~~', 'event==>', event)
  }
})