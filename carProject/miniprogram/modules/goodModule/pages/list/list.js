// pages/list/list.js
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
    console.log('options 查看其他页面传递过来的参数==>', options)

    // 通过 this.getOpenerEventChannel() 可以获取 EventChannel 对象
    const eventChannel = this.getOpenerEventChannel()

    /**
     * 通过 EventChannel 提供的 on 方法监听页面发射的自定义事件
     * 得用箭头函数
     * */


    eventChannel?.on('askAddress', (res) => {
      console.log('askAddress==>', res)
      this.setData({
        region: res.region
      })
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

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },
  backIndex() {
    const EventChannel = this.getOpenerEventChannel()
    // 通过 EventChannel 提供的 emit 方法也可以向上一级页面传递数据
    // 需要使用 emit 定义自定义事件，携带需要传递的数据

    if (this.data.region === 'jiangxi') {
      EventChannel.emit('addressSelected', { city: 'yingtan' })
    }

    wx.navigateBack()


  }
})