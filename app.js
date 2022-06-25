// app.js
const app = getApp()
import {login, userInfo} from './utils/api/auth'
App({
  onLaunch() {
    var _this = this
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        //7000/jm-authority-center/wx-app/token
        //登录
        login({
          code: res.code,
        }).then(res => {
          console.log(res);
          wx.setStorage({
            key:"token",
            data:res.token
          })
          wx.setStorage({
            key:"userInfo",
            data:res
          })
          // userInfo().then(res=>{
          //   console.log(res);
          //   wx.setStorage({
          //     key:"userInfo",
          //     data:res
          //   })
          // })
          //获取用户信息
          
        })
      
      }
    })
  },
  globalData: {
    userInfo: null
  }
})
