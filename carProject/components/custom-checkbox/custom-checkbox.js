// components/custom-checkbox/custom-checkbox.js
Component({
  options: {
    styleIsolation: 'shared'
  },
  /**
  * 组件的属性列表：组件的对外属性，主要用来接收组件使用者传递给组件内部的属性以及数据
  */
  properties: {
    // 如果需要接收传递的属性，有两种方式：全写、简写
    // label: String

    label: {
      // type 组件使用者传递的数据类型
      // 数据类型：String、Number、Boolean、Object、Array
      // 也可以设置为 null，表示不限制类型
      type: String,
      value: ''
    },
    position: {
      type: String,
      value: 'right'
    },

    // 复选框组件公共组件
    // 需要再多个页面、在多个项目中进行使用
    // 在使用的时候，有的地方希望默认是选中的效果，有的地方希望默认是没有被选中的效果
    // 怎么处理 ？
    // 首先让复选框默认还是没有被选中的效果
    // 如果希望复选框默认被选中，这时候传递属性(checked=true)到复选框组件
    checked: {
      type: Boolean,
      value: false
    }
  },

  /**
   * 组件的初始数据：用来定义当前组件内部所需要使用的数据
   */
  data: {
    isChecked: false
  },
  observers: {
    checked: function (newChecked) {
      this.setData({
        isChecked: newChecked
      })
    }
  },




  /**
   * 组件的方法列表：在组件中，所有的事件处理程序都需要写到 methods 方法中
   */
  methods: {
    /**
     * this.setData() 确实是异步的，这意味着：
第59-61行的 this.setData() 调用后，this.data.isChecked 的值不会立即更新
第62行的 this.triggerEvent() 中获取到的 this.data.isChecked 仍然是旧的值（更新前的值）
     * 方案1：直接使用计算后的值（推荐）
     *
     *  updateChecked() {
  const newChecked = !this.data.isChecked
  this.setData({
    isChecked: newChecked
  })
  this.triggerEvent('changechecked', newChecked)
}

方案2：使用 setData 的回调函数
updateChecked() {
  this.setData({
    isChecked: !this.data.isChecked
  }, () => {
    // 在 setData 完成后的回调中触发事件
    this.triggerEvent('changechecked', this.data.isChecked)
  })
}
     * 
    */
    updateChecked() {
      const newChecked = !this.data.isChecked;
      this.setData({
        isChecked: newChecked
      }, () => {
        // 在 setData 完成后的回调中触发事件
        this.triggerEvent('changechecked', this.data.isChecked)
      })

    }


  }
})