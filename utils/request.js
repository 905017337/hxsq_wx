const config = require('./config.js')
const baseUrl = config.httpServer;
let ajaxTime = 0;
function request(params) {
    let header = {
        token: wx.getStorageSync('token')!=null || wx.getStorageSync('token')!=''? wx.getStorageSync('token'):'',
        'content-type': 'application/json'
    }
    if(params.data && params.data.notoken){
        delete params.data.notoken
    }
    ajaxTime++;
    wx.showLoading({
        title: "加载中",
        mask: true,
    });
    return new Promise((reslove, reject) => {
        wx.request({
            ...params,
            header: header,
            url: baseUrl + params.url,
            success: (result) => {
                // if(params.data &&params.data.login==true){
                //     reslove(result.header.token)
                //     return ;
                // }
                if (result.statusCode == 200) {
                    reslove(result.data.data);
                } else {
                    // reslove(res.data);
                    wx.showToast({
                      title: '请求错误',
                    })
                }
            },
            fail: (err) => {
                reject(err);
            },
            complete: () => {
                ajaxTime--;
                if (ajaxTime === 0) {
                    wx.hideLoading();
                }      
            }
        });
    })
}
module.exports.request = request