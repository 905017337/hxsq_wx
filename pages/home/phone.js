// pages/phone/phone.js
import { phoneBookList,phoneTypeList } from '../../utils/api/phone'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 0,
    indexList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    value: '',
    list: [
      {
        "pagePath": "/pages/home/phone",
        "text": "通讯录",
        "iconPath": "/icons/shouye01.png",
        "selectedIconPath": "/icons/shouye02.png"
      },
      {
        "pagePath": "/pages/me/me",
        "text": "我的",
        "iconPath": "/icons/wode01.png",
        "selectedIconPath": "/icons/wode02.png"
      }
    ]
  },

//tabbar 切换
  onChange(event) {
    // event.detail 的值为当前选中项的索引
    this.setData({ active: event.detail });
  },

  onckick(e){
    console.log(e.currentTarget.dataset.id);
    console.log("点击");
  },

  onChange(e) {
    this.setData({
      value: e.detail,
    });
  },
  onSearch() {
    Toast('搜索' + this.data.value);
  },
  onClick() {
    Toast('搜索' + this.data.value);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    phoneBookList().then(res=>{
      console.log(res);
    })
    phoneTypeList().then(res=>{
      console.log(res);
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

  }
})