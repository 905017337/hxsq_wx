/**
 * 注：如果不想传token，就在函数中 添加 data.notoken = true
 * data是函数的接收参数，如果用的是query，那就是query.notoken = true
 */
import {request} from '../request'

/**
 * 登录
 * @param {} data 
 */
module.exports.login = function login(data={}){
  data.notoken = true
  return request({
    url: '/wx-user/token',
    method: 'post',
    data
  })
}
/**
 * 用户信息
 * @param {} data 
 */
module.exports.userInfo = function userInfo(data={}){
  return request({
    url: '/wx-user/Info',
    method: 'post',
    data
  })
}
/**
 *  授权
 * @param {} data 
 */
module.exports.authorization = function authorization(data={}){
  data.notoken = true
  return request({
    url: '/jm-authority-center/wx/authorization',
    method: 'post',
    data
  })
}
