// pages/Home/Home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:'zzy',
    age:25,
    studes:[
      { id:'001',username:'lili',age:18 },
      { id:'002',username:'rose',age:20 },
      { id:'003',username:'toms',age:23 },
    ]
  },

  // setData 类似 vue 的双向数据绑定
  clickadd(){
    this.setData({
      age:this.data.age+1
    })
  },
  clickset(){
    this.setData({
      age:this.data.age-1
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

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

  }
})