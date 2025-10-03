// app.js
App({

  /**
  * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
  */

  onLaunch: function () {
    const updateManager = wx.getUpdateManager()

    updateManager.onCheckForUpdate(function (res) {
      // 请求完新版本信息的回调
      console.log('onCheckForUpdate==>', res.hasUpdate)
    })

    updateManager.onUpdateReady(function () {
      wx.showModal({
        title: '更新提示',
        content: '新版本已经准备好，是否重启应用？',
        success(res) {
          if (res.confirm) {
            // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
            updateManager.applyUpdate()
          }
        }
      })
    })

    updateManager.onUpdateFailed(function () {
      // 新版本下载失败
    })
  },

  onShow() {

  },
    // 全局共享的数据
  globalData: {
    token: ''
  },

  // 全局共享的方法
  setToken (token) {
    // 如果想获取 token，可以使用 this 的方式进行获取
    this.globalData.token = token

    // 在 App() 方法中如果想获取 App() 实例，可以通过 this 的方式进行获取
    // 不能通过 getApp() 方法获取
  }
})
