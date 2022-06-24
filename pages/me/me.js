// pages/me/me.js
const app = getApp()
import { authorization } from '../../utils/api/auth'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {
      nickName: '葫芦娃',
      avatarUrl: "/images/tour.png"
    },
    hasUserInfo: false,
    canIUseGetUserProfile: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    CouponsPopupShow: false,
  
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
//获取用户信息授权登录
getUserProfile(e) {
  var code = '';
  wx.login({
    success: res => {
      code = res.code
    }
  })
  // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认
  // 开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
  wx.getUserProfile({
    desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
    success: (res) => {
      console.log(res);
      this.setData({
        userInfo: res.userInfo,
        hasUserInfo: true
      })
      //登录授权
      authorization({
        code: code,
        encryptedData: res.encryptedData,
        iv: res.iv
      }).then(res => {
        console.log(res);
      })
    }
  })
},
// 配置收货地址
chooseAddress() {
  wx.chooseAddress({
    success(res) {
      console.log(res.userName)
      console.log(res.postalCode)
      console.log(res.provinceName)
      console.log(res.cityName)
      console.log(res.countyName)
      console.log(res.detailInfo)
      console.log(res.nationalCode)
      console.log(res.telNumber)
    }
  })
},
//优惠券列表
CouponsPopup() {
  wx.navigateTo({
    url: '/pages/coupon',
  })
},
onToOrder(event) {
  console.log(event.target.id);
  wx.navigateTo({
    url: '../order/order?id=' + event.target.id,
  })
},
onChange(event) {
  wx.lin.renderWaterFlow(this.data.demo, false, () => {
    console.log('渲染成功')
  })
},
/**
 * 生命周期函数--监听页面加载
 */
onLoad: function (options) {
  var _that = this
  var userInfo = ''
  var isAuthorization = false
  // 查看是否授权
  wx.getSetting({
    success(res) {
      console.log(res);
      if (res.authSetting['scope.userInfo']) {
        userInfo = wx.getStorageSync('userInfo')
        console.log(userInfo);
        isAuthorization = true
      } else {
        console.log("暂未授权");
        wx.getUserInfo({
          success: function (res) {
            userInfo = res.userInfo

          }
        })
      }
      _that.setData({
        userInfo: userInfo,
        isAuthorization:isAuthorization
      })
    }
  })
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