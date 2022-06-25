// pages/phone/phone.js
import Toast from '../../miniprogram_npm/@vant/weapp/toast/toast';
import { search,phoneuserList,phoneTypeList } from '../../utils/api/phone'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 0,
    TypeList: [],
    userList:[],
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
  onclick(e){
    var that = this
    console.log(e.currentTarget.dataset.name);
    let value = {
      name : e.currentTarget.dataset.name
    }
    phoneuserList(value).then(res=>{
      that.userList = res;
      that.setData({
        userList:that.userList
      })
    })
  },
//tabbar 切换
  onChange(event) {
    // event.detail 的值为当前选中项的索引
    this.setData({ active: event.detail });
  },

  onckick(e){
    console.log(e.currentTarget.dataset.phone);
    wx.makePhoneCall({
      phoneNumber: e.currentTarget.dataset.phone 
    })
  },

  onChange(e) {
    this.setData({
      value: e.detail,
    });
  },
  onSearch() {
    var that = this
    Toast('搜索' + that.data.value);
  },
  onClick() {
    var that = this
    Toast('搜索' + that.data.value);
    search({name:that.data.value}).then(res=>{
      console.log(res);
      that.setData({
        userList:res
      })
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    var that = this
    phoneuserList().then(res=>{
      that.userList = res;
      that.setData({
        userList:that.userList
      })
    })
    phoneTypeList().then(res=>{
      let TypeList = []
      for(var index in res){
        TypeList.push(res[index].name)
      }
      console.log(TypeList);
      that.setData({
        TypeList:TypeList
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

  }
})