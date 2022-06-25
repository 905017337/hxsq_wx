/**
 * 注：如果不想传token，就在函数中 添加 data.notoken = true
 * data是函数的接收参数，如果用的是query，那就是query.notoken = true
 */
import {request} from '../request'

/**
 * 联系人列表
 * @param {} data 
 */
module.exports.phoneBookList = function list(data={}){
  data.notoken = true
  return request({
    url: '/phone-book/list',
    method: 'get',
    data
  })
}
/**
 * 联系人列表
 * @param {} data 
 */
module.exports.phoneuserList = function list(data={}){
  data.notoken = true
  return request({
    url: '/phone-type/phoneBootlist',
    method: 'get',
    data
  })
}
module.exports.phoneTypeList = function list(data={}){
  data.notoken = true
  return request({
    url: '/phone-type/list',
    method: 'get',
    data
  })
}

module.exports.addPhone = function list(data={}){
  data.notoken = true
  return request({
    url: '/phone-book/addPhone',
    method: 'post',
    data
  })
}
/**
 * 首页搜索
 * @param {*} data 
 */
module.exports.search = function list(data={}){
  data.notoken = true
  return request({
    url: '/phone-type/search',
    method: 'get',
    data
  })
}